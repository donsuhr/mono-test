// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ssXJzNt8MiEu8LBoGu8nv3
// Component: ya8OjZYVknG

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
import StarRating from '../../StarRating'; // plasmic-import: Zxy9c3vI8HI/component
import ProductItemDetail from '../../ProductItemDetail'; // plasmic-import: 0RxMaRob-Ed/component
import ScrollToFaqFooterLink from '../../ScrollToFaqFooterLink'; // plasmic-import: p545QK4r4Kh/component

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_scratch_pad.module.css'; // plasmic-import: ssXJzNt8MiEu8LBoGu8nv3/projectcss
import sty from './PlasmicProductItem.module.css'; // plasmic-import: ya8OjZYVknG/css

import TurboTaxLiveLogoOffSiteSquareOverWhiteIcon from './icons/PlasmicIcon__TurboTaxLiveLogoOffSiteSquareOverWhite'; // plasmic-import: T-Ds5q7F7j/icon
import AssistedIcon from './icons/PlasmicIcon__Assisted'; // plasmic-import: VmxnhsI3nN/icon
import FullService2Icon from './icons/PlasmicIcon__FullService2'; // plasmic-import: T4F0Y0u_vf/icon
import image6HrxKDm4Q1M from './images/image6.svg'; // plasmic-import: hrxKDm4Q1M/picture

export type PlasmicProductItem__VariantMembers = {
  productFamily: 'ttl' | 'diy' | 'fs';
};
export type PlasmicProductItem__VariantsArgs = {
  productFamily?: MultiChoiceArg<'ttl' | 'diy' | 'fs'>;
};
type VariantPropType = keyof PlasmicProductItem__VariantsArgs;
export const PlasmicProductItem__VariantProps = new Array<VariantPropType>(
  'productFamily',
);

export type PlasmicProductItem__ArgsType = {
  stars?: React.ReactNode;
  price?: React.ReactNode;
  state?: React.ReactNode;
  includedMobile?: React.ReactNode;
  button?: React.ReactNode;
  accordion?: React.ReactNode;
  includedStationary?: React.ReactNode;
};
type ArgPropType = keyof PlasmicProductItem__ArgsType;
export const PlasmicProductItem__ArgProps = new Array<ArgPropType>(
  'stars',
  'price',
  'state',
  'includedMobile',
  'button',
  'accordion',
  'includedStationary',
);

export type PlasmicProductItem__OverridesType = {
  root?: p.Flex<'div'>;
  container?: p.Flex<'div'>;
  img?: p.Flex<'img'>;
  menu?: p.Flex<'div'>;
  content?: p.Flex<'div'>;
  logoBox?: p.Flex<'div'>;
  title?: p.Flex<'div'>;
  rows?: p.Flex<'div'>;
  ratingsRow?: p.Flex<'div'>;
  otherDetailsRow?: p.Flex<'div'>;
  price?: p.Flex<'div'>;
  state?: p.Flex<'div'>;
  includedMw?: p.Flex<'div'>;
  includedSw?: p.Flex<'div'>;
  button?: p.Flex<'div'>;
  accordion?: p.Flex<'div'>;
};

