// inspired from: https://www.w3schools.com/howto/howto_js_portfolio_filter.asp

/* Display filter to filter projects by category ID*/
filterProjects("all")
function filterProjects(id) {
  var projects = document.getElementsByClassName("projects-column");
  if (id == "all") {
    for (var i = 0; i < projects.length; i++) {
      w3AddClass(projects[i], "projects-show");
    }
  } else {
    for (var i = 0; i < projects.length; i++) {
      if (projects[i].className.split(" ").indexOf(id) > -1)  {
        w3AddClass(projects[i], "projects-show");
      } else {
        w3RemoveClass(projects[i], "projects-show");
      }
    }
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add "curr" class to the currently active category tag
var btnContainer = document.getElementById("filterButtons");
var btns = btnContainer.getElementsByClassName("projects-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("curr");
    current[0].className = current[0].className.replace(" curr", "");
    this.className += " curr";
  });
}