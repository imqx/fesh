import { IMenuContext, ISolutionPack } from '@siloqian/fesh-typings';
import Marker from '../../resource/Marker';
import React, { useMemo } from 'react';

export default function useRslMarker(archive: ISolutionPack) {
  const { positions, positionActions } = archive;

  const rslMarker = useMemo(
    () =>
      positions.rslPos ? (
        <Marker lnglat={positions.rslPos.lnglat} type="rsl"></Marker>
      ) : (
        <></>
      ),
    [positions],
  );

  const setRslPos = (mc: IMenuContext, close: () => void) => {
    positionActions.setRslPos({ lnglat: mc.position });
    close();
  };

  return {
    rslMarker,
    setRslPos,
  };
}
