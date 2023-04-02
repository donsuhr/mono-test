// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector25IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector25Icon(props: Vector25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 7 11'}
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
          'M6.242.867s-.235 4.462-2.448 7.056C1.58 10.518.647 10.165.647 10.165s-1.456-2.809 0-4.97A595.127 595.127 0 014.204 0l2.038.867z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector25Icon;
/* prettier-ignore-end */
