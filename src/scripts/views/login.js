var $=require('../utils/jquery-3.1.1.min.js');
var common = require('../utils/common.util.js');
var body   = require('../tpls/login/login.string');
$(function(){
	common.renderBody($('body'), body);	
})