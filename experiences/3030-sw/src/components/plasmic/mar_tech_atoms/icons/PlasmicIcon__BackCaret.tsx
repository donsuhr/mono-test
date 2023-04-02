// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type BackCaretIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function BackCaretIcon(props: BackCaretIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 7 11'}
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
          'M5.543 11L.193 5.887A.51.51 0 010 5.5a.51.51 0 01.193-.387L5.543 0l.709.795L1.332 5.5l4.92 4.705-.709.795z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default BackCaretIcon;
/* prettier-ignore-end */
