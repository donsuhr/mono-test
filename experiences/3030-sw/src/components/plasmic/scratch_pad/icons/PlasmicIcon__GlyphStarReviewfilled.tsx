// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type GlyphStarReviewfilledIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function GlyphStarReviewfilledIcon(
  props: GlyphStarReviewfilledIconProps,
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 20 20'}
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
          'M9.692.808l2.56 5.362 5.89.777-4.31 4.09 1.083 5.843-5.223-2.834L4.47 16.88l1.082-5.842-4.31-4.091 5.891-.777L9.693.808z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default GlyphStarReviewfilledIcon;
/* prettier-ignore-end */
