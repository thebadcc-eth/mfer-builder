window.onload = function() {
mergeImages(['/background/blue.png', '/type/ape mfer.png'])
  .then(b64 => document.querySelector('img').src = b64);
};
