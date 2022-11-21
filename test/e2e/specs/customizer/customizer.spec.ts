import { test } from '@playwright/test';
import {checkLayout} from "./layout/layout.spec";
import {checkHFG} from "./hfg/hfg.spec";

// test.describe(checkLayout);
test.describe(checkHFG);
