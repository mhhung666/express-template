module.exports = {
  apps: [
    {
      name: "server",
      script: "./dist/server.js",
      exec_mode: "cluster",
      instances: 4,
      watch: ".",
    },
  ],
};
