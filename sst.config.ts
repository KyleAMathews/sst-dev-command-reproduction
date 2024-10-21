/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-dev-command-reproduction",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    new sst.x.DevCommand(`reproduction`,{
      dev: {
        title: `reproduction`,
        autostart: true,
        command: `bash -c 'false || echo "hi"'`
      }
    })
  },
});
