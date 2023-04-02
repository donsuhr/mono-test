// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector14IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector14Icon(props: Vector14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 28 41'}
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
          'M11.253 0c-.48 0-4.224 8.608 3.03 9.43 5.951.671 5.333-6.113 4.927-7.755 4.15 2.41 5.995 4.864 5.142 12.976-.982 9.365 3.322 23.573 3.322 23.573-2.048-.683-5.792.533-8.741 1.232C12.805 40.869 8.8 41.141 4 40.086c-.374-.08-2.032-6.785-2.032-6.785s.357 6.347.08 6.256c-.278-.09-.491-.17-.736-.261-3.531-17.947 1.152-29.52 1.445-29.91 0 0-3.2-5.285.736-7.253C6.197.784 11.253 0 11.253 0z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector14Icon;
/* prettier-ignore-end */
