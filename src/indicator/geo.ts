import superagent from 'superagent';

/**
 * 通过地图两个坐标点获得罗盘角度`alpha`值，并使用磁偏角修正
 *
 * @param center - 中心点坐标
 * @param target - 目标点坐标
 * @param magdec - 磁偏角，默认为`0`
 * @returns 罗盘角度的`alpha`值
 * @beta
 */
export function getAlphaByPoints(
  center: ILngLat,
  target: ILngLat,
  magdec: number = 0,
): number {
  const h = target.lat - center.lat;
  const w = target.lng - center.lng;
  const ab = 270 - (Math.atan(h / w) * 180) / Math.PI + magdec;
  return ab >= 0 ? ab : 360 - ab;
}

/**
 * 根据经纬度值获得当前磁偏角
 *
 * @remarks
 * 数据来源于{@link https://www.magnetic-declination.com/}
 *
 * @param lng - 经度
 * @param lat - 纬度
 * @returns 磁偏角角度值，负数为西偏，正数为东偏
 * @beta
 */
export async function fetchMagneticDeclination(lng: number, lat: number) {
  const res = await superagent.get(
    `/magnetic-declination/?lat=${lat}&lng=${lng}&sec=j8ua5lq8&act=1`,
  );
  const match = /Magnetic Declination:\s?([\+-]?\d+)\s?\&deg;\s?(\d*)\'/.exec(
    res.text,
  );
  if (!match) {
    console.error('Magnetic Declination not found.');
    console.error(res);
    return 0;
  } else {
    const [, d, s] = match;
    return d
      ? d[0] === '-'
        ? Number(d) - Number(s) / 60
        : Number(d) + Number(s) / 60
      : 0;
  }
}
