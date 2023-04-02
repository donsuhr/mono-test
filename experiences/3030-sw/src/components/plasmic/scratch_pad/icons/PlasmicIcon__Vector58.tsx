// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector58IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector58Icon(props: Vector58IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 3 9'}
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
          'M2.646 4.51s.292 3.98-1.01 3.905C-.398 8.292.038 0 .038 0S.57 5.319 1.634 5.394a.899.899 0 001.01-.883z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector58Icon;
/* prettier-ignore-end */
