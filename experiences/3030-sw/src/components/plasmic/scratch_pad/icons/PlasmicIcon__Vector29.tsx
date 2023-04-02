// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector29IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector29Icon(props: Vector29IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 10 3'}
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
          'M5.76.006s.347.038-1.232.038S.347.006.347.006C.347-.149 0 2.708 0 2.708h9.067S9.547-.085 5.76.006z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector29Icon;
/* prettier-ignore-end */
