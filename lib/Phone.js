function Phone(phoneNumber){
  this.phoneNumber = phoneNumber;
}

Phone.prototype.callPhone = function(phoneNumber){
  return this.phoneNumber + ' calls ' + phoneNumber;
};

module.exports = Phone;

//single argument 'phoneNumber'
//set public var phoneNumber to value of constructor argument
//class define 'callPhone' method that accepts phoneNumber
//return a status message "this phone number calls other phone number"