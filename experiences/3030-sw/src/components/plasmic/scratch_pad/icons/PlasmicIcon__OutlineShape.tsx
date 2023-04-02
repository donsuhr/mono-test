// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type OutlineShapeIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function OutlineShapeIcon(props: OutlineShapeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 94 86'}
      height={'1em'}
      width={'1em'}
      style={{
        stroke: 'currentcolor',

        ...(style || {}),
      }}
      className={classNames('plasmic-default__svg', className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          'M79.508 74.518c-29.94 23.05-69.226 3.813-77.818-30.4C-1.98 29.494 9.12 12.65 31.892 13.28 45.84 13.675 53.6-2.65 66.998 1.755c34.597 11.37 30.272 59.467 12.511 72.763z'
        }
        stroke={'currentColor'}
        strokeWidth={'1.067'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      ></path>
    </svg>
  );
}

export default OutlineShapeIcon;
/* prettier-ignore-end */
