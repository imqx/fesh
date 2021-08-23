import {
  BaGua,
  BaGuaIndexedType,
  BaGuaWithZhong,
  BaGuaWithZhongIndexedType,
  BSHQType,
  DiZhi,
  DiZhiIndexedType,
  DPZZ120FJType,
  DPZZTypeFromInZWXL,
  FuJueTianHuo,
  Gan8Wei4,
  HeTuLuoShuShu,
  HeTuLuoShuShuExcept5,
  HeTuLuoShuShuExcept5IndexedType,
  HeTuLuoShuShuIndexedType,
  HTBGType,
  HTLSSTypePair,
  JiaZi60,
  JiaZi60Array,
  JiaZi60WuXingShengXiaoPack,
  JiuXing,
  JiuXingIn8,
  JiuXingIn8IndexedType,
  SanShan,
  SanShanIndexedType,
  SanYuan,
  SanYuanJiaoGouType,
  Shan24,
  Shan24IndexedType,
  ShengXiao,
  ShengXiaoIndexedType,
  ShuangShan,
  ShuangShan12Gong,
  ShuiJu,
  ShuiJuGeneric,
  ShuiKouDingJu,
  TianGan,
  TianGanIndexedType,
  TPFZShuangShan12Gong,
  TPFZType,
  Tui12DiZhiZhang,
  WangXiangType,
  WuXing,
  WuXingIndexedType,
  WuXingRelation,
  WuXingShengKeType,
  WuXingShengKeWangXiangAssets,
  XTBGType,
  YinYan,
  YinYanIndexedType,
  YinYanShuangShan12Gong,
  ZiWuShaType,
  ZuoShanFenJinAssets,
} from '@siloqian/fesh-typings';
import {
  keyFinder,
  recordFinder,
  recordValueFinder,
  swapkv,
  swapkvExactly,
} from '../utility';
import { orderSanShan, orderShuangShan } from './orders';

/**
 * 生肖地支对应
 *
 * @beta
 */
