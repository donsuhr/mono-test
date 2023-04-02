// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector75IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector75Icon(props: Vector75IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 10 10'}
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
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M6.895 4.197c-.14-1.375-.952-2.451-2.363-2.451-1.305 0-2.222 1.005-2.416 2.451h4.78zM0 4.886V4.85C0 2.186 1.887 0 4.55 0c2.963 0 4.462 2.328 4.462 5.008 0 .195-.018.39-.035.6H2.134c.229 1.517 1.305 2.364 2.68 2.364 1.041 0 1.782-.388 2.522-1.112l1.252 1.112C7.707 9.03 6.49 9.717 4.78 9.717 2.081 9.717 0 7.76 0 4.886z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector75Icon;
/* prettier-ignore-end */
