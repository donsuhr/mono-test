// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector4IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector4Icon(props: Vector4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 13 7'}
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
          'M.83 6.72a.704.704 0 01-.811-.853L.86 1.792a.155.155 0 010-.048c.027-.15.203-.203.304-.219L10.307 0c.1 0 .282 0 .357.107l.027.042 2.133 3.579a.71.71 0 01-.496 1.067L.829 6.72z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
