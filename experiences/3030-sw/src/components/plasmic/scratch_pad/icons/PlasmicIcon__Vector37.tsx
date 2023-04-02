// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector37IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector37Icon(props: Vector37IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 8 11'}
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
          'M7.454 1.493l-.651 2.803s1.872 2.14-1.307 4.28C-2.365 13.862.515 4.173.515 4.173L1.928 0'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector37Icon;
/* prettier-ignore-end */
