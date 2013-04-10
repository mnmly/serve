var exec = require('child_process').exec;

module.exports = function(req, res, next){
  exec( 'make', next );
}
