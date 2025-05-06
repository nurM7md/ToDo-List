function updatetable() {
  var InputField = document.getElementById("taskInput");
  //get value of inputField
  var InputData = InputField.value;

  if (typeof InputData !== "undefined") {
    //get table
    var table = document
      .getElementById("newtable")
      .getElementsByTagName("tbody")[0];

    //create new row
    var row = document.createElement("tr");

    //create new cell for text
    var textcell = document.createElement("td");
    textcell.textContent = InputData;
    textcell.className =
      "text-gray-400 font-semibold border border-red-800 w-64 break-words";

    //put text cell in new row
    row.appendChild(textcell);

    //create new action cell for buttons
    var actioncell = document.createElement("td");
    actioncell.className = "border border-red-800";

    //create new button for delete
    var delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = function () {
      row.remove();
    };
    delBtn.className =
      "bg-red-800 rounded-2xl text-white pt-2 pb-2 pr-4 pl-4 cursor-pointer mt-2 mb-2";

    //create new button for edit
    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
      var updateTask = prompt("modify task", textcell.textContent);
      if (updateTask !== null) {
        textcell.textContent = updateTask;
      }
    };
    editBtn.className =
      "bg-red-800 rounded-2xl text-white pt-2 pb-2 pr-4 pl-4 ml-2 cursor-pointer mt-2 mb-2";



      //create new button for toggle
    var togglebtn = document.createElement("button");
    togglebtn.textContent = "Toggle";
    togglebtn.onclick = function () {
     if(textcell !== "" && textcell !== " "){
      textcell.classList.add("line-through" , "text-gray-400")
     }
    };
    togglebtn.className =
      "bg-red-800 rounded-2xl text-white pt-2 pb-2 pr-4 pl-4 ml-2 cursor-pointer mt-2 mb-2";

    //putting 3 new buttons in action cell
    actioncell.appendChild(delBtn);
    actioncell.appendChild(editBtn);
    actioncell.appendChild(togglebtn);

    //put action cell in row
    row.appendChild(actioncell);

    //put row in table
    table.appendChild(row);

    //clear input field
    InputField.value = "";
  }
}

// Extra confusing logic
setInterval(() => {
  var allDone = true;
  for (var z = 0; z < data.length; z++) {
    if (data[z] && data[z].done === false) {
      allDone = false;
    }
  }
  if (allDone && data.length > 0) {
    console.log("All tasks done!");
  }
}, 10000);
