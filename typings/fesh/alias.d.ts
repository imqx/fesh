/**
 * 各类基础理论、单位对象化
 *
 * @packageDocument
 */

declare module '@siloqian/fesh-typings' {
  /**
   * 十天干
   *
   * @public
   */
  export type TianGan =
    | 'JA'
    | 'YI'
    | 'BN'
    | 'DN'
    | 'GN'
    | 'XN'
    | 'RN'
    | 'GW'
    | 'WO'
    | 'JI';
  /**
   * 八干
   *
   * @public
   */
  export type Gan8 = Exclude<TianGan, 'WO' | 'JI'>;
  /**
   * 十二地支
   *
   * @public
   */
  export type DiZhi =
    | 'ZI'
    | 'CO'
    | 'YN'
    | 'MO'
    | 'CN'
    | 'SI'
    | 'WU'
    | 'WI'
    | 'SN'
    | 'YO'
    | 'XU'
    | 'HI';
  /**
   * 五行
   *
   * @public
   */
  export type WuXing = 'JIN' | 'MOO' | 'SUI' | 'HUO' | 'TUU';
  /**
   * 水火金木四水局
   *
   * @public
   */
  export type ShuiJu = Exclude<WuXing, 'TUU'>;
  /**
   * 八卦
   *
   * @public
   */
  export type BaGua =
    | 'KANN'
    | 'ZHEN'
    | 'LIEN'
    | 'DUEI'
    | 'QIAN'
    | 'KUNN'
    | 'GENG'
    | 'XUEN';
  /**
   * 四维
   *
   * @public
   */
  export type Wei4 = Exclude<BaGua, 'KANN' | 'ZHEN' | 'LIEN' | 'DUEI'>;
  /**
   * 八卦与中五宫
   *
   * @public
   */
  export type BaGuaWithZhong = BaGua | 'ZONG';
  /**
   * 八方位
   *
   * @public
   */
  export type Direction = 'E' | 'S' | 'W' | 'N' | 'NW' | 'NE' | 'SE' | 'SW';
  /**
   * 生肖
   *
   * @public
   */
  export type ShengXiao =
    | 'Ms'
    | 'Ox'
    | 'Tg'
    | 'Rb'
    | 'Dr'
    | 'Sn'
    | 'Hs'
    | 'Sp'
    | 'Mk'
    | 'Ck'
    | 'Dg'
    | 'Pg';
  /**
   * 河图洛书数
   *
   * @remarks
   * 戴九履一、左三右七、二四为肩、六八为足、五居正中
   *
   * @public
   */
  export type HeTuLuoShuShu =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'h7'
    | 'h8'
    | 'h9';
  /**
   * 河图洛书数
   *
   * @remarks
   * 戴九履一、左三右七、二四为肩、六八为足、五居正中（不含5）
   *
   * @public
   */
  export type HeTuLuoShuShuExcept5 = Exclude<HeTuLuoShuShu, 'h5'>;
  /**
   * 九星七曜 - 九星，含左辅、右弼
   *
   * @remarks
   * 辅（辅弼）、破（破军）、贞（廉贞）、武（武曲）、巨（巨门）、文（文曲）、禄（禄存）、贪（贪狼）
   *
   * @public
   */
  export type JiuXing =
    | 'pj'
    | 'lz'
    | 'uq'
    | 'jm'
    | 'nq'
    | 'lc'
    | 'tl'
    | 'zf'
    | 'yb';
  /**
   * 九星七曜 - 七曜，不含：辅（辅弼）
   *
   * @remarks
   * 辅（辅弼）、破（破军）、贞（廉贞）、武（武曲）、巨（巨门）、文（文曲）、禄（禄存）、贪（贪狼）
   *
   * @public
   */
  export type QiYao = Exclude<JiuXing, 'zf' | 'yb'>;
  /**
   * 九星七曜 - 七曜含：辅（辅弼）
   *
   * @remarks
   * 辅（辅弼）、破（破军）、贞（廉贞）、武（武曲）、巨（巨门）、文（文曲）、禄（禄存）、贪（贪狼）
   *
   * @public
   */
  export type JiuXingIn8 = QiYao | 'fb';
  /**
   * 北斗，天枢、天班、天玑、天权、玉衡、开阳、遥光、辅弼
   *
   * @public
   */
  export type BeiDou =
    | 'bdTS'
    | 'bdTX'
    | 'bdTJ'
    | 'bdTQ'
    | 'bdYH'
    | 'bdKY'
    | 'bdYG'
    | 'bdFB';
  /**
   * 伏绝天祸，生气、天医、祸害、五鬼、绝命、六煞、伏位、延年
   *
   * @public
   */
  export type FuJueTianHuo =
    | 'sq'
    | 'ty'
    | 'hh'
    | 'wg'
    | 'jn'
    | 'ls'
    | 'fw'
    | 'yn';
  /**
   * 阴阳
   *
   * @public
   */
  export type YinYan = 'Yin' | 'Yan';
  /**
   * 八干四维
   *
   * @public
   */
  export type Gan8Wei4 = Gan8 | Wei4;
  /**
   * 二十四山
   *
   * @public
   */
  export type Shan24 = DiZhi | Gan8 | Wei4;
  /**
   * 二十四天星
   *
   * @remarks
   * 天辅，天壘，天汉，天厨，天市，天棓，天苑，天命，天官，天罡，太乙， 屏，太微，天马，天柱，天恒，天钺，天关，天潢，少微，天乙，天魁，天厩，天皇。
   *
   * @public
   */
  export type TianXing24 =
    | 'tFU' // 天辅
    | 'tLE' // 天壘
    | 'tHA' // 天汉
    | 'tCU' // 天厨
    | 'tSH' // 天市
    | 'tBE' // 天棓
    | 'tYN' // 天苑
    | 'tMN' // 天命
    | 'tGN' // 天官
    | 'tGA' // 天罡
    | 'tYY' // 太乙
    | 'tPN' // 天屏
    | 'tWE' // 太微
    | 'tMA' // 天马
    | 'tZU' // 天柱
    | 'tHE' // 天恒
    | 'tYE' // 天钺
    | 'tGU' // 天关
    | 'tHN' // 天潢
    | 'sWE' // 少微
    | 'tYI' // 天乙
    | 'tKU' // 天魁
    | 'tJU' // 天厩
    | 'tHG'; // 天皇

