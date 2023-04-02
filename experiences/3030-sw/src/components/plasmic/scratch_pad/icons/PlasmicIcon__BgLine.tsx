// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type BgLineIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function BgLineIcon(props: BgLineIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 167 2'}
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
        d={'M1 1h165.098'}
        stroke={'currentColor'}
        strokeWidth={'1.064'}
        strokeMiterlimit={'10'}
        strokeLinecap={'round'}
      ></path>
    </svg>
  );
}

export default BgLineIcon;
/* prettier-ignore-end */
