// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Group379IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Group379Icon(props: Group379IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 15 6'}
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
          'M4.723 5.331V.14H3.505l.03 3.388h-.022L1.43.14H0v5.192h1.217l-.029-3.395h.022L3.3 5.331h1.423zm4.693 0v-1.07H7.004V3.183H9.16V2.178H7.004v-.975h2.28V.139h-3.49v5.192h3.622zm5.4-.718l-.872-.822c-.22.308-.609.528-1.1.528-.865 0-1.474-.645-1.474-1.591 0-.917.623-1.591 1.496-1.591.396 0 .814.154 1.049.476l.85-.85C14.333.264 13.548 0 12.822 0c-1.584 0-2.816 1.063-2.816 2.728 0 1.628 1.195 2.743 2.794 2.743.873 0 1.562-.33 2.017-.858z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Group379Icon;
/* prettier-ignore-end */
