// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector68IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector68Icon(props: Vector68IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 15 11'}
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
          'M13.68 0H.533A.532.532 0 000 .532V9.75c0 .294.238.532.532.532H13.68a.532.532 0 00.532-.532V.532A.532.532 0 0013.68 0z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector68Icon;
/* prettier-ignore-end */
