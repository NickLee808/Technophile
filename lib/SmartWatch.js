extend = require('./helper');
Watch = require('./Watch');
Tablet = require('./Tablet');

SmartWatch = function (){
  Watch.call(this, 'Nintendo DS');
  Tablet.call(this, 'Nintendo DS');
};

extend(SmartWatch, Watch);
extend(SmartWatch, Tablet);

module.exports = SmartWatch;