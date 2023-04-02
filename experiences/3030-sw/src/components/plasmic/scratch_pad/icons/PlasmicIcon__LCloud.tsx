// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type LCloudIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function LCloudIcon(props: LCloudIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 29 15'}
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
          'M23.103 9.317a4.457 4.457 0 00-1.84-4.681 4.424 4.424 0 00-4.15-.434v-.294a3.934 3.934 0 00-1.07-2.678 3.91 3.91 0 00-6.727 2.196 4.616 4.616 0 00-1.6-.305A4.697 4.697 0 004.39 4.503 4.726 4.726 0 003.012 7.84c-.81.033-1.576.38-2.137.967a3.156 3.156 0 000 4.363 3.137 3.137 0 002.137.967h25.765a6.046 6.046 0 00-1.792-3.242 6.07 6.07 0 00-3.882-1.578z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default LCloudIcon;
/* prettier-ignore-end */
