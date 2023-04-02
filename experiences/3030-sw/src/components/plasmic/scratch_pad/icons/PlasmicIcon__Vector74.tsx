// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector74IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector74Icon(props: Vector74IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 8 13'}
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
        d={'M0 7.6L5.25 0v5.32H8l-5 7.347V7.6H0z'}
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector74Icon;
/* prettier-ignore-end */
