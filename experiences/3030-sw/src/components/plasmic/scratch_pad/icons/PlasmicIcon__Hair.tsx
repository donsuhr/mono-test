// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type HairIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function HairIcon(props: HairIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 19 15'}
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
          'M14.25 9.622c.051.185.088.374.112.564l.208 1.654c.053.447-1.277 1.213-1.405 1.639 0 0-1.83.984 2.203.627 5.51-.49.707-4.702 2.01-6.383 1.835-2.35.107-3.84-1.723-4.962-1.096-.676-2.426-3.037-6.149-2.734C5.783.33 5.251 2.952 2.921 3.995c-3.356 1.521 0 4.452-2.074 5.984-2.075 1.532-.128 4.712 3.569 4.388 3.696-.325 2.25-.612 2.25-.612-.213-.393-.745-.995-.798-1.447-.032-.292-.857-.452-.857-.452l-.095-.91a3.601 3.601 0 010-.584'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default HairIcon;
/* prettier-ignore-end */
