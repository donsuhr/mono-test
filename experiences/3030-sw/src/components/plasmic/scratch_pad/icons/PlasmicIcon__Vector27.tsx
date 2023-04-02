// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector27IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector27Icon(props: Vector27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 29 44'}
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
          'M17.92 16.34a20.068 20.068 0 01-.39 2.906 10.048 10.048 0 01-.869 2.455c-3.477 6.8-8.378 14.825-11.861 21.625L0 41.646 5.077 24.05a17.858 17.858 0 00.699-7.864v-.033c-.139-2.107-.373-4.28-.533-5.885C4.88 7.187 3.728 2.688 4.88.301c.533-1.096 1.36 1.13 1.067 1.45C7.21.301 9.456.96 12.987 1.03c3.994.075 6.682-1.632 9.392 0 1.941 5.157 3.637 11.716 5.578 16.88a8.703 8.703 0 01.502 4.044l-3.2 21.4H19.54l.278-21.454-1.899-4.387'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector27Icon;
/* prettier-ignore-end */
