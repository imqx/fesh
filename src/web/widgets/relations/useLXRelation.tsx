import { Polyline } from '@amap/amap-react';
import { ISolutionPack } from '@siloqian/fesh-typings';
import React, { useMemo } from 'react';

export function useLXRelation(archive: ISolutionPack) {
  const { rslPos, xuePos } = archive.positions;

  const lXRelation = useMemo(() => {
    if (typeof rslPos === 'undefined' || typeof xuePos === 'undefined') {
      return <></>;
    }
    return (
      <Polyline
        path={[
          [xuePos.lnglat.lng, xuePos.lnglat.lat],
          [rslPos.lnglat.lng, rslPos.lnglat.lat],
        ]}
      />
    );
  }, [rslPos, xuePos]);

  return {
    lXRelation,
  };
}
