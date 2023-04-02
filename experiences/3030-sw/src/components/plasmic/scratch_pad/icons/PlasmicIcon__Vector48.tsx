// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector48IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector48Icon(props: Vector48IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 8 44'}
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
          'M.518 0c-1.781 3.394 1.596 20.702 1.66 22.09.064 1.388 1.665 16.665 1.665 16.665s-3.484 4.983-1.596 5.233c1.596.213 4.49-5.218 4.49-5.218s-.24-15.132-.24-17.834.697-19.84.697-19.84L.518 0z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector48Icon;
/* prettier-ignore-end */
