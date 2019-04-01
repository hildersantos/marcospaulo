const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Marcos Paulo - Designer', // Navigation and Site Title
  siteTitleAlt: 'Marcos Paulo', // Alternative Site title for SEO
  siteTitleShort: 'Marcos Paulo', // short_name for manifest
  siteHeadline: 'Criando conceitos', // Headline for schema.org JSONLD
  siteUrl: 'https://marcospaulo.falkor.com.br', // Domain of your site. No trailing slash!
  siteLanguage: 'pt-br', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Designer em Salvador - BA',
  author: 'Marcos Paulo Bispo', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@marcospaulompbs', // Twitter Username
  ogSiteName: 'marcospaulompbs', // Facebook Site Name
  ogLanguage: 'pt_BR', // Facebook Language
  // googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
