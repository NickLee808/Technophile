extend = require('./helper');
GameConsole = require('./GameConsole');
WebBrowser = require('./WebBrowser');

NintendoDS = function (){
  GameConsole.call(this, 'Nintendo DS');
  WebBrowser.call(this, 'Nintendo DS');
};

extend(NintendoDS, GameConsole);
extend(NintendoDS, WebBrowser);

module.exports = NintendoDS;