  /**
   * 六十甲子
   *
   * @public
   */
  export type JiaZi60 =
    | 'JA-ZI'
    | 'YI-CO'
    | 'BN-YN'
    | 'DN-MO'
    | 'WO-CN'
    | 'JI-SI'
    | 'GN-WU'
    | 'XN-WI'
    | 'RN-SN'
    | 'GW-YO'
    | 'JA-XU'
    | 'YI-HI'
    | 'BN-ZI'
    | 'DN-CO'
    | 'WO-YN'
    | 'JI-MO'
    | 'GN-CN'
    | 'XN-SI'
    | 'RN-WU'
    | 'GW-WI'
    | 'JA-SN'
    | 'YI-YO'
    | 'BN-XU'
    | 'DN-HI'
    | 'WO-ZI'
    | 'JI-CO'
    | 'GN-YN'
    | 'XN-MO'
    | 'RN-CN'
    | 'GW-SI'
    | 'JA-WU'
    | 'YI-WI'
    | 'BN-SN'
    | 'DN-YO'
    | 'WO-XU'
    | 'JI-HI'
    | 'GN-ZI'
    | 'XN-CO'
    | 'RN-YN'
    | 'GW-MO'
    | 'JA-CN'
    | 'YI-SI'
    | 'BN-WU'
    | 'DN-WI'
    | 'WO-SN'
    | 'JI-YO'
    | 'GN-XU'
    | 'XN-HI'
    | 'RN-ZI'
    | 'GW-CO'
    | 'JA-YN'
    | 'YI-MO'
    | 'BN-CN'
    | 'DN-SI'
    | 'WO-WU'
    | 'JI-WI'
    | 'GN-SN'
    | 'XN-YO'
    | 'RN-XU'
    | 'GW-HI';

  /**
   * 六十甲子数组类型
   *
   * @public
   */
  export type JiaZi60Array = [TianGan, DiZhi];

  /**
   * 长生十二宫
   *
   * @remarks
   * 长生、沐浴、冠带、临官、帝旺、衰、病、死、墓、绝、胎、养
   *
   * @public
   */
  export type ChangSheng12 =
    | 'ChS'
    | 'MuY'
    | 'GnD'
    | 'LnG'
    | 'DiW'
    | 'SuI'
    | 'BnG'
    | 'SiS'
    | 'MoU'
    | 'JuE'
    | 'TaI'
    | 'YnG';
  /**
   * 吉凶级别
   *
   * @remarks
   * J1吉、J3次吉、J5中、J7凶、J9大凶
   *
   * @experimental
   * @public
   */
  export type JiXiong = 'J1' | 'J3' | 'J5' | 'J7' | 'J9';
  /**
   * 二十四山双山组合 - 类型
   *
   * @public
   */
  export type ShuangShan =
    | 'RN-ZI'
    | 'GW-CO'
    | 'GENG-YN'
    | 'JA-MO'
    | 'YI-CN'
    | 'XUEN-SI'
    | 'BN-WU'
    | 'DN-WI'
    | 'KUNN-SN'
    | 'GN-YO'
    | 'XN-XU'
    | 'QIAN-HI';
  /**
   * 二十四山三山组合 - 类型
   *
   * @public
   */
  export type SanShan =
    | 'RN-ZI-GW'
    | 'CI-GENG-YN'
    | 'JA-MO-YI'
    | 'CN-XUEN-SI'
    | 'BN-WU-DN'
    | 'WI-KUNN-SN'
    | 'GN-YO-XN'
    | 'XU-QIAN-HI';

