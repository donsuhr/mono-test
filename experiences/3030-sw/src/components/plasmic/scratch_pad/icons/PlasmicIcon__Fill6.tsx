// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Fill6IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Fill6Icon(props: Fill6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 52 16'}
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
          'M11.053 4.18c-1.56 0-2.764.92-3.26 1.984h-.07v-1.7h-2.48v10.484h2.621V9.21c0-1.417.78-2.834 2.41-2.834 1.7 0 1.983 1.559 1.983 2.763v5.81h2.621V8.43c0-2.126-1.133-4.251-3.825-4.251zm9.421-1.063c.85 0 1.559-.708 1.559-1.558 0-.85-.709-1.559-1.559-1.559s-1.559.708-1.559 1.559c0 .85.709 1.558 1.559 1.558zm27.066 0c.85 0 1.558-.708 1.558-1.558C49.098.709 48.39 0 47.54 0c-.85 0-1.559.708-1.559 1.559 0 .85.709 1.558 1.559 1.558zM0 14.948h2.621V4.463H0v10.485zm16.225-8.147h2.905v8.147h2.621V6.801h2.905V4.463h-8.502v2.338h.071zM43.29 4.463v2.338h2.904v8.147h2.622V6.801h2.904V4.463h-8.43zm-4.466 10.485h2.621V4.463h-2.621v10.485zm-5.242-4.675c0 1.417-.78 2.834-2.409 2.834-1.7 0-1.983-1.56-1.983-2.763v-5.81h-2.622v6.518c0 2.125 1.134 4.25 3.826 4.25 1.559 0 2.763-.92 3.26-1.983v1.7h2.479V4.463H33.51v5.81h.071z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Fill6Icon;
/* prettier-ignore-end */
