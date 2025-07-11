
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
    'index.csr.html': {size: 64031, hash: '8187e4ddcc78ca4b77af387a31cfbc87fb016659d697c8189271c0543abc5382', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17138, hash: '5b56ed4928d2be4e665c2704099d23112016bf4db1ccf1e4be8fe569b07e79c6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'search/index.html': {size: 127712, hash: '9d77f32a5f2552d0653262ad321d7515d253067857e5e9cb9bea0d2df42e2163', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'tracks/index.html': {size: 181123, hash: '17fc3f8fbe4d1d4e4609ae9b5faeb85673d5cbbe648397e8e6288b0578eb1007', text: () => import('./assets-chunks/tracks_index_html.mjs').then(m => m.default)},
    'styles-2E7SIUMW.css': {size: 94301, hash: '7eFZMhvfuO8', text: () => import('./assets-chunks/styles-2E7SIUMW_css.mjs').then(m => m.default)}
  },
};
