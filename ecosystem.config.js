module.exports = {
  apps: [
    {
      name: "main",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      instances: "1",
      exec_mode: "fork",
      max_memory_restart: "1500M",
      kill_timeout: 10000,
      env: {
        NODE_ENV: "production",
        PROCESS_TYPE: "APP",
      },
    },
    {
      name: "worker",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      instances: "1",
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: "9000",
        PROCESS_TYPE: "WORKER",
      },
    },
  ],
};
