import { Amap, SatelliteLayer } from '@amap/amap-react';
import { IWithSolutionPack } from '@siloqian/fesh-typings';
import React from 'react';
import useRslMarker from '../widgets/markers/useRslMarker';
import useXueMarker from '../widgets/markers/useXueMarker';
import { useLXRelation } from '../widgets/relations/useLXRelation';

import useRightMenu from '../widgets/useRightMenu';

export interface IMapProps extends IWithSolutionPack {
  satelliteMode: boolean;
}

export default function Map(props: IMapProps) {
  const { satelliteMode, archive } = props;

  const { rslMarker, setRslPos } = useRslMarker(archive);
  const { xueMarker, setXuePos } = useXueMarker(archive);
  const { lXRelation } = useLXRelation(archive);

  const { rightMenu, openRightMenu } = useRightMenu({ setRslPos, setXuePos });

  return (
    <Amap
      zoom={15}
      mapStyle="amap://styles/whitesmoke"
      onRightClick={openRightMenu}
    >
      <SatelliteLayer visible={satelliteMode} />
      {rightMenu}
      {rslMarker}
      {xueMarker}
      {lXRelation}
    </Amap>
  );
}
