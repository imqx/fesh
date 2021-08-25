declare module '@siloqian/fesh-typings' {
  // base

  interface IDirection {
    alpha: number;
    direction: Shan24;
  }

  // enntity
  interface IRuShouLong extends IWithLngLat {}
  interface IXue extends IWithLngLat {}
  interface IRuShuiKou extends IWithLngLat {}
  interface IChuShuiKou extends IWithLngLat {}
  interface ISha extends IWithLngLat {}

  // solution
  interface IPositionsPack {
    rslPos: IWithLngLat;
    xuePos: IWithLngLat;
    shasPos: IWithLngLatRecord;
    rskPos: IWithLngLat;
    cskPos: IWithLngLat;
  }
  interface IPositionActionsPack {
    setRslPos: UpdateAction<IWithLngLat>;
    setXuePos: UpdateAction<IWithLngLat>;
    setShasPos: UpdateAction<IWithLngLatRecord>;
    setRskPos: UpdateAction<IWithLngLat>;
    setCskPos: UpdateAction<IWithLngLat>;
  }
  interface IMagDecPack extends ISthWithStatus<number> {}

  interface ISolutionInitialOption {}

  interface ISolutionPack {
    positions: Partial<IPositionsPack>;
    positionActions: IPositionActionsPack;
    magDec: IMagDecPack;
  }
  interface IWithSolutionPack {
    archive: ISolutionPack;
  }

  // web
  type MapViewMode = 'normal' | 'zen';
  interface IMenuContext {
    position: LngLat;
    open: boolean;
    clientX: number;
    clientY: number;
  }
}
