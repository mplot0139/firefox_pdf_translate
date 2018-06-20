var selText;

// create script element
var scriptElement = document.createElement("script");
scriptElement.setAttribute("id", "jsonpRequest");

// define callback function
function trCallback(translation) {
     // display result
    console.log(translation.text);
    // remove selection
    selText.collapseToStart();
    // remove script element 
}
 var apiData = {
        key : "trnsl.1.1.20150813T203536Z.e0ad944a6a876ea6.14d96d09f8f99dd380e0bb2079112a134c649349",
        baseURI : "https://translate.yandex.net/api/v1.5/",
        trJSONP : "tr.json/translate?"
    };

    // Listen for a 'keydown' event on 't'
  document.addEventListener("keydown", function(e){
        if (e.key === 't')
        {
        // obtain selected text, convert to string 
        selText = window.getSelection();
        var selString = selText.getRangeAt(0).toString().replace(/^\s+|\s+$/g,"");
        // prepare URI for JSONP request
        uri = apiData.baseURI + apiData.trJSONP + "key=" + apiData.key + "&lang=es-en" + "&text=" + selString + "&callback=trCallback";
        // set source attribute
        scriptElement.setAttribute("src", uri);       
        }
        //make request by adding script to a document
        document.body.appendChild(scriptElement);

  });

