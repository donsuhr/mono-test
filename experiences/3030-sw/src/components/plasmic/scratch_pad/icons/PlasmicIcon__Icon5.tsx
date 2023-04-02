// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Icon5IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 28 28'}
      height={'1em'}
      width={'1em'}
      style={{
        stroke: 'currentcolor',
        fill: 'currentcolor',

        ...(style || {}),
      }}
      className={classNames('plasmic-default__svg', className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={'14'} cy={'14'} r={'11.5'} stroke={'currentColor'}></circle>

      <rect
        x={'17.75'}
        y={'13.75'}
        width={'.5'}
        height={'7.5'}
        rx={'.25'}
        transform={'rotate(90 17.75 13.75)'}
        fill={'currentColor'}
        stroke={'currentColor'}
        strokeWidth={'.5'}
      ></rect>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
