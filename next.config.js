const isProd = process.env.NODE_ENV === 'production';
const repoName = 'kevinmendez';

module.exports = {
  assetPrefix: isProd ? `/${repoName}/` : '',
  basePath: isProd ? `/${repoName}` : '',
  output: 'export',
};