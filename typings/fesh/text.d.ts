declare module '@siloqian/fesh-typings' {
  /**
   * 需要释义的类型集合
   *
   * @public
   */
  export type TextKeys =
    | TianGan
    | DiZhi
    | WuXing
    | BaGua
    | Shan24
    | Direction
    | ShengXiao
    | LayerNames
    | HeTuLuoShuShu
    | WuXingRelation
    | WangXiangType
    | NaYinWuXing
    | JiaZi60ShengXiao
    | KongWangType
    | BaGuaGuaYaoDesc
    | JiuXingIn8
    | BeiDou
    | FuJueTianHuo
    | YinYan
    | TianXing24
    | ChangSheng12
    | JiXiong
    | BaShaType
    | SanYuan
    | SanYuanJiaoGouType
    | FanSanGuaType
    | ShuiJuGeneric
    | ZiBaiType;

  /**
   * 释义类型或数组对象
   *
   * @public
   */
  export type TextKeyType = TextKeys | Array<TextKeys>;
  /**
   * 释义类型组合对象，由`-`符号相连的字符串
   */
  export type TextUnoinType = JiaZi60 | ShuangShan | SanShan;

  /**
   * 释义输出相关格式参数
   *
   * @public
   */
  export interface TextOptions {
    /**
     * 格式化单个对象
     *
     * @param val - 对象被释义后的字符串
     * @returns 处理后呈现的字符串
     */
    formatter(val: string): string;
    /**
     * 结果后处理整个释义后串
     *
     * @param res - 释义后结果返回字符串
     * @returns 处理后呈现的字符串
     */
    onEndFormatter(res: string): string;
    /** 被释义对象为数据时的分隔符 */
    separator: string;
    /** 未查找到释义时返回字符，`#`为通配符，表示原有keys值 */
    notFoundTemplate: string;
  }
}
