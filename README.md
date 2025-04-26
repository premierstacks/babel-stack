# [Babel Stack](https://github.com/premierstacks/babel-stack) by [Tomáš Chochola](https://github.com/tomchochola)

The Babel Stack offers a curated set of pre-configured Babel setups and utilities designed to streamline the integration of Babel into modern JavaScript projects. It provides ready-to-use configurations and helper functions for various environments, including TypeScript, React, and StyleX, ensuring consistent code transpilation and enabling developers to adopt best practices with minimal setup effort.

## What is Premierstacks

[GitHub Organization → /premierstacks](https://github.com/premierstacks)

Premierstacks is a premier organization delivering a complete ecosystem of libraries, packages, and templates for full-stack web development. It provides end-to-end solutions for backend systems, APIs, and frontend interfaces built on PHP, Laravel, TypeScript, React, and Material Design 3.

Beyond code, Premierstacks focuses on creating a seamless development experience, offering support tools for planning, architecture, deployment, and long-term project maintenance. Each resource within the ecosystem is crafted with precision, adhering to strict quality standards, and designed to scale effortlessly.

From initial project planning and logical architecture to seamless development workflows and optimized production deployment, Premierstacks delivers tools engineered for excellence across every stage of the software lifecycle.

## Why Premierstacks

Premierstacks exists to solve the recurring challenges of modern software development: inconsistency, poor maintainability, and fragmented tooling. It offers a complete ecosystem of libraries, templates, and supporting tools, designed to streamline workflows, enforce best practices, and ensure long-term reliability.

Every component in Premierstacks is crafted with precision, following strict quality standards. From backend logic to frontend interfaces and infrastructure tooling, the focus remains on delivering scalable, future-proof, and seamless solutions. With Premierstacks, development becomes faster, cleaner, and more consistent—right from the first line of code to final deployment.

## What is Tomchochola

[GitHub Personal → /tomchochola](https://github.com/tomchochola)

The Tomchochola GitHub profile features a range of public and private repositories, including experimental tools, independent projects, and legacy systems. These repositories often represent unique solutions that exist outside the strict quality and structural guidelines of Premierstacks.

Here, you’ll find codebases that may belong to different ecosystems, technologies, or experimental workflows. Some projects serve specific use cases, while others are standalone solutions or serve as proof-of-concept prototypes. This profile is a playground for ideas, tools, and resources that might not fully align with the long-term goals of Premierstacks but still offer value and insight into various aspects of software development.

## About the Creator

Tomáš Chochola is a software architect, technical leader, and creator of the Premierstacks ecosystem. With years of experience in backend and frontend development, cloud infrastructure, and team management, he has established a reputation for delivering scalable, maintainable, and robust software solutions.

His expertise spans backend systems built on PHP and Laravel, frontend interfaces designed with React and Material Design 3, and efficient workflows powered by modern tooling and infrastructure solutions.

### Specializations

**Backend Development:** PHP, Laravel, JSON:API<br />
**Frontend Development:** TypeScript, React, Material Design 3<br />
**Tooling:** ESLint, Prettier, Webpack, PHPStan, PHP CS Fixer, Stylelint<br />

## Support the Creator

**[GitHub Sponsors -> /sponsors/tomchochola](https://github.com/sponsors/tomchochola)**

Premierstacks is now freely available under the Apache-2.0 license, offering high-quality tools, libraries, and templates to the developer community. While the ecosystem remains open and accessible, its growth, updates, and ongoing maintenance depend on individual support.

By sponsoring Tomáš Chochola on GitHub Sponsors, you directly contribute to the continued development, improvement, and long-term sustainability of Premierstacks. Every contribution supports the creation of reliable, scalable, and future-proof solutions for developers worldwide.

Your support makes a difference—thank you for being a part of this journey.

## License

**Apache-2.0**

**Copyright © 2025 Tomáš Chochola <chocholatom1997@gmail.com>**

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Module exports

Here are the available module exports:

```js
import {
  createBabelConfigBase,
  createBabelConfigTypescriptReact,
  applyBabelPresetReact,
  createBabelConfigTypescriptReactStylex,
  applyBabelPluginStylex,
  applyBabelPresetTypescript,
  createBabelConfigTypescript,
} from '@premierstacks/babel-stack';
```

## Templates

Explore the predefined templates for various configurations in the [/templates](/templates) directory. These templates provide quick-start setups for different environments.

**[/templates/typescript_react_stylex.template](/templates/typescript_react_stylex.template)**<br />
**[/templates/typescript_react.template](/templates/typescript_react.template)**<br />
**[/templates/typescript.template](/templates/typescript.template)**<br />
**[/templates/base.template](/templates/base.template)**<br />

## Getting Started

**1. Review the documentation and license**

Ensure this package fits your needs and that you agree with the terms.

**2. Install the package**

Install using npm:

```bash
npm install --save-dev github:premierstacks/babel-stack#semver:^2.0
```

**3. Select a template**

Choose one of the predefined configuration templates from the [/templates](/templates) directory that best suits your project’s needs.

Use the `cp` command to copy it into your project as `/babel.config.js`:

```bash
cp ./node_modules/@premierstacks/babel-stack/templates/typescript_react_stylex.template ./babel.config.js
# or
cp ./node_modules/@premierstacks/babel-stack/templates/typescript_react.template ./babel.config.js
# or
cp ./node_modules/@premierstacks/babel-stack/templates/typescript.template ./babel.config.js
# or
cp ./node_modules/@premierstacks/babel-stack/templates/base.template ./babel.config.js
```

**4. CLI**

Execute commands:

```bash
# run transpilations
./node_modules/.bin/babel ./src --out-dir ./dist
```

## Contact

**📧 Email: <chocholatom1997@gmail.com>**<br />
**👨 GitHub Personal: [https://github.com/tomchochola](https://github.com/tomchochola)**<br />
**🏢 GitHub Organization: [https://github.com/premierstacks](https://github.com/premierstacks)**<br />
**💰 GitHub Sponsors: [https://github.com/sponsors/tomchochola](https://github.com/sponsors/tomchochola)**<br />
