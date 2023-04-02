// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector65IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector65Icon(props: Vector65IconProps) {
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
          'M0 .623a.622.622 0 00.622.622h4.91a1.016 1.016 0 011.01 1.016v4.91a.622.622 0 001.245 0V2.26A2.255 2.255 0 005.532 0H.638A.622.622 0 000 .622z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector65Icon;
/* prettier-ignore-end */
