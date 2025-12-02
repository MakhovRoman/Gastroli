module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-html",
    "stylelint-config-recommended-vue",
    "stylelint-config-rational-order", // <-- сортировка
  ],
  plugins: ["stylelint-order"],
overrides: [
  {
    files: ["**/*.vue", "**/*.html"],
    customSyntax: "postcss-html",
  },
  {
    files: ["**/*.scss"],
    customSyntax: "postcss-scss",
  },
]

};
