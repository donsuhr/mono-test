// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Stroke7StrokeIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Stroke7StrokeIcon(props: Stroke7StrokeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 6 2'}
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
        d={'M0 .6A.6.6 0 01.6 0h4.2a.6.6 0 010 1.2H.6A.6.6 0 010 .6z'}
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Stroke7StrokeIcon;
/* prettier-ignore-end */
