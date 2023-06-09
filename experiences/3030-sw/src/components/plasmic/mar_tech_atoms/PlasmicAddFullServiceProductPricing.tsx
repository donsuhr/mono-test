// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bWL5f4gAFbwKhEp4ZCgaRf
// Component: VtRR0qoCB7a
import * as React from 'react';

import * as p from '@plasmicapp/react-web';
import * as ph from '@plasmicapp/host';

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

import projectcss from './plasmic_mar_tech_atoms.module.css'; // plasmic-import: bWL5f4gAFbwKhEp4ZCgaRf/projectcss
import sty from './PlasmicAddFullServiceProductPricing.module.css'; // plasmic-import: VtRR0qoCB7a/css

import LiveIconIcon from './icons/PlasmicIcon__LiveIcon'; // plasmic-import: ZBWTaun5g/icon

export type PlasmicAddFullServiceProductPricing__VariantMembers = {};
export type PlasmicAddFullServiceProductPricing__VariantsArgs = {};
type VariantPropType = keyof PlasmicAddFullServiceProductPricing__VariantsArgs;
export const PlasmicAddFullServiceProductPricing__VariantProps =
  new Array<VariantPropType>();

export type PlasmicAddFullServiceProductPricing__ArgsType = {
  productName?: React.ReactNode;
  productDescription?: React.ReactNode;
  basePrice?: React.ReactNode;
  additionalPrice?: React.ReactNode;
  finalPrice?: React.ReactNode;
  stateAdditional?: React.ReactNode;
};
type ArgPropType = keyof PlasmicAddFullServiceProductPricing__ArgsType;
export const PlasmicAddFullServiceProductPricing__ArgProps =
  new Array<ArgPropType>(
    'productName',
    'productDescription',
    'basePrice',
    'additionalPrice',
    'finalPrice',
    'stateAdditional',
  );

export type PlasmicAddFullServiceProductPricing__OverridesType = {
  wrapper?: p.Flex<'div'>;
  iconProductNameWrapper?: p.Flex<'div'>;
  svg?: p.Flex<'svg'>;
  freeBox?: p.Flex<'div'>;
  ledgerWrapper?: p.Flex<'div'>;
  basePriceWrapper?: p.Flex<'div'>;
  addPriceWrapper?: p.Flex<'div'>;
  addFullService?: p.Flex<'div'>;
  finalPriceWrapper?: p.Flex<'div'>;
};

export interface DefaultAddFullServiceProductPricingProps {
  productName?: React.ReactNode;
  productDescription?: React.ReactNode;
  basePrice?: React.ReactNode;
  additionalPrice?: React.ReactNode;
  finalPrice?: React.ReactNode;
  stateAdditional?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicAddFullServiceProductPricing__RenderFunc(props: {
  variants: PlasmicAddFullServiceProductPricing__VariantsArgs;
  args: PlasmicAddFullServiceProductPricing__ArgsType;
  overrides: PlasmicAddFullServiceProductPricing__OverridesType;

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
    <div
      data-plasmic-name={'wrapper'}
      data-plasmic-override={overrides.wrapper}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.wrapper,
      )}
    >
      <p.Stack
        as={'div'}
        data-plasmic-name={'iconProductNameWrapper'}
        data-plasmic-override={overrides.iconProductNameWrapper}
        hasGap={true}
        className={classNames(projectcss.all, sty.iconProductNameWrapper)}
      >
        <LiveIconIcon
          data-plasmic-name={'svg'}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={'img'}
        />

        {p.renderPlasmicSlot({
          defaultContents: <p.Trans>{'Self-Employed'}</p.Trans>,
          value: args.productName,
          className: classNames(sty.slotTargetProductName),
        })}
      </p.Stack>

