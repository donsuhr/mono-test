// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector40IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector40Icon(props: Vector40IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 16 11'}
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
          'M15.325 7.78c.496-.305-.57-8.26-6.31-7.757C5.282.349 6.68 3.174 6.68 3.174S4.743.788 3.06 1.826a2.337 2.337 0 00-1.192 1.46 2.35 2.35 0 00.268 1.868S.071 5.11.002 6.55c-.07 1.439 1.536 3.986 7.701 4.28 6.166.294 7.622-3.05 7.622-3.05z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector40Icon;
/* prettier-ignore-end */
