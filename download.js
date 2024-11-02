module.exports = {
  run: [{
    method: "fs.download",
    params: {
      uri: "{{input.uri}}",
      dir: "https://github.com/pinokiofactory/comfy.git/app/models/checkpoints"
    }
  }]
}
