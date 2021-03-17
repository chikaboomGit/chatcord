const moment = require('moment');
require('moment-timezone'); 
moment.tz.setDefault("Asia/Seoul"); 

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('a h:mm ')
  };
}

module.exports = formatMessage;
