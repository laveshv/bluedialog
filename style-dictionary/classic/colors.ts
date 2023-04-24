// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { StyleDictionary } from '../utils/interfaces';
import { tokens as parentTokens } from '../visual-refresh/colors';
import merge from 'lodash/merge';
import { expandColorDictionary } from '../utils';

const tokens: StyleDictionary.ColorsDictionary = {
  colorGreyOpaque70: 'rgba(255, 255, 255, 0.7)',
  colorGreyTransparent: { light: 'rgba(0, 28, 36, 0.3)', dark: 'rgba(0, 0, 0, 0.3)' },
  colorGreyTransparentHeavy: { light: 'rgba(0, 28, 36, 0.5)', dark: 'rgba(0, 0, 0, 0.5)' },
  colorGreyTransparentLight: { light: 'rgba(0, 28, 36, 0.15)', dark: 'rgba(0, 0, 0, 0.3)' },
  colorBackgroundButtonLinkActive: { light: '{colorGrey200}', dark: '{colorGrey900}' },
  colorBackgroundButtonLinkHover: { light: '{colorGrey100}' },
  colorBackgroundButtonNormalActive: { light: '{colorGrey200}', dark: '{colorGrey900}' },
  colorBackgroundButtonNormalDefault: { dark: '{colorGrey700}' },
  colorBackgroundButtonNormalDisabled: { dark: '{colorGrey700}' },
  colorBackgroundButtonNormalHover: { light: '{colorGrey100}' },
  colorBackgroundButtonPrimaryActive: { light: '{colorBlue900}', dark: '{colorBlue400}' },
  colorBackgroundButtonPrimaryDefault: { light: '{colorBlue600}', dark: '{colorBlue400}' },
  colorBackgroundButtonPrimaryDisabled: { light: '{colorWhite}', dark: '{colorGrey700}' },
  colorBackgroundButtonPrimaryHover: { light: '{colorBlue700}', dark: '{colorBlue500}' },
  colorBackgroundCalendarToday: { dark: '{colorGrey900}' },
  colorBackgroundCellShaded: { light: '{colorGrey150}', dark: '{colorGrey900}' },
  colorBackgroundCodeEditorLoading: '{colorBackgroundCodeEditorStatusBar}',
  colorBackgroundContainerContent: { dark: '{colorGrey700}' },
  colorBackgroundContainerHeader: { light: '{colorGrey100}', dark: '{colorGrey750}' },
  colorBackgroundDropdownItemDefault: { dark: '{colorGrey700}' },
  colorBackgroundDropdownItemFilterMatch: { dark: '{colorBlue900}' },
  colorBackgroundHomeHeader: { light: '{colorBlack}', dark: '{colorBlack}' },
  colorBackgroundInputDisabled: { dark: '{colorGrey650}' },
  colorBackgroundItemSelected: { dark: '{colorBlue900}' },
  colorBackgroundLayoutMain: { light: '{colorGrey150}', dark: '{colorGrey900}' },
  colorBackgroundLayoutMobilePanel: '{colorBackgroundLayoutPanelContent}',
  colorBackgroundLayoutToggleActive: '{colorGrey700}',
  colorBackgroundLayoutToggleDefault: '{colorGrey700}',
  colorBackgroundLayoutToggleHover: '{colorGrey600}',
  colorBackgroundLayoutPanelTriggerActive: { light: '{colorBlue600}', dark: '{colorBlue400}' },
  colorBackgroundModalOverlay: { light: '{colorGreyOpaque90}', dark: '{colorGreyOpaque80}' },
  colorBackgroundProgressBarContentInFlash: { light: '{colorGreyOpaque70}', dark: '{colorGrey100}' },
  colorBackgroundSegmentHover: '{colorBackgroundButtonNormalDefault}',
  colorBackgroundStatusWarning: { dark: '{colorGrey700}' },
  colorBackgroundTilesDisabled: { dark: '{colorGrey700}' },
  colorBackgroundToggleCheckedDisabled: { dark: '{colorBlue700}' },
  colorBorderButtonNormalActive: '{colorBorderButtonNormalDefault}',
  colorBorderButtonNormalDefault: { light: '{colorGrey600}', dark: '{colorGrey500}' },
  colorBorderButtonNormalDisabled: { light: '{colorGrey300}', dark: '{colorGrey650}' },
  colorBorderButtonNormalHover: { light: '{colorGrey900}', dark: '{colorGrey400}' },
  colorBorderButtonPrimaryDisabled: { light: '{colorGrey300}', dark: '{colorGrey650}' },
  colorBorderCalendarGrid: { light: '{colorBorderDropdownItemDefault}', dark: '{colorBorderDividerDefault}' },
  colorBorderCalendarGridSelectedFocusRing: '{colorBorderItemFocused}',
  colorBorderCodeEditorPaneItemHover: { light: '{colorGrey550}', dark: '{colorGrey500}' },
  colorBorderContainerDivider: '{colorBorderDividerDefault}',
  colorBorderContainerTop: { light: '{colorGrey200}', dark: '{colorGrey700}' },
  colorBorderControlDefault: { light: '{colorGrey500}' },
  colorBorderDividerActive: '{colorGrey550}',
  colorBorderDividerDefault: { dark: '{colorGrey650}' },
  colorBorderDividerInteractiveDefault: '{colorGrey550}',
  colorBorderDividerPanelBottom: '{colorShadowSide}',
  colorBorderDividerPanelSide: 'transparent',
  colorBorderDropdownContainer: 'transparent',
  colorBorderDropdownItemHover: { dark: '{colorGrey500}' },
  colorBorderDropdownItemDimmedHover: `{colorBorderDropdownItemHover}`,
  colorBorderDropdownItemTop: '{colorBorderDropdownItemDefault}',
  colorBorderInputDefault: { dark: '{colorGrey500}' },
  colorBorderItemFocused: { light: '{colorBlue600}' },
  colorBorderItemPlaceholder: '{colorTransparent}',
  colorBorderPopover: { light: '{colorGrey300}', dark: '{colorGrey600}' },
  colorBorderSegmentActive: '{colorBorderSegmentHover}',
  colorBorderSegmentDefault: { light: '{colorGrey550}', dark: '{colorGrey500}' },
  colorBorderSegmentDisabled: '{colorBorderButtonNormalDisabled}',
  colorBorderSegmentHover: { light: '{colorGrey900}', dark: '{colorWhite}' },
  colorBorderStatusError: { dark: '{colorRed600}' },
  colorBorderStatusSuccess: { dark: '{colorGreen600}' },
  colorBorderStatusWarning: { light: '{colorGrey400}', dark: '{colorGrey500}' },
  colorBorderTabsDivider: { light: '{colorGrey400}', dark: '{colorGrey650}' },
  colorBorderTabsShadow: { light: '{colorBorderDividerDefault}' },
  colorBorderTabsUnderline: '{colorTextInteractiveHover}',
  colorBorderTilesDisabled: { light: '{colorTransparent}', dark: '{colorGrey650}' },
  colorBorderTutorial: { light: '{colorGrey400}', dark: '{colorGrey500}' },
  colorForegroundControlDefault: { dark: '{colorWhite}' },
  colorForegroundControlDisabled: { dark: '{colorGrey550}' },
  colorStrokeCodeEditorResizeHandler: '{colorGrey550}',
  colorStrokeCodeEditorGutterActiveLineDefault: { dark: '{colorGrey650}' },
  colorTextAccent: { light: '{colorBlue600}', dark: '{colorBlue400}' },
  colorTextBreadcrumbCurrent: { dark: '{colorGrey300}' },
  colorTextBreadcrumbIcon: { light: '{colorGrey550}' },
  colorTextButtonInlineIconDefault: '{colorTextInteractiveDefault}',
  colorTextButtonInlineIconHover: '{colorTextInteractiveHover}',
  colorTextButtonNormalActive: { light: '{colorGrey900}', dark: '{colorGrey100}' },
  colorTextButtonNormalDefault: { light: '{colorGrey600}', dark: '{colorGrey300}' },
  colorTextButtonNormalHover: { light: '{colorGrey900}', dark: '{colorGrey100}' },
  colorTextLinkButtonNormalDefault: '{colorTextButtonNormalDefault}',
  colorTextLinkButtonNormalHover: '{colorTextButtonNormalHover}',
  colorTextLinkButtonNormalActive: '{colorTextButtonNormalActive}',
  colorTextCalendarDayHover: '{colorTextDropdownItemHighlighted}',
  colorTextCalendarDaySelected: '{colorTextDropdownItemHighlighted}',
  colorTextCalendarMonth: '{colorTextBodySecondary}',
  colorTextColumnHeader: { dark: '{colorGrey450}' },
  colorTextColumnSortingIcon: { light: '{colorGrey550}', dark: '{colorGrey450}' },
  colorTextGroupLabel: '{colorTextLabel}',
  colorTextExpandableSectionDefault: '{colorTextInteractiveDefault}',
  colorTextExpandableSectionHover: '{colorTextInteractiveHover}',
  colorTextExpandableSectionNavigationIconDefault: '{colorTextIconCaret}',
  colorTextHeadingSecondary: { dark: '{colorGrey300}' },
  colorTextHomeHeaderDefault: { dark: '{colorGrey200}' },
  colorTextInputDisabled: { light: '{colorGrey500}' },
  colorTextInputPlaceholder: { light: '{colorGrey550}', dark: '{colorGrey500}' },
  colorTextInputPlaceholderDisabled: '{colorTextInputPlaceholder}',
  colorTextLabel: { light: '{colorGrey600}', dark: '{colorGrey450}' },
  colorTextLayoutPanelTriggerHover: { light: '{colorBlue600}', dark: '{colorBlue500}' },
  colorTextLayoutPanelTriggerActive: { light: '{colorWhite}', dark: '{colorGrey800}' },
  colorTextLinkDefault: { dark: '{colorBlue400}' },
  colorTextLinkHover: '{colorTextLinkDefault}',
  colorTextLinkInvertedHover: '{colorTextNotificationDefault}',
  colorTextLinkButtonUnderline: 'currentColor',
  colorTextLinkButtonUnderlineHover: 'currentColor',
  colorTextLinkPrimaryUnderline: 'transparent',
  colorTextPaginationPageNumberActiveDisabled: '{colorTextBodySecondary}',
  colorTextPaginationPageNumberDefault: { dark: '{colorTextInteractiveDefault}' },
  colorTextSegmentActive: { dark: '{colorGrey800}' },
  colorTextSegmentDefault: '{colorTextButtonNormalDefault}',
  colorTextStatusInfo: { dark: '{colorBlue400}' },
  colorBoardPlaceholderActive: { light: '{colorGrey300}', dark: '{colorGrey550}' },
  colorBoardPlaceholderHover: { light: '{colorBlue300}', dark: '{colorBlue600}' },
  colorDragPlaceholderActive: { light: '{colorGrey300}', dark: '{colorGrey550}' },
  colorDragPlaceholderHover: { light: '{colorBlue300}', dark: '{colorBlue600}' },
  colorDropzoneBackgroundActive: { light: '{colorGrey300}', dark: '{colorGrey550}' },
  colorDropzoneBackgroundHover: { light: '{colorBlue300}', dark: '{colorBlue600}' },
  colorDropzoneTextActive: { light: '{colorGrey600}', dark: '{colorGrey900}' },
  colorDropzoneTextHover: { light: '{colorBlue900}', dark: '{colorWhite}' },
};

const expandedTokens: StyleDictionary.ExpandedColorScopeDictionary = merge(
  {},
  parentTokens,
  expandColorDictionary(tokens)
);

export { expandedTokens as tokens };
export const mode: StyleDictionary.ModeIdentifier = 'color';
