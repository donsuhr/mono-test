// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ssXJzNt8MiEu8LBoGu8nv3
// Component: YMML87zctj

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
import LayoutSplashWithButton from '../../LayoutSplashWithButton'; // plasmic-import: QN6lWZtqTgh/component
import ConfettiBadge from '../../ConfettiBadge'; // plasmic-import: PItJAD3u3f/component
import AltButton from '../../AltButton'; // plasmic-import: 7pGfee8N7aE/component

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_scratch_pad.module.css'; // plasmic-import: ssXJzNt8MiEu8LBoGu8nv3/projectcss
import sty from './PlasmicPage.module.css'; // plasmic-import: YMML87zctj/css

export type PlasmicPage__VariantMembers = {
  color: 'blue' | 'blueGradient' | 'greenGradient' | 'redGradient';
};
export type PlasmicPage__VariantsArgs = {
  color?: SingleChoiceArg<
    'blue' | 'blueGradient' | 'greenGradient' | 'redGradient'
  >;
};
type VariantPropType = keyof PlasmicPage__VariantsArgs;
export const PlasmicPage__VariantProps = new Array<VariantPropType>('color');

export type PlasmicPage__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicPage__ArgsType;
export const PlasmicPage__ArgProps = new Array<ArgPropType>('children');

export type PlasmicPage__OverridesType = {
  root?: p.Flex<'div'>;
};

export interface DefaultPageProps {
  children?: React.ReactNode;
  color?: SingleChoiceArg<
    'blue' | 'blueGradient' | 'greenGradient' | 'redGradient'
  >;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicPage__RenderFunc(props: {
  variants: PlasmicPage__VariantsArgs;
  args: PlasmicPage__ArgsType;
  overrides: PlasmicPage__OverridesType;
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
    <div
      data-plasmic-name={'root'}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootcolor_blueGradient]: hasVariant(
            $state,
            'color',
            'blueGradient',
          ),
          [sty.rootcolor_blue]: hasVariant($state, 'color', 'blue'),
          [sty.rootcolor_greenGradient]: hasVariant(
            $state,
            'color',
            'greenGradient',
          ),
          [sty.rootcolor_redGradient]: hasVariant(
            $state,
            'color',
            'redGradient',
          ),
        },
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <LayoutSplashWithButton
            className={classNames(
              '__wab_instance',
              sty.layoutSplashWithButton__zxPfK,
            )}
            title={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__faGiC,
                )}
              >
                {'Your account is all set!'}
              </div>
            }
          />
        ),

        value: args.children,
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ['root'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: 'div';
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPage__VariantsArgs;
    args?: PlasmicPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPage__ArgsType,
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
          internalArgPropNames: PlasmicPage__ArgProps,
          internalVariantPropNames: PlasmicPage__VariantProps,
        }),
      [props, nodeName],
    );
    return PlasmicPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicPage';
  } else {
    func.displayName = `PlasmicPage.${nodeName}`;
  }
  return func;
}

export const PlasmicPage = Object.assign(
  // Top-level PlasmicPage renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPage
    internalVariantProps: PlasmicPage__VariantProps,
    internalArgProps: PlasmicPage__ArgProps,
  },
);

export default PlasmicPage;
/* prettier-ignore-end */
