import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import MapIcon from '@material-ui/icons/Map';
// import CallSplitIcon from '@material-ui/icons/CallSplit';
import ApartmentIcon from '@material-ui/icons/Apartment';
// import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import withHide from '../wrappers/withHide';
import { ISolutionPack } from '@siloqian/fesh-typings';
import byStatus from '../hooks/byStatus';

export interface IInfoPadCallbacks {
  xunlongEdit(): void;
  dianxueEdit(): void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: 1000,
    left: theme.spacing(2),
    top: theme.spacing(3),
    width: 240,
    marginTop: 54,
  },
  pad: {
    marginBottom: theme.spacing(2),
  },
}));

export default withHide(function InfoPad(props: {
  archive: ISolutionPack;
  callbacks: Partial<IInfoPadCallbacks>;
}) {
  const classes = useStyles();

  const { positions, magDec } = props.archive;

  const lngLatText = function (lnglat: ILngLat | undefined) {
    return byStatus(lnglat, {
      generator(lnglat) {
        return (
          <Typography variant="caption">
            {`${lnglat?.lng}, ${lnglat?.lat}`}
          </Typography>
        );
      },
    });
  };

  return (
    <div className={classes.root}>
      <Card variant="outlined" className={classes.pad}>
        <CardHeader
          avatar={<MapIcon />}
          title="入首龙"
          subheader={lngLatText(positions.rslPos?.lnglat)}
        />
        <CardContent>
          <Typography></Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" className={classes.pad}>
        <CardHeader
          avatar={<ApartmentIcon />}
          title="穴位坐山"
          subheader={lngLatText(positions.xuePos?.lnglat)}
        />
        <CardContent>
          {byStatus(magDec, {
            prefix: '磁偏角：',
            generator: (d: number) => (
              <Typography variant="body1">磁偏角：{d.toFixed(2)}°</Typography>
            ),
          })}
        </CardContent>
      </Card>
    </div>
  );
});
