// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type BlueBgIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function BlueBgIcon(props: BlueBgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 94 98'}
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
          'M49.36.056C70.01-1.08 62.666 15.155 83.296 33.811c16.368 14.81 19.339 68.624-44.358 63.024C-24.758 91.235-2.4 2.899 49.36.056z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default BlueBgIcon;
/* prettier-ignore-end */
