// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ssXJzNt8MiEu8LBoGu8nv3
// Component: p545QK4r4Kh

import * as React from 'react';

import * as p from '@plasmicapp/react-web';
import * as ph from '@plasmicapp/react-web/lib/host';

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from '@plasmicapp/react-web';

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_scratch_pad.module.css'; // plasmic-import: ssXJzNt8MiEu8LBoGu8nv3/projectcss
import sty from './PlasmicScrollToFaqFooterLink.module.css'; // plasmic-import: p545QK4r4Kh/css

export type PlasmicScrollToFaqFooterLink__VariantMembers = {
  productFamily: 'fs' | 'diy' | 'ttl';
  color: 'brand' | 'white';
};
export type PlasmicScrollToFaqFooterLink__VariantsArgs = {
  productFamily?: SingleChoiceArg<'fs' | 'diy' | 'ttl'>;
  color?: SingleChoiceArg<'brand' | 'white'>;
};
type VariantPropType = keyof PlasmicScrollToFaqFooterLink__VariantsArgs;
export const PlasmicScrollToFaqFooterLink__VariantProps =
  new Array<VariantPropType>('productFamily', 'color');

export type PlasmicScrollToFaqFooterLink__ArgsType = {};
type ArgPropType = keyof PlasmicScrollToFaqFooterLink__ArgsType;
export const PlasmicScrollToFaqFooterLink__ArgProps = new Array<ArgPropType>();

export type PlasmicScrollToFaqFooterLink__OverridesType = {
  root2?: p.Flex<'button'>;
};

export interface DefaultScrollToFaqFooterLinkProps {
  productFamily?: SingleChoiceArg<'fs' | 'diy' | 'ttl'>;
  color?: SingleChoiceArg<'brand' | 'white'>;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicScrollToFaqFooterLink__RenderFunc(props: {
  variants: PlasmicScrollToFaqFooterLink__VariantsArgs;
  args: PlasmicScrollToFaqFooterLink__ArgsType;
  overrides: PlasmicScrollToFaqFooterLink__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: 'productFamily',
        type: 'private',
        variableType: 'variant',
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.productFamily,
      },
      {
        path: 'color',
        type: 'private',
        variableType: 'variant',
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color,
      },
    ],
    [$props, $ctx],
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <button
      data-plasmic-name={'root2'}
      data-plasmic-override={overrides.root2}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.__wab_text,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root2,
        {
          [sty.root2color_brand]: hasVariant($state, 'color', 'brand'),
          [sty.root2color_brand_productFamily_ttl]:
            hasVariant($state, 'productFamily', 'ttl') &&
            hasVariant($state, 'color', 'brand'),
          [sty.root2color_white]: hasVariant($state, 'color', 'white'),
          [sty.root2productFamily_diy]: hasVariant(
            $state,
            'productFamily',
            'diy',
          ),
          [sty.root2productFamily_diy_color_brand]:
            hasVariant($state, 'productFamily', 'diy') &&
            hasVariant($state, 'color', 'brand'),
          [sty.root2productFamily_fs]: hasVariant(
            $state,
            'productFamily',
            'fs',
          ),
          [sty.root2productFamily_fs_color_brand]:
            hasVariant($state, 'productFamily', 'fs') &&
            hasVariant($state, 'color', 'brand'),
          [sty.root2productFamily_ttl]: hasVariant(
            $state,
            'productFamily',
            'ttl',
          ),
        },
      )}
      ref={(ref) => {
        $refs['root2'] = ref;
      }}
    >
      {hasVariant($state, 'productFamily', 'ttl')
        ? 'Live Assisted FAQ'
        : hasVariant($state, 'productFamily', 'diy')
        ? 'Do it yourself FAQ'
        : hasVariant($state, 'productFamily', 'fs')
        ? 'Live Full Service FAQ'
        : 'FAQ'}
    </button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root2: ['root2'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root2: 'button';
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicScrollToFaqFooterLink__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicScrollToFaqFooterLink__VariantsArgs;
    args?: PlasmicScrollToFaqFooterLink__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicScrollToFaqFooterLink__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicScrollToFaqFooterLink__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>,
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicScrollToFaqFooterLink__ArgProps,
          internalVariantPropNames: PlasmicScrollToFaqFooterLink__VariantProps,
        }),
      [props, nodeName],
    );
    return PlasmicScrollToFaqFooterLink__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root2') {
    func.displayName = 'PlasmicScrollToFaqFooterLink';
  } else {
    func.displayName = `PlasmicScrollToFaqFooterLink.${nodeName}`;
  }
  return func;
}

export const PlasmicScrollToFaqFooterLink = Object.assign(
  // Top-level PlasmicScrollToFaqFooterLink renders the root element
  makeNodeComponent('root2'),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicScrollToFaqFooterLink
    internalVariantProps: PlasmicScrollToFaqFooterLink__VariantProps,
    internalArgProps: PlasmicScrollToFaqFooterLink__ArgProps,
  },
);

export default PlasmicScrollToFaqFooterLink;
/* prettier-ignore-end */
