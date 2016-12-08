extend = require('./helper');
Phone = require('./Phone');
Tablet = require('./Tablet');
GameConsole = require('./GameConsole');
WebBrowser = require('./WebBrowser');

SmartPhone = function (phoneNumber){
  Phone.call(this, phoneNumber);
  GameConsole.call(this, 'Smart Phone');
};

extend(SmartPhone, Phone);
extend(SmartPhone, Tablet);
extend(SmartPhone, GameConsole);
extend(SmartPhone, WebBrowser);

module.exports = SmartPhone;