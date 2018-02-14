module.exports = {
    apps: [{
      name: 'expresssvr',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-34-213-138-113.us-west-2.compute.amazonaws.com',
        key: '~/.ssh/expresssvr.pem',
        ref: 'origin/master',
        repo: 'https://github.com/illyay2017/testAwsRepo.git',
        path: '/home/ubuntu',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }