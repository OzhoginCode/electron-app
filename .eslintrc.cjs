module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
    '@electron-toolkit',
  ],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'import/extensions': 'off',
    'react/function-component-definition': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-filename-extension': [0,
      {
        extensions: [
          '.tsx',
        ],
      },
    ],
  },
};
