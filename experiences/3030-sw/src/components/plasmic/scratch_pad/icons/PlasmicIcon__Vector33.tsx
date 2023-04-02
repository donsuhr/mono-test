// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector33IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector33Icon(props: Vector33IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 6 6'}
      height={'1em'}
      width={'1em'}
      style={{
        stroke: 'currentcolor',

        ...(style || {}),
      }}
      className={classNames('plasmic-default__svg', className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={'M1 4.606A4.575 4.575 0 004.152 3.14 3.345 3.345 0 004.867 1'}
        stroke={'currentColor'}
        strokeWidth={'2'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      ></path>
    </svg>
  );
}

export default Vector33Icon;
/* prettier-ignore-end */
