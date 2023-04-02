// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type LiveIconIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function LiveIconIcon(props: LiveIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 39 21'}
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
          'M.184.233V20.07h12.599v-2.927H3.248V3.16h31.893v13.983H16.868l-3.064 2.927h24.4V.233H.185z'
        }
        fill={'currentColor'}
      ></path>

      <path
        d={
          'M26.239 13.707v-7.42h5.225v1.52h-3.413V9.2h3.227v1.435H28.05v1.541h3.611v1.53H26.24zm-18.982 0v-7.42h1.888v5.858h3.008v1.562H7.257zm6.508 0h1.888v-7.42h-1.888v7.42zm8.078 0h-1.877l-2.942-7.42h2.108l1.8 5.261h.044l1.79-5.26h2.074l-2.997 7.419z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default LiveIconIcon;
/* prettier-ignore-end */
