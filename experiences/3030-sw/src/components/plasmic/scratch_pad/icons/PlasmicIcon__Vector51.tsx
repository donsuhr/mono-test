// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector51IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector51Icon(props: Vector51IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 24 22'}
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
          'M5.037 9.93L0 16.283s11.808 4.383 15.425 5.111c3.617.729 4.872-.09 4.872-.09s3.458-12.798 3.389-14.495c-.07-1.696-.878-6.223-.878-6.223L8.143 0s-2.91 2.128-2.936 4.93c-.026 2.804-.17 5-.17 5z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector51Icon;
/* prettier-ignore-end */
