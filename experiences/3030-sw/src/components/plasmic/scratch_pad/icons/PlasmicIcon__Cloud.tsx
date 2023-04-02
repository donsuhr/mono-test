// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type CloudIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function CloudIcon(props: CloudIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 23 12'}
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
          'M4.443 7.326a3.38 3.38 0 01-.091-.77 3.498 3.498 0 011.017-2.47 3.477 3.477 0 012.46-1.024c.45.002.895.09 1.312.257v-.225A3.082 3.082 0 019.967.976a3.063 3.063 0 015.286 1.738 3.653 3.653 0 013.381.427 3.672 3.672 0 011.569 3.035c.653 0 1.28.26 1.742.724a2.476 2.476 0 010 3.495 2.46 2.46 0 01-1.742.724H0a4.658 4.658 0 011.556-2.678 4.632 4.632 0 012.887-1.104v-.01z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default CloudIcon;
/* prettier-ignore-end */
