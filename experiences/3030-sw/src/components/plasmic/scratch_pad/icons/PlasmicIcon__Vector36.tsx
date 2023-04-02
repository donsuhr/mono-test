// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector36IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector36Icon(props: Vector36IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 24 28'}
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
          'M.322 1.339c1.22-3.13 4.629-.097 6.208 2.23 1.578 2.328 4.858 9.7 7.418 12.429 2.56 2.728 9.125 6.655 9.125 6.655s-1.92 5.35-5.434 4.408c-3.515-.941-7.317-4.927-9.91-7.859C5.139 16.27-1.533 6.068.323 1.34z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector36Icon;
/* prettier-ignore-end */
