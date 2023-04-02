// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector63IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector63Icon(props: Vector63IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 8 8'}
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
          'M7.792 7.165a.628.628 0 01-.622.627H2.26A2.266 2.266 0 010 5.532V.622a.622.622 0 111.245 0v4.91a1.016 1.016 0 001.016 1.01h4.91a.628.628 0 01.621.623z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector63Icon;
/* prettier-ignore-end */