export interface DefaultProductItemProps {
  stars?: React.ReactNode;
  price?: React.ReactNode;
  state?: React.ReactNode;
  includedMobile?: React.ReactNode;
  button?: React.ReactNode;
  accordion?: React.ReactNode;
  includedStationary?: React.ReactNode;
  productFamily?: MultiChoiceArg<'ttl' | 'diy' | 'fs'>;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicProductItem__RenderFunc(props: {
  variants: PlasmicProductItem__VariantsArgs;
  args: PlasmicProductItem__ArgsType;
  overrides: PlasmicProductItem__OverridesType;
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
          [sty.rootproductFamily_diy]: hasVariant(
            $state,
            'productFamily',
            'diy',
          ),
          [sty.rootproductFamily_fs]: hasVariant($state, 'productFamily', 'fs'),
          [sty.rootproductFamily_ttl]: hasVariant(
            $state,
            'productFamily',
            'ttl',
          ),
        },
      )}
    >
      {true ? (
        <div
          data-plasmic-name={'container'}
          data-plasmic-override={overrides.container}
          className={classNames(projectcss.all, sty.container, {
            [sty.containerproductFamily_diy]: hasVariant(
              $state,
              'productFamily',
              'diy',
            ),
            [sty.containerproductFamily_fs]: hasVariant(
              $state,
              'productFamily',
              'fs',
            ),
            [sty.containerproductFamily_ttl]: hasVariant(
              $state,
              'productFamily',
              'ttl',
            ),
          })}
        >
          {(hasVariant($state, 'productFamily', 'fs') ? true : true) ? (
            <img
              data-plasmic-name={'img'}
              data-plasmic-override={overrides.img}
              alt={''}
              className={classNames(projectcss.all, projectcss.img, sty.img, {
                [sty.imgproductFamily_fs]: hasVariant(
                  $state,
                  'productFamily',
                  'fs',
                ),
              })}
              loading={'lazy' as const}
              src={image6HrxKDm4Q1M}
            />
          ) : null}
          {(hasVariant($state, 'productFamily', 'fs') ? true : true) ? (
            <div
              data-plasmic-name={'menu'}
              data-plasmic-override={overrides.menu}
              className={classNames(projectcss.all, sty.menu, {
                [sty.menuproductFamily_fs]: hasVariant(
                  $state,
                  'productFamily',
                  'fs',
                ),
              })}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pTMr,
                  {
                    [sty.textproductFamily_fs__pTMRxttS]: hasVariant(
                      $state,
                      'productFamily',
                      'fs',
                    ),
                  },
                )}
              >
                {'Right for you'}
              </div>
            </div>
          ) : null}
          <p.Stack
            as={'div'}
            data-plasmic-name={'content'}
            data-plasmic-override={overrides.content}
            hasGap={true}
            className={classNames(projectcss.all, sty.content, {
              [sty.contentproductFamily_diy]: hasVariant(
                $state,
                'productFamily',
                'diy',
              ),
              [sty.contentproductFamily_fs]: hasVariant(
                $state,
                'productFamily',
                'fs',
              ),
              [sty.contentproductFamily_ttl]: hasVariant(
                $state,
                'productFamily',
                'ttl',
              ),
            })}
          >
            {true ? (
              <p.Stack
                as={'div'}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__jH765, {
                  [sty.freeBoxproductFamily_diy__jH765LtIpH]: hasVariant(
                    $state,
                    'productFamily',
                    'diy',
                  ),
                  [sty.freeBoxproductFamily_fs__jH765XttS]: hasVariant(
                    $state,
                    'productFamily',
                    'fs',
                  ),
                  [sty.freeBoxproductFamily_ttl__jH765Y25J]: hasVariant(
                    $state,
                    'productFamily',
                    'ttl',
                  ),
                })}
              >
                <p.Stack
                  as={'div'}
                  data-plasmic-name={'logoBox'}
                  data-plasmic-override={overrides.logoBox}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.logoBox, {
                    [sty.logoBoxproductFamily_diy]: hasVariant(
                      $state,
                      'productFamily',
                      'diy',
                    ),
                    [sty.logoBoxproductFamily_fs]: hasVariant(
                      $state,
                      'productFamily',
                      'fs',
                    ),
                    [sty.logoBoxproductFamily_ttl]: hasVariant(
                      $state,
                      'productFamily',
                      'ttl',
                    ),
                  })}
                >
                  {(
                    hasVariant($state, 'productFamily', 'diy') ? true : true
                  ) ? (
                    <TurboTaxLiveLogoOffSiteSquareOverWhiteIcon
                      className={classNames(projectcss.all, sty.svg__uwaQ, {
                        [sty.svgproductFamily_diy__uwaQltIpH]: hasVariant(
                          $state,
                          'productFamily',
                          'diy',
                        ),
                        [sty.svgproductFamily_ttl__uwaQy25J]: hasVariant(
                          $state,
                          'productFamily',
                          'ttl',
                        ),
                      })}
                      role={'img'}
                    />
                  ) : null}
                  {(
                    hasVariant($state, 'productFamily', 'fs')
                      ? true
                      : hasVariant($state, 'productFamily', 'diy')
                      ? true
                      : true
                  ) ? (
                    <AssistedIcon
                      className={classNames(projectcss.all, sty.svg__dDeW9, {
                        [sty.svgproductFamily_diy__dDeW9LtIpH]: hasVariant(
                          $state,
                          'productFamily',
                          'diy',
                        ),
                        [sty.svgproductFamily_fs__dDeW9XttS]: hasVariant(
                          $state,
                          'productFamily',
                          'fs',
                        ),
                        [sty.svgproductFamily_ttl__dDeW9Y25J]: hasVariant(
                          $state,
                          'productFamily',
                          'ttl',
                        ),
                      })}
                      role={'img'}
                    />
                  ) : null}
                  {(hasVariant($state, 'productFamily', 'fs') ? true : true) ? (
                    <FullService2Icon
                      className={classNames(projectcss.all, sty.svg__cNjL3, {
                        [sty.svgproductFamily_fs__cNjL3XttS]: hasVariant(
                          $state,
                          'productFamily',
                          'fs',
                        ),
                      })}
                      role={'img'}
                    />
                  ) : null}
                  {(
                    hasVariant($state, 'productFamily', 'diy') ? true : true
                  ) ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__iPofF,
                        {
                          [sty.textproductFamily_diy__iPofFltIpH]: hasVariant(
                            $state,
                            'productFamily',
                            'diy',
                          ),
                        },
                      )}
                    >
                      {'Do It Yourself'}
                    </div>
                  ) : null}
                </p.Stack>
                <div
                  data-plasmic-name={'title'}
                  data-plasmic-override={overrides.title}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.title,
                    {
                      [sty.titleproductFamily_diy]: hasVariant(
                        $state,
                        'productFamily',
                        'diy',
                      ),
                      [sty.titleproductFamily_fs]: hasVariant(
                        $state,
                        'productFamily',
                        'fs',
                      ),
                      [sty.titleproductFamily_ttl]: hasVariant(
                        $state,
                        'productFamily',
                        'ttl',
                      ),
                    },
                  )}
                >
                  {hasVariant($state, 'productFamily', 'fs')
                    ? 'We do your taxes for you'
                    : hasVariant($state, 'productFamily', 'diy')
                    ? 'Do your own taxes'
                    : 'Expert help as you go'}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___8VByd,
                    {
                      [sty.textproductFamily_diy___8VBydltIpH]: hasVariant(
                        $state,
                        'productFamily',
                        'diy',
                      ),
                      [sty.textproductFamily_fs___8VBydxttS]: hasVariant(
                        $state,
                        'productFamily',
                        'fs',
                      ),
                      [sty.textproductFamily_ttl___8VBydY25J]: hasVariant(
                        $state,
                        'productFamily',
                        'ttl',
                      ),
                    },
                  )}
                >
                  {hasVariant($state, 'productFamily', 'fs')
                    ? 'A dedicated tax expert does your taxes for you, start to finish.'
                    : hasVariant($state, 'productFamily', 'diy')
                    ? 'Answer simple questions and we fill in all the right forms.'
                    : 'Get unlimited help from tax experts and a review before you file.'}
                </div>
                {true ? (
                  <div
                    data-plasmic-name={'rows'}
                    data-plasmic-override={overrides.rows}
                    className={classNames(projectcss.all, sty.rows, {
                      [sty.rowsproductFamily_ttl]: hasVariant(
                        $state,
                        'productFamily',
                        'ttl',
                      ),
                    })}
                  >
                    {(
                      hasVariant($state, 'productFamily', 'ttl') ? true : true
                    ) ? (
                      <div
                        data-plasmic-name={'ratingsRow'}
                        data-plasmic-override={overrides.ratingsRow}
                        className={classNames(projectcss.all, sty.ratingsRow, {
                          [sty.ratingsRowproductFamily_ttl]: hasVariant(
                            $state,
                            'productFamily',
                            'ttl',
                          ),
                        })}
                      >
                        {true ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__nbJ9Q,
                              {
                                [sty.freeBoxproductFamily_ttl__nbJ9QY25J]:
                                  hasVariant($state, 'productFamily', 'ttl'),
                              },
                            )}
                          >
                            {p.renderPlasmicSlot({
                              defaultContents: (
                                <StarRating
                                  align={'row' as const}
                                  className={classNames(
                                    '__wab_instance',
                                    sty.starRating__pYfbS,
                                  )}
                                  color={'white' as const}
                                  justify={'center' as const}
                                />
                              ),

                              value: args.stars,
                              className: classNames(sty.slotTargetStars, {
                                [sty.slotTargetStarsproductFamily_ttl]:
                                  hasVariant($state, 'productFamily', 'ttl'),
                              }),
                            })}
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                    {true ? (
                      <div
                        data-plasmic-name={'otherDetailsRow'}
                        data-plasmic-override={overrides.otherDetailsRow}
                        className={classNames(
                          projectcss.all,
                          sty.otherDetailsRow,
                          {
                            [sty.otherDetailsRowproductFamily_diy]: hasVariant(
                              $state,
                              'productFamily',
                              'diy',
                            ),
                            [sty.otherDetailsRowproductFamily_fs]: hasVariant(
                              $state,
                              'productFamily',
                              'fs',
                            ),
                            [sty.otherDetailsRowproductFamily_ttl]: hasVariant(
                              $state,
                              'productFamily',
                              'ttl',
                            ),
                          },
                        )}
                      >
                        <div
                          data-plasmic-name={'price'}
                          data-plasmic-override={overrides.price}
                          className={classNames(projectcss.all, sty.price, {
                            [sty.priceproductFamily_ttl]: hasVariant(
                              $state,
                              'productFamily',
                              'ttl',
                            ),
                          })}
                        >
                          {p.renderPlasmicSlot({
                            defaultContents: (
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__fJrR,
                                )}
                              >
                                {'$120'}
                              </div>
                            ),
                            value: args.price,
                            className: classNames(sty.slotTargetPrice, {
                              [sty.slotTargetPriceproductFamily_fs]: hasVariant(
                                $state,
                                'productFamily',
                                'fs',
                              ),
                              [sty.slotTargetPriceproductFamily_ttl]:
                                hasVariant($state, 'productFamily', 'ttl'),
                            }),
                          })}
                        </div>
                        <div
                          data-plasmic-name={'state'}
                          data-plasmic-override={overrides.state}
                          className={classNames(projectcss.all, sty.state, {
                            [sty.stateproductFamily_ttl]: hasVariant(
                              $state,
                              'productFamily',
                              'ttl',
                            ),
                          })}
                        >
                          {p.renderPlasmicSlot({
                            defaultContents: (
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text___9Ikdw,
                                )}
                              >
                                {'State additional'}
                              </div>
                            ),
                            value: args.state,
                            className: classNames(sty.slotTargetState, {
                              [sty.slotTargetStateproductFamily_ttl]:
                                hasVariant($state, 'productFamily', 'ttl'),
                            }),
                          })}
                        </div>
                        {(
                          hasVariant($state, 'productFamily', 'ttl')
                            ? true
                            : true
                        ) ? (
                          <div
                            data-plasmic-name={'includedMw'}
                            data-plasmic-override={overrides.includedMw}
                            className={classNames(
                              projectcss.all,
                              sty.includedMw,
                              {
                                [sty.includedMwproductFamily_diy]: hasVariant(
                                  $state,
                                  'productFamily',
                                  'diy',
                                ),
                                [sty.includedMwproductFamily_fs]: hasVariant(
                                  $state,
                                  'productFamily',
                                  'fs',
                                ),
                                [sty.includedMwproductFamily_ttl]: hasVariant(
                                  $state,
                                  'productFamily',
                                  'ttl',
                                ),
                              },
                            )}
                          >
                            {p.renderPlasmicSlot({
                              defaultContents: (
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__shWbw,
                                  )}
                                >
                                  {"What's covered"}
                                </div>
                              ),
                              value: args.includedMobile,
                              className: classNames(
                                sty.slotTargetIncludedMobile,
                                {
                                  [sty.slotTargetIncludedMobileproductFamily_fs]:
                                    hasVariant($state, 'productFamily', 'fs'),
                                  [sty.slotTargetIncludedMobileproductFamily_ttl]:
                                    hasVariant($state, 'productFamily', 'ttl'),
                                },
                              ),
                            })}
                          </div>
                        ) : null}
                        {(
                          hasVariant($state, 'productFamily', 'ttl')
                            ? true
                            : true
                        ) ? (
                          <div
                            data-plasmic-name={'includedSw'}
                            data-plasmic-override={overrides.includedSw}
                            className={classNames(
                              projectcss.all,
                              sty.includedSw,
                              {
                                [sty.includedSwproductFamily_diy]: hasVariant(
                                  $state,
                                  'productFamily',
                                  'diy',
                                ),
                                [sty.includedSwproductFamily_fs]: hasVariant(
                                  $state,
                                  'productFamily',
                                  'fs',
                                ),
                                [sty.includedSwproductFamily_ttl]: hasVariant(
                                  $state,
                                  'productFamily',
                                  'ttl',
                                ),
                              },
                            )}
                          >
                            {p.renderPlasmicSlot({
                              defaultContents: (
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__wcX9R,
                                  )}
                                >
                                  {"What's covered"}
                                </div>
                              ),
                              value: args.includedStationary,
                              className: classNames(
                                sty.slotTargetIncludedStationary,
                                {
                                  [sty.slotTargetIncludedStationaryproductFamily_fs]:
                                    hasVariant($state, 'productFamily', 'fs'),
                                  [sty.slotTargetIncludedStationaryproductFamily_ttl]:
                                    hasVariant($state, 'productFamily', 'ttl'),
                                },
                              ),
                            })}
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                ) : null}
                {true ? (
                  <p.Stack
                    as={'div'}
                    data-plasmic-name={'button'}
                    data-plasmic-override={overrides.button}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.button, {
                      [sty.buttonproductFamily_diy]: hasVariant(
                        $state,
                        'productFamily',
                        'diy',
                      ),
                      [sty.buttonproductFamily_fs]: hasVariant(
                        $state,
                        'productFamily',
                        'fs',
                      ),
                      [sty.buttonproductFamily_ttl]: hasVariant(
                        $state,
                        'productFamily',
                        'ttl',
                      ),
                    })}
                  >
                    {true
                      ? p.renderPlasmicSlot({
                          defaultContents: (
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__pb2Cz,
                              )}
                            >
                              {'Start for free\nPay only when you file*'}
                            </div>
                          ),
                          value: args.button,
                        })
                      : null}
                  </p.Stack>
                ) : null}
              </p.Stack>
            ) : null}
            {true ? (
              <div
                data-plasmic-name={'accordion'}
                data-plasmic-override={overrides.accordion}
                className={classNames(projectcss.all, sty.accordion, {
                  [sty.accordionproductFamily_diy]: hasVariant(
                    $state,
                    'productFamily',
                    'diy',
                  ),
                  [sty.accordionproductFamily_fs]: hasVariant(
                    $state,
                    'productFamily',
                    'fs',
                  ),
                  [sty.accordionproductFamily_ttl]: hasVariant(
                    $state,
                    'productFamily',
                    'ttl',
                  ),
                })}
              >
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <ProductItemDetail
                      className={classNames(
                        '__wab_instance',
                        sty.productItemDetail___7R5Un,
                      )}
                      productFamily={[]}
                    />
                  ),

                  value: args.accordion,
                })}
              </div>
            ) : null}
          </p.Stack>
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    'root',
    'container',
    'img',
    'menu',
    'content',
    'logoBox',
    'title',
    'rows',
    'ratingsRow',
    'otherDetailsRow',
    'price',
    'state',
    'includedMw',
    'includedSw',
    'button',
    'accordion',
  ],
  container: [
    'container',
    'img',
    'menu',
    'content',
    'logoBox',
    'title',
    'rows',
    'ratingsRow',
    'otherDetailsRow',
    'price',
    'state',
    'includedMw',
    'includedSw',
    'button',
    'accordion',
  ],
  img: ['img'],
  menu: ['menu'],
  content: [
    'content',
    'logoBox',
    'title',
    'rows',
    'ratingsRow',
    'otherDetailsRow',
    'price',
    'state',
    'includedMw',
    'includedSw',
    'button',
    'accordion',
  ],
  logoBox: ['logoBox'],
  title: ['title'],
  rows: [
    'rows',
    'ratingsRow',
    'otherDetailsRow',
    'price',
    'state',
    'includedMw',
    'includedSw',
  ],
  ratingsRow: ['ratingsRow'],
  otherDetailsRow: [
    'otherDetailsRow',
    'price',
    'state',
    'includedMw',
    'includedSw',
  ],
  price: ['price'],
  state: ['state'],
  includedMw: ['includedMw'],
  includedSw: ['includedSw'],
  button: ['button'],
  accordion: ['accordion'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: 'div';
  container: 'div';
  img: 'img';
  menu: 'div';
  content: 'div';
  logoBox: 'div';
  title: 'div';
  rows: 'div';
  ratingsRow: 'div';
  otherDetailsRow: 'div';
  price: 'div';
  state: 'div';
  includedMw: 'div';
  includedSw: 'div';
  button: 'div';
  accordion: 'div';
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductItem__VariantsArgs;
    args?: PlasmicProductItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProductItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProductItem__ArgsType,
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
          internalArgPropNames: PlasmicProductItem__ArgProps,
          internalVariantPropNames: PlasmicProductItem__VariantProps,
        }),
      [props, nodeName],
    );
    return PlasmicProductItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicProductItem';
  } else {
    func.displayName = `PlasmicProductItem.${nodeName}`;
  }
  return func;
}

export const PlasmicProductItem = Object.assign(
  // Top-level PlasmicProductItem renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    container: makeNodeComponent('container'),
    img: makeNodeComponent('img'),
    menu: makeNodeComponent('menu'),
    content: makeNodeComponent('content'),
    logoBox: makeNodeComponent('logoBox'),
    title: makeNodeComponent('title'),
    rows: makeNodeComponent('rows'),
    ratingsRow: makeNodeComponent('ratingsRow'),
    otherDetailsRow: makeNodeComponent('otherDetailsRow'),
    price: makeNodeComponent('price'),
    state: makeNodeComponent('state'),
    includedMw: makeNodeComponent('includedMw'),
    includedSw: makeNodeComponent('includedSw'),
    button: makeNodeComponent('button'),
    accordion: makeNodeComponent('accordion'),

    // Metadata about props expected for PlasmicProductItem
    internalVariantProps: PlasmicProductItem__VariantProps,
    internalArgProps: PlasmicProductItem__ArgProps,
  },
);

export default PlasmicProductItem;
/* prettier-ignore-end */
