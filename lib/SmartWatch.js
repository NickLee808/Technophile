extend = require('./helper');
Watch = require('./Watch');
Tablet = require('./Tablet');

SmartWatch = function (bodyPart){
  this.bodyPart = bodyPart;
};

extend(SmartWatch, Watch);
extend(SmartWatch, Tablet);

module.exports = SmartWatch;