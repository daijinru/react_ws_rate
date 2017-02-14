'use strict';

const indexModels = {
    wsChat: function(req, res, next) {	

        res.render('index', {
            title: 'chat'
        })
    }
}

module.exports = indexModels;
