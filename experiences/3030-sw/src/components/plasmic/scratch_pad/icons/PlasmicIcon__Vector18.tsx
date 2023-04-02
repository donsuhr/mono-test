// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector18IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector18Icon(props: Vector18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 9 9'}
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
          'M.043 3.622C.315 1.388 2.251.348 4.347.044c2.939-.427 4.315 2.368 4.037 4.602C8.107 6.881 5.04 8.316 2.94 8.06.838 7.804-.234 5.857.043 3.622z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector18Icon;
/* prettier-ignore-end */
