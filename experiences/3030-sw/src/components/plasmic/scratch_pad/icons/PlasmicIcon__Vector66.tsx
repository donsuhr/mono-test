// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector66IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector66Icon(props: Vector66IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 8 8'}
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
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M7.735.622v4.91a2.26 2.26 0 01-2.256 2.26H.57a.628.628 0 010-1.25h4.91a1.01 1.01 0 001.011-1.01V.622a.622.622 0 011.245 0z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector66Icon;
/* prettier-ignore-end */
