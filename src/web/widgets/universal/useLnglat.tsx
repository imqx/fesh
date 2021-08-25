import { Typography } from '@material-ui/core';
import React, { useMemo } from 'react';
import byStatus from './byStatus';

export default function useLnglat(lnglat?: ILngLat) {
  return useMemo(() => {
    return byStatus(lnglat, {
      generator(lnglat) {
        return (
          <Typography variant="caption">
            {`${lnglat?.lng}, ${lnglat?.lat}`}
          </Typography>
        );
      },
    });
  }, [lnglat]);
}
