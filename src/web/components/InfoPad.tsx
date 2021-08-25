import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
// import CallSplitIcon from '@material-ui/icons/CallSplit';
// import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import withHide from '../wrappers/withHide';
import { IWithSolutionPack } from '@siloqian/fesh-typings';
import RslCard from './cards/RslCard';
import XueCard from './cards/xueCard';

export interface IInfoPadCallbacks {}

export interface IInfoPadProps extends IWithSolutionPack {
  callbacks: Partial<IInfoPadCallbacks>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: 1000,
    left: theme.spacing(0),
    top: theme.spacing(3),
    width: 240,
    marginTop: 54,
  },
}));

export default withHide(function InfoPad(props: IInfoPadProps) {
  const classes = useStyles();
  const { archive } = props;

  return (
    <div className={classes.root}>
      <RslCard archive={archive} />
      <XueCard archive={archive} />
    </div>
  );
});
