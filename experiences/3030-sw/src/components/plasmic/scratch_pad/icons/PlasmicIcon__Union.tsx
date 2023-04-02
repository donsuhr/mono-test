// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type UnionIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function UnionIcon(props: UnionIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 30 37'}
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
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M13.29 17.973C9.558 13.851 2.977 2.47 2.977 2.47 1.659.235 0 0 0 0l.976 11.163s5.941 7.109 8.795 10.325c2.48 2.796 8.75 7.357 10.345 8.501a15.19 15.19 0 012.432 2.256c.522.58.93 1.1 1.263 1.523.586.745.937 1.192 1.26 1.144.507-.075.315-1.387 0-2.288-.315-.901 4.048 3.413 4.048 3.413s.907-2.469-2.81-6.069c-1.83-1.774-3.405-2.423-4.065-2.634-1.494-1.51-5.896-5.984-8.953-9.36z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default UnionIcon;
/* prettier-ignore-end */
