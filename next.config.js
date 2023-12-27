const path = require('path')
 
module.exports = {
  images: {
    domains: ['fastly.picsum.photos'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}