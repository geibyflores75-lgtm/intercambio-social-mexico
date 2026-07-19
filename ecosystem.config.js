module.exports = {
  apps: [
    {
      name: 'nestjs-backend',
      script: 'dist/main.js',
      instances: 'max',
      exec_mode: 'cluster',
      max_memory_restart: '800M',
      env: {
        NODE_ENV: 'production',
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      combine_logs: true,
      merge_logs: true,
    },
  ],
};