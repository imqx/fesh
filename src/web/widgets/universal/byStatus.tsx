import { Chip } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import React, { ReactElement, ReactNode } from 'react';
import Loading from '../../resource/Loading';

export interface IByStatusOptions<R> {
  prefix: string;
  suffix: string;
  textUnset: string;
  textError: string;
  textLoading: string;
  icon: ReactElement;
  generator: (value: R) => ReactElement;
  refresh: () => void;
}

function byStatus<T>(sth: T): ReactNode;

function byStatus<T>(sth: T, options: Partial<IByStatusOptions<T>>): ReactNode;

function byStatus<T>(sthWithStatus: ISthWithStatus<T>): ReactNode;

function byStatus<T>(
  sthWithStatus: ISthWithStatus<T>,
  options: Partial<IByStatusOptions<T>>,
): ReactNode;

function byStatus<T, V>(
  sthMayWithStatus: T extends ISthWithStatus<V> ? T : V,
  opts?: Partial<IByStatusOptions<V>>,
): ReactNode {
  const withStatus =
    typeof sthMayWithStatus === 'object'
      ? (sthMayWithStatus as Object).hasOwnProperty('status') &&
        (sthMayWithStatus as Object).hasOwnProperty('value')
      : false;
  const sthWithStatus: ISthWithStatus<V> = withStatus
    ? (sthMayWithStatus as ISthWithStatus<V>)
    : {
        value: sthMayWithStatus as V,
        status:
          typeof sthMayWithStatus === 'undefined' || sthMayWithStatus === null
            ? 'UNSET'
            : 'DONE',
      };
  const {
    prefix = '',
    suffix = '',
    textError = '加载异常',
    textUnset = '未设置',
    textLoading = '加载中...',
    icon = <InfoOutlinedIcon />,
    generator,
    refresh,
  } = {
    ...opts,
  };
  const ifRefresh = refresh
    ? { onDelete: refresh, deleteIcon: <RotateLeftIcon /> }
    : {};

  switch (sthWithStatus.status) {
    case 'UNSET':
      return (
        <Chip
          variant="outlined"
          style={{ border: 'none' }}
          size="small"
          icon={icon}
          label={`${prefix}${textUnset}${suffix}`}
          {...ifRefresh}
        />
      );
    case 'ERROR':
      return (
        <Chip
          variant="outlined"
          style={{ border: 'none' }}
          size="small"
          icon={icon}
          label={`${prefix}${textError}${suffix}`}
          color="secondary"
          {...ifRefresh}
        />
      );
    case 'DONE':
      return generator ? generator(sthWithStatus.value) : sthWithStatus.value;
    case 'LOADING':
      return (
        <Chip
          variant="outlined"
          style={{ border: 'none' }}
          size="small"
          icon={<Loading />}
          label={`${prefix}${textLoading}${suffix}`}
          color="primary"
        />
      );
    default:
      return <></>;
  }
}

export default byStatus;
