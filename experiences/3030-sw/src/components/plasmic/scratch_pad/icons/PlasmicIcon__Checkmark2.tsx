// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Checkmark2IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Checkmark2Icon(props: Checkmark2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 30 30'}
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
          'M22.955 8.134c-.414 0-.812.165-1.105.458l-9.501 9.501-4.2-4.198-.003-.003a1.562 1.562 0 00-2.21 2.209l5.308 5.308a1.562 1.562 0 002.21 0L24.06 10.8a1.563 1.563 0 00-1.105-2.667z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Checkmark2Icon;
/* prettier-ignore-end */
