// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Group4IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Group4Icon(props: Group4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 35 29'}
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
          'M30.315 18.747a58.154 58.154 0 00-1.676 8.69H1.824a73.528 73.528 0 011.741-7.367 72.184 72.184 0 01.977-3.132 75.198 75.198 0 012.121-5.506h26.192a58.196 58.196 0 00-2.54 7.315zM3.43 16.66V8.002h27.437v2.287H6.287a.572.572 0 00-.523.344A76.899 76.899 0 003.46 16.57l-.006.02c-.009.023-.016.046-.024.07zm30.774-6.111a.573.573 0 00-.48-.26H32.01V7.43a.571.571 0 00-.572-.572H2.858a.571.571 0 00-.572.572v12.944a74.753 74.753 0 00-1.143 4.614V1.143h6.208c.575 0 1.11.285 1.427.762l.926 1.396a2.854 2.854 0 002.38 1.272h2.206a.571.571 0 100-1.143h-2.207a1.713 1.713 0 01-1.427-.762L9.73 1.272A2.852 2.852 0 007.35 0H.573A.571.571 0 000 .572v27.437c0 .316.256.571.572.571h28.58a.571.571 0 00.568-.511 56.97 56.97 0 011.698-9.021 57.018 57.018 0 012.83-7.957.57.57 0 00-.044-.542z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
