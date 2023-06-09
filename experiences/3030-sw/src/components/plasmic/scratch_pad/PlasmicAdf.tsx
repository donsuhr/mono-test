// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ssXJzNt8MiEu8LBoGu8nv3
// Component: w_q4Le5TvQ

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
import sty from './PlasmicAdf.module.css'; // plasmic-import: w_q4Le5TvQ/css

import locksvgExs7WniE from './images/locksvg.svg'; // plasmic-import: Exs7-WniE/picture

export type PlasmicAdf__VariantMembers = {};
export type PlasmicAdf__VariantsArgs = {};
type VariantPropType = keyof PlasmicAdf__VariantsArgs;
export const PlasmicAdf__VariantProps = new Array<VariantPropType>();

export type PlasmicAdf__ArgsType = {};
type ArgPropType = keyof PlasmicAdf__ArgsType;
export const PlasmicAdf__ArgProps = new Array<ArgPropType>();

export type PlasmicAdf__OverridesType = {
  root?: p.Flex<'div'>;
  img?: p.Flex<'img'>;
  text?: p.Flex<'div'>;
};

export interface DefaultAdfProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicAdf__RenderFunc(props: {
  variants: PlasmicAdf__VariantsArgs;
  args: PlasmicAdf__ArgsType;
  overrides: PlasmicAdf__OverridesType;
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

  return (
    <p.Stack
      as={'div'}
      data-plasmic-name={'root'}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__vmuiM)} />

      <div className={classNames(projectcss.all, sty.freeBox__sgrvD)} />

      <div className={classNames(projectcss.all, sty.freeBox___9Gcbk)} />

      <img
        data-plasmic-name={'img'}
        data-plasmic-override={overrides.img}
        alt={''}
        className={classNames(projectcss.all, projectcss.img, sty.img)}
        loading={'lazy' as const}
        src={locksvgExs7WniE}
      />

      <div
        data-plasmic-name={'text'}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {'Store your forms in our secure tax doc locker'}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ['root', 'img', 'text'],
  img: ['img'],
  text: ['text'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: 'div';
  img: 'img';
  text: 'div';
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAdf__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAdf__VariantsArgs;
    args?: PlasmicAdf__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAdf__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAdf__ArgsType,
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
          internalArgPropNames: PlasmicAdf__ArgProps,
          internalVariantPropNames: PlasmicAdf__VariantProps,
        }),
      [props, nodeName],
    );
    return PlasmicAdf__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicAdf';
  } else {
    func.displayName = `PlasmicAdf.${nodeName}`;
  }
  return func;
}

export const PlasmicAdf = Object.assign(
  // Top-level PlasmicAdf renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent('img'),
    text: makeNodeComponent('text'),

    // Metadata about props expected for PlasmicAdf
    internalVariantProps: PlasmicAdf__VariantProps,
    internalArgProps: PlasmicAdf__ArgProps,
  },
);

export default PlasmicAdf;
/* prettier-ignore-end */
