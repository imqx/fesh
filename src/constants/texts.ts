/**
 * Key值的中文释义
 *
 * @packageDocument
 */

import {
  Shan24,
  TextKeys,
  TextKeyType,
  TextOptions,
  TextUnoinType,
} from '@siloqian/fesh-typings';
import { checkUndefined } from '@src/utility';

/** 释义集合 */
const textMain: Record<TextKeys, string> = {
  JA: '甲',
  YI: '乙',
  BN: '丙',
  DN: '丁',
  WO: '戊',
  JI: '己',
  GN: '庚',
  XN: '辛',
  RN: '壬',
  GW: '癸',
  ZI: '子',
  CO: '丑',
  YN: '寅',
  MO: '卯',
  CN: '辰',
  SI: '巳',
  WU: '午',
  WI: '未',
  SN: '申',
  YO: '酉',
  XU: '戌',
  HI: '亥',
  QIAN: '乾',
  KUNN: '坤',
  LIEN: '离',
  KANN: '坎',
  GENG: '艮',
  ZHEN: '震',
  XUEN: '巽',
  DUEI: '兑',
  E: '东',
  S: '南',
  W: '西',
  N: '北',
  NE: '东北',
  NW: '西北',
  SE: '东南',
  SW: '西南',
  HUO: '火',
  JIN: '金',
  MOO: '木',
  TUU: '土',
  SUI: '水',
  Ms: '鼠',
  Ox: '牛',
  Tg: '虎',
  Rb: '兔',
  Dr: '龙',
  Sn: '蛇',
  Hs: '马',
  Sp: '羊',
  Mk: '猴',
  Ck: '鸡',
  Dg: '狗',
  Pg: '猪',
  DPZZ: '地盘正针',
  RPZZ: '人盘中针',
  TPFZ: '天盘缝针',
  XTBG: '先天八卦',
  HTBG: '后天八卦',
  HTLSS: '河图洛书数',
  CS72LONG: '穿山七十二龙',
  TD60LONG: '透地六十龙',
  BSHQ: '八煞黄泉',
  SH24JS: '二十四山劫煞',
  DPZZ120FJ: '正针一百二十分金',
  h1: '一',
  h2: '二',
  h3: '三',
  h4: '四',
  h5: '五',
  h6: '六',
  h7: '七',
  h8: '八',
  h9: '九',
  DaL: '当令',
  WaS: '我生',
  SaW: '生我',
  WaK: '我克',
  KaW: '克我',
  Wan: '旺',
  Xan: '相',
  Xiu: '休',
  Qiu: '囚',
  Sil: '死',
  wusMs: '屋上之鼠',
  hinOx: '海内之牛',
  musTg: '山木之虎',
  wayRb: '望月之兔',
  qiwDr: '清温之龙',
  fuqSn: '福气之蛇',
  tagHs: '堂裹之马',
  delSp: '得禄之羊',
  qitMk: '清透之猴',
  losCk: '楼宿之鸡',
  sosDg: '守身之狗',
  gowPg: '过往之猪',
  tinMs: '田内之鼠',
  hunOx: '湖内之牛',
  gosTg: '过山之虎',
  chlRb: '出林之兔',
  nuxDr: '恕性之龙',
  docSn: '冬藏之蛇',
  juzHs: '军中之马',
  qunSp: '群内之羊',
  gosMk: '过树之猴',
  cawCk: '唱午之鸡',
  zimDg: '自眠之狗',
  gosPg: '过山之猪',
  canMs: '仓内之鼠',
  lanOx: '栏内之牛',
  chsTg: '出山之虎',
  chkRb: '蟾窟之兔',
  xiyDr: '行雨之龙',
  cazSn: '草中之蛇',
  yuzHs: '云中之马',
  jizSp: '敬重之羊',
  sasMk: '山上之猴',
  dulCk: '独立之鸡',
  jisDg: '进山之狗',
  dayPg: '道院之猪',
  lasMs: '梁上之鼠',
  lutOx: '路途之牛',
  golTg: '过林之虎',
  salRb: '山林之兔',
  futDr: '伏潭之龙',
  chxSn: '出穴之蛇',
  xilHs: '行路之马',
  shqSp: '失群之羊',
  dulMk: '独立之猴',
  baxCk: '报晓之鸡',
  sigDg: '寺观之狗',
  julPg: '圈里之猪',
  shsMs: '山上之鼠',
  junOx: '圈内之牛',
  lidTg: '立定之虎',
  dedRb: '得道之兔',
  tisDr: '天上之龙',
  tanSn: '塘内之蛇',
  lanHs: '廊内之马',
  caySp: '草野之羊',
  shgMk: '食果之猴',
  lonCk: '笼内之鸡',
  gujDg: '顾家之狗',
  lixPg: '林下之猪',
  hizj: '海中金',
  luzh: '炉中火',
  dalm: '大林木',
  lupt: '路旁土',
  jifj: '剑锋金',
  shth: '山头火',
  jixs: '涧下水',
  chtt: '城头土',
  bilj: '白锱金',
  yalm: '杨柳木',
  jnqs: '井泉水',
  wust: '屋上土',
  pilh: '霹雳火',
  sobm: '松柏木',
  cals: '长流水',
  sasj: '沙石金',
  saxh: '山下火',
  pidm: '平地木',
  bist: '壁上土',
  jibj: '金箔金',
  fudh: '覆灯火',
  tihs: '天河水',
  dayt: '大驿土',
  cacj: '钗钏金',
  satm: '桑柘木',
  daxs: '大溪水',
  sazt: '沙中土',
  tish: '天上火',
  shlm: '石榴木',
  dahs: '大海水',
  NN: '正',
  PRNT: '父母',
  BRTH: '兄弟',
  SONS: '子孙',
  OFFR: '官鬼',
  WIFE: '妻财',
  lz: '贞',
  lc: '禄',
  uq: '武',
  nq: '文',
  fb: '辅',
  jm: '巨',
  tl: '贪',
  pj: '破',
  bdFB: '辅',
  bdKY: '开',
  bdTJ: '玑',
  bdTQ: '权',
  bdTS: '枢',
  bdTX: '璇',
  bdYG: '遥',
  bdYH: '衡',
  sq: '生',
  ty: '医',
  fw: '伏',
  wg: '鬼',
  jn: '绝',
  yn: '延',
  ls: '六',
  hh: '祸',
  Yin: '阴',
  Yan: '阳',
  tFU: '天辅',
  tLE: '天壘',
  tHA: '天汉',
  tCU: '天厨',
  tSH: '天市',
  tBE: '天棓',
  tYN: '天苑',
  tMN: '天命',
  tGN: '天官',
  tGA: '天罡',
  tYY: '太乙',
  tPN: '天屏',
  tWE: '太微',
  tMA: '天马',
  tZU: '天柱',
  tHE: '天恒',
  tYE: '天钺',
  tGU: '天关',
  tHN: '天潢',
  sWE: '少微',
  tYI: '天乙',
  tKU: '天魁',
  tJU: '天厩',
  tHG: '天皇',
  ChS: '长生',
  MuY: '沐浴',
  GnD: '冠带',
  LnG: '临官',
  DiW: '帝旺',
  SuI: '衰宫',
  BnG: '病宫',
  SiS: '死宫',
  MoU: '墓宫',
  JuE: '绝宫',
  TaI: '胎宫',
  YnG: '养宫',
  J1: '吉',
  J3: '次吉',
  J5: '中',
  J7: '凶',
  J9: '大凶',
  bs_ZuoShan: '坐山位八煞',
  bs_HouTian: '后天位八煞',
  bs_XianTian: '先天位八煞',
  Tin: '天元',
  Dee: '地元',
  Ren: '人元',
  ZhJo: '正交',
  FnJo: '反交',
  HnHe: '混合',
  DiDo: '颠倒',
  fsg_Xng: '向上犯三卦（大凶）',
  fsg_Zuo: '坐上犯三卦（次凶）',
  XoR: '辛壬',
  YoB: '乙丙',
  DoG: '丁庚',
  GoJ: '癸甲',
  Bai: '白',
  Hei: '黑',
  Bee: '碧',
  Luv: '绿',
  Hng: '黄',
  Chi: '赤',
  Zii: '紫',
};

