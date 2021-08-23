declare module '@siloqian/fesh-typings' {
  /**
   * 五行生克关系类型
   *
   * @remarks
   * - DaL - 当令者旺
   * - SaW - 生我者相
   * - WaS - 我生者休
   * - WaK - 我克者囚
   * - KaW - 克我者死
   *
   * @public
   */
  export type WuXingRelation = 'DaL' | 'SaW' | 'WaS' | 'WaK' | 'KaW';
  /**
   * {@inheritDoc WuXingRelation}
   *
   * @public
   */
  export type WuXingShengKeType = WuXingIndexedType<WuXingRelation>;

  /**
   * 旺相类型
   *
   * @remarks
   * - Wan - 旺
   * - Xan - 相
   * - Xiu - 休
   * - Qiu - 囚
   * - Sil - 死
   *
   * @public
   */
  export type WangXiangType = 'Wan' | 'Xan' | 'Xiu' | 'Qiu' | 'Sil';

  /**
   * 五行生克旺相关系类型
   *
   * @public
   */
  export interface WuXingShengKeWangXiangAssets {
    /** 当前五行 */
    current: WuXing;
    /** 关系五行 */
    cover: WuXing;
    /** 生克关系 */
    shengKe: WuXingRelation;
    /** 旺相 */
    wangXiang: WangXiangType;
  }
}
