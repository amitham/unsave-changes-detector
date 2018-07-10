var oldModel;

exports.Initialize = function (object) {
  oldModel = object;
}

exports.HasChanged = function (object) {
  var newModel = object;
  return !isEqual(oldModel, newModel);
}

function isEqual(oldModel, newModel) {
  for (let prop in oldModel) {
    if (typeof oldModel[prop] === 'object') {
      return isEqual(oldModel[prop], newModel[prop]);
    }

    if (oldModel[prop] !== newModel[prop]) {
      return false;
    }
  }
  return true;
}
