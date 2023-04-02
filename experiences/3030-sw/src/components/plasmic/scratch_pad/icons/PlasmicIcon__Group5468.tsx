// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Group5468IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Group5468Icon(props: Group5468IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 58 30'}
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
          'M0 0v30h19.189v-4.427H4.667V4.426h48.575v21.147h-27.83L20.744 30H57.91V0H0z'
        }
        fill={'currentColor'}
      ></path>

      <path
        d={
          'M39.683 20.379V9.157h7.958v2.298h-5.2v2.109h4.916v2.17h-4.915v2.33h5.5v2.315h-8.26zm-28.913 0V9.157h2.875v8.86h4.582v2.362H10.77zm9.914 0h2.875V9.157h-2.875V20.38zm12.306 0h-2.86L25.65 9.157h3.21l2.741 7.957h.068l2.725-7.957h3.16L32.989 20.38z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Group5468Icon;
/* prettier-ignore-end */
