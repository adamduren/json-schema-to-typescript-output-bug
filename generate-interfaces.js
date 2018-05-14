const { compile, compileFromFile } = require('json-schema-to-typescript');

const options = {
  bannerComment: '',
  declareExternallyReferenced: false,
  unreachableDefinitions: false,
};

return Promise.all([
  (async () => {
    console.log(await compileFromFile(`./correct.json`, options))
  })(),
  (async () => {
    console.log(await compileFromFile(`./incorrect.json`, options))
  })(),
]);
