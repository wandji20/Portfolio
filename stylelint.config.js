module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-csstree-validator'],
  rules: {
    'csstree/validator': true,
    // Keep the widely supported (max-width: 600px) form rather than
    // rewriting media queries to range notation.
    'media-feature-range-notation': 'prefix',
  },
};
