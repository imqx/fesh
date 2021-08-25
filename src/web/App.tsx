import React, { useState, useMemo, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { MapViewMode } from '@siloqian/fesh-typings';

import Header from './components/Header';
import InfoPad from './components/InfoPad';
import ZenControls from './components/ZenControls';
import { useSolution } from './hooks/useSolution';
import Map from './components/Map';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
    padding: 0,
    margin: 0,
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
  },
}));

export default function App() {
  const classes = useStyles();

  const archive = useSolution();

  const [satelliteMode, setSatelliteMode] = useState(false);

  const [viewMode, setViewMode] = useState<MapViewMode>('normal');
  const zenMode = useMemo(() => viewMode === 'zen', [viewMode]);
  const exitZenMode = useCallback(() => setViewMode('normal'), []);

  return (
    <>
      <Header
        hide={zenMode}
        satelliteMode={satelliteMode}
        setSatelliteMode={setSatelliteMode}
        setViewMode={setViewMode}
      ></Header>
      <ZenControls hide={!zenMode} exitClick={exitZenMode} />
      <InfoPad hide={zenMode} archive={archive} callbacks={{}}></InfoPad>
      <div className={classes.root}>
        <Map archive={archive} satelliteMode={satelliteMode} />
      </div>
    </>
  );
}
