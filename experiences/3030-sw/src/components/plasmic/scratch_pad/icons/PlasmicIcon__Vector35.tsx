// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector35IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector35Icon(props: Vector35IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 5 9'}
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
          'M2.865 8.64S.423 7.48.087 5.847c-.315-1.53.266-3.349 1.109-4.638C2.135-.231 4.289.016 4.289.016A13.88 13.88 0 003.02 4.644a19.196 19.196 0 00-.155 3.996z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector35Icon;
/* prettier-ignore-end */
