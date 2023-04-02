// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type ChevronLeftIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function ChevronLeftIcon(props: ChevronLeftIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 28 28'}
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
          'M17.51 22.192a1.166 1.166 0 01-.826-.343L9.695 14.84a1.167 1.167 0 010-1.65l7.01-6.99a1.167 1.167 0 011.65 1.652l-6.183 6.165 6.166 6.184a1.167 1.167 0 01-.826 1.99l-.002.001z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default ChevronLeftIcon;
/* prettier-ignore-end */
