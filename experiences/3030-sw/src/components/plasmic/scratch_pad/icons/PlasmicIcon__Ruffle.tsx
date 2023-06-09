// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type RuffleIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function RuffleIcon(props: RuffleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 212 212'}
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
          'M99.5 2.7a9.142 9.142 0 016.483-2.7 9.133 9.133 0 016.484 2.7l7.387 7.42a9.146 9.146 0 009.99 1.978l9.678-4.02a9.15 9.15 0 0111.97 4.956l4.005 9.693a9.134 9.134 0 008.463 5.658h10.473a9.133 9.133 0 019.164 9.164v10.458a9.137 9.137 0 005.657 8.463l9.694 4.005a9.14 9.14 0 014.962 4.956 9.155 9.155 0 01-.006 7.013l-4.021 9.663a9.164 9.164 0 001.98 10.005l7.418 7.388a9.148 9.148 0 011.999 2.971 9.146 9.146 0 010 7.024 9.137 9.137 0 01-1.999 2.972l-7.418 7.387a9.146 9.146 0 00-1.98 9.99l4.021 9.678a9.135 9.135 0 01.006 7.013 9.155 9.155 0 01-4.962 4.957l-9.694 4.005a9.139 9.139 0 00-5.657 8.463v10.473a9.137 9.137 0 01-5.652 8.475 9.137 9.137 0 01-3.512.689H163.96a9.139 9.139 0 00-8.463 5.657l-4.005 9.694a9.16 9.16 0 01-4.957 4.962 9.153 9.153 0 01-7.013-.006l-9.678-4.021a9.146 9.146 0 00-9.99 1.98l-7.387 7.418a9.137 9.137 0 01-9.996 1.999 9.148 9.148 0 01-2.971-1.999l-7.388-7.418a9.162 9.162 0 00-10.005-1.98l-9.663 4.021a9.134 9.134 0 01-7.013.006 9.148 9.148 0 01-4.956-4.962l-4.006-9.694a9.137 9.137 0 00-8.462-5.657H37.532a9.136 9.136 0 01-8.475-5.652 9.133 9.133 0 01-.689-3.512V163.96a9.133 9.133 0 00-5.657-8.463l-9.694-4.005a9.155 9.155 0 01-4.956-11.97l4.02-9.678a9.149 9.149 0 00-1.979-9.99L2.7 112.467a9.131 9.131 0 010-12.967l7.418-7.388a9.165 9.165 0 001.98-10.005l-4.022-9.663a9.149 9.149 0 014.957-11.97l9.693-4.005a9.133 9.133 0 005.658-8.462V37.532a9.133 9.133 0 019.164-9.164h10.458a9.133 9.133 0 008.462-5.657l4.006-9.694a9.148 9.148 0 0111.969-4.956l9.663 4.02a9.164 9.164 0 0010.005-1.979l7.389-7.4z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default RuffleIcon;
/* prettier-ignore-end */
