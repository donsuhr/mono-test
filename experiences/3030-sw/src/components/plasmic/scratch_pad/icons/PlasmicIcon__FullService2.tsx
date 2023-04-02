// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type FullService2IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function FullService2Icon(props: FullService2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 118 18'}
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
          'M0 17.581h2.93v-6.93h7.256V8.186H2.93V3.674h7.698V1.116H0v16.465zM23.029 6.419h-2.79v6.14c0 1.488-.838 3.022-2.605 3.022-1.791 0-2.094-1.65-2.094-2.976V6.419h-2.79v6.976c0 2.28 1.21 4.512 4.116 4.512 1.651 0 2.977-1 3.465-2.116h.047v1.79h2.65V6.42zm2.931 11.162h2.79V0h-2.79v17.581zm5.525 0h2.79V0h-2.79v17.581zM52.981 2.465C51.725 1.28 49.841.698 48.191.698c-2.977 0-6.024 1.488-6.024 4.837 0 3.07 2.163 4.046 4.163 4.674 2.07.652 3.79 1.14 3.79 2.86 0 1.768-1.604 2.443-2.976 2.443-1.302 0-2.79-.698-3.605-1.814l-2.093 1.953C42.75 17.186 44.958 18 47.097 18c3.233 0 6-1.72 6-5.256 0-3.232-2.697-4.163-4.814-4.814-1.86-.581-3.14-1.023-3.14-2.535 0-1.604 1.559-2.255 2.908-2.255 1.163 0 2.395.604 3.023 1.418l1.907-2.093zm5.052 8.419c.116-1.558 1.441-2.698 3.093-2.698 1.814 0 2.628 1.256 2.628 2.698h-5.721zm8.511 1.255c0-4.023-2.279-6.046-5.395-6.046-3.372 0-5.907 2.372-5.907 5.977 0 3.628 2.558 5.837 6 5.837 2.116 0 3.698-.744 4.79-2.233l-1.86-1.488c-.628.884-1.558 1.442-2.953 1.442-1.628 0-3.07-1.163-3.186-2.744h8.488c.023-.256.023-.489.023-.745zm2.122 5.442h2.79v-5.976c0-.814.489-3 3-3 .256 0 .489.023.86.116V6.163a3.158 3.158 0 00-.674-.07c-1.465 0-2.65.907-3.255 2.186h-.047V6.42h-2.674v11.16zm12.238 0h2.977L88.323 6.42h-2.954l-2.953 8.14h-.047l-2.93-8.14h-3.046l4.511 11.162zm9.133 0h2.79V6.42h-2.79v11.16zM89.64 2.628c0 .884.744 1.674 1.768 1.674 1.023 0 1.814-.72 1.814-1.674S92.432.953 91.409.953c-1.024 0-1.768.791-1.768 1.675zm15.759 5.209c-.884-1.093-2.582-1.744-4.209-1.744-3.28 0-5.977 2.28-5.977 5.907 0 3.72 2.744 5.907 6.046 5.907 1.652 0 3.186-.558 4.117-1.558l-1.745-1.768c-.534.652-1.488 1-2.348 1-2.117 0-3.163-1.837-3.163-3.581s1.023-3.581 3.07-3.581c.907 0 1.86.465 2.302 1.093l1.907-1.675zm3.96 3.047c.116-1.558 1.442-2.698 3.093-2.698 1.814 0 2.628 1.256 2.628 2.698h-5.721zm8.512 1.255c0-4.023-2.28-6.046-5.396-6.046-3.372 0-5.907 2.372-5.907 5.977 0 3.628 2.558 5.837 6 5.837 2.116 0 3.698-.744 4.791-2.233l-1.861-1.488c-.627.884-1.558 1.442-2.953 1.442-1.628 0-3.07-1.163-3.186-2.744h8.488c.024-.256.024-.489.024-.745z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default FullService2Icon;
/* prettier-ignore-end */
