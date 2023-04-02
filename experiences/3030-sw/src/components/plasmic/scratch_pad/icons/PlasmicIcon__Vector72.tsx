// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector72IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector72Icon(props: Vector72IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 10 3'}
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
          'M8.479 2.858a.571.571 0 01-.572-.572V1.143H.572A.571.571 0 11.572 0h7.907c.316 0 .571.256.571.572v1.714a.571.571 0 01-.571.572z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector72Icon;
/* prettier-ignore-end */
