// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector44IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector44Icon(props: Vector44IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 26 4'}
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
          'M12.64 3.766c6.98 0 12.64-.843 12.64-1.883S19.62 0 12.64 0 0 .843 0 1.883s5.66 1.883 12.64 1.883z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector44Icon;
/* prettier-ignore-end */
