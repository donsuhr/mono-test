// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type ArrowIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function ArrowIcon(props: ArrowIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 8 11'}
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
          'M4 0c.368 0 .667.298.667.667v8a.667.667 0 01-1.334 0v-8C3.333.298 3.632 0 4 0z'
        }
        fill={'currentColor'}
      ></path>

      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M.195 6.195c.26-.26.683-.26.943 0L4 9.057l2.862-2.862a.667.667 0 11.943.943L4.47 10.471a.667.667 0 01-.942 0L.195 7.138a.667.667 0 010-.943z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default ArrowIcon;
/* prettier-ignore-end */
