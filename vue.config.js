// module.exports = {
//   publicPath: '/superPowerGems/dist/'
// }
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/superPowerGems/dist/'
    : '/',
};
