// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector62IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector62Icon(props: Vector62IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 49 81'}
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
          'M47.536 0H.532A.532.532 0 000 .532v79.334c0 .293.238.531.532.531h47.004a.532.532 0 00.532-.532V.532A.532.532 0 0047.536 0z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector62Icon;
/* prettier-ignore-end */
