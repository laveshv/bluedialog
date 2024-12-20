// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';

import AppLayout from '~components/app-layout';
import Box from '~components/box';

import ScreenshotArea from '../utils/screenshot-area';
import labels from './utils/labels';

import styles from './styles.scss';

export default function () {
  return (
    <ScreenshotArea gutters={false}>
      <AppLayout
        ariaLabels={labels}
        disableContentPaddings={true}
        breadcrumbs={
          <nav aria-label="Breadcrumbs" className={styles.highlightBorder}>
            Breadcrumbs
          </nav>
        }
        notifications={
          <div className={styles.highlightBorder}>
            <Box variant="h2">Notifications</Box>
          </div>
        }
        content={
          <div className={styles.highlightBorder}>
            <Box variant="h1">Content</Box>
          </div>
        }
        navigation={<Box variant="h2">Navigation</Box>}
        tools={<Box variant="h2">Tools</Box>}
      />
    </ScreenshotArea>
  );
}
