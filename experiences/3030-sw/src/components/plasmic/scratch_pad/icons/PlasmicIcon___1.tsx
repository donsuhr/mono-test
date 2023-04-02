// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type _1IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function _1Icon(props: _1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 52 70'}
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
          'M51.034 34.833C51.034 12.344 40.974 0 25.517 0 13.664 0 5.077 7.145 1.647 20.466.569 24.655 0 29.454 0 34.833c0 22.489 9.937 34.833 25.517 34.833 15.458 0 25.517-12.344 25.517-34.833zm-14.721 0c0 12.833-3.803 21.633-10.796 21.633-6.87 0-10.795-8.8-10.795-21.633 0-12.833 3.925-21.878 10.795-21.878S36.313 22 36.313 34.833z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default _1Icon;
/* prettier-ignore-end */
