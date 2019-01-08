// get upm package path from node_modules.
var path = require('path');

exports.Index = function(req,res){
    res.sendFile(path.resolve('public/html/main.html'));
};

exports.Team = function(req,res){
    res.sendFile(path.resolve('public/html/team.html'));
};

exports.Contact = function(req,res){
    res.sendFile(path.resolve('public/html/contact.html'));
};