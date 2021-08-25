import React from 'react';
import { Fab, makeStyles } from '@material-ui/core';
import withHide from '../wrappers/withHide';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export interface IZenControlsProps {
  exitClick: React.MouseEventHandler<HTMLButtonElement>;
}

const useStyles = makeStyles((theme) => ({
  exitButton: {
    position: 'fixed',
    top: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 1000,
  },
}));

export default withHide(function ZenControls(props: IZenControlsProps) {
  const { exitClick } = props;
  const classes = useStyles();

  return (
    <Fab onClick={exitClick} color="default" className={classes.exitButton}>
      <ExitToAppIcon />
    </Fab>
  );
});
