// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type MiscIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function MiscIcon(props: MiscIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 19 6'}
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
          'M1.18 5.331l-.029-3.674h.022l1.313 3.674h.88l1.35-3.674h.021l-.029 3.674h1.225V.14H4.12L2.992 3.47h-.03L1.783.139H0v5.192h1.18zm7.085 0V.14H7.003v5.192h1.262zm2.588.132c1.027 0 1.988-.535 1.988-1.73 0-1.034-.91-1.335-1.614-1.562-.491-.154-.799-.264-.799-.609 0-.41.403-.52.726-.52.323 0 .711.175.924.447l.8-.844c-.455-.418-1.115-.638-1.702-.638-.968 0-2.01.477-2.01 1.628 0 .939.668 1.276 1.328 1.489.682.22 1.078.345 1.078.74 0 .419-.337.565-.719.565-.41 0-.872-.234-1.122-.55l-.821.836c.455.477 1.203.748 1.943.748zm5.368.008c.873 0 1.562-.33 2.017-.858l-.873-.822c-.22.308-.608.528-1.1.528-.865 0-1.474-.645-1.474-1.591 0-.917.624-1.591 1.496-1.591.396 0 .814.154 1.049.476l.85-.85C17.755.264 16.97 0 16.244 0c-1.584 0-2.816 1.063-2.816 2.728 0 1.628 1.196 2.743 2.794 2.743z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default MiscIcon;
/* prettier-ignore-end */
