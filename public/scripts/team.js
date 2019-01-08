function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
    });
    return vars;
}

var team = getUrlVars()["team"];
if (typeof team !== 'undefined'){
    getApi(team)
}else{
    window.location = "/";
}
function getApi(team){
    $.ajax({
        method: 'GET',
        url:'https://janadmin.herokuapp.com/api/' + team,
        header:{

        },

        success: function (data){
            console.log(data);
        },
        error: function (error){
            console.log(error);
        }
    });
}
