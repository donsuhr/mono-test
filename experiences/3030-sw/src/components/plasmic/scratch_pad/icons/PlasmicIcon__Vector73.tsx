// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector73IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector73Icon(props: Vector73IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 29 14'}
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
        d={
          'M28.58 0v3.43H3.43a75.695 75.695 0 00-2.287 5.893A65.754 65.754 0 000 13.02V0h28.58z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector73Icon;
/* prettier-ignore-end */
