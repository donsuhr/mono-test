// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type ChevronDown2IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function ChevronDown2Icon(props: ChevronDown2IconProps) {
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
          'M14.016 18.688a1.169 1.169 0 01-.826-.343l-6.99-7.01a1.168 1.168 0 011.652-1.652l6.167 6.184L20.202 9.7a1.167 1.167 0 011.648 1.652l-7.01 6.994c-.219.218-.515.34-.824.34z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default ChevronDown2Icon;
/* prettier-ignore-end */
