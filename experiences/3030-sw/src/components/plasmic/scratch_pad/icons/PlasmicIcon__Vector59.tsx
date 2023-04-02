// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector59IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector59Icon(props: Vector59IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 13 7'}
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
          'M8.99 3.148a7.447 7.447 0 01-4.974 3.42C1.016 7.238 0 6.493 0 6.493S1.24.11 5.319.004c4.08-.106 5.888 1.93 5.888 1.93l1.708 4.07a4.129 4.129 0 01-2.527-.335C9.175 5.046 8.99 3.148 8.99 3.148z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector59Icon;
/* prettier-ignore-end */
