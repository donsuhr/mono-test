// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type FloorIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function FloorIcon(props: FloorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 105 10'}
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
          'M52.137 9.319c28.795 0 52.138-2.086 52.138-4.66C104.275 2.086 80.932 0 52.137 0 23.343 0 0 2.086 0 4.66c0 2.573 23.343 4.659 52.137 4.659z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default FloorIcon;
/* prettier-ignore-end */
