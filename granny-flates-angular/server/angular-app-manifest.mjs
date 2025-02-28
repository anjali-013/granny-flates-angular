
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 1925, hash: '5851eb8f6ddb1c7032dedbce1d728a4e9d9a57a86404d4dd50277881bdb31f6d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2465, hash: '9abeefbb4f354bd248c62f472e1495cbd209a44af24ae43c59e97a922f711952', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
