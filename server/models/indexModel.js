'use strict';

const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 3001 });

const indexModels = {
    wsChat: function(req, res, next) {
        wss.on('connection', function(ws) {
            console.log('client connected');
            ws.on('message',function(message){
            	console.log(message);
            })
        })

        res.render('index', {
            title: 'chat'
        })
    }
}

module.exports = indexModels;
