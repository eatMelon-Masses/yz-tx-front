export default {
    proxy: {
      '/': {
        'target': 'http://hk.yiezi.ml:32247/',
        'changeOrigin': true,
        'pathRewrite': { '^/' : '' },
      },
    },
  }