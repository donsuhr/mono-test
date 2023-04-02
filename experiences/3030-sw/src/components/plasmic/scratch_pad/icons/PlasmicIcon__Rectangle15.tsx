// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Rectangle15IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Rectangle15Icon(props: Rectangle15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 24 35'}
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

      <path d={'M0 0h18.439L24 6v28.667H0V0z'} fill={'currentColor'}></path>
    </svg>
  );
}

export default Rectangle15Icon;
/* prettier-ignore-end */
