// A listener maybe for typing a character ? 

var textInput = document.querySelector('#ajax');
var xhr = new XMLHttpRequest();

textInput.oninput = function() {
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            createDataSet(data);
        }
    }
    xhr.open('GET', '/type/' + textInput.value, true);
    xhr.send();
}

// Create drop down list of suggestions based on data
function createDataSet(data) {
    var datalist = document.getElementById("json-datalist");
    while (datalist.firstChild) {
        datalist.removeChild(datalist.firstChild);
    }
    data.forEach(function(element) {
        var opt = document.createElement("option");
        opt.value = element;
        datalist.appendChild(opt);
    });

}

// A listener for submit event / click