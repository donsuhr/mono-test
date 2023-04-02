// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector41IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector41Icon(props: Vector41IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 19 32'}
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
          'M8.63 5.615c.234-.262 5.072-6.42 7.808-5.526 2.736.893 1.152 7.816 1.152 7.816s-5.686 4.28-7.526 8.292C8.432 19.74 6.14 30.765 4.971 31.12c-1.168.353-5.141-.172-4.965-3.676.176-3.504 2.522-12.487 4.656-16.317a29.299 29.299 0 013.968-5.51z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector41Icon;
/* prettier-ignore-end */
