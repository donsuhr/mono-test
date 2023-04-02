// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector54IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector54Icon(props: Vector54IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 22 8'}
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
        d={
          'M1.144 1.168c.66-.856 6.33-1.41 9.75-1.064 3.42.346 10.473 1.484 10.473 2.926v3.229s-3.431.08-3.575.861c-.143.782-14.75-.606-14.75-.606s-.53-1.654-1.977-1.878a2.5 2.5 0 00-1.064 0s.5-2.6 1.144-3.468z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector54Icon;
/* prettier-ignore-end */
