module.exports = { 
  plugins: [
  {
    resolve: 'gatsby-plugin-express',
    options: {
      output: 'config/gatsby-express.json',
    }
  }

  ],
  pathPrefix: `/gatsby-express`
}