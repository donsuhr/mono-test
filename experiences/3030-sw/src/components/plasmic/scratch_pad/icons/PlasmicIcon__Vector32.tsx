// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector32IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector32Icon(props: Vector32IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 43 35'}
      height={'1em'}
      width={'1em'}
      style={{
        stroke: 'currentcolor',

        ...(style || {}),
      }}
      className={classNames('plasmic-default__svg', className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          'M1 4.802s2.71-3.413 5.493-3.793C9.277.629 14.771 12.645 21.8 19.488c8.475 8.239 12.523 8.693 12.523 8.693s.053 1.814 2.874 4.082c2.822 2.269 3.915 1.498 3.915 1.498'
        }
        stroke={'currentColor'}
        strokeWidth={'2'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      ></path>
    </svg>
  );
}

export default Vector32Icon;
/* prettier-ignore-end */
