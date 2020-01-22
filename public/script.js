// // A listener maybe for typing a character ? 














// // Create drop down list of suggestions based on data
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
var x = ["israel", "ireland", "istonia", "istanbol"];
createDataSet(x)

// // A listener for submit event / click