  /**
   * 兼向位置，双向：BF兼前，AF兼后
   *
   * @beta
   */
  export type FenJinJianXiang = '_BF_' | '_AF_';

  /**
   * 兼向位置，三向，含正向：BF兼前，CT正向，AF兼后
   *
   * @beta
   */
  export type JianZhengXiang = '_CT_' | FenJinJianXiang;
  /**
   * 二十四节气
   *
   * @remarks
   * 立春，雨水、惊蛰、春分、清明、谷雨；立夏、小满、芒种、夏至、小暑、大暑；
   * 立秋、处暑、白露、秋分、寒露、霜降；立冬、小雪、大雪、冬至、小寒、大寒。
   *
   * @public
   */
  export type JieQi24 =
    | 'LiCh'
    | 'YuSe'
    | 'JnZe'
    | 'ChFn'
    | 'QnMg'
    | 'GuYu'
    | 'LiXa'
    | 'XoMn'
    | 'MaZo'
    | 'XaZh'
    | 'XoSh'
    | 'DaSh'
    | 'LiQu'
    | 'ChSh'
    | 'BiLu'
    | 'QuFn'
    | 'HnLu'
    | 'ShJg'
    | 'LiDg'
    | 'XoXe'
    | 'DaXe'
    | 'DgZh'
    | 'XoHn'
    | 'DaHn';

  /**
   * 生辰八字
   *
   * @public
   */
  export interface ShengChenBaZi {
    /** 年份甲子 */
    year: JiaZi60;
    /** 月份甲子 */
    month: JiaZi60;
    /** 日甲子 */
    day: JiaZi60;
    /** 时辰甲子 */
    time: JiaZi60;
  }
  /**
   * 性别
   *
   * @remarks
   * This do not contains `UNKNOWN`
   *
   * @beta
   */
  export type Gender = 'M' | 'F';

  /**
   * 地盘正针指向类型
   *
   * @public
   */
  export type DPZZType = Shan24;
  /**
   * 人盘中针指向类型
   *
   * @public
   */
  export type RPZZType = Shan24;
  /**
   * 天盘缝针指向类型
   *
   * @public
   */
  export type TPFZType = Shan24;
  /**
   * 先天八卦
   *
   * @remarks
   * Should it be different from {@link HTBGType}
   *
   * @public
   */
  export type XTBGType = BaGua;
  /**
   * 后天八卦
   *
   * @remarks
   * Should it be different from {@link XTBGType}
   *
   * @public
   */
  export type HTBGType = BaGua;
  /**
   * 河图洛书数
   *
   * @privateRemarks
   * Simila of the 2 Types, Which to use is not **SURE**
   *
   * @public
   */
  export type HTLSSType = HeTuLuoShuShu;
  /**
   * 穿山七十二龙
   *
   * @public
   */
  export type CS72LONGType = JiaZi60 | Gan8Wei4;
  /**
   * 八煞黄泉
   *
   * @public
   */
  export type BSHQType = DiZhi;
  /**
   * 二十四山劫煞
   *
   * @privateRemarks
   * Not exactly
   *
   * @public
   */
  export type SH24JSType = Shan24;
  /**
   * 透地六十龙
   *
   * @public
   */
  export type TD60LONGType = JiaZi60;
  /**
   * 正针百二十分金类型
   *
   * @public
   */
  export type DPZZ120FJType = JiaZi60;

  /**
   * 罗盘层名称
   *
   * @remarks
   * Enum of the types, should reorgnized with the keys by refs of the TYPES
   *
   * @public
   */
  export type LayerNames =
    | 'DPZZ'
    | 'RPZZ'
    | 'TPFZ'
    | 'XTBG'
    | 'HTBG'
    | 'HTLSS'
    | 'CS72LONG'
    | 'BSHQ'
    | 'SH24JS'
    | 'TD60LONG'
    | 'DPZZ120FJ';

  /**
   * 河图洛书数 - 对
   *
   * @public
   */
  export type HTLSSTypePair = [HTLSSType, HTLSSType];

  /**
   * 阴阳类型 - 对
   *
   * @public
   */
  export type YinYangPair = [YinYan, YinYan];

  /**
   * 命卦 - 依据出生年计算
   *
   * @public
   */
  export type MingGua = BaGua;
}
