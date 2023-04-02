// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector69IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector69Icon(props: Vector69IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 15 6'}
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
          'M13.68 0H.533A.532.532 0 000 .532v4.665c0 .293.238.532.532.532H13.68a.532.532 0 00.532-.532V.532A.532.532 0 0013.68 0z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector69Icon;
/* prettier-ignore-end */
