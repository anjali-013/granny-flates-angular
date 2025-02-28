
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/granny-flates-angular/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 49764, hash: 'aed8b9b646ae755ab040b55890ecde8ffcfea8fdeb19370dd4d1967a7e342fe5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2951, hash: 'fe927ff70c4a1dffd49a8b71e47c201ef6d47c60d18aa17a44491ca8b77e7bf9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-BMNL6HU4.css': {size: 109093, hash: 'P2BuIo7N8mw', text: () => import('./assets-chunks/styles-BMNL6HU4_css.mjs').then(m => m.default)}
  },
};
