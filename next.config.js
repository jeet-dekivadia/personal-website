module.exports = {
  async rewrites() {
    return [
      {
        source: '/projects/:slug',
        destination: '/projects/[slug]',
      },
    ];
  },
};
