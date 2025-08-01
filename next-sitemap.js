module.exports = {
  siteUrl: 'https://thecodecreater.com',
  generateRobotsTxt: true,
  exclude: ['/admin-dashboard', '/user-dashboard'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/admin-dashboard', '/user-dashboard'] },
    ],
    additionalSitemaps: [
      'https://thecodecreater.com/sitemap.xml',
    ],
  },
};
