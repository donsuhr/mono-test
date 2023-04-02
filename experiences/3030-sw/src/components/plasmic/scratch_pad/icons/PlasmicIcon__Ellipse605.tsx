// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Ellipse605IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Ellipse605Icon(props: Ellipse605IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 308 308'}
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

      <g opacity={'.75'} filter={'url(#8AAMicsojxmna)'}>
        <circle cx={'154'} cy={'154'} r={'104'} fill={'currentColor'}></circle>
      </g>

      <defs>
        <filter
          id={'8AAMicsojxmna'}
          x={'0'}
          y={'0'}
          width={'308'}
          height={'308'}
          filterUnits={'userSpaceOnUse'}
          colorInterpolationFilters={'sRGB'}
        >
          <feFlood floodOpacity={'0'} result={'BackgroundImageFix'}></feFlood>

          <feBlend
            in={'SourceGraphic'}
            in2={'BackgroundImageFix'}
            result={'shape'}
          ></feBlend>

          <feGaussianBlur
            stdDeviation={'25'}
            result={'effect1_foregroundBlur'}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse605Icon;
/* prettier-ignore-end */
