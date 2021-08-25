import superagent from 'superagent';

/**
 * 根据经纬度值获得当前磁偏角
 *
 * @remarks
 * 数据来源于{@link https://www.magnetic-declination.com/}
 *
 * @param lng - 经度
 * @param lat - 纬度
 * @returns 磁偏角角度值，负数为西偏，正数为东偏
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
    return d[0] === '-'
      ? Number(d) - Number(s) / 60
      : Number(d) + Number(s) / 60;
  }
}
