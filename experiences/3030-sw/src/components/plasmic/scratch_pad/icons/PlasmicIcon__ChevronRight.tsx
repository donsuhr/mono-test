// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type ChevronRightIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function ChevronRightIcon(props: ChevronRightIconProps) {
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
          'M10.51 22.182a1.167 1.167 0 01-.827-1.993l6.184-6.166L9.705 7.84a1.167 1.167 0 111.652-1.649l6.99 7.011a1.167 1.167 0 010 1.65l-7.013 6.99a1.161 1.161 0 01-.823.34z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default ChevronRightIcon;
/* prettier-ignore-end */
