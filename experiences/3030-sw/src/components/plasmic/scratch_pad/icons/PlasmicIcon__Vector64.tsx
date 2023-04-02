// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector64IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector64Icon(props: Vector64IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 8 8'}
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
          'M7.808.576a.601.601 0 01-.622.575h-4.91a.973.973 0 00-1.031.93v4.517a.622.622 0 01-1.245 0V2.082A2.175 2.175 0 012.255.002h4.91a.596.596 0 01.643.574z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector64Icon;
/* prettier-ignore-end */
