// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector30IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector30Icon(props: Vector30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 9 6'}
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
          'M6.267 1.629s.298.144-1.131-.326A299.97 299.97 0 011.344.008C1.403-.18 0 3.036 0 3.036l4.123 1.359L8.24 5.754s1.51-3.098-1.973-4.125z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector30Icon;
/* prettier-ignore-end */
