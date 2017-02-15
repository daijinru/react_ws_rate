'use strict';

var fs = require('fs');
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 3001 });

// wss 是 已配置端口号的websocket对象
exports.websocket = function() {
    var time = 1;
    wss.on('connection', function(ws) {
        console.log('client connected');
        ws.on('message', function(msg) {
            msg = time + '. ' + msg + '\n';
            console.log(msg);
            ws.send(msg);
            time++;
            fs.writeFile('chat.text', msg, { 'flag': 'a' }, function(err) {
                if (err) throw err;
                console.log('saved!')
            })
        })
    })
}
