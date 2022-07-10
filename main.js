console.log("welcome to notes project");

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (params) {
  let addTxt = document.getElementById("addTxt");
  let notesElement = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
});
