import { IMenuContext, ISolutionPack } from '@siloqian/fesh-typings';
import Marker from '../../resource/Marker';
import React, { useMemo } from 'react';

export default function useXueMarker(archive: ISolutionPack) {
  const { positions, positionActions } = archive;
  const { xuePos } = positions;

  const xueMarker = useMemo(
    () =>
      xuePos ? <Marker lnglat={xuePos.lnglat} type="xue"></Marker> : <></>,
    [xuePos],
  );

  const setXuePos = (mc: IMenuContext) => {
    positionActions.setXuePos({ lnglat: mc.position });
  };

  return {
    xueMarker,
    setXuePos,
  };
}
