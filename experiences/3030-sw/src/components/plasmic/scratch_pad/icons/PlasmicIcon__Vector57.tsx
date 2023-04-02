// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector57IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector57Icon(props: Vector57IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 6 6'}
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
          'M1.049 2.447s-2.25 3.191-.16 3.319C3.687 5.93 5.453 0 5.453 0s-3.042 4.5-4.17 3.771c-.473-.308-.234-1.324-.234-1.324z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector57Icon;
/* prettier-ignore-end */
