function error() {
  __DEV__ && console.log('%cLOGGER:', 'color: red', ...arguments);
}

function success() {
  __DEV__ && console.log('%cLOGGER:', 'color: green', ...arguments);
}

export default { error, success };