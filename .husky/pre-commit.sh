#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

#yarn run type-check && yarn run lint && yarn run stylelint && yarn run test:cov && yarn run format && git add .
lint-staged
