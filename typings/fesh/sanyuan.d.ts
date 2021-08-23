declare module '@siloqian/fesh-typings' {
  /**
   * 三元：天元龙、地元龙、人元龙
   *
   * @public
   */
  export type SanYuan = 'Tin' | 'Dee' | 'Ren';
  /**
   * 天地人三元对
   *
   * @public
   */
  export type SanYuanPair = [SanYuan, SanYuan];
  /**
   * 三元阴阳交媾类型：正交、反交、混合、颠倒，未交媾
   *
   * @public
   */
  export type SanYuanJiaoGouType = 'ZhJo' | 'FnJo' | 'HnHe' | 'DiDo';
  /**
   * 犯三卦类型：向上犯三卦（大凶）、坐上犯三卦（次凶）
   *
   * @public
   */
  export type FanSanGuaType = 'fsg_Xng' | 'fsg_Zuo';
}
