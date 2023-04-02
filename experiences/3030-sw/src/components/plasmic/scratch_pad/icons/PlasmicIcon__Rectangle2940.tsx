// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Rectangle2940IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Rectangle2940Icon(props: Rectangle2940IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 28 10'}
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
        d={'M1.844 0h25.82L25.82 9.59H0L1.844 0z'}
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Rectangle2940Icon;
/* prettier-ignore-end */
