# Todo App

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## 1/ Installation

* `git clone https://github.com/gtechsltn/TodoApp_Ember_5_4.git`
* `cd todo-app`
* `npm install`

### 1.1/ Environment

* Windows 11 64-bit
* [Git for Windows](https://gitforwindows.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Google Chrome](https://www.google.com/intl/en/chrome/)
* [Node.js v20.10 (LTS)](https://nodejs.org/download/release/latest-v20.x/)
* [Ember.js v5.4 (LTS)](https://emberjs.com/releases/lts/)
* [Ember Inspector for Google Chrome](https://chromewebstore.google.com/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)

### 1.2/ Ember-CLI

* `npm install -g ember-cli@5.4`
* `ember new TodoApp --no-welcome --lang en`
* `ember generate component --help`
* `ember serve`

### 1.3/ Formatting on VS Code

+ [Format with Prettier](https://www.educative.io/answers/how-to-set-up-prettier-and-automatic-formatting-on-vs-code)

### 1.4/ Favicon

+ [Add a favicon](https://itecnote.com/tecnote/how-to-use-a-favicon-with-ember-cli/)

## Development

* `ember install ember-cli-less`
* `ember install ember-cli-sass`
* `ember install @ember/jquery`
```
import $ from 'jquery'; // this will also work and we will use '$' to reference to jQuery`
```
* `ember install ember-bootstrap`
* `ember install @fortawesome/ember-fontawesome`

### Ember.js Octane: Glimmer Component

```
# -gc stands for glimmer component
ember generate component my-component -gc

# -cc stands for classic component
ember generate component my-component -cc

# See the full set of options with this:
ember generate component --help
```

### Configure files
+ .vscode\launch.json
+ .vscode\settings.json
+ package.json
+ jsconfig.json
+ ember-cli-build.js

### Style Sheets
+ [Style Sheets](https://cli.emberjs.com/release/advanced-use/stylesheets/)

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specifically, the Ember 4.x release policy includes support for Google Chrome, Mozilla Firefox, Microsoft Edge, and Apple Safari on desktop and mobile. It does not include support for any version of Internet Explorer.

* Browser supports:
  + Google Chrome
  + Mozilla Firefox
  + Microsoft Edge
  + Apple Safari

* Browser does not supports:
  + Internet Explorer

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
* [Ember Guides](https://guides.emberjs.com/v5.4.0/getting-started/)

### Deprecations Added in Ember

* [Deprecations Added in Ember 5.x](https://deprecations.emberjs.com/v5.x/)
* [Deprecations Added in Ember 4.x](https://deprecations.emberjs.com/v4.x/)
* [Deprecations Added in Ember 3.x](https://deprecations.emberjs.com/v3.x/)
