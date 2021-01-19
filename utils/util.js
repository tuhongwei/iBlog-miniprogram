export function mergeConfig(config0 = {}, config1 = {}) {
  return {
    ...config0,
    ...config1,
  };
}

export function combineUrl(url, host) {
  return `${host.replace(/\/$/, '')}/${url.replace(/^\//, '')}`;
}
