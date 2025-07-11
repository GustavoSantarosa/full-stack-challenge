
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/tracks",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/tracks"
  },
  {
    "renderMode": 2,
    "route": "/search"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 64031, hash: 'ca648902c1fc88a85c7bede541f8936083e2859c2727f3a2889f7305e217024a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17138, hash: '4ccbcdc377df26ad4109bbd747d6b9a10824e9a7952a1ddf7067744f7131abf9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'search/index.html': {size: 125377, hash: '4aa8ddd11751f98f15f01cc359ad97187635920303c350dc6f6dc2955200ef8f', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'tracks/index.html': {size: 165534, hash: 'ca48f0683ff060ad96a18417f699ece065b66ab63ec8911f001b85b62dde8063', text: () => import('./assets-chunks/tracks_index_html.mjs').then(m => m.default)},
    'styles-TMA5GU7Q.css': {size: 88527, hash: '9NJrx7JJ3BU', text: () => import('./assets-chunks/styles-TMA5GU7Q_css.mjs').then(m => m.default)}
  },
};
