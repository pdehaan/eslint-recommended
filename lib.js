const eslintVersion = require("eslint/package.json").version;
const eslintRecommended = require("eslint/conf/eslint-recommended");

const rules = Object.entries(eslintRecommended.rules)
  .reduce((coll, [rule, config]) => {
      const severity = Array.isArray(config) ? config[0] : config;
      if (severity !== "off") {
        coll.set(rule, severity);
      }
      return coll;
    },
    new Map()
  );

module.exports = {
  rules,
  eslintVersion
};
