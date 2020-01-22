var textInput = document.querySelector('#ajax');
var xhr = new XMLHttpRequest();

textInput.oninput = function() {
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = xhr.responseText;
            createDataSet(data);
        }
    }
    xhr.open('GET', '/type/' + textInput.value, true);
    xhr.send();
}