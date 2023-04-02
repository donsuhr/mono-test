// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector55IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector55Icon(props: Vector55IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 10 9'}
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
          'M0 4.564s.76-.043 1.346-.043h1.228V.585L7.175 0l.59 5.053 1.788.41s-.362 3.09-4.957 2.946C0 8.266 0 4.564 0 4.564z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector55Icon;
/* prettier-ignore-end */
