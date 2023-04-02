// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector9IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector9Icon(props: Vector9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 6 5'}
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
        d={
          'M1.005 1h3.611v2.059a1.195 1.195 0 01-1.195 1.194H2.195A1.195 1.195 0 011 3.06V1h.005z'
        }
        stroke={'currentColor'}
        strokeWidth={'1.067'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      ></path>
    </svg>
  );
}

export default Vector9Icon;
/* prettier-ignore-end */