/** 释义（别名）集合 */
const textAlias: Partial<Record<TextKeys, string>> = {
  Tin: '南北卦',
  Dee: '江东卦',
  Ren: '江西卦',
  fw: '伏位',
  jn: '绝命',
  ty: '天医',
  hh: '祸害',
  ls: '六煞',
  yn: '延年',
  wg: '五鬼',
  sq: '生气',
};

/** 默认参数值 */
const defaultOptions: TextOptions = {
  formatter(val) {
    return val;
  },
  onEndFormatter(res) {
    return res;
  },
  separator: '',
  notFoundTemplate: '#',
};

/** 释义查找方法 */
const resultsArray = function (
  val: TextKeyType | TextUnoinType,
  lo: Partial<Record<TextKeys, string>>,
  notFoundReplace: (t: string) => string,
): string[] {
  if (val instanceof Array) {
    return val.map((c) => lo[c] || notFoundReplace(c));
  } else if (val.indexOf('-') !== -1) {
    return val.split('-').map((c) => lo[c] || notFoundReplace(c));
  } else {
    return [lo[val]] || [notFoundReplace(val)];
  }
};

/** 释义查找方法创建方法 */
function makeTextFinder(alias: boolean = false) {
  return function (
    val: TextKeyType | TextUnoinType,
    opts: Partial<TextOptions> = defaultOptions,
  ): string {
    const { formatter, onEndFormatter, separator, notFoundTemplate } = {
      ...defaultOptions,
      ...opts,
    };
    const lo = alias ? textAlias : textMain;
    const notFoundReplace = (x: string) => notFoundTemplate.replace(/\#/g, x);
    return onEndFormatter(
      resultsArray(val, lo, notFoundReplace)
        .map((s) => formatter(s))
        .join(separator),
    );
  };
}

/**
 * 查找中文释义
 *
 * @param val - 需要释义的Key值
 * @returns 释义结果字符串
 * @beta
 */
export function $t(val: TextKeyType | TextUnoinType): string;
/**
 * 查找中文释义
 *
 * @param val - 需要释义的Key值
 * @param opts - [Optional] 相关格式参数，见 {@link TextOptions}
 * @returns 释义结果字符串
 * @beta
 */
export function $t(
  val: TextKeyType | TextUnoinType,
  opts: Partial<TextOptions>,
): string;
export function $t(
  val: TextKeyType | TextUnoinType,
  opts: Partial<TextOptions> = defaultOptions,
): string {
  return makeTextFinder(false)(val, opts);
}

/**
 * 查找中文释义 - 别名
 *
 * @param val - 需要释义 - 别名的Key值
 * @returns 释义结果字符串 - 别名
 * @beta
 */
export function $a(val: TextKeyType | TextUnoinType): string;
/**
 * 查找中文释义 - 别名
 *
 * @param val - 需要释义 - 别名的Key值
 * @param opts - [Optional] 相关格式参数，见 {@link TextOptions}
 * @returns 释义结果字符串 - 别名
 * @beta
 */
export function $a(
  val: TextKeyType | TextUnoinType,
  opts: Partial<TextOptions>,
): string;
export function $a(
  val: TextKeyType | TextUnoinType,
  opts: Partial<TextOptions> = defaultOptions,
): string {
  return makeTextFinder(true)(val, opts);
}

/**
 * 带兼向类型的释义输出
 *
 * @example
 * ```
 * $tWithJianXiang('CN', 'CN'); // 正辰
 * $tWithJianXiang('ZI', 'GW'); // 兼癸
 * $tWithJianXiang('XN', 'YO', 'MO'); // 兼酉卯
 * ```
 *
 * @param z - 主向方位
 * @param j - 兼向方位
 * @param x - [Optional] 对向方位
 * @returns 释义文本
 * @beta
 */
export function $tWithJianXiang(z: Shan24, j: Shan24, x?: Shan24) {
  return (z === j ? `正${$t(z)}` : `兼${$t(j)}`) + (x ? $t(x) : '');
}

const textMainEntries = Object.entries(textMain);
const textAliasEntries = Object.entries(textAlias);

/**
 * 反向释义，根据释义找到Key值
 *
 * @example
 * ```
 * $r<DiZhi>('子'); // 'ZI'
 * $r<Shan24>('乾'); // 'QIAN'
 * $r<JiaZi60>('甲午'); // ['JA', 'WU']
 * $r<[JiaZi60, JiaZi60, JiaZi60, JiaZi60]>('丙寅丙申丁酉己酉', 2); // [['BN', 'YN'],['BN', 'SN'],['DN', 'YO'],['JI', 'YO']]
 * $r<BaGua>('张'); // throw Error `The key of [张] not exist.`
 * ```
 *
 * @typeParam T - 返回Key值的类型，需要指定，默认为`any`
 * @param val - 释义字符串
 * @param slice - 分隔字符数，默认为`1`
 * @param alias - 是否查找别名
 * @returns 找到的Key值
 * @throws 找不到结果时，抛出异常
 * @beta
 */
export function $r<T>(
  val: string,
  slice: number = 1,
  alias: boolean = false,
): T {
  const res = [];
  const lo = alias ? textAliasEntries : textMainEntries;
  for (let i = 0; i < val.length; i += slice) {
    const v = val.slice(i, i + slice);
    const key = lo.find((l) => l[1] === v)?.[0];
    res.push(checkUndefined(key, `The key of [${v}] not exist.`));
  }
  if (res.length === 1) {
    return res[0] as any;
  }
  return res as any;
}
