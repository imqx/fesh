import { Card, CardContent, CardHeader, makeStyles } from '@material-ui/core';
import React, { ReactNode } from 'react';

export interface IBaseCard {
  avatar: ReactNode;
  title: ReactNode | string;
  subheader: ReactNode;
  children: ReactNode;
}

const useStyles = makeStyles((theme) => ({
  pad: {
    marginBottom: theme.spacing(2),
  },
}));

export default function BaseCard(props: Partial<IBaseCard>) {
  const { avatar, title, subheader, children } = props;
  const classes = useStyles();

  return (
    <Card square variant="outlined" className={classes.pad}>
      <CardHeader {...{ avatar, title, subheader }} />
      <CardContent>{children}</CardContent>
    </Card>
  );
}
