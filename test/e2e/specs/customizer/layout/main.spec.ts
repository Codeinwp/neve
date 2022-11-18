import { test } from '@playwright/test';
import { checkSinglePost } from './single-post-settings.spec';
import { checkHomepageSettings } from './hompage-settings.spec';

test.describe(checkSinglePost);
test.describe(checkHomepageSettings);
