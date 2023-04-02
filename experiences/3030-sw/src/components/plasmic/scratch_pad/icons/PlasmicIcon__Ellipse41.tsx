// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Ellipse41IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Ellipse41Icon(props: Ellipse41IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 101 110'}
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
          'M100.694 59.5c0 27.614-22.386 50-50 50-27.615 0-50-22.386-50-50 0-11.482-3.007-38.56 3.5-47C13.336.64 40.06 0 56.194 0c27.614 0 44.5 31.886 44.5 59.5z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Ellipse41Icon;
/* prettier-ignore-end */
