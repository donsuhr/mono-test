// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector15IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector15Icon(props: Vector15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 14 18'}
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
          'M9.81.058c3.658.422 3.44 1.387 4.031 7.43.464 4.8-3.237 9.488-5.456 9.6C5.02 17.296.092 15.12.001 8.02-.095 1.36 6.145-.358 9.81.058z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector15Icon;
/* prettier-ignore-end */
