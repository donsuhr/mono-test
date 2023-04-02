// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Icon3IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      stroke={'currentColor'}
      fill={'currentColor'}
      strokeWidth={'0'}
      viewBox={'0 0 24 24'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          'M13.776 3.9L5.184 16.332C4.051 17.969 2.208 19.548 0 19.721v.379h9.552c2.544 0 4.397-1.656 5.616-3.48L24 3.9z'
        }
        stroke={'none'}
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
