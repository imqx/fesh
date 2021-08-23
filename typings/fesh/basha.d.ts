declare module '@siloqian/fesh-typings' {
  /**
   * 八煞类型
   *
   * @remarks
   * 坐山八煞、先天八煞、后天八煞
   *
   * @public
   */
  export type BaShaType = 'bs_ZuoShan' | 'bs_XianTian' | 'bs_HouTian';
  /**
   * 八煞类型索引类
   *
   * @public
   */
  export type BaShaTypeIndexedType<T> = Record<BaShaType, T>;
}
