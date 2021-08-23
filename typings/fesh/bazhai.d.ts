declare module '@siloqian/fesh-typings' {
  /**
   * 八宅卦，八宅方位类型，即八卦宫位 - 八宅风水
   *
   * @public
   */
  export type BaZhaiType = BaGua;

  /**
   * 八宅定位，福绝天祸六延五生
   *
   * @public
   */
  export type BaZhaiWei = FuJueTianHuo;

  /**
   * 九星翻卦掌推伏绝天祸位排列类型（八宅风水）
   *
   * @remarks
   * 伏绝天祸，对应八卦
   *
   * @beta
   */
  export type TuiFJTHBaGuaZhang = FuJueTianHuoIndexedType<BaGua>;
}
