// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type LiveIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function LiveIcon(props: LiveIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 33 18'}
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
          'M0 0v17.24h10.925v-2.544H2.657V2.543h27.655v12.153H14.468L11.81 17.24h21.16V0H0z'
        }
        fill={'currentColor'}
      ></path>

      <path
        d={
          'M22.594 11.71V5.26h4.53v1.32h-2.96v1.212h2.8V9.04h-2.8v1.339h3.132v1.33h-4.702zm-16.461 0V5.26H7.77v5.091h2.609v1.357H6.133zm5.643 0h1.638V5.26h-1.638v6.449zm7.006 0h-1.628l-2.552-6.45h1.828l1.561 4.572h.038l1.552-4.572h1.8l-2.6 6.449z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default LiveIcon;
/* prettier-ignore-end */
