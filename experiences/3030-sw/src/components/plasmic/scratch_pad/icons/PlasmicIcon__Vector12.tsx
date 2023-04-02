// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector12IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector12Icon(props: Vector12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 19 19'}
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
          'M2.126 14.987a9.157 9.157 0 01-.97-10.32C3.694-.283 9.065-.133 10.537.08c2.544.33 10.347 1.702 7.419 12.566-2.928 10.863-15.83 2.34-15.83 2.34z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector12Icon;
/* prettier-ignore-end */
