import { IWithDirection } from '@siloqian/fesh-typings';
import { $t } from '../../../index';
import React from 'react';
import BaseBoard from './BaseBoard';
import { Avatar, makeStyles, Typography } from '@material-ui/core';

export interface IRslDirectionBoardProps extends IWithDirection {}

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    fontSize: theme.typography.body2.fontSize,
    backgroundColor: theme.palette.info.main,
  },
  typography: {
    color: theme.palette.grey[50],
  },
}));

export default function RslDirectionBoard(props: IRslDirectionBoardProps) {
  const classes = useStyles();
  const { alpha, direction } = props;
  const $direction = $t(direction);

  return (
    <BaseBoard>
      <Avatar className={classes.avatar}>{$direction}</Avatar>
      <Typography variant="body2" className={classes.typography}>
        龙入首（{alpha}°）
      </Typography>
    </BaseBoard>
  );
}
