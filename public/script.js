// // A listener for submit event / click 
// // A listener maybe for typing a character ? 
// // Create drop down list of suggestions based on data



// document.onreadystatechange = function() {
//     if (document.readyState === "complete") {
//       var xhr = new XMLHttpRequest();
//       xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//           if (xhr.status === 200) {
//             var data = JSON.parse(xhr.responseText);
//             for (var blogPost in data) {
//               var postDiv = document.createElement("div");
//               var postText = document.createElement("p");
//               var thumbnail = document.createElement("img");
//               var postContainer = document.getElementsByClassName(
//                 "post-container"
//               )[0];
//               var dateNow = new Date();
//               dateNow.setTime(blogPost);
//               var dateParagraph = document.createElement("p");
  
//               var dateText = document.createTextNode(
//                 dateNow.toDateString()
//               );
  
//               dateParagraph.appendChild(dateText);
//               thumbnail.src = "./img/logo2.png";
//               thumbnail.className = "thumbnail";
//               // postText.innerHTML = data[blogPost]; replacing with code bellow
//               postText.appendChild(document.createTextNode(data[blogPost]));
//               postDiv.className = "post";
  
//               postDiv.appendChild(thumbnail);
//               postDiv.appendChild(postText);
//               postDiv.appendChild(dateParagraph);
//               postContainer.appendChild(postDiv);
  
//               // some styles to make things clear
//               // postText.style = "font-size:1.7em;line-height:1.8em;color:#000";
  
//               dateParagraph.style = "align-self:flex-end;font-size:9px;";
//             }
//           } else {
//             console.error(xhr.responseText);
//           }
//         }
//       };
//       xhr.open("GET", "/posts", true);
//       xhr.send();
//     }
//   };
  
//   function getKeyByValue(object, value) {
//     return Object.keys(object).find(key => object[key] === value);
//   }
  