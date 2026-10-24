# @x12i/mapix-abstraction-resolver usage example

Explain-only abstract lens resolution for Mapix.

This consuming application demonstrates **explain how an abstract lens selects a concrete entity** using the published npm package, pinned to `1.0.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Explain how an abstract lens resolves to concrete bindings.
- Inspect the fallback explanation when live preview is unavailable.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/mapix-abstraction-resolver)
- [Implementation monorepo](https://github.com/x12i/mapix)
- [Reviewed package source](https://github.com/x12i/mapix/tree/050d49774c2e81b3ec9daba4fb4cf6869179e5f1/packages/abstraction-resolver)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

The records, callers, inference outputs and backend responses in these examples are synthetic. The example checks a local consumer workflow; no database, semantic model, remote promotion, or real similarity index is contacted. A generated mapping proposal still needs human review before production use.
