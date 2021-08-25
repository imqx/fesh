import React from 'react';
import BaseCard from './BaseCard';
import { IWithSolutionPack } from '@siloqian/fesh-typings';

import ApartmentIcon from '@material-ui/icons/Apartment';
import useLnglat from '../../widgets/universal/useLnglat';
import byStatus from '../../widgets/universal/byStatus';
import { Typography } from '@material-ui/core';

export interface IXueCard extends IWithSolutionPack {}

export default function XueCard(props: IXueCard) {
  const { positions, magDec } = props.archive;
  const lnglat = useLnglat(positions.xuePos?.lnglat);

  return (
    <BaseCard avatar={<ApartmentIcon />} title="穴位坐山" subheader={lnglat}>
      {byStatus(magDec, {
        prefix: '磁偏角：',
        generator: (d: number) => (
          <Typography variant="body1">磁偏角：{d.toFixed(2)}°</Typography>
        ),
      })}
    </BaseCard>
  );
}
