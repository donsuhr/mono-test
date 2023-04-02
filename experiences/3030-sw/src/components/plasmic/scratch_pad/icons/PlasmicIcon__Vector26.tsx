// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector26IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector26Icon(props: Vector26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 11 7'}
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
          'M4.341 1.444s1.51.3 3.248.632a3.464 3.464 0 002.363-.62s.688 1.07.17 1.465a7.563 7.563 0 01-1.226.68s.485 1.722-1.781 2.675c-2.267.952-4.016-.803-4.763-1.236A18.684 18.684 0 010 2.97L2.47 0l1.87 1.444z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector26Icon;
/* prettier-ignore-end */
