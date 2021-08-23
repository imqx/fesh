declare module '@siloqian/fesh-typings' {
  /**
   * 断语组类型
   *
   * @public
   */
  export type JueDuanType<T extends IndexTypeLike> = Record<T, string>;

  /**
   * 断语组类型
   *
   * @public
   */
  export type JueDuanArrayType<T extends Array<any> | IndexTypeLike> = [
    T,
    string,
  ][];
  /**
   * 断语表类型
   *
   * @public
   */
  export type JueDuanType2D<
    T extends IndexTypeLike,
    R extends IndexTypeLike,
  > = Record<T, JueDuanType<R>>;
}
