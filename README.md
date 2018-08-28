# Vue UI-Toolkit

Yet another simple ui toolkit built to work with vue.

## Demo
https://vue-ui.yurderi.de/

## Installation
```
npm i --save @yurderi/vue-ui
```

```javascript
const Vue   = require('vue')
const VueUI = require('@yurderi/vue-ui')

require('@yurderi/vue-ui/assets/less/all.less')

Vue.use(VueUI)

// ... further code
```


## Contributing
To contribute you need to pull the project. The components are stored in the src/-Directory. While developing components it is recommended to run the preview with hot-reloading in the preview/-Directory.

If you are done run `npm run build` in the root directory.