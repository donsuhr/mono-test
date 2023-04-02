// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector43IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector43Icon(props: Vector43IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 9 6'}
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
        d={'M7.917 1C7.63 2.22 6.744 3.236 5.224 3.916A7.923 7.923 0 011 4.23'}
        stroke={'currentColor'}
        strokeWidth={'2'}
        strokeMiterlimit={'10'}
        strokeLinecap={'round'}
      ></path>
    </svg>
  );
}

export default Vector43Icon;
/* prettier-ignore-end */
