module.exports = {
  apps: [
    {
      name: 'arcadeio-server',
      script: './build/index.js',
      watch: false,
	ignore_watch : ["*.logs"],
      env: {
        APP_PORT: 5000,
        NODE_ENV: 'development',
        DATABASE:
          'mongodb+srv://test:test1010@cluster0.po862zr.mongodb.net/arcadeio?retryWrites=true&w=majority',
        DATABASE_TEST:
          'mongodb+srv://test:test1010@cluster0.po862zr.mongodb.net/arcadeio?retryWrites=true&w=majority',
        API_VERSION: 'v1',
        TOKEN_KEY: '23412214521-215213-51325215216543-643643734-7437436243'
      },
      env_production: {
        APP_PORT: 5000,
        NODE_ENV: 'production',
        DATABASE:
          'mongodb+srv://test:test1010@cluster0.po862zr.mongodb.net/arcadeio?retryWrites=true&w=majority',
        DATABASE_TEST:
          'mongodb+srv://test:test1010@cluster0.po862zr.mongodb.net/arcadeio?retryWrites=true&w=majority',
        API_VERSION: 'v1',
        TOKEN_KEY: '23412214521-215213-51325215216543-643643734-7437436243'
      }
    }
  ]
};
