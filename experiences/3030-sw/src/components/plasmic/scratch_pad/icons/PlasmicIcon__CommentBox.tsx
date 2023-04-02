// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type CommentBoxIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function CommentBoxIcon(props: CommentBoxIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 10 10'}
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
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M1.14 0A1.14 1.14 0 000 1.14v8.28a.38.38 0 00.649.269L2.817 7.52H8.74a1.14 1.14 0 001.14-1.14v-6A.38.38 0 009.5 0H1.14z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default CommentBoxIcon;
/* prettier-ignore-end */
