// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type WhiteBgIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function WhiteBgIcon(props: WhiteBgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 33 28'}
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
          'M0 0v27.333h28.333c.445-2.11 1.467-6.933 2-9.333.534-2.4 1.778-6.333 2.334-8h-2V7h-2.334V3.333h-18L7.333 0H0z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default WhiteBgIcon;
/* prettier-ignore-end */
