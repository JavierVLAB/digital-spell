# digital-spell

## TODO

- aplicar limpieza y proteccion
- aplicar magia personal
- poner un simbolo de información y una alerta para explicar lo que se hace
- mejorar la maquetacion, sobretodo del sketch pad
- modificar el nombre del archivo que se descarga

## Cosas

- Importante hemos instalado Vuetify, para que funcionara tuve que instalar el plugin https://vuetifyjs.com/en/getting-started/installation/
- hemos usado https://www.npmjs.com/package/vue-p5
- y el ejemplo https://github.com/Kinrany/vue-p5-example/

## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## How to deploy on github

usando este link https://www.neoguias.com/como-publicar-aplicacion-vue-github-pages/

el procedimiento es:
- Haces cambios en main
- git add and commit
- te pasas a gh-pages, git checkout gh-pages
- merge con gh-pages, lo haces desde desktop
- haces yarn build
- git add dist
- git commit -m "mensaje de update de hoy"
- git subtree push --prefix dist origin gh-pages
- vuelve a main

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

