
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
    'index.csr.html': {size: 64031, hash: 'e52440359c0c04f34f8c7aca267308804ff3bc172b5e84463ec70b9df4a2dd74', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17138, hash: '8ac7b1d738b3ac1408e39f229414ea678d2aa4e87031d20bee8c27d7953b21b8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'search/index.html': {size: 125377, hash: '10b8ac0b1baa5ef49b420d2c611cec3b394ebf287a526f8b87ab43650b42897c', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'tracks/index.html': {size: 178380, hash: 'f04ee885fe276f3b206f1b6632b8348fb732524973b93d7c41e6426271ee65d4', text: () => import('./assets-chunks/tracks_index_html.mjs').then(m => m.default)},
    'styles-2E7SIUMW.css': {size: 94301, hash: '7eFZMhvfuO8', text: () => import('./assets-chunks/styles-2E7SIUMW_css.mjs').then(m => m.default)}
  },
};
