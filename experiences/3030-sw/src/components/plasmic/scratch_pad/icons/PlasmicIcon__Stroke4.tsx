// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Stroke4IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Stroke4Icon(props: Stroke4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 6 14'}
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
        clipRule={'evenodd'}
        d={'M1 12.199h3.563V1H1v11.199z'}
        stroke={'currentColor'}
        strokeWidth={'1.8'}
        strokeLinejoin={'round'}
      ></path>
    </svg>
  );
}

export default Stroke4Icon;
/* prettier-ignore-end */
