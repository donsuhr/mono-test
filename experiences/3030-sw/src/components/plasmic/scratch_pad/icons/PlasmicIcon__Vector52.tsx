// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector52IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector52Icon(props: Vector52IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 19 14'}
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
          'M2.318.16S-.873 11.404.233 12.282c1.106.877 18.702 1.537 18.702 1.537l-.532-2.043L3.51 9.202l1.473-6.245L3.387 0 2.318.16z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector52Icon;
/* prettier-ignore-end */
