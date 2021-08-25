import { IMenuContext, ISolutionPack } from '@siloqian/fesh-typings';
import Marker from '../../resource/Marker';
import React, { useMemo } from 'react';

export default function useXueMarker(archive: ISolutionPack) {
  const { positions, positionActions } = archive;

  const xueMarker = useMemo(
    () =>
      positions.xuePos ? (
        <Marker lnglat={positions.xuePos.lnglat} type="xue"></Marker>
      ) : (
        <></>
      ),
    [positions],
  );

  const setXuePos = (mc: IMenuContext, close: () => void) => {
    positionActions.setXuePos({ lnglat: mc.position });
    close();
  };

  return {
    xueMarker,
    setXuePos,
  };
}
