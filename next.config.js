const crypto = require('crypto');

// Next 9 / webpack 4 and babel-loader hash with md4, which OpenSSL 3 (Node 17+)
// no longer provides, so any build fails with
// "error:0308010C:digital envelope routines::unsupported".
// Map md4 onto a supported algorithm; these hashes are only used for build
// fingerprints and loader cache keys.
const createHash = crypto.createHash;
crypto.createHash = (algorithm, options) =>
  createHash(algorithm === 'md4' ? 'sha256' : algorithm, options);

module.exports = {
  webpack: (config) => {
    config.output.hashFunction = 'sha256';
    return config;
  },
};
