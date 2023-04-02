// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type HeelsIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function HeelsIcon(props: HeelsIconProps) {
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
          'M9.74 8.952H6.552l.553-2.644 2.633-.787v3.431zM2.18 3.894L0 2.096 1.723 0l2.639 1.25L2.18 3.894z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default HeelsIcon;
/* prettier-ignore-end */
