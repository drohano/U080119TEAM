function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
    });
    return vars;
}

var team = getUrlVars()["team"];
if (typeof team !== 'undefined'){
    alert(team);
}else{
    window.location = "/";
}