      <div
        data-plasmic-name={'freeBox'}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <p.Trans>{'Personal & business income and expenses'}</p.Trans>
          ),
          value: args.productDescription,
          className: classNames(sty.slotTargetProductDescription),
        })}
      </div>

      <div
        data-plasmic-name={'ledgerWrapper'}
        data-plasmic-override={overrides.ledgerWrapper}
        className={classNames(projectcss.all, sty.ledgerWrapper)}
      >
        <div
          data-plasmic-name={'basePriceWrapper'}
          data-plasmic-override={overrides.basePriceWrapper}
          className={classNames(projectcss.all, sty.basePriceWrapper)}
        >
          {p.renderPlasmicSlot({
            defaultContents: <p.Trans>{'$200*'}</p.Trans>,
            value: args.basePrice,
            className: classNames(sty.slotTargetBasePrice),
          })}
        </div>

        <div
          data-plasmic-name={'addPriceWrapper'}
          data-plasmic-override={overrides.addPriceWrapper}
          className={classNames(projectcss.all, sty.addPriceWrapper)}
        >
          <div
            data-plasmic-name={'addFullService'}
            data-plasmic-override={overrides.addFullService}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.addFullService,
            )}
          >
            <p.Trans>{'Add Full Service'}</p.Trans>
          </div>

          {p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jBzDn,
                )}
              >
                <p.Trans>{'+$90*'}</p.Trans>
              </div>
            ),

            value: args.additionalPrice,
            className: classNames(sty.slotTargetAdditionalPrice),
          })}
        </div>

        <div
          data-plasmic-name={'finalPriceWrapper'}
          data-plasmic-override={overrides.finalPriceWrapper}
          className={classNames(projectcss.all, sty.finalPriceWrapper)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__b7Uss,
                )}
              >
                <p.Trans>{'$290*'}</p.Trans>
              </div>
            ),

            value: args.finalPrice,
            className: classNames(sty.slotTargetFinalPrice),
          })}
        </div>

        {p.renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__irsVu,
              )}
            >
              <p.Trans>{'State additional'}</p.Trans>
            </div>
          ),

          value: args.stateAdditional,
          className: classNames(sty.slotTargetStateAdditional),
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  wrapper: [
    'wrapper',
    'iconProductNameWrapper',
    'svg',
    'freeBox',
    'ledgerWrapper',
    'basePriceWrapper',
    'addPriceWrapper',
    'addFullService',
    'finalPriceWrapper',
  ],
  iconProductNameWrapper: ['iconProductNameWrapper', 'svg'],
  svg: ['svg'],
  freeBox: ['freeBox'],
  ledgerWrapper: [
    'ledgerWrapper',
    'basePriceWrapper',
    'addPriceWrapper',
    'addFullService',
    'finalPriceWrapper',
  ],
  basePriceWrapper: ['basePriceWrapper'],
  addPriceWrapper: ['addPriceWrapper', 'addFullService'],
  addFullService: ['addFullService'],
  finalPriceWrapper: ['finalPriceWrapper'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  wrapper: 'div';
  iconProductNameWrapper: 'div';
  svg: 'svg';
  freeBox: 'div';
  ledgerWrapper: 'div';
  basePriceWrapper: 'div';
  addPriceWrapper: 'div';
  addFullService: 'div';
  finalPriceWrapper: 'div';
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAddFullServiceProductPricing__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAddFullServiceProductPricing__VariantsArgs;
    args?: PlasmicAddFullServiceProductPricing__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    PlasmicAddFullServiceProductPricing__VariantsArgs,
    ReservedPropsType
  > &
    /* Specify args directly as props*/ Omit<
      PlasmicAddFullServiceProductPricing__ArgsType,
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
          internalArgPropNames: PlasmicAddFullServiceProductPricing__ArgProps,
          internalVariantPropNames:
            PlasmicAddFullServiceProductPricing__VariantProps,
        }),
      [props, nodeName],
    );

    return PlasmicAddFullServiceProductPricing__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'wrapper') {
    func.displayName = 'PlasmicAddFullServiceProductPricing';
  } else {
    func.displayName = `PlasmicAddFullServiceProductPricing.${nodeName}`;
  }
  return func;
}

export const PlasmicAddFullServiceProductPricing = Object.assign(
  // Top-level PlasmicAddFullServiceProductPricing renders the root element
  makeNodeComponent('wrapper'),
  {
    // Helper components rendering sub-elements
    iconProductNameWrapper: makeNodeComponent('iconProductNameWrapper'),
    svg: makeNodeComponent('svg'),
    freeBox: makeNodeComponent('freeBox'),
    ledgerWrapper: makeNodeComponent('ledgerWrapper'),
    basePriceWrapper: makeNodeComponent('basePriceWrapper'),
    addPriceWrapper: makeNodeComponent('addPriceWrapper'),
    addFullService: makeNodeComponent('addFullService'),
    finalPriceWrapper: makeNodeComponent('finalPriceWrapper'),

    // Metadata about props expected for PlasmicAddFullServiceProductPricing
    internalVariantProps: PlasmicAddFullServiceProductPricing__VariantProps,
    internalArgProps: PlasmicAddFullServiceProductPricing__ArgProps,
  },
);

export default PlasmicAddFullServiceProductPricing;
/* prettier-ignore-end */
