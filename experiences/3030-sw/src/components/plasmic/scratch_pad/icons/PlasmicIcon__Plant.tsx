// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type PlantIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function PlantIcon(props: PlantIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 43 59'}
      height={'1em'}
      width={'1em'}
      style={{
        fill: 'currentcolor',
        stroke: 'currentcolor',

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
          'M22.032 23.297c3.622 2.92 9.042-3.893 9.042-3.893l-1.814-4.378 3.644 2.42C43.77 13.553 42.424 0 42.424 0 9.208 6.324 21.83 23.936 21.83 23.936m-7.112 3.292c-1.697 2.271-5.596-1.941-5.596-1.941l.5-3.123-1.76 1.942C1.239 22.308 0 13.319 0 13.319c19.558 1.707 14.893 14.319 14.893 14.319'
        }
        fill={'currentColor'}
      ></path>

      <path
        d={
          'M28.925 44.855h-16.24M28.76 11.111s-6.649 7.447-7.856 16.186a91.203 91.203 0 00-.5 17.388s-.644-11.702-8.575-21.563'
        }
        stroke={'currentColor'}
        strokeWidth={'1.064'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      ></path>

      <path
        d={
          'M16.218 58.052c-1.596-3.133-2.66-7.862-2.75-13.197h14.68c-.106 5.32-1.154 10.064-2.75 13.197h-9.18z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default PlantIcon;
/* prettier-ignore-end */
