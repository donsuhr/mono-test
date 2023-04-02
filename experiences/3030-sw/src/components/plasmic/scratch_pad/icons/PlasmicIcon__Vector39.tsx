// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector39IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector39Icon(props: Vector39IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 13 16'}
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
          'M9.892.558c2.89 1.177 2.533 2.017 1.856 7.683-.533 4.494-1.413 8.378-6.272 7.656C.975 15.228-.88 12.302.393 5.785 1.604-.388 7.001-.619 9.893.558z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector39Icon;
/* prettier-ignore-end */
