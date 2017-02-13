'use strict';

var indexModels = {
	index:function(req,res,next){
		res.render('index',{
			title:'express'
		})
	}
}

module.exports = indexModels;