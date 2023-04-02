// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector49IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector49Icon(props: Vector49IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 21 41'}
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
          'M17.77 11.611s-2.994 9.208-5.78 12.931c-2.788 3.723-9.432 10.399-9.432 10.399s.102 1.888.054 3.494c-.048 1.607 0 1.82-.984 1.814C.644 40.244 0 33.233 0 33.233s7.399-9.186 8.35-11.52C9.304 19.376 11.65 0 11.65 0l8.638 2.707-2.516 8.904z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector49Icon;
/* prettier-ignore-end */
