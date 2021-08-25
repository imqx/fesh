import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Tooltip,
  Card,
} from '@material-ui/core';
import Logo from '../resource/Logo';

import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import AllOutIcon from '@material-ui/icons/AllOut';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SatelliteIcon from '@material-ui/icons/Satellite';
import hidable from '../wrappers/withHide';
import { MapViewMode } from '@siloqian/fesh-typings';

export interface IHeaderProps {
  satelliteMode: boolean;
  setSatelliteMode: React.Dispatch<React.SetStateAction<boolean>>;
  setViewMode: React.Dispatch<React.SetStateAction<MapViewMode>>;
}

export default hidable(function ({
  satelliteMode,
  setSatelliteMode,
  setViewMode,
}: IHeaderProps) {
  const classes = makeStyles((theme) => ({
    appBar: {
      zIndex: 1000,
      border: 'none',
    },
    toolbar: {
      paddingLeft: theme.spacing(2),
    },
    title: {
      marginRight: theme.spacing(5),
    },
    logo: {
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      width: 78,
      marginRight: 32,
      backgroundColor: '#fff',
    },
    flex: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
    },
    menuButton: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
  }))();

  const satelliteModeChange = () => {
    setSatelliteMode((mode) => !mode);
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      variant="outlined"
      className={classes.appBar}
    >
      <Toolbar variant="dense" className={classes.toolbar}>
        <Card variant="outlined" className={classes.logo}>
          <Logo />
        </Card>
        <div className={classes.flex}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<DashboardIcon />}
            className={classes.menuButton}
          >
            方案
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AllOutIcon />}
            className={classes.menuButton}
          >
            罗盘
          </Button>
        </div>
        <Tooltip title={satelliteMode ? '普通' : '卫星'}>
          <IconButton
            color={satelliteMode ? 'inherit' : 'secondary'}
            onClick={satelliteModeChange}
          >
            <SatelliteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="沉浸模式">
          <IconButton color="inherit" onClick={() => setViewMode('zen')}>
            <CenterFocusStrongIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
});
