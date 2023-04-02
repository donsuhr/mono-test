// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type TurboTaxLiveLogoOffSiteSquareOverWhiteIconProps =
  React.ComponentProps<'svg'> & {
    title?: string;
  };

export function TurboTaxLiveLogoOffSiteSquareOverWhiteIcon(
  props: TurboTaxLiveLogoOffSiteSquareOverWhiteIconProps,
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 32 18'}
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
          'M0 0v18h10.566v-2.656H2.57V2.656h26.747v12.688H13.993l-2.57 2.655h20.464V0H0z'
        }
        fill={'currentColor'}
      ></path>

      <path
        d={
          'M10.037 12.225H5.93V5.492h1.583v5.316h2.522v1.417zm2.944 0h-1.583V5.492h1.583v6.733zm7.712-6.733l-2.513 6.733h-1.574l-2.467-6.733h1.767l1.51 4.774h.037l1.5-4.774h1.74zm5.705 6.733h-4.547V5.492h4.382v1.38H23.37v1.264h2.706v1.303H23.37v1.397h3.028v1.389z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default TurboTaxLiveLogoOffSiteSquareOverWhiteIcon;
/* prettier-ignore-end */
