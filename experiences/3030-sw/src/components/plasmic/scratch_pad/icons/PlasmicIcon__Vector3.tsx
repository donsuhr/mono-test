// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Vector3IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Vector3Icon(props: Vector3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 23 17'}
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
        d={
          'M20.185 5.276l-1.067.176-2.432-3.637a1.718 1.718 0 00-1.834-.774l-9.104 1.53A1.717 1.717 0 004.26 3.9L3.15 8.135l-1.066.176a1.296 1.296 0 00-1.067 1.488 1.221 1.221 0 001.403.997l.224-.037.72 4.266a1.44 1.44 0 001.664 1.184l14.96-2.506a1.445 1.445 0 001.178-1.643l-.72-4.267.203-.032a1.238 1.238 0 001.019-1.43v0a1.29 1.29 0 00-1.483-1.055v0z'
        }
        stroke={'currentColor'}
        strokeWidth={'1.067'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
