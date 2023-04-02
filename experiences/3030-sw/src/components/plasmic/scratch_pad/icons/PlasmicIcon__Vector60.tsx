// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector60IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector60Icon(props: Vector60IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 4 4'}
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
          'M0 2.37S1.016.07 1.596.001c.58-.069 2.287 1.553 2.361 1.888.075.336-.457 2.128-.989 1.873-.532-.256-.675-.628-1.277-.9A6.224 6.224 0 00.543 2.48'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector60Icon;
/* prettier-ignore-end */
