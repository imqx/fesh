declare module '@siloqian/fesh-typings' {
  /**
   * 水形类别
   *
   * @remarks
   * - 潮水局：sjC1, sjC2, sjC3, sjC4;
   * - 横水局：sjH1, sjH2;
   * - 去水局：sjQu;
   * - 聚水局：sjJu;
   * - 无水局：sjWu
   *
   * @public
   */
  export type ShuiShapeSpec =
    | 'sjC1'
    | 'sjC2'
    | 'sjC3'
    | 'sjC4'
    | 'sjH1'
    | 'sjH2'
    | 'sjJu'
    | 'sjQu'
    | 'sjWu';

  /**
   * 水口综合类型定义，分入水口、出水口
   *
   * @typeParam T - 方位等属性类型
   * @public
   */
  export type ShuiInOut<T> = {
    /** 来水 */
    in?: T;
    /** 出水口 */
    out?: T;
  };

  /**
   * 长生位 - 双山十二宫 - 排列
   *
   * @public
   */
  export type ShuangShan12Gong = ChangSheng12IndexedType<ShuangShan>;

  /**
   * 四水局 - 长生十二宫排列
   *
   * @public
   */
  export type TPFZShuangShan12Gong = ShuiJuIndexedType<ShuangShan12Gong>;

  /**
   * 阴阳局下，四水局长生十二宫排列
   *
   * @public
   */
  export type YinYanShuangShan12Gong = YinYanIndexedType<TPFZShuangShan12Gong>;
  /**
   * 通用四局
   *
   * @remarks
   * - XoR辛壬局,
   * - YoB乙丙局,
   * - DoG丁庚局,
   * - GoJ癸甲局
   *
   * @public
   */
  export type ShuiJuGeneric = 'XoR' | 'YoB' | 'DoG' | 'GoJ';
  /**
   * 察水定局类型
   *
   * @public
   */
  export type ShuiKouDingJu = Shan24IndexedType<ShuiJuGeneric>;
}
