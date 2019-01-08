function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
    });
    return vars;
}

var team = getUrlVars()["team"];
if (typeof team !== 'undefined'){
    getApi(team, function(data){
        $.each(data[0][1].name, function(i, value){
            $("#test").append(value + '<br>');
        });
        /*$.each(data[0][1].info, function(i, value){
            $("#test").append(value + '<br>');
        });
        */
        $("#test").append(data[0][1].info + '<br>');
        
    });
}else{
    window.location = "/";
}
function getApi(team, callback){
    $.ajax({
        method: 'GET',
        url:'https://janadmin.herokuapp.com/api/' + team,
        header:{

        },

        success: function (data){
            console.log(data);
            callback(data);
        },
        error: function (error){
            console.log(error);
        }
    });
}
