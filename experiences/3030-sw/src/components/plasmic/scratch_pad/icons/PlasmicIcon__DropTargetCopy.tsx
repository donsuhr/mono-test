// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type DropTargetCopyIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function DropTargetCopyIcon(props: DropTargetCopyIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 34 22'}
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
        clipRule={'evenodd'}
        d={
          'M2.333 1H31c.736 0 1.333.597 1.333 1.333V19c0 .736-.597 1.333-1.333 1.333H2.333A1.333 1.333 0 011 19V2.333C1 1.597 1.597 1 2.333 1z'
        }
        stroke={'currentColor'}
        strokeWidth={'2'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        strokeDasharray={'2 6'}
      ></path>
    </svg>
  );
}

export default DropTargetCopyIcon;
/* prettier-ignore-end */
