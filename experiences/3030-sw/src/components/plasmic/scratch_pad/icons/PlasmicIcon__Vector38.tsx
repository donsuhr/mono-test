// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector38IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector38Icon(props: Vector38IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 24 34'}
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
          'M5.324 0c-.384 0 4.757 4.992 6.47 5.393.794-.407.09.337 1.098-.69 1.008-1.028 2.075-1.386 2.752-2.761 3.301 1.926 5.595 2.766 4.41 9.17-1.445 7.806 5.04 16.585 2.54 20.121-1.6 1.536-4.198-.535-6.545 0-5.802 1.343-8.922 3.381-13.258 1.75-5.638 0-1.03-25.177-.795-25.488 0 0-2.747-4.574.405-6.141C3.352.854 4.328.4 5.324 0z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector38Icon;
/* prettier-ignore-end */
