// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Rectangle308IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Rectangle308Icon(props: Rectangle308IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 94 467'}
      height={'1em'}
      width={'1em'}
      style={{
        stroke: 'currentcolor',

        ...(style || {}),
      }}
      className={classNames('plasmic-default__svg', className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={'M.5.5h93v466H.5V.5z'} stroke={'currentColor'}></path>
    </svg>
  );
}

export default Rectangle308Icon;
/* prettier-ignore-end */
