// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector17IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector17Icon(props: Vector17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 13 10'}
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
          'M1.493 1.493C1.653 3.963 0 8.667 0 8.667l12.181.453S14.971.544 8.656.41C4.101.342 1.339-.97 1.493 1.494z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector17Icon;
/* prettier-ignore-end */
