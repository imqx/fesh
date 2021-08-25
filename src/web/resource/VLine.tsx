import { Divider } from '@material-ui/core';
import React from 'react';

export function VLine({ left, right }: { left?: number; right?: number }) {
  return (
    <Divider
      orientation="vertical"
      flexItem
      style={{
        marginLeft: typeof left === 'undefined' ? 20 : left,
        marginRight: typeof right === 'undefined' ? 20 : right,
      }}
    ></Divider>
  );
}
