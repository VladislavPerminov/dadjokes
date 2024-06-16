module.exports = {
  apps: [
    {
      name: "dadjokes-angger",
      script: "./server.js",
      exp_backoff_restart_delay: 100,
      max_memory_restart: "1G",
      max_restarts: 10,
      min_uptime: 2000,
    },
  ],
};
