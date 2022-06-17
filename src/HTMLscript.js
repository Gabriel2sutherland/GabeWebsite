const taskArray = []
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    delCookie(i)
  }

}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


  //Creating Cookies for website storage
  function setCookie() {
    var taskname = document.getElementById("myInput").value;
    document.cookie = "TaskID="+taskname+"; expires= wed, 27 Jul 2022 12:00:00 UTC; path=/; Secure";
    taskArray.push(taskname)
    document.cookie = "Array="+taskArray+"; expires= wed, 27 Jul 2022 12:00:00 UTC; path=/; Secure";
    //document.cookie = "TaskID="+taskname+"1; expires= thur, 16 Jun 2022 12:00:00 UTC; path=/; Secure";

    document.getElementById("demo").innerHTML = taskArray;
  }

  //Deletes a Cookie through the X button
  function delCookie(index){
    taskArray.splice(index, 1)
    document.getElementById("demo").innerHTML = taskArray;


  }

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    setCookie()
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}