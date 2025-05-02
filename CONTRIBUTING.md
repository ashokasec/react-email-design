# Contributing to reactemail.design

Thank you for helping improve reactemail.design! This guide will help you get started quickly.

## Quick Start

```bash
# 1. Fork and clone the repository
git clone https://github.com/your-username/react-email-design
cd reactemail.design

# 2. Install dependencies
yarn install

# 3. Start the development server
yarn dev

# 4. Create a branch for your changes
git checkout -b your-feature-name
```

## What You Can Contribute

- **New Components**: Add entirely new email components
- **Component Variants**: Create new styles for existing components
- **Bug Fixes**: Fix issues in existing components or documentation
- **Documentation**: Improve guides and examples

## Adding Components

### New Component Type

1. Create a folder in `./content/components/` (example: `badge/`)
2. Add a `meta.mdx` file:

```md
---
title: Badge
description: A badge component for React.email with Tailwind CSS
slug: badge
path: /docs/components/badge
ogTitle: Badge Component
ogDescription: A production-ready badge component for marketing and transactional emails.
---
```

3. Add your component file (example: `rounded-badge.tsx`) with a default export

### New Variant for Existing Component

1. Navigate to the component's folder (example: `./content/components/button/`)
2. Add your variant file (example: `shiny-button.tsx`) with a default export

## Submitting Your Changes

```bash
# 1. Format and lint your code
yarn run biome:check

# 2. Ensure your code builds successfully
yarn build

# 3. Commit your changes with a clear message
git commit -m "feat(button): add shiny-button variant"

# 4. Push your branch
git push origin your-feature-name

# 5. Open a pull request on GitHub
```

That's it! Your component will automatically appear in the documentation.

## Need Help?

If you have questions, open an issue on GitHub or reach out to the maintainers.

Happy contributing! 🚀
