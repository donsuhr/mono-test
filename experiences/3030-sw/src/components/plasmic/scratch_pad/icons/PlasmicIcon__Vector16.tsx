// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector16IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector16Icon(props: Vector16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 3 6'}
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
          'M2.24.671S1.239-.769.434.57c-.806 1.338-.395 3.733.48 4.266a2.528 2.528 0 002.037.096L2.24.666'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector16Icon;
/* prettier-ignore-end */
