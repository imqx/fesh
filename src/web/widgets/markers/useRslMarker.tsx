import { IMenuContext, ISolutionPack } from '@siloqian/fesh-typings';
import Marker from '../../resource/Marker';
import React, { useMemo } from 'react';

export default function useRslMarker(archive: ISolutionPack) {
  const { positions, positionActions } = archive;
  const { rslPos } = positions;

  const rslMarker = useMemo(
    () =>
      rslPos ? <Marker lnglat={rslPos.lnglat} type="rsl"></Marker> : <></>,
    [rslPos],
  );

  const setRslPos = (mc: IMenuContext) => {
    positionActions.setRslPos({ lnglat: mc.position });
  };

  return {
    rslMarker,
    setRslPos,
  };
}
