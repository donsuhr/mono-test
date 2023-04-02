// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector53IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector53Icon(props: Vector53IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 24 12'}
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
          'M23.339 0s0 10.41-.655 11.5c-.654 1.09-17.59-4.383-17.59-4.383S1.041 6.415.483 6.585c-.644.229-.564-1.867-.224-2.128.34-.26 4.117-1.393 4.787-.883 1.1.645 2.243 1.214 3.42 1.702l10.825 2.24.494-7.303L23.34 0z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector53Icon;
/* prettier-ignore-end */
