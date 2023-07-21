# README

## install

```sh
npm install
```

## commands

```json
 "scripts": {
    "clean": "forge clean && rimraf ./artifacts ./cache ./coverage ./types ./coverage.json",
    "type-gen": "yarn typechain",
    "compile": "cross-env TS_NODE_TRANSPILE_ONLY=true hardhat compile",
    "coverage": "hardhat coverage --solcoverjs ./.solcover.js --temp artifacts --testfiles \"test/**/*.ts\" && yarn typechain",
    "deploy": "hardhat deploy:Lock",
    "lint": "yarn lint:sol && yarn lint:ts && yarn prettier:check",
    "lint:sol": "solhint --max-warnings 0 \"contracts/**/*.sol\"",
    "lint:ts": "eslint --ignore-path ./.eslintignore --ext .js,.ts .",
    "postinstall": "DOTENV_CONFIG_PATH=./.env.example yarn typechain",
    "test": "hardhat test",
    "typechain": "cross-env TS_NODE_TRANSPILE_ONLY=true hardhat typechain"
  }
```

## Tests

```sh
forge test
```

## Dependencies

```sh
forge remappings > remappings.txt
```


