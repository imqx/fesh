/**
 * 基础索引对象类型
 *
 * @packageDocument
 */

declare module 'types/base' {
  /**
   * 天干索引类
   *
   * @public
   */
  export type TianGanIndexedType<T> = Record<TianGan, T>;

  /**
   * 地支索引类
   *
   * @public
   */
  export type DiZhiIndexedType<T> = Record<DiZhi, T>;
  /**
   * 五行索引类
   *
   * @public
   */
  export type WuXingIndexedType<T> = Record<WuXing, T>;

  /**
   * 水火金木水局索引类
   *
   * @public
   */
  export type ShuiJuIndexedType<T> = Record<ShuiJu, T>;

  /**
   * 八卦索引类
   *
   * @public
   */
  export type BaGuaIndexedType<T> = Record<BaGua, T>;

  /**
   * 八卦与中五宫索引类
   *
   * @public
   */
  export type BaGuaWithZhongIndexedType<T> = Record<BaGuaWithZhong, T>;

  /**
   * 八方位索引类
   *
   * @public
   */
  export type DirectionIndexedType<T> = Record<Direction, T>;
  /**
   * 生肖索引类
   *
   * @public
   */
  export type ShengXiaoIndexedType<T> = Record<ShengXiao, T>;
  /**
   * 河图洛书数（不含5）索引类
   *
   * @public
   */
  export type HeTuLuoShuShuExcept5IndexedType<T> = Record<
    HeTuLuoShuShuExcept5,
    T
  >;
  /**
   * 河图洛书数索引类
   *
   * @public
   */
  export type HeTuLuoShuShuIndexedType<T> = Record<HeTuLuoShuShu, T>;
  /**
   * 九星七曜 - 七曜含：辅（辅弼）索引类
   *
   * @public
   */
  export type JiuXingIn8IndexedType<T> = Record<JiuXingIn8, T>;
  /**
   * 九星七曜 - 九星，含左辅、右弼索引类
   *
   * @public
   */
  export type JiuXingIndexedType<T> = Record<JiuXing, T>;
  /**
   * 北斗索引类
   *
   * @public
   */
  export type BeiDouIndexedType<T> = Record<BeiDou, T>;
  /**
   * 伏绝天祸索引类
   *
   * @public
   */
  export type FuJueTianHuoIndexedType<T> = Record<FuJueTianHuo, T>;
  /**
   * 阴阳索引类
   *
   * @public
   */
  export type YinYanIndexedType<T> = Record<YinYan, T>;
  /**
   * 八干四维索引类
   *
   * @public
   */
  export type Gan8Wei4IndexedType<T> = Record<Gan8Wei4, T>;
  /**
   * 二十四山索引类
   *
   * @public
   */
  export type Shan24IndexedType<T> = Record<Shan24, T>;
  /**
   * 二十四天星索引类
   *
   * @public
   */
  export type TianXing24IndexedType<T> = Record<TianXing24, T>;
  /**
   * 六十甲子索引类
   *
   * @public
   */
  export type JiaZi60IndexedType<T> = Record<JiaZi60, T>;
  /**
   * 长生十二宫索引类
   *
   * @public
   */
  export type ChangSheng12IndexedType<T> = Record<ChangSheng12, T>;
  /**
   * 吉凶级别索引类
   *
   * @public
   */
  export type JiXiongIndexedType<T> = Record<JiXiong, T>;
  /**
   * 二十四山双山组合索引类
   *
   * @public
   */
  export type ShuangShanIndexedType<T> = Record<ShuangShan, T>;
  /**
   * 二十四山三山组合索引类
   *
   * @public
   */
  export type SanShanIndexedType<T> = Record<SanShan, T>;
}
