// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector13IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector13Icon(props: Vector13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 13 18'}
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
          'M11.719 1.904l-.822 3.525a3.077 3.077 0 011.44 2.731c.043 1.723-1.066 7.467-2.89 8.667C3.43 20.859-.08 13.349 0 9.488c0-1.179.507-3.2 1.334-4.267a3.307 3.307 0 012.181-1.226L4.775 0'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector13Icon;
/* prettier-ignore-end */
