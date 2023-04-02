// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector31IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector31Icon(props: Vector31IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 16 37'}
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
          'M13.165 1a19.7 19.7 0 01.955 7.244 20.056 20.056 0 01-.39 2.91 9.842 9.842 0 01-.874 2.456C9.379 20.41 4.477 28.43 1 35.23'
        }
        stroke={'currentColor'}
        strokeWidth={'2'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      ></path>
    </svg>
  );
}

export default Vector31Icon;
/* prettier-ignore-end */
