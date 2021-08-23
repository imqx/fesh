declare module '@siloqian/fesh-typings' {
  /**
   * 空亡，用作罗盘空位
   *
   * @public
   */
  export type KongWangType = 'NN';
  /**
   * 坐山兼向分金类型
   *
   * @public
   */
  export interface ZuoShanFenJinAssets {
    /** 坐山 */
    zuoShan: Shan24;
    /** 兼位 */
    jianWei: Shan24;
    /** 分金类型 */
    fenjin: DPZZ120FJType;
  }
}
