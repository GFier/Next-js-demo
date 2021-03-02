module.exports = {
  async redirects() {
    return [
      {
        source: '/nextjs',
        destination: 'https://nextjs.org',
        permanent: true,
      },
    ]
  },
}
