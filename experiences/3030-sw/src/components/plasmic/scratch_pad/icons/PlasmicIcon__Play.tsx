// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type PlayIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function PlayIcon(props: PlayIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 48 48'}
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

      <g opacity={'.8'} fill={'currentColor'}>
        <path
          d={
            'M23.927 4A19.896 19.896 0 0012.85 7.37a19.987 19.987 0 00-7.344 8.976A20.056 20.056 0 004.37 27.902a20.019 20.019 0 005.457 10.24 19.92 19.92 0 0010.21 5.474c3.867.771 7.877.375 11.52-1.138a19.953 19.953 0 008.949-7.367A20.043 20.043 0 0043.867 24a20.053 20.053 0 00-5.846-14.136A19.931 19.931 0 0023.926 4zm0 36c-3.154 0-6.238-.938-8.862-2.697a15.99 15.99 0 01-5.875-7.18 16.045 16.045 0 01-.908-9.244 16.015 16.015 0 014.366-8.193 15.937 15.937 0 018.168-4.379c3.094-.617 6.301-.3 9.216.91a15.962 15.962 0 017.159 5.894A16.034 16.034 0 0139.879 24a16.042 16.042 0 01-4.677 11.308c-2.99 3-7.045 4.687-11.274 4.692z'
          }
        ></path>

        <path
          d={
            'M23.13 16.4a1.99 1.99 0 00-2.893.549A2.01 2.01 0 0019.94 18v12a2.005 2.005 0 001.102 1.789 1.988 1.988 0 002.088-.189l7.976-6a1.998 1.998 0 00.797-1.6 2.004 2.004 0 00-.797-1.6l-7.976-6z'
          }
        ></path>
      </g>
    </svg>
  );
}

export default PlayIcon;
/* prettier-ignore-end */
