// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector24IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector24Icon(props: Vector24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 11 7'}
      height={'1em'}
      width={'1em'}
      style={{
        fill: 'currentcolor',

        ...(style || {}),
      }}
      className={classNames('plasmic-default__svg', className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          'M0 .06a18.357 18.357 0 0110.133 2.103S4.8 7.513 2.715 6.7C.629 5.887 0 .06 0 .06z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector24Icon;
/* prettier-ignore-end */
