module.exports = (config, kernel) => {
  const x = {
    "win32": {
      "nvidia": `pip install torch torchvision torchaudio ${config.xformers ? 'xformers' : ''} --index-url https://download.pytorch.org/whl/cu121`,
      "amd": "pip install torch-directml torchaudio torchvision numpy==1.26.4",
      "cpu": "pip install torch torchvision torchaudio"
    },
    "darwin": "pip install --pre torch==2.3.1 torchvision torchaudio==2.3.1",
    "linux": {
      "nvidia": `pip install torch torchvision torchaudio ${config.xformers ? 'xformers' : ''} --index-url https://download.pytorch.org/whl/cu121`,
      "amd": "pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm6.0",
      "cpu": "pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu"
    }
  }
  if (config.torch) {
    if (kernel.platform === "darwin") {
      return x[kernel.platform]
    } else {
      return x[kernel.platform][kernel.gpu]
    }
  }
}
