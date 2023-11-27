module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "airbnb",
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "import/no-extraneous-dependencies": "off",
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'max-len': ['error', {'code': 120}]
  },
  "settings": {
    "import/resolver": {
      "eslint-import-resolver-custom-alias": {
        "alias": {
          "@": "./src"
        },
        "extensions": [".js", ".jsx"]
      }
    }
  },
}
