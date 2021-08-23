declare module '@siloqian/fesh-typings' {
  /**
   * 紫白色值
   *
   * @remarks
   * - Bai白,
   * - Hei黑,
   * - Bee碧,
   * - Luv绿,
   * - Hng黄,
   * - Chi赤,
   * - Zii紫
   *
   * @public
   */
  export type ZiBaiType = 'Bai' | 'Hei' | 'Bee' | 'Luv' | 'Hng' | 'Chi' | 'Zii';

  /**
   * 九星翻挂掌排列类型
   *
   * @remarks
   * 九星八位，对应八卦
   *
   * @public
   */
  export type JiuXingFanGuaZhang = JiuXingIn8IndexedType<BaGua>;
}
