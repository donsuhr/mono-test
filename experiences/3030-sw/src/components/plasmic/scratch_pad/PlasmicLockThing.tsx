// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ssXJzNt8MiEu8LBoGu8nv3
// Component: QLobzhRnuL

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
import sty from './PlasmicLockThing.module.css'; // plasmic-import: QLobzhRnuL/css

import locksvgExs7WniE from './images/locksvg.svg'; // plasmic-import: Exs7-WniE/picture

export type PlasmicLockThing__VariantMembers = {};
export type PlasmicLockThing__VariantsArgs = {};
type VariantPropType = keyof PlasmicLockThing__VariantsArgs;
export const PlasmicLockThing__VariantProps = new Array<VariantPropType>();

export type PlasmicLockThing__ArgsType = {};
type ArgPropType = keyof PlasmicLockThing__ArgsType;
export const PlasmicLockThing__ArgProps = new Array<ArgPropType>();

export type PlasmicLockThing__OverridesType = {
  root?: p.Flex<'div'>;
  text?: p.Flex<'div'>;
  img?: p.Flex<'img'>;
};

export interface DefaultLockThingProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicLockThing__RenderFunc(props: {
  variants: PlasmicLockThing__VariantsArgs;
  args: PlasmicLockThing__ArgsType;
  overrides: PlasmicLockThing__OverridesType;
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
      <div
        data-plasmic-name={'text'}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {'Store your forms in our secure tax doc locker'}
      </div>
      <img
        data-plasmic-name={'img'}
        data-plasmic-override={overrides.img}
        alt={''}
        className={classNames(projectcss.all, projectcss.img, sty.img)}
        loading={'lazy' as const}
        src={locksvgExs7WniE}
      />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ['root', 'text', 'img'],
  text: ['text'],
  img: ['img'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: 'div';
  text: 'div';
  img: 'img';
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLockThing__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLockThing__VariantsArgs;
    args?: PlasmicLockThing__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLockThing__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLockThing__ArgsType,
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
          internalArgPropNames: PlasmicLockThing__ArgProps,
          internalVariantPropNames: PlasmicLockThing__VariantProps,
        }),
      [props, nodeName],
    );
    return PlasmicLockThing__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicLockThing';
  } else {
    func.displayName = `PlasmicLockThing.${nodeName}`;
  }
  return func;
}

export const PlasmicLockThing = Object.assign(
  // Top-level PlasmicLockThing renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent('text'),
    img: makeNodeComponent('img'),

    // Metadata about props expected for PlasmicLockThing
    internalVariantProps: PlasmicLockThing__VariantProps,
    internalArgProps: PlasmicLockThing__ArgProps,
  },
);

export default PlasmicLockThing;
/* prettier-ignore-end */
