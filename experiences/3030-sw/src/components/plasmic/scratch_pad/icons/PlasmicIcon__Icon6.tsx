// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Icon6IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
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

      <g stroke={'currentColor'}>
        <circle cx={'14'} cy={'14'} r={'11.5'}></circle>

        <g fill={'currentColor'} strokeWidth={'.5'}>
          <rect
            height={'7.5'}
            rx={'.25'}
            width={'.5'}
            x={'13.75'}
            y={'10.25'}
          ></rect>

          <rect
            height={'7.5'}
            rx={'.25'}
            transform={'rotate(90 17.75 13.75)'}
            width={'.5'}
            x={'17.75'}
            y={'13.75'}
          ></rect>
        </g>
      </g>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
