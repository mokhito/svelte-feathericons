# svelte-feathericons

Customizable [Svelte] component using [Feather icons].

[Feather icons]: https://feathericons.com
[Svelte]: https://svelte.dev

## Install

```bash
$ npm i svelte-feathericons
```

or, if you use Yarn:

```bash
yarn add svelte-feathericons
```

## Usage

```html
<script>
  import Icon from "svelte-feathericons/Icon.svelte"
</script>

<Icon name="Airplay"/>
```

It is possible to set custom values for the following SVG attributes: class, width, height, fill, stroke and stroke-width.

For example:

```html
<script>
  import Icon from "svelte-feathericons/Icon.svelte"
</script>

<Icon name="Plus" width="16" height="16" stroke="blue"/>
```

## Building

In order to build the components locally (when a new version of Feather icons is released for example), proceed as follows:

Clone the repository and install the dependencies:

```bash
$ git clone https://github.com/mokhito/svelte-feathericons.git
$ cd svelte-feathericons
```

Run the build script:

```bash
$ npm run build
```

or with Yarn:

```bash
$ yarn build
```