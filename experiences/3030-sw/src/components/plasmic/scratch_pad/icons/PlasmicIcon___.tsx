// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type _IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function _Icon(props: _IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 6 10'}
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
          'M3.13 0h-.703v.92C.98 1.018.18 1.897.18 2.996c0 1.113.607 1.718 2.248 2.171v1.869c-.386-.014-.827-.192-1.282-.756L0 7.38c.69.645 1.545.948 2.427 1.003v.948h.704v-.948c1.406-.055 2.262-.976 2.262-2.185 0-.99-.593-1.759-2.262-2.24V2.24c.4.04.786.22 1.09.563l1.02-1.085C4.634 1.223 3.875.976 3.13.934V0zm0 5.359c.511.206.69.55.69.934 0 .398-.207.7-.69.756v-1.69zm-.703-1.58c-.482-.165-.69-.399-.69-.811 0-.33.235-.673.69-.728v1.539z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default _Icon;
/* prettier-ignore-end */
