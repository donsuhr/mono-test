// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector2IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 21 19'}
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
          'M7.427 17.725c-.469.272-2.57.768-2.88.534-.309-.235-.853-2.982-.853-2.982a2.219 2.219 0 01-.933-.49c-.214-.294-1.067-4.864-1.067-4.864S-.087 9.619.004 8.61c.09-1.008 2.133-1.5 2.133-1.5s.933-4.83 1.706-5.181C4.617 1.576 13.977-.168 14.51.013c.533.182 3.61 4.416 3.61 4.416s2.257-.533 2.438.534c.181 1.066-.907 1.776-.907 1.776s.731 4.485.502 4.933a4.696 4.696 0 01-.806.938s.982 2.342.363 2.838-2.955.981-3.152.715a28.601 28.601 0 01-.928-2.774l-8.395 1.248.192 3.088z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
