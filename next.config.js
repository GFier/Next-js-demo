module.exports = {
  async redirects() {
    return [
      {
        source: '/nextjs',
        destination: 'https://nextjs.org',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/GFier/Next-js-demo',
        permanent: true,
      },
    ]
  },
}
