var method = (function defineMethod() {
  var instances = new WeakMap();

  return function method(obj, methodName, fn) {
    Object.defineProperty(obj, methodName, {
      get() {
        if (!instances.has(this)) {
          instances.set(this, {});
        }
        var method = instances.get(this);
        if (!(methodName in method)) {
          method[methodName] = fn.bind(this);
        }
        return method[methodName];
      },
    });
  };
})();

function bindMethods(obj) {
  for (let ownProp of Object.getOwnPropertyNames(obj)) {
    if (typeof obj[ownProp] == "function") {
      method(obj, ownProp, obj[ownProp]);
    }
  }
}
