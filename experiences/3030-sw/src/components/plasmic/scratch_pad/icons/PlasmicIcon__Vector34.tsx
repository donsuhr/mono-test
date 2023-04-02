// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector34IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector34Icon(props: Vector34IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 6 10'}
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
          'M2.66 0s4.46.326 1.862 7.923C3.989 9.464 1.418 9.46 1.418 9.46A6.97 6.97 0 01.026 4.644 6.375 6.375 0 012.66 0z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector34Icon;
/* prettier-ignore-end */
