import { ShengXiaoIndexedType } from 'types/base';
import { orderSanShan, orderShuangShan } from './orders';

/**
 * 生肖地支对应
 *
 * @beta
 */
export const shengXiaoMap: ShengXiaoIndexedType<DiZhi> = {
  Ms: 'ZI',
  Ox: 'CO',
  Tg: 'YN',
  Rb: 'MO',
  Dr: 'CN',
  Sn: 'SI',
  Hs: 'WU',
  Sp: 'WI',
  Mk: 'SN',
  Ck: 'YO',
  Dg: 'XU',
  Pg: 'HI',
};

/**
 * 二十四山双山组合 - 别名
 * @param ss - 双山别名
 * @returns 双山对数组
 *
 * @public
 */
export function getShuangShanArray(ss: ShuangShan): [Gan8Wei4, DiZhi] {
  return ss.split('-') as [Gan8Wei4, DiZhi];
}

/**
 * 24山双山匹配
 *
 * @param shan - 二十四山向
 * @param ss - 二十四山双山位
 * @returns 是否一致
 * @public
 */
export function inShuangShan(shan: Shan24, ss: ShuangShan): boolean {
  return getShuangShanArray(ss).indexOf(shan) !== -1;
}

/**
 * 二十四山向在哪个双山位
 *
 * @param shan - 二十四山向
 * @returns - 所在双山位
 * @throws 山位不在序列
 * @beta
 */
export function inWhichShuangShan(shan: Shan24): ShuangShan {
  const rs = orderShuangShan.find(
    (s) => getShuangShanArray(s).indexOf(shan) !== -1,
  );
  if (typeof rs === 'undefined') {
    throw `[${shan}] not correct.`;
  }
  return rs;
}

/**
 * 二十四山三山组合 - 别名
 * @param ss - 三山别名
 * @returns 三山对数组
 *
 * @public
 */
export function getSanShanArray(ss: SanShan): [Shan24, Shan24, Shan24] {
  return ss.split('-') as [Shan24, Shan24, Shan24];
}
/**
 * 三山对应后天八卦宫方位
 * @param ss - 三山别名
 * @returns 所在八卦宫位
 *
 * @public
 */
export function mapSanShan2BaGuaGong(ss: SanShan): BaGua {
  const m = ss.split('-')[1];
  switch (m) {
    case 'ZI':
      return 'KANN';
    case 'WU':
      return 'LIEN';
    case 'MO':
      return 'ZHEN';
    case 'YO':
      return 'DUEI';
    default:
      return m as BaGua;
  }
}

/**
 * 判断二十四山在何三山位
 *
 * @param shan - 二十四山方位
 * @returns 三山位
 * @public
 */
export function inWhichSanShan(shan: Shan24): SanShan {
  return orderSanShan.find(
    (x) => getSanShanArray(x).indexOf(shan) !== -1,
  ) as SanShan;
}
