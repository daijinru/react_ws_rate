'use strict';

var request = require('request');

var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 3001 });

function random(){
    var r = Math.round(Math.random() * 10);
    return r
}

exports.websocket = function(){
    wss.on('connection',function(ws){
        console.log('client connected');

        var t = setInterval(function(){
            ws.send(random())
        },1000)

        ws.on('message',function(msg){
            console.log(msg);
        })

        ws.on('close',function(){
            console.log('connection close');
            clearInterval(t);
        })
    })
}