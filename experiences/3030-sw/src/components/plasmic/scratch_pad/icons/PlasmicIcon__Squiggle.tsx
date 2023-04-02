// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type SquiggleIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function SquiggleIcon(props: SquiggleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 54 14'}
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
          'M1 4.333c15.67 5.831 22.837.535 20.608-2.6-2.23-3.136-9.024 4.494-2.01 9.63 7.013 5.136 16.837-3.794 16.837-3.794C45.123-.948 51.757 1.754 52.7 4.932'
        }
        stroke={'currentColor'}
        strokeWidth={'2'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      ></path>
    </svg>
  );
}

export default SquiggleIcon;
/* prettier-ignore-end */
