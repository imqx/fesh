import React, { ComponentType } from 'react';

export interface IWithHidableProps {
  hide: boolean;
}

type Remaining<T> = Pick<T & IWithHidableProps, keyof T>;

/**
 *
 * @param FuncComp
 * @returns
 */
export default function <P extends {}>(
  FuncComp: ComponentType<P>,
): ComponentType<P & IWithHidableProps> {
  return function ({ hide, ...props }: P & IWithHidableProps) {
    return (
      <div style={{ display: hide ? 'none' : 'block' }}>
        <FuncComp {...(props as Remaining<P>)}></FuncComp>
      </div>
    );
  };
}
