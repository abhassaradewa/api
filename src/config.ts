// Development Environment Configurations
const DEV = {
  app: {
    port: 8070,
    version: '0.0.1'
  },
  db: {
    host: 'adAdmin:ADaDMIN2020@ad-dev-zwwts.mongodb.net',
    name: 'ad-dev'
  }
};


// Production Environment Configurations
const PROD = {
  app: {
    port: 8070,
    version: '0.0.1'
  },
  db: {
    host: 'adAdmin:ADaDMIN2020@ad-dev-zwwts.mongodb.net',
    name: 'ad-prod'
  }
};

const config = [DEV, PROD];

module.exports = config[0];