export const shengXiao2DiZhiMap: ShengXiaoIndexedType<DiZhi> = {
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
 * 地支生肖对应
 *
 * @beta
 */
export const diZhi2ShengXiaoMap: DiZhiIndexedType<ShengXiao> =
  swapkvExactly(shengXiao2DiZhiMap);

/**
 * 根据甲子类型得到数组
 *
 * @param jz 甲子类型
 * @returns 甲子数组
 *
 * @public
 */
export function getJiaZi60Array(jz: JiaZi60): JiaZi60Array {
  return jz.split('-') as JiaZi60Array;
}

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

/**
 * 先后天八卦，[先天]: [后天]
 *
 * @public
 */
export const xthtBaGuaMap: BaGuaIndexedType<HTBGType> = {
  QIAN: 'LIEN',
  KUNN: 'KANN',
  LIEN: 'ZHEN',
  KANN: 'DUEI',
  ZHEN: 'GENG',
  XUEN: 'KUNN',
  GENG: 'QIAN',
  DUEI: 'XUEN',
};

/**
 * 先后天八卦，[后天]: [先天]
 *
 * @public
 */
export const htxtBaGuaMap: BaGuaIndexedType<XTBGType> =
  swapkvExactly(xthtBaGuaMap);

/**
 * 八卦与河图洛书数对应
 *
 * @public
 */
export const baGuaHtlssMap: BaGuaIndexedType<HeTuLuoShuShuExcept5> = {
  KANN: 'h1',
  KUNN: 'h2',
  ZHEN: 'h3',
  XUEN: 'h4',
  QIAN: 'h6',
  DUEI: 'h7',
  GENG: 'h8',
  LIEN: 'h9',
};

/**
 * 河图洛书数-八卦对应
 *
 * @public
 */
export const htlssBaGuaMap: HeTuLuoShuShuExcept5IndexedType<BaGua> =
  swapkvExactly(baGuaHtlssMap);

/**
 * 翻卦掌对宫
 *
 * @public
 */
export const baGuaDuiGongMap: BaGuaIndexedType<BaGua> = {
  KANN: 'XUEN',
  KUNN: 'GENG',
  ZHEN: 'LIEN',
  XUEN: 'KANN',
  QIAN: 'DUEI',
  DUEI: 'QIAN',
  GENG: 'KANN',
  LIEN: 'ZHEN',
};

/**
 * 八煞黄泉口诀表
 *
 * @remarks
 * 坎龙坤兔震山猴，巽鸡乾马兑蛇头，艮虎离猪为八煞，宅墓逢之一齐休。
 *
 * @public
 */
export const baShaHuangQuanMap: SanShanIndexedType<BSHQType> = {
  'RN-ZI-GW': 'CN',
  'WI-KUNN-SN': 'MO',
  'JA-MO-YI': 'SN',
  'CN-XUEN-SI': 'YO',
  'XU-QIAN-HI': 'WU',
  'GN-YO-XN': 'SI',
  'CI-GENG-YN': 'YN',
  'BN-WU-DN': 'HI',
};

/**
 * 二十四山纳甲
 *
 * @remarks
 * 乾金甲子外壬午，坎水戊寅外戊申。
 * 艮土丙辰外丙戌，震木庚子外庚午。
 * 巽木辛丑外辛未，离火己卯外己酉。
 * 坤土乙未外癸丑，兑金丁巳外丁亥。
 *
 * @public
 */
export const naJiaMap: Shan24IndexedType<BaGua> = {
  RN: 'LIEN',
  YN: 'LIEN',
  XU: 'LIEN',
  WU: 'LIEN',
  ZI: 'KANN',
  GW: 'KANN',
  SN: 'KANN',
  CN: 'KANN',
  GN: 'ZHEN',
  HI: 'ZHEN',
  WI: 'ZHEN',
  MO: 'ZHEN',
  DN: 'DUEI',
  SI: 'DUEI',
  CO: 'DUEI',
  YO: 'DUEI',
  QIAN: 'QIAN',
  JA: 'QIAN',
  KUNN: 'KUNN',
  YI: 'KUNN',
  GENG: 'GENG',
  BN: 'GENG',
  XUEN: 'XUEN',
  XN: 'XUEN',
};

// prettier-ignore
/**
 * 六十甲子纳音五行表行类型
 *
 * @beta
 */
export const jiaZi60WuXingMapping: Array<JiaZi60WuXingShengXiaoPack> = [
  { jiaZi: 'JA-ZI', wuXing: 'JIN', naYinWuXing: 'hizj', shengXiao: 'wusMs', order: 1  },
  { jiaZi: 'YI-CO', wuXing: 'JIN', naYinWuXing: 'hizj', shengXiao: 'hinOx', order: 2  },
  { jiaZi: 'BN-YN', wuXing: 'HUO', naYinWuXing: 'luzh', shengXiao: 'musTg', order: 3  },
  { jiaZi: 'DN-MO', wuXing: 'HUO', naYinWuXing: 'luzh', shengXiao: 'wayRb', order: 4  },
  { jiaZi: 'WO-CN', wuXing: 'MOO', naYinWuXing: 'dalm', shengXiao: 'qiwDr', order: 5  },
  { jiaZi: 'JI-SI', wuXing: 'MOO', naYinWuXing: 'dalm', shengXiao: 'fuqSn', order: 6  },
  { jiaZi: 'GN-WU', wuXing: 'TUU', naYinWuXing: 'lupt', shengXiao: 'tagHs', order: 7  },
  { jiaZi: 'XN-WI', wuXing: 'TUU', naYinWuXing: 'lupt', shengXiao: 'delSp', order: 8  },
  { jiaZi: 'RN-SN', wuXing: 'JIN', naYinWuXing: 'jifj', shengXiao: 'qitMk', order: 9  },
  { jiaZi: 'GW-YO', wuXing: 'JIN', naYinWuXing: 'jifj', shengXiao: 'losCk', order: 10 },
  { jiaZi: 'JA-XU', wuXing: 'HUO', naYinWuXing: 'shth', shengXiao: 'sosDg', order: 11 },
  { jiaZi: 'YI-HI', wuXing: 'HUO', naYinWuXing: 'shth', shengXiao: 'gowPg', order: 12 },
  { jiaZi: 'BN-ZI', wuXing: 'SUI', naYinWuXing: 'jixs', shengXiao: 'tinMs', order: 13 },
  { jiaZi: 'DN-CO', wuXing: 'SUI', naYinWuXing: 'jixs', shengXiao: 'hunOx', order: 14 },
  { jiaZi: 'WO-YN', wuXing: 'TUU', naYinWuXing: 'chtt', shengXiao: 'gosTg', order: 15 },
  { jiaZi: 'JI-MO', wuXing: 'TUU', naYinWuXing: 'chtt', shengXiao: 'chlRb', order: 16 },
  { jiaZi: 'GN-CN', wuXing: 'JIN', naYinWuXing: 'bilj', shengXiao: 'nuxDr', order: 17 },
  { jiaZi: 'XN-SI', wuXing: 'JIN', naYinWuXing: 'bilj', shengXiao: 'docSn', order: 18 },
  { jiaZi: 'RN-WU', wuXing: 'MOO', naYinWuXing: 'yalm', shengXiao: 'juzHs', order: 19 },
  { jiaZi: 'GW-WI', wuXing: 'MOO', naYinWuXing: 'yalm', shengXiao: 'qunSp', order: 20 },
  { jiaZi: 'JA-SN', wuXing: 'SUI', naYinWuXing: 'jnqs', shengXiao: 'gosMk', order: 21 },
  { jiaZi: 'YI-YO', wuXing: 'SUI', naYinWuXing: 'jnqs', shengXiao: 'cawCk', order: 22 },
  { jiaZi: 'BN-XU', wuXing: 'TUU', naYinWuXing: 'wust', shengXiao: 'zimDg', order: 23 },
  { jiaZi: 'DN-HI', wuXing: 'TUU', naYinWuXing: 'wust', shengXiao: 'gosPg', order: 24 },
  { jiaZi: 'WO-ZI', wuXing: 'HUO', naYinWuXing: 'pilh', shengXiao: 'canMs', order: 25 },
  { jiaZi: 'JI-CO', wuXing: 'HUO', naYinWuXing: 'pilh', shengXiao: 'lanOx', order: 26 },
  { jiaZi: 'GN-YN', wuXing: 'MOO', naYinWuXing: 'sobm', shengXiao: 'chsTg', order: 27 },
  { jiaZi: 'XN-MO', wuXing: 'MOO', naYinWuXing: 'sobm', shengXiao: 'chkRb', order: 28 },
  { jiaZi: 'RN-CN', wuXing: 'SUI', naYinWuXing: 'cals', shengXiao: 'xiyDr', order: 29 },
  { jiaZi: 'GW-SI', wuXing: 'SUI', naYinWuXing: 'cals', shengXiao: 'cazSn', order: 30 },
  { jiaZi: 'JA-WU', wuXing: 'JIN', naYinWuXing: 'sasj', shengXiao: 'yuzHs', order: 31 },
  { jiaZi: 'YI-WI', wuXing: 'JIN', naYinWuXing: 'sasj', shengXiao: 'jizSp', order: 32 },
  { jiaZi: 'BN-SN', wuXing: 'HUO', naYinWuXing: 'saxh', shengXiao: 'sasMk', order: 33 },
  { jiaZi: 'DN-YO', wuXing: 'HUO', naYinWuXing: 'saxh', shengXiao: 'dulCk', order: 34 },
  { jiaZi: 'WO-XU', wuXing: 'MOO', naYinWuXing: 'pidm', shengXiao: 'jisDg', order: 35 },
  { jiaZi: 'JI-HI', wuXing: 'MOO', naYinWuXing: 'pidm', shengXiao: 'dayPg', order: 36 },
  { jiaZi: 'GN-ZI', wuXing: 'TUU', naYinWuXing: 'bist', shengXiao: 'lasMs', order: 37 },
  { jiaZi: 'XN-CO', wuXing: 'TUU', naYinWuXing: 'bist', shengXiao: 'lutOx', order: 38 },
  { jiaZi: 'RN-YN', wuXing: 'JIN', naYinWuXing: 'jibj', shengXiao: 'golTg', order: 39 },
  { jiaZi: 'GW-MO', wuXing: 'JIN', naYinWuXing: 'jibj', shengXiao: 'salRb', order: 40 },
  { jiaZi: 'JA-CN', wuXing: 'HUO', naYinWuXing: 'fudh', shengXiao: 'futDr', order: 41 },
  { jiaZi: 'YI-SI', wuXing: 'HUO', naYinWuXing: 'fudh', shengXiao: 'chxSn', order: 42 },
  { jiaZi: 'BN-WU', wuXing: 'SUI', naYinWuXing: 'tihs', shengXiao: 'xilHs', order: 43 },
  { jiaZi: 'DN-WI', wuXing: 'SUI', naYinWuXing: 'tihs', shengXiao: 'shqSp', order: 44 },
  { jiaZi: 'WO-SN', wuXing: 'TUU', naYinWuXing: 'dayt', shengXiao: 'dulMk', order: 45 },
  { jiaZi: 'JI-YO', wuXing: 'TUU', naYinWuXing: 'dayt', shengXiao: 'baxCk', order: 46 },
  { jiaZi: 'GN-XU', wuXing: 'JIN', naYinWuXing: 'cacj', shengXiao: 'sigDg', order: 47 },
  { jiaZi: 'XN-HI', wuXing: 'JIN', naYinWuXing: 'cacj', shengXiao: 'julPg', order: 48 },
  { jiaZi: 'RN-ZI', wuXing: 'MOO', naYinWuXing: 'satm', shengXiao: 'shsMs', order: 49 },
  { jiaZi: 'GW-CO', wuXing: 'MOO', naYinWuXing: 'satm', shengXiao: 'junOx', order: 50 },
  { jiaZi: 'JA-YN', wuXing: 'SUI', naYinWuXing: 'daxs', shengXiao: 'lidTg', order: 51 },
  { jiaZi: 'YI-MO', wuXing: 'SUI', naYinWuXing: 'daxs', shengXiao: 'dedRb', order: 52 },
  { jiaZi: 'GN-CN', wuXing: 'TUU', naYinWuXing: 'sazt', shengXiao: 'tisDr', order: 53 },
  { jiaZi: 'DN-SI', wuXing: 'TUU', naYinWuXing: 'sazt', shengXiao: 'tanSn', order: 54 },
  { jiaZi: 'WO-WU', wuXing: 'HUO', naYinWuXing: 'tish', shengXiao: 'lanHs', order: 55 },
  { jiaZi: 'JI-WI', wuXing: 'HUO', naYinWuXing: 'tish', shengXiao: 'caySp', order: 56 },
  { jiaZi: 'GN-SN', wuXing: 'MOO', naYinWuXing: 'shlm', shengXiao: 'shgMk', order: 57 },
  { jiaZi: 'XN-YO', wuXing: 'MOO', naYinWuXing: 'shlm', shengXiao: 'lonCk', order: 58 },
  { jiaZi: 'RN-XU', wuXing: 'SUI', naYinWuXing: 'dahs', shengXiao: 'gujDg', order: 59 },
  { jiaZi: 'GW-HI', wuXing: 'SUI', naYinWuXing: 'dahs', shengXiao: 'lixPg', order: 60 },
];

/**
 * 根据甲子取五行
 *
 * @param r - 六十甲子
 * @returns 五行
 * @public
 */
export const getWuXingByJiaZi = recordValueFinder(
  jiaZi60WuXingMapping,
  (jz1, jz2) => jz1 === jz2,
  'jiaZi',
  'wuXing',
  `JiaZi not exist!`,
);
/**
 * 根据甲子取纳音五行
 *
 * @param r - 六十甲子
 * @returns 纳音五行
 * @public
 */
export const getNaYinWuXingByJiaZi = recordValueFinder(
  jiaZi60WuXingMapping,
  (jz1, jz2) => jz1 === jz2,
  'jiaZi',
  'naYinWuXing',
  `JiaZi not exist!`,
);
/**
 * 根据甲子取纳音生肖
 *
 * @param r - 六十甲子
 * @returns 纳音生肖
 * @public
 */
export const getNaYinShengXiaoByJiaZi = recordValueFinder(
  jiaZi60WuXingMapping,
  (jz1, jz2) => jz1 === jz2,
  'jiaZi',
  'shengXiao',
  `JiaZi not exist!`,
);

/**
 * 根据甲子取得纳音五行生肖对象
 *
 * @param r - 六十甲子
 * @returns 纳音五行生肖对象
 * @public
 */
export const getJiaZi60WuXingShengXiaoByJiaZi = recordFinder(
  jiaZi60WuXingMapping,
  (jz1, jz2) => jz1 === jz2,
  'jiaZi',
  `JiaZi not exist!`,
);

/**
 * 二十四山三元对应
 *
 * @public
 */
export const sanYuan24ShanMap: Shan24IndexedType<SanYuan> = Object.fromEntries(
  Object.values(orderSanShan).reduce((o, c) => {
    const arr = getSanShanArray(c);
    o.push([arr[0], 'Dee'], [arr[1], 'Tin'], [arr[2], 'Ren']);
    return o;
  }, [] as [Shan24, SanYuan][]),
) as Shan24IndexedType<SanYuan>;

/**
 * 根据二十四山，取相应三元类型
 *
 * @param shan - 二十四山
 * @returns 三元
 * @public
 */
export const getSanYuanBy24Shan = (shan: Shan24) => sanYuan24ShanMap[shan];

/**
 * 根据三元类型，取相应二十四山
 *
 * @param sy - 三元
 * @returns 二十四山，数组
 * @public
 */
export const get24ShansBySanYuan = (sy: SanYuan) =>
  swapkv(sanYuan24ShanMap)[sy] as Shan24[];
/**
 * 河图洛书数交媾对应情况
 *
 * @public
 */
export const jiaoGouTypeHtlssPairMaps: Record<
  SanYuanJiaoGouType,
  HTLSSTypePair[]
> = {
  /** 正交 */
  ZhJo: [
    ['h1', 'h6'],
    ['h2', 'h7'],
    ['h3', 'h8'],
    ['h4', 'h6'],
  ],
  /** 反交 */
  FnJo: [
    ['h1', 'h8'],
    ['h3', 'h4'],
    ['h9', 'h2'],
    ['h7', 'h6'],
  ],
  /** 混合 */
  HnHe: [
    ['h8', 'h7'],
    ['h2', 'h3'],
    ['h6', 'h9'],
    ['h4', 'h1'],
  ],
  /** 颠倒 */
  DiDo: [
    ['h1', 'h2'],
    ['h3', 'h6'],
    ['h7', 'h4'],
    ['h8', 'h9'],
  ],
};

/**
 * 根据河图洛书数对获得交媾类型
 *
 * @param asset - 河图洛书数对
 * @param u - [Optional] 未交媾返回值
 * @returns 交媾类型
 * @throws Not Found Error.
 * @beta
 */
export const getJiaoGouTypeByHtlss = keyFinder(
  jiaoGouTypeHtlssPairMaps,
  (e, a: HTLSSTypePair) =>
    e.some((x) => {
      const sx = x.sort();
      const sa = a.sort();
      return sx[0] === sa[0] && sx[1] === sa[1];
    }),
);

/**
 * 十字天机交组合
 *
 * @public
 */
export const shiZiTianJiPairsMapping: [Shan24, Shan24, Shan24, Shan24][] = [
  ['QIAN', 'KUNN', 'GENG', 'XUEN'],
  ['ZI', 'WU', 'MO', 'YO'],
  ['YN', 'SN', 'SI', 'HI'],
  ['YI', 'XN', 'DN', 'GW'],
  ['JA', 'GN', 'RN', 'BN'],
  ['CN', 'XU', 'CO', 'WI'],
];

/**
 * 判断四方位是否符合十字天机交媾
 *
 * @param shans - 四个方位数组
 * @returns 是否合十字天机交
 * @beta
 */
export function isShiZiTianJiJiaoGou(
  shans: [Shan24, Shan24, Shan24, Shan24],
): boolean {
  const s1 = shans.sort();
  return !!shiZiTianJiPairsMapping.find((p) => {
    const s2 = p.sort();
    return (
      s1[0] === s2[0] && s1[1] === s2[1] && s1[2] === s2[2] && s1[3] === s2[3]
    );
  });
}

/**
 * 阳（顺）四水局双山长生十二宫排列
 *
 * @remarks
 * 壬水、丙火、庚金、甲木
 *
 * @public
 */
export const fzShuangShan12GongYanMaps: TPFZShuangShan12Gong = {
  /** 壬阳水局，墓宫乙【辰】，绝宫巽巳，胎宫丙午，养宫丁未，长生坤【申】，沐浴庚酉，冠带辛戌，临官乾亥，帝旺壬【子】，衰宫癸丑，病宫艮寅，死宫甲卯。 */
  SUI: {
    ChS: 'KUNN-SN',
    MuY: 'GN-YO',
    GnD: 'XN-XU',
    LnG: 'QIAN-HI',
    DiW: 'RN-ZI',
    SuI: 'GW-CO',
    BnG: 'GENG-YN',
    SiS: 'JA-MO',
    MoU: 'YI-CN',
    JuE: 'XUEN-SI',
    TaI: 'BN-WU',
    YnG: 'DN-WI',
  },
  /** 丙阳火局，墓宫辛【戌】，绝宫乾亥，胎宫壬子，养宫癸丑，长生艮【寅】，沐浴甲卯，冠带乙辰，临官巽巳，帝旺丙【午】，衰宫丁未，病宫坤申，死宫庚酉。 */
  HUO: {
    ChS: 'GENG-YN',
    MuY: 'JA-MO',
    GnD: 'YI-CN',
    LnG: 'XUEN-SI',
    DiW: 'BN-WU',
    SuI: 'DN-WI',
    BnG: 'KUNN-SN',
    SiS: 'GN-YO',
    MoU: 'XN-XU',
    JuE: 'QIAN-HI',
    TaI: 'RN-ZI',
    YnG: 'GW-CO',
  },
  /** 庚阳金局，墓宫癸【丑】，绝宫艮寅，胎宫甲卯，养宫乙辰，长生巽【巳】，沐浴丙午，冠带丁未，临官坤申，帝旺庚【酉】，衰宫辛戌，病宫乾亥，死宫壬子。 */
  JIN: {
    ChS: 'XUEN-SI',
    MuY: 'BN-WU',
    GnD: 'DN-WI',
    LnG: 'KUNN-SN',
    DiW: 'GN-YO',
    SuI: 'XN-XU',
    BnG: 'QIAN-HI',
    SiS: 'RN-ZI',
    MoU: 'GW-CO',
    JuE: 'GENG-YN',
    TaI: 'JA-MO',
    YnG: 'YI-CN',
  },
  /** 甲阳木局，墓宫丁【未】，绝宫坤申，胎宫庚酉，养宫辛戌，长生乾【亥】，沐浴壬子，冠带癸丑，临官艮寅，帝旺甲【卯】，衰宫乙辰，病宫巽巳，死宫丙午。 */
  MOO: {
    ChS: 'QIAN-HI',
    MuY: 'RN-ZI',
    GnD: 'GW-CO',
    LnG: 'GENG-YN',
    DiW: 'JA-MO',
    SuI: 'YI-CN',
    BnG: 'XUEN-SI',
    SiS: 'BN-WU',
    MoU: 'DN-WI',
    JuE: 'KUNN-SN',
    TaI: 'GN-YO',
    YnG: 'XN-XU',
  },
};

/**
 * 阴（逆）四水局双山长生十二宫排列
 *
 * @remarks
 * 辛金、乙木、丁火、癸水
 *
 * @public
 */
export const fzShuangShan12GongYinMaps: TPFZShuangShan12Gong = {
  /** 子申辰为辛阴金局。 */
  JIN: {
    ChS: 'RN-ZI',
    MuY: 'QIAN-HI',
    GnD: 'XN-XU',
    LnG: 'GN-YO',
    DiW: 'KUNN-SN',
    SuI: 'DN-WI',
    BnG: 'BN-WU',
    SiS: 'XUEN-SI',
    MoU: 'YI-CN',
    JuE: 'JA-MO',
    TaI: 'GENG-YN',
    YnG: 'GW-CO',
  },
  /** 午寅戍为乙阴木局。 */
  MOO: {
    ChS: 'BN-WU',
    MuY: 'XUEN-SI',
    GnD: 'YI-CN',
    LnG: 'JA-MO',
    DiW: 'GENG-YN',
    SuI: 'GW-CO',
    BnG: 'RN-ZI',
    SiS: 'QIAN-HI',
    MoU: 'XN-XU',
    JuE: 'GN-YO',
    TaI: 'KUNN-SN',
    YnG: 'DN-WI',
  },
  /** 酉巳丑为丁阴火局。 */
  HUO: {
    ChS: 'GN-YO',
    MuY: 'KUNN-SN',
    GnD: 'DN-WI',
    LnG: 'BN-WU',
    DiW: 'XUEN-SI',
    SuI: 'YI-CN',
    BnG: 'JA-MO',
    SiS: 'GENG-YN',
    MoU: 'GW-CO',
    JuE: 'RN-ZI',
    TaI: 'QIAN-HI',
    YnG: 'XN-XU',
  },
  /** 卯亥未为癸阴水局。 */
  SUI: {
    ChS: 'JA-MO',
    MuY: 'GENG-YN',
    GnD: 'GW-CO',
    LnG: 'RN-ZI',
    DiW: 'QIAN-HI',
    SuI: 'XN-XU',
    BnG: 'GN-YO',
    SiS: 'KUNN-SN',
    MoU: 'DN-WI',
    JuE: 'BN-WU',
    TaI: 'XUEN-SI',
    YnG: 'YI-CN',
  },
};

/**
 * 阴阳双山十二长生宫位
 *
 * @public
 */
export const fzShuangShan12GongYYMaps: YinYanShuangShan12Gong = {
  /**
   * 四大阳局：
   *
   * 巳酉丑阳金庚气局，左旋，生在巽巳方，旺在庚酉方，墓在癸丑方。
   *
   * 寅午戌阳火丙气局，左旋，生在艮寅方，旺在丙午方，墓在辛戌方。
   *
   * 亥卯未阳木甲气局，左旋，生在干亥方，旺在甲卯方，墓在丁未方。
   *
   * 申子辰阳水壬气局，左旋，生在坤申方，旺在壬子方，墓在乙辰方。
   */
  Yan: fzShuangShan12GongYanMaps,
  /**
   * ​四大阴局：
   *
   * 卯亥未阴水癸气局，右旋，生在甲卯方，旺在干亥方，墓在丁未方。
   *
   * 酉巳丑阴火丁气局，右旋，生在庚酉方，旺在巽巳方，墓在癸丑方。
   *
   * 午寅戌阴木乙气局，右旋，生在丙午方，旺在艮寅方，墓在辛戌方。
   *
   * 子申辰阴金辛气局，右旋，生在壬子方，旺在坤申方，墓在乙辰方。
   */
  Yin: fzShuangShan12GongYinMaps,
};

/**
 * 通用四水局阴阳（顺逆）区分
 *
 * @remarks
 * - XoR - 辛壬局，阴金阳水
 * - YoB - 乙丙局，阴木阳火
 * - DoG - 丁庚局，阴火阳金
 * - GoJ - 癸甲局，阴水阳木
 *
 * @public
 */
export const shuiJuGenericYinYangMaps: Record<
  ShuiJuGeneric,
  YinYanIndexedType<ShuiJu>
> = {
  XoR: { Yin: 'JIN', Yan: 'SUI' },
  YoB: { Yin: 'MOO', Yan: 'HUO' },
  DoG: { Yin: 'HUO', Yan: 'JIN' },
  GoJ: { Yin: 'SUI', Yan: 'MOO' },
};

/**
 * 水口定局
 *
 * @remarks
 * 用地盘堪定某山某向，查看此线从天盘那山穿出，所穿出的方位便是届该局；
 * 立局法则为：
 *
 * - 凡水从天盘”乙辰、巽巳、丙午”六字之一转折或出水，谓之申子辰属水的水局。
 * - 凡水从天盘”癸丑、艮寅、甲卯”六字之一转折或出水，谓之巳酉丑届金的水局。
 * - 凡水从天盘”辛戌、干亥、壬子”六字之一转折或出水，谓之寅午戌届火的水局。
 * - 凡水从天盘”丁未、坤申、庚酉”六字之一转折或出水，谓之亥卯未属木的水局。
 *
 * @public
 */
export const shuiKouDingJuMap: ShuiKouDingJu = {
  YI: 'XoR',
  CN: 'XoR',
  XUEN: 'XoR',
  SI: 'XoR',
  BN: 'XoR',
  WU: 'XoR',
  DN: 'GoJ',
  WI: 'GoJ',
  KUNN: 'GoJ',
  SN: 'GoJ',
  GN: 'GoJ',
  YO: 'GoJ',
  XN: 'YoB',
  XU: 'YoB',
  QIAN: 'YoB',
  HI: 'YoB',
  RN: 'YoB',
  ZI: 'YoB',
  GW: 'DoG',
  CO: 'DoG',
  GENG: 'DoG',
  YN: 'DoG',
  JA: 'DoG',
  MO: 'DoG',
};

/**
 * 依据出水口及阴阳取四水局（水火金木）
 *
 * @param shuiKouDir - 出水口方位
 * @param yy - 阴阳（顺逆）
 * @returns 四水局（水火金木）
 * @public
 */
export const getShuiJuByShuiKou = (shuiKouDir: TPFZType, yy: YinYan): ShuiJu =>
  shuiJuGenericYinYangMaps[shuiKouDingJuMap[shuiKouDir]][yy];

/**
 * 依据出水口及阴阳取 长生十二宫位排列
 *
 * @param shuiKouDir - 出水口方位
 * @param yy - 阴阳（顺逆）
 * @returns 长生十二宫位排列
 * @public
 */
export const getShuiJuShuangShan12Gong = (
  shuiKouDir: TPFZType,
  yy: YinYan,
): ShuangShan12Gong =>
  fzShuangShan12GongYYMaps[yy][getShuiJuByShuiKou(shuiKouDir, yy)];

/**
 * 天干五行
 *
 * @remarks
 * 甲乙木，丙丁火，戊己土，庚辛金，壬癸水
 *
 * @public
 */
export const tianGanWuXingMap: TianGanIndexedType<WuXing> = {
  JA: 'MOO',
  YI: 'MOO',
  BN: 'HUO',
  DN: 'HUO',
  WO: 'TUU',
  JI: 'TUU',
  GN: 'JIN',
  XN: 'JIN',
  RN: 'SUI',
  GW: 'SUI',
};
/**
 * 地支十二宫五行
 *
 * @public
 */
export const diZhiWuXingMap: DiZhiIndexedType<WuXing> = {
  ZI: 'SUI',
  CO: 'TUU',
  YN: 'MOO',
  MO: 'MOO',
  CN: 'TUU',
  SI: 'HUO',
  WU: 'HUO',
  WI: 'TUU',
  SN: 'JIN',
  YO: 'JIN',
  XU: 'TUU',
  HI: 'SUI',
};
/**
 * 八卦五行
 *
 * @public
 */
export const baGuaWuXingMap: BaGuaWithZhongIndexedType<WuXing> = {
  KANN: 'SUI',
  KUNN: 'TUU',
  ZHEN: 'MOO',
  XUEN: 'MOO',
  ZONG: 'TUU',
  QIAN: 'JIN',
  DUEI: 'JIN',
  GENG: 'TUU',
  LIEN: 'HUO',
};
/**
 * 正体五行
 *
 * @beta
 */
export const zhengTiWuXingMap: Record<
  TianGan | DiZhi | BaGuaWithZhong,
  WuXing
> = {
  ...baGuaWuXingMap,
  ...diZhiWuXingMap,
  ...tianGanWuXingMap,
};

/**
 * 河图洛书数五行
 *
 * @alpha
 */
export const htlssWuXingMap: HeTuLuoShuShuIndexedType<WuXing> = {
  h1: 'SUI',
  h2: 'HUO',
  h3: 'MOO',
  h4: 'JIN',
  h5: 'TUU',
  h6: 'SUI',
  h7: 'HUO',
  h8: 'MOO',
  h9: 'JIN',
};

/**
 * 五行生克关系表
 *
 * @remarks
 *   木生火，火生土，土生金，金生水，水生木
 *   木克土，土克水，水克火，火克金，金克木
 *
 * @public
 */
export const wuXingShengKeMaps: WuXingIndexedType<WuXingShengKeType> = {
  JIN: { JIN: 'DaL', TUU: 'SaW', SUI: 'WaS', MOO: 'WaK', HUO: 'KaW' },
  SUI: { SUI: 'DaL', JIN: 'SaW', MOO: 'WaS', HUO: 'WaK', TUU: 'KaW' },
  MOO: { MOO: 'DaL', SUI: 'SaW', HUO: 'WaS', TUU: 'WaK', JIN: 'KaW' },
  HUO: { HUO: 'DaL', MOO: 'SaW', TUU: 'WaS', JIN: 'WaK', SUI: 'KaW' },
  TUU: { TUU: 'DaL', HUO: 'SaW', JIN: 'WaS', SUI: 'WaK', MOO: 'KaW' },
};

/**
 * {@inheritDoc WuXingRelation}
 *
 * @public
 */
export const wuXingShengKeWangXiangMap: Record<WuXingRelation, WangXiangType> =
  {
    DaL: 'Wan',
    SaW: 'Xan',
    WaS: 'Xiu',
    WaK: 'Qiu',
    KaW: 'Sil',
  };

/**
 * 根据当前五行与关系五行获得生克及旺相关系
 *
 * @param current - 当前五行
 * @param cover - 关系五行
 * @returns 五行生克旺相关系对象
 * @public
 */
export const getWangXiangRelationAssets = (
  current: WuXing,
  cover: WuXing,
): WuXingShengKeWangXiangAssets => {
  const shengKe = wuXingShengKeMaps[current][cover];
  const wangXiang = wuXingShengKeWangXiangMap[shengKe];
  return {
    current,
    cover,
    shengKe,
    wangXiang,
  };
};

/**
 * 二十四山阴阳
 *
 * @public
 */
export const yyShan24Map: Shan24IndexedType<YinYan> = {
  /** 天元 */
  QIAN: 'Yan',
  KUNN: 'Yan',
  GENG: 'Yan',
  XUEN: 'Yan',
  ZI: 'Yin',
  WU: 'Yin',
  MO: 'Yin',
  YO: 'Yin',
  /** 人元 */
  YN: 'Yan',
  SN: 'Yan',
  SI: 'Yan',
  HI: 'Yan',
  YI: 'Yin',
  XN: 'Yin',
  DN: 'Yin',
  GW: 'Yin',
  /** 地元 */
  JA: 'Yan',
  GN: 'Yan',
  RN: 'Yan',
  BN: 'Yan',
  CN: 'Yin',
  XU: 'Yin',
  CO: 'Yin',
  WI: 'Yin',
};

/**
 * 河图洛书数 - 阴阳
 *
 * @public
 */
export const yyHtlssMap: HeTuLuoShuShuIndexedType<YinYan> = {
  h1: 'Yan',
  h2: 'Yin',
  h3: 'Yan',
  h4: 'Yin',
  h5: 'Yan',
  h6: 'Yin',
  h7: 'Yan',
  h8: 'Yin',
  h9: 'Yan',
};

/**
 * 地支 - 阴阳
 *
 * @public
 */
export const yyDiZhiMap: DiZhiIndexedType<YinYan> = {
  ZI: 'Yan',
  CO: 'Yin',
  YN: 'Yan',
  MO: 'Yin',
  CN: 'Yan',
  SI: 'Yin',
  WU: 'Yan',
  WI: 'Yin',
  SN: 'Yan',
  YO: 'Yin',
  XU: 'Yan',
  HI: 'Yin',
};

/**
 * 天干 - 阴阳
 *
 * @public
 */
export const yyTianGanMap: TianGanIndexedType<YinYan> = {
  JA: 'Yan',
  YI: 'Yin',
  BN: 'Yan',
  DN: 'Yin',
  WO: 'Yan',
  JI: 'Yin',
  GN: 'Yan',
  XN: 'Yin',
  RN: 'Yan',
  GW: 'Yin',
};

/**
 * 四阳卦、四阴卦
 *
 * @public
 */
export const yyBaGuaMap: BaGuaIndexedType<YinYan> = {
  QIAN: 'Yan',
  ZHEN: 'Yan',
  KANN: 'Yan',
  GENG: 'Yan',
  LIEN: 'Yin',
  XUEN: 'Yin',
  KUNN: 'Yin',
  DUEI: 'Yin',
};

/**
 * 八卦（合中宫）与九星对应
 *
 * @remarks
 * - 坎一宫贪狼，
 * - 坤二宫巨门，
 * - 震三宫禄存，
 * - 巽四宫文曲，
 * - 中五宫廉贞，
 * - 乾六宫武曲，
 * - 兑七宫破军，
 * - 艮八宫左辅，
 * - 离九宫右弼
 *
 * @public
 */
export const baGuaJiuXingMap: BaGuaWithZhongIndexedType<JiuXing> = {
  KANN: 'tl',
  KUNN: 'jm',
  ZHEN: 'lc',
  XUEN: 'nq',
  ZONG: 'lz',
  QIAN: 'uq',
  DUEI: 'pj',
  GENG: 'zf',
  LIEN: 'yb',
};

/**
 * 九星（八位）伏绝天祸位
 *
 * @remarks
 * - 贪狼生气位，
 * - 巨门天医位，
 * - 禄存祸害位，
 * - 文曲六煞位，
 * - 兼贞五鬼位，
 * - 武曲延年位，
 * - 破军绝命位，
 * - 辅弼伏位位
 *
 * @public
 */
export const jiuXingFuJueTianHuoMap: JiuXingIn8IndexedType<FuJueTianHuo> = {
  tl: 'sq',
  jm: 'ty',
  lc: 'hh',
  nq: 'ls',
  lz: 'wg',
  uq: 'yn',
  pj: 'jn',
  fb: 'fw',
};

/**
 * 九星变八位
 *
 * @remarks
 * 左辅右弼合为 辅弼
 *
 * @param jx - 九星数
 * @returns 八位
 * @public
 */
export const getJiuXingTo8 = (jx: JiuXing): JiuXingIn8 =>
  jx === 'zf' || jx === 'yb' ? 'fb' : jx;

/**
 * 根据八卦取伏绝天祸值
 *
 * @param baGua - 八卦位
 * @returns 伏绝天祸位
 * @public
 */
export const getFuJueTianHuoByBaGua = (baGua: BaGua): FuJueTianHuo =>
  jiuXingFuJueTianHuoMap[getJiuXingTo8(baGuaJiuXingMap[baGua])];

/**
 * 根据方位取子午煞类型
 *
 * @param dir - 方位
 * @param zhang - 十二地支掌排列
 * @returns 犯子午煞类型
 * @beta
 */
export const getZiWuShaTypeFrom24Shan = (
  dir: DPZZTypeFromInZWXL,
  zhang: Tui12DiZhiZhang,
): ZiWuShaType => swapkv(zhang)[dir] as ZiWuShaType;

/**
 * 子午斜流口诀
 *
 * @remarks
 * 乾巽巳亥骑马走，甲庚卯酉虎中求
 * 坤艮寅申居子上，丙壬子午去寻猴
 * 癸丁丑未结如戌，乙辛辰戌住龙头
 *
 * @public
 */
export const ziWuXieLiuMap: Shan24IndexedType<DPZZTypeFromInZWXL> = {
  QIAN: 'WU',
  XUEN: 'WU',
  SI: 'WU',
  HI: 'WU',
  JA: 'YN',
  GN: 'YN',
  MO: 'YN',
  YO: 'YN',
  KUNN: 'ZI',
  GENG: 'ZI',
  YN: 'ZI',
  SN: 'ZI',
  BN: 'SN',
  RN: 'SN',
  ZI: 'SN',
  WU: 'SN',
  GW: 'XU',
  DN: 'XU',
  CO: 'XU',
  WI: 'XU',
  YI: 'CN',
  XN: 'CN',
  CN: 'CN',
  XU: 'CN',
};

/**
 * 坐山与朝向对应表
 *
 * @public
 */
export const zuoShanChaoXiangMap: Shan24IndexedType<Shan24> = {
  BN: 'RN',
  CN: 'XU',
  CO: 'WI',
  DN: 'GW',
  GENG: 'KUNN',
  GN: 'JA',
  GW: 'DN',
  HI: 'SI',
  JA: 'GN',
  KUNN: 'GENG',
  MO: 'YO',
  QIAN: 'XUEN',
  RN: 'BN',
  SI: 'HI',
  SN: 'YN',
  WI: 'CO',
  WU: 'ZI',
  XN: 'YI',
  XU: 'CN',
  XUEN: 'QIAN',
  YI: 'XN',
  YN: 'SN',
  YO: 'MO',
  ZI: 'WU',
};

/**
 * 坐山兼位分金表
 *
 * @public
 */
export const zuoShanFenJinMapping: ZuoShanFenJinAssets[] = [
  // **壬山丙向、子山午向**
  // 壬山兼亥丁亥分金。兼子辛亥分金。子山兼壬丙子分金。兼癸庚子分金。
  { zuoShan: 'RN', jianWei: 'HI', fenjin: 'DN-HI' },
  { zuoShan: 'RN', jianWei: 'ZI', fenjin: 'XN-HI' },
  { zuoShan: 'ZI', jianWei: 'RN', fenjin: 'BN-ZI' },
  { zuoShan: 'ZI', jianWei: 'GN', fenjin: 'GN-ZI' },
  // **癸山丁向、丑山未向**
  // 癸山兼子丙子分金。兼丑庚子分金。丑山兼癸丁丑分金。兼艮辛丑分金。
  { zuoShan: 'GW', jianWei: 'ZI', fenjin: 'BN-ZI' },
  { zuoShan: 'GW', jianWei: 'CO', fenjin: 'GN-ZI' },
  { zuoShan: 'CO', jianWei: 'GW', fenjin: 'DN-CO' },
  { zuoShan: 'CO', jianWei: 'GENG', fenjin: 'XN-CO' },
  // **艮山坤向、寅山申向**
  // 艮山兼丑丁丑分金。兼寅辛丑分金。寅山兼艮丙寅分金。兼甲庚寅分金。
  { zuoShan: 'GENG', jianWei: 'CO', fenjin: 'DN-CO' },
  { zuoShan: 'GENG', jianWei: 'YN', fenjin: 'XN-CO' },
  { zuoShan: 'YN', jianWei: 'GENG', fenjin: 'BN-YN' },
  { zuoShan: 'YN', jianWei: 'JA', fenjin: 'GN-YN' },
  // **甲山庚向、卯山酉向**
  // 甲山兼寅丙寅分金。兼卯庚寅分金。卯山兼甲丁卯分金。兼乙辛卯分金。
  { zuoShan: 'JA', jianWei: 'YN', fenjin: 'BN-YN' },
  { zuoShan: 'JA', jianWei: 'MO', fenjin: 'GN-YN' },
  { zuoShan: 'MO', jianWei: 'JA', fenjin: 'DN-MO' },
  { zuoShan: 'MO', jianWei: 'YI', fenjin: 'XN-MO' },
  // **乙山辛向、辰山戌向**
  // 乙山兼卯丁卯分金。兼辰辛卯分金。辰山兼乙丙辰分金。兼巽庚辰分金。
  { zuoShan: 'YI', jianWei: 'MO', fenjin: 'DN-MO' },
  { zuoShan: 'YI', jianWei: 'CN', fenjin: 'XN-MO' },
  { zuoShan: 'CN', jianWei: 'YI', fenjin: 'BN-CN' },
  { zuoShan: 'CN', jianWei: 'XUEN', fenjin: 'GN-CN' },
  // **巽山乾向、巳山亥向**
  // 巽山兼辰、丙辰分金。兼巳庚辰分金。巳山兼巽丁巳分金。兼丙辛巳分金。
  { zuoShan: 'XUEN', jianWei: 'CN', fenjin: 'BN-CN' },
  { zuoShan: 'XUEN', jianWei: 'SI', fenjin: 'GN-CN' },
  { zuoShan: 'SI', jianWei: 'XUEN', fenjin: 'DN-SI' },
  { zuoShan: 'SI', jianWei: 'BN', fenjin: 'XN-SI' },
  // **丙山壬向、午山子向**
  // 丙山兼巳丁巳分金。兼午辛巳分金。午山兼丙丙午分金。兼丁庚午分金。
  { zuoShan: 'BN', jianWei: 'SI', fenjin: 'DN-SI' },
  { zuoShan: 'BN', jianWei: 'WU', fenjin: 'XN-SI' },
  { zuoShan: 'WU', jianWei: 'BN', fenjin: 'BN-WU' },
  { zuoShan: 'WU', jianWei: 'DN', fenjin: 'GN-WU' },
  // **丁山癸向、未山丑向**
  // 丁山兼午丙午分金，兼未庚午分金。未山兼丁丁未分金。兼坤辛未分金。
  { zuoShan: 'DN', jianWei: 'WU', fenjin: 'BN-WU' },
  { zuoShan: 'DN', jianWei: 'WI', fenjin: 'GN-WU' },
  { zuoShan: 'WI', jianWei: 'DN', fenjin: 'DN-WI' },
  { zuoShan: 'WI', jianWei: 'KUNN', fenjin: 'XN-WI' },
  // **坤山艮向、申山寅向**
  // 坤山兼未丁未分金,兼申辛未分金.申山兼坤丙申分金.
  { zuoShan: 'KUNN', jianWei: 'WI', fenjin: 'DN-WI' },
  { zuoShan: 'KUNN', jianWei: 'SN', fenjin: 'XN-WI' },
  { zuoShan: 'SN', jianWei: 'KUNN', fenjin: 'BN-SN' },
  { zuoShan: 'SN', jianWei: 'GN', fenjin: 'GN-SN' },
  // **庚山甲向、酉山卯向**
  // 庚山兼申丙申分金、兼酉庚申分金、酉山兼庚丁酉分金，兼辛辛酉分金。
  { zuoShan: 'GN', jianWei: 'SN', fenjin: 'BN-SN' },
  { zuoShan: 'GN', jianWei: 'YO', fenjin: 'GN-SN' },
  { zuoShan: 'YO', jianWei: 'GN', fenjin: 'DN-YO' },
  { zuoShan: 'YO', jianWei: 'XN', fenjin: 'XN-YO' },
  // **辛山乙向、戌山辰向**
  // 辛山兼酉丁酉分金，兼戌辛酉分金，戌山兼辛丙戍分金。
  { zuoShan: 'XN', jianWei: 'YO', fenjin: 'DN-YO' },
  { zuoShan: 'XN', jianWei: 'XU', fenjin: 'XN-YO' },
  { zuoShan: 'XU', jianWei: 'XN', fenjin: 'BN-XU' },
  { zuoShan: 'XU', jianWei: 'QIAN', fenjin: 'GN-XU' },
  // **乾山巽向、亥山巳向**
  // 乾山兼戍丙戌分金。兼亥庚戌分金。亥山兼乾丁亥分金。兼壬辛亥分金。
  { zuoShan: 'QIAN', jianWei: 'XU', fenjin: 'BN-XU' },
  { zuoShan: 'QIAN', jianWei: 'HI', fenjin: 'GN-XU' },
  { zuoShan: 'HI', jianWei: 'QIAN', fenjin: 'DN-HI' },
  { zuoShan: 'HI', jianWei: 'RN', fenjin: 'XN-HI' },
];

/**
 * 根据坐山兼向取分金
 *
 * @param zuoShan - 坐山
 * @param jianWei - 兼位
 * @returns 坐山分金对象
 * @public
 */
export function getZuoShanFenJin(
  zuoShan: Shan24,
  jianWei: Shan24,
): DPZZ120FJType {
  const f = zuoShanFenJinMapping.find(
    (p) => p.zuoShan === zuoShan && p.jianWei === jianWei,
  );
  if (typeof f === 'undefined') {
    throw 'zuoShan & jianWei not correct.';
  }
  return f.fenjin;
}

/**
 * 二十四山河图洛书数对应
 *
 * @public
 */
export const shan24HtlssMap: Shan24IndexedType<HeTuLuoShuShu> = {
  RN: 'h1',
  ZI: 'h1',
  GW: 'h1',
  CO: 'h8',
  GENG: 'h8',
  YN: 'h8',
  JA: 'h3',
  MO: 'h3',
  YI: 'h3',
  CN: 'h4',
  XUEN: 'h4',
  SI: 'h4',
  BN: 'h9',
  WU: 'h9',
  DN: 'h9',
  WI: 'h2',
  KUNN: 'h2',
  SN: 'h2',
  GN: 'h7',
  YO: 'h7',
  XN: 'h7',
  XU: 'h6',
  QIAN: 'h6',
  HI: 'h6',
};

/**
 * 判定分金是否为孤、虚、空亡位
 *
 * @remarks
 * “丙、庚”为阳为“旺”；“丁、辛”为阴为“相”。
 *
 * 三合派的理论认为：
 * ① 甲、壬为“孤”，
 * ② 乙、癸为“虚”，
 * ③ 戊、己为“空亡”，以上“孤、虚、空亡”三者不用；
 * ④ 丙、庚为“旺”，
 * ⑤ 丁、辛为“相”，“旺、相”是阴阳冲合之象，亦是纳干卦爻九六阴阳冲合所致（以阴为六，阳为九计数）。
 *
 * @param fj - 分金位
 * @returns 是否为孤、虚、空亡位
 * @public
 */
export function isFenJin120GuXuKongWang(fj: DPZZ120FJType): boolean {
  return ['JA', 'WO', 'RN', 'YI', 'JI', 'GW'].find(
    (x) => x === getJiaZi60Array(fj)[0],
  )
    ? true
    : false;
}
