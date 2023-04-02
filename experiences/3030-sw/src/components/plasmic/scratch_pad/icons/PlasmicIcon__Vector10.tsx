// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector10IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector10Icon(props: Vector10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 7 11'}
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
          'M6.21.507S5.586 5.259 4.674 6.65c-1.861 2.853-3.461 3.92-3.461 3.92S-.92 7.456.472 4.667A28.602 28.602 0 013.42 0l2.79.507z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector10Icon;
/* prettier-ignore-end */
