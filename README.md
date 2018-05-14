This repo is to demonstrate a bug in `json-schema-to-typescript`.

When using `allOf` the `declareExternallyReferenced` option appears to be ignored.

To recreate:

```
# Checkout repo
> npm i
> node ./generate-interfaces.js
```

`generate-interfaces.js` generates interfaces for both `correct.json` and `incorrect.json`.

Both files are the same except for the objects that they externally reference.

`correct.json` references `external-object.json` which is just a standard object definition with one property. In the generated output `IExternalOject` is not defined as expected.

`incorrect.json` references `external-all-of.json` is the same as `external-object.json` with the exception that the object definition is wrapped in an `allOf` In the generated output `IExternalAllOf` is unexpectedly defined.

