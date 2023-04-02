// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type CheckmarkIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function CheckmarkIcon(props: CheckmarkIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 24 24'}
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
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M18.364 6.507c-.331 0-.65.132-.884.366l-7.6 7.602-3.36-3.359-.002-.003a1.25 1.25 0 00-1.768 1.768l4.246 4.246a1.25 1.25 0 001.768 0l8.485-8.486a1.25 1.25 0 00-.884-2.134z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default CheckmarkIcon;
/* prettier-ignore-end */
