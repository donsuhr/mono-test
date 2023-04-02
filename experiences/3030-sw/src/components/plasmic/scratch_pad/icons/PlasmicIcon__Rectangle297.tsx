// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Rectangle297IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Rectangle297Icon(props: Rectangle297IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 94 119'}
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
        d={'M0 8a8 8 0 018-8h78a8 8 0 018 8v111H0V8z'}
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Rectangle297Icon;
/* prettier-ignore-end */
