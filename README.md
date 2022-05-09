# digital-spell

## TODO

- 

## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## How to deploy on github

usando este link https://www.neoguias.com/como-publicar-aplicacion-vue-github-pages/

el procedimiento es:
- Haces cambios en main
- git add and commit
- merge con gh-pages, lo haces desde desktop
- haces yarn build
- git add dist
- git commit 
- git subtree push --prefix dist origin gh-pages

git checkout -b gh-pages

yarn build

git add dist

git commit -m "gh-pages commit"

git subtree push --prefix dist origin gh-pages

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

