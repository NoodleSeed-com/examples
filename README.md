# Noodle Seed examples

Example apps for [Noodle Seed](https://noodleseed.com), written in TypeScript with `@noodleseed/one`.
Each folder is a complete app you can copy out and run on its own.

- [hello](hello/README.md): the smallest deployable app; every core release deploys it as its proof.
- [weather](weather/README.md): HTTP connectors to a live public API, flows, and sandboxed compute.
- [food-ordering](food-ordering/README.md): React widgets, cart state, elicitation, handoff, the design
  set, and the WebMCP demo page.
- [customer-auth](customer-auth/README.md): customer sign-in (OIDC), roles and scopes, customer-routed APIs.
- [stateful-draft](stateful-draft/README.md): a useful brief before signup, carried into the account.
- [shopify-storefront](shopify-storefront/README.md): commerce on a real provider, composing Shopify's
  own MCP server.

## Run one

```sh
git clone https://github.com/NoodleSeed-com/examples.git
cp -R examples/hello my-app
cd my-app
npm install
npx noodle validate
npm test
```

`noodle validate` checks the app the way a deploy would; `npm test` runs the example's own tests.
Read the [Noodle Seed documentation](https://docs.noodleseed.com) to build on an example and deploy it.

## How this repository is updated

Noodle Seed publishes this repository automatically from its main repository whenever an example
changes there, so a change made here directly is replaced by the next update.

## License

Apache License 2.0; see [LICENSE](LICENSE).
