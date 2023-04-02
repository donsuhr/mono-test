// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector70IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector70Icon(props: Vector70IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 31 6'}
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
          'M30.122 0H.532A.532.532 0 000 .532v4.665c0 .293.238.532.532.532h29.59a.532.532 0 00.532-.532V.532A.532.532 0 0030.122 0z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector70Icon;
/* prettier-ignore-end */
