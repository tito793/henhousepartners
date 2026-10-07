# GitHub Pages setup

The `docs/` directory contains an exact copy of the verified `dist/` website and is ready for branch-based GitHub Pages publishing.

1. Open repository Settings → Pages.
2. Choose **Deploy from a branch**.
3. Select **main** and **/docs**, then save.

The default website address will be https://tito793.github.io/henhousepartners/ after a successful Pages deployment. No custom domain or DNS changes are included.

This repository is private. GitHub Pages for private repositories requires an eligible paid GitHub plan. Keep it private unless you deliberately choose to publish the source code.

For future updates, run the build described in README.md and copy the complete contents of `dist/` into `docs/` before committing. The `.nojekyll` file in `docs/` should remain in place.
