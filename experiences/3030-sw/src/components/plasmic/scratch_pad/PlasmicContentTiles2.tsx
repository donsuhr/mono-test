// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ssXJzNt8MiEu8LBoGu8nv3
// Component: 9QSMnsL2z9

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
import LayoutTiles from '../../LayoutTiles'; // plasmic-import: EIgZkKwUj_/component
import Tiles2BannerImg from '../../Tiles2BannerImg'; // plasmic-import: ERClRSWr6EY/component
import Tile from '../../Tile'; // plasmic-import: 0Nks_r79nt/component
import Progress from '../../Progress'; // plasmic-import: eQr-xX-Lwt/component

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_scratch_pad.module.css'; // plasmic-import: ssXJzNt8MiEu8LBoGu8nv3/projectcss
import sty from './PlasmicContentTiles2.module.css'; // plasmic-import: 9QSMnsL2z9/css

export type PlasmicContentTiles2__VariantMembers = {};
export type PlasmicContentTiles2__VariantsArgs = {};
type VariantPropType = keyof PlasmicContentTiles2__VariantsArgs;
export const PlasmicContentTiles2__VariantProps = new Array<VariantPropType>();

export type PlasmicContentTiles2__ArgsType = {};
type ArgPropType = keyof PlasmicContentTiles2__ArgsType;
export const PlasmicContentTiles2__ArgProps = new Array<ArgPropType>();

export type PlasmicContentTiles2__OverridesType = {
  root?: p.Flex<'div'>;
  layoutTiles?: p.Flex<typeof LayoutTiles>;
  tiles2BannerImg?: p.Flex<typeof Tiles2BannerImg>;
  third?: p.Flex<typeof Tile>;
  progress?: p.Flex<typeof Progress>;
};

export interface DefaultContentTiles2Props {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicContentTiles2__RenderFunc(props: {
  variants: PlasmicContentTiles2__VariantsArgs;
  args: PlasmicContentTiles2__ArgsType;
  overrides: PlasmicContentTiles2__OverridesType;
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
      <LayoutTiles
        data-plasmic-name={'layoutTiles'}
        data-plasmic-override={overrides.layoutTiles}
        bannerImg={
          <Tiles2BannerImg
            data-plasmic-name={'tiles2BannerImg'}
            data-plasmic-override={overrides.tiles2BannerImg}
            className={classNames('__wab_instance', sty.tiles2BannerImg)}
          />
        }
        className={classNames('__wab_instance', sty.layoutTiles)}
        progress={
          <Progress
            data-plasmic-name={'progress'}
            data-plasmic-override={overrides.progress}
            className={classNames('__wab_instance', sty.progress)}
            step={'_2' as const}
          />
        }
        tiles={
          <React.Fragment>
            <Tile
              className={classNames('__wab_instance', sty.tile__fWr48)}
              text={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__uUcs1,
                  )}
                >
                  {
                    'Now is tthe time for all good men to come to the aid of their country'
                  }
                </div>
              }
            />

            <Tile
              data-plasmic-name={'third'}
              data-plasmic-override={overrides.third}
              checked={true}
              className={classNames('__wab_instance', sty.third)}
              text={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__a72Ws,
                  )}
                >
                  {'third'}
                </div>
              }
            />

            <Tile className={classNames('__wab_instance', sty.tile__s7Txq)} />

            <Tile
              checked={true}
              className={classNames('__wab_instance', sty.tile__itRVn)}
            />
          </React.Fragment>
        }
      />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ['root', 'layoutTiles', 'tiles2BannerImg', 'third', 'progress'],
  layoutTiles: ['layoutTiles', 'tiles2BannerImg', 'third', 'progress'],
  tiles2BannerImg: ['tiles2BannerImg'],
  third: ['third'],
  progress: ['progress'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: 'div';
  layoutTiles: typeof LayoutTiles;
  tiles2BannerImg: typeof Tiles2BannerImg;
  third: typeof Tile;
  progress: typeof Progress;
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContentTiles2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContentTiles2__VariantsArgs;
    args?: PlasmicContentTiles2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContentTiles2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicContentTiles2__ArgsType,
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
          internalArgPropNames: PlasmicContentTiles2__ArgProps,
          internalVariantPropNames: PlasmicContentTiles2__VariantProps,
        }),
      [props, nodeName],
    );
    return PlasmicContentTiles2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicContentTiles2';
  } else {
    func.displayName = `PlasmicContentTiles2.${nodeName}`;
  }
  return func;
}

export const PlasmicContentTiles2 = Object.assign(
  // Top-level PlasmicContentTiles2 renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    layoutTiles: makeNodeComponent('layoutTiles'),
    tiles2BannerImg: makeNodeComponent('tiles2BannerImg'),
    third: makeNodeComponent('third'),
    progress: makeNodeComponent('progress'),

    // Metadata about props expected for PlasmicContentTiles2
    internalVariantProps: PlasmicContentTiles2__VariantProps,
    internalArgProps: PlasmicContentTiles2__ArgProps,
  },
);

export default PlasmicContentTiles2;
/* prettier-ignore-end */
