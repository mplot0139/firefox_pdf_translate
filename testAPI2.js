function getJASONP(url, callback) {
    var cbnum = "cb" + getJASONP.counter++;
    var cbname = "getJASONP." + cbnum;
    url += "&callback=" + cbname;
    
    var script = document.createElement("script");
    
    getJASONP[cbnum] = function(response) {
        try {
            callback(response);
        }
        finally {
            delete getJASONP[cbnum];
            script.parentNode.removeChild(script);
        }
    };
    script.src = url;
    document.body.appendChild(script);
}
getJASONP.counter = 0;

function cbDisplay (resp) {
    //console.log(resp.text);
    alert(resp.text)
}

var apiData = {
        key : "trnsl.1.1.20150813T203536Z.e0ad944a6a876ea6.14d96d09f8f99dd380e0bb2079112a134c649349",
        baseURI : "https://translate.yandex.net/api/v1.5/",
        trJSONP : "tr.json/translate?"
    };
    
document.addEventListener("keydown", function(e) {
    switch (e.key) {
        case 'e':
            var selObject = window.getSelection();
            var selText = selObject.getRangeAt(0).toString().replace(/^\s+|\s+$/g, "");
            var url = apiData.baseURI + apiData.trJSONP + "key=" + apiData.key + "&lang=es-en" + "&text=" + selText;
            break;
        case 't':
            var selObject = window.getSelection();
            var selText = selObject.getRangeAt(0).toString().replace(/^\s+|\s+$/g, "");
            var url = apiData.baseURI + apiData.trJSONP + "key=" + apiData.key + "&lang=es-ru" + "&text=" + selText;
            break;
        default:
    }
        getJASONP(url, cbDisplay);
        selObject.collapseToStart();
});