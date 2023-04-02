// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Ruffle2IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Ruffle2Icon(props: Ruffle2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 46 46'}
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
          'M21.582.586a1.98 1.98 0 012.812 0l1.603 1.609a1.984 1.984 0 002.166.43l2.1-.873a1.984 1.984 0 012.596 1.075l.869 2.103a1.981 1.981 0 001.835 1.227h2.272a1.981 1.981 0 011.988 1.987v2.269a1.98 1.98 0 001.227 1.835l2.102.87a1.984 1.984 0 011.075 2.595l-.872 2.096a1.987 1.987 0 00.43 2.17l1.609 1.603a1.978 1.978 0 010 2.812l-1.61 1.603a1.983 1.983 0 00-.429 2.166l.872 2.1a1.985 1.985 0 01-1.075 2.596l-2.102.869a1.981 1.981 0 00-1.227 1.835v2.272a1.98 1.98 0 01-1.988 1.988h-2.272a1.98 1.98 0 00-1.835 1.227l-.87 2.102a1.985 1.985 0 01-2.595 1.075l-2.1-.872a1.985 1.985 0 00-2.166.43l-1.603 1.609a1.978 1.978 0 01-2.812 0l-1.603-1.61a1.987 1.987 0 00-2.17-.429l-2.096.872a1.985 1.985 0 01-2.596-1.075l-.869-2.102a1.98 1.98 0 00-1.835-1.227H8.14a1.98 1.98 0 01-1.988-1.988v-2.272a1.981 1.981 0 00-1.227-1.835l-2.102-.87a1.985 1.985 0 01-1.075-2.595l.872-2.1a1.984 1.984 0 00-.43-2.166L.586 24.394a1.98 1.98 0 010-2.812l1.609-1.603a1.988 1.988 0 00.43-2.17l-.873-2.096a1.984 1.984 0 011.075-2.596l2.103-.869a1.98 1.98 0 001.227-1.835V8.14a1.98 1.98 0 011.987-1.988h2.269a1.981 1.981 0 001.835-1.227l.87-2.102a1.984 1.984 0 012.595-1.075l2.096.872a1.988 1.988 0 002.17-.43L21.582.586z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Ruffle2Icon;
/* prettier-ignore-end */
