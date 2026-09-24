# Accessibility-ready acceptance suite

These specs encode the acceptance criteria for the WordPress.org
accessibility-ready re-review (see `neve-pro-addon/a11y.md` for the full
audit and plan, and Trac ticket #285870 for the review).

**Most of these tests FAIL on purpose until remediation lands.** They
describe the required end state, not the current behavior. Fix until green;
once green, they become the permanent regression gate (a11y.md §12).

## Running

The suite has its own config — it runs **logged out** (the admin bar changes
the DOM) and needs no auth setup:

```bash
# 1. Provision fixtures (idempotent) on the target install:
bash bin/envs/a11y-ready/fixtures.sh /path/to/wp/root

# 2. Run the suite against it:
baseURL=http://your-site.test yarn test:a11y

# A single file:
baseURL=http://your-site.test yarn test:a11y submenu-keyboard
```

In CI the `a11y-ready` env (`bin/envs/a11y-ready/start.sh`) provisions
sample data plus these fixtures, and the suite runs from the
`playwright.yml` matrix entry (`specs: a11y-ready`, `envs: a11y-ready`,
executed via `yarn test:a11y`). The whole remediation — fixes plus this
suite — lands on `development` in one go once everything is green, so the
matrix entry gates from the first merged commit without reddening interim
PRs.

## Fixtures (bin/envs/a11y-ready/fixtures.sh)

| Fixture | Used by |
|---|---|
| Menu "A11y Test" on the primary location, two parents with children | submenu-keyboard |
| Post `a11y-comment-test` (open comments, one approved comment, inline content link) | focus-visibility, forms, links, axe |
| Page `a11y-pattern-test` containing every Neve block pattern | patterns, axe |
| Category `a11y-cat` with posts; `posts_per_page=3` for pagination | structure, links, axe |

## Spec map

| File | a11y.md | Review criterion |
|---|---|---|
| submenu-keyboard.spec.ts | §5.3 | 4 — Controls (names, roles, states) + the NVDA activation bug |
| focus-visibility.spec.ts | §5.2/§5.8 | 3 — Keyboard navigation (visible focus, tab order, stray tabindex) |
| structure.spec.ts | §5.1/§5.5 | 2 — Landmarks, 6 — Headings, duplicate IDs (neve#4557) |
| forms.spec.ts | §5.4 | 5 — Labelled form fields |
| links.spec.ts | §5.6/§5.7 | 7 — Underlined links, 8 — Ambiguous link text |
| patterns.spec.ts | §6 | Pattern source lint + rendered checks |
| axe.spec.ts | §12.1 | Automated WCAG A/AA sweep incl. 9 — Contrast |
| motion-context-window.spec.ts | §8 | 1 — Skip link, 11 — Reduced motion, 14 — New windows |

Not covered here (manual, §8 of a11y.md): reflow/zoom at 200–400%, text
spacing, screen-reader passes with NVDA/VoiceOver, and criterion 18
(recommended plugins). The Pro mega menu gets its own suite in the
neve-pro-addon repo once its JS module exists (a11y.md §7.1).
