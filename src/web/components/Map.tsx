import { Amap, SatelliteLayer } from '@amap/amap-react';
import { ISolutionPack } from '@siloqian/fesh-typings';
import React from 'react';
import useRslMarker from '../widgets/markers/useRslMarker';
import useXueMarker from '../widgets/markers/useXueMarker';

import useRightMenu from '../widgets/useRightMenu';

export interface IMapProps {
  satelliteMode: boolean;
  archive: ISolutionPack;
}

export default function Map(props: IMapProps) {
  const { satelliteMode, archive } = props;

  const { rslMarker, setRslPos } = useRslMarker(archive);

  const { xueMarker, setXuePos } = useXueMarker(archive);

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
    </Amap>
  );
}
