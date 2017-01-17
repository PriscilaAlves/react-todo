var moment = require("moment");

console.log(moment().format());

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1484645064;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ h:mm a'));

// January 3rd, 2016 @ 12:12 AM
console.log('New current moment ', currentMoment.format('MMMM Do, YYYY @ hh:mm A'));
