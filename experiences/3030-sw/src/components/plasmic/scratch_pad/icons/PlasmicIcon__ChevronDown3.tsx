// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type ChevronDown3IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function ChevronDown3Icon(props: ChevronDown3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 20 20'}
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
          'M10.012 13.348a.832.832 0 01-.59-.245L4.428 8.096a.834.834 0 011.18-1.18l4.405 4.417L14.43 6.93a.834.834 0 011.178 1.18L10.6 13.105a.833.833 0 01-.588.243z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default ChevronDown3Icon;
/* prettier-ignore-end */
