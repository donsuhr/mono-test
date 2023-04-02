// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector56IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector56Icon(props: Vector56IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 12 14'}
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
          'M11.548 6.443c.122 3.771-2.282 6.532-5.553 6.639-3.272.106-5.851-3.33-5.99-7.101C-.133 2.209 2.41.087 5.675 0c3.266-.084 5.777 2.66 5.873 6.442z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Vector56Icon;
/* prettier-ignore-end */
