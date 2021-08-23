declare module '@siloqian/fesh-typings' {
  /**
   * 子午斜流类型
   *
   * @remarks
   * 十二地支宫煞位
   *
   * @public
   */
  export type ZiWuShaType = DiZhi;

  /**
   * 子午斜流，地盘正针九星翻卦掌推起子位
   *
   * @public
   */
  export type DPZZTypeFromInZWXL = DiZhi;
  /**
   * 子午斜流，推十二地支掌排列
   *
   * @public
   */
  export type Tui12DiZhiZhang = DiZhiIndexedType<DPZZTypeFromInZWXL>;
}
