let notesData = [
  {
    id: 1,
    title: "Learn JavaScript",
    content: "Learn DOM manipulation",
  },
  {
    id: 2,
    title: "Learn JavaScript",
    content: "Learn DOM manipulation",
  },
  {
    id: 3,
    title: "Build Project",
    content: "Build a Notes App",
  },
  {
    id: 4,
    title: "Learn Java",
    content: "Learn OOPS",
  },
  {
    id: 5,
    title: "Build Project deploymet",
    content: "learn GIT GITHUB",
  },
];
// function  to seed your demo data into localStorage when the app first runs
(function () {
  const existingNotes = localStorage.getItem("notes");

  if (!existingNotes) {
    displayNotes(notesData);
  } else {
    displayNotes(JSON.parse(existingNotes));
  }
})();

//cache Memo
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// get data
/*

// show db data only
displayNotes(data = fetchData) 

// SerchedData - user serch
displayNotes(SerchedData)

// filterdData - > sort a-z , sort by album , sort by artis
displayNotes(filterdData)

*/
function displayNotes(displayData = notes) {
  const container = document.getElementById("notesContainer");
  console.log("displaying notes");
  container.innerHTML = "";

  displayData.map(
    (note) =>
      (container.innerHTML += `
      <div class="note-card">
  
          <div class="note-content">
              <h3>${note.title}</h3>
              <p>${note.content}</p>
          </div>
  
          <button
              
              class="delete-btn"
              onclick="deleteNote(${note.id})"
          >
              Delete
          </button>
  
      </div>
  `)
  );
}

//create

const addButton = document.getElementById("addNoteBtn");

const form = document.getElementById("noteForm");

console.log("form - :", form);
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("noteTitle").value.trim();
  const content = document.getElementById("noteContent").value.trim();
  console.log(title);
  console.log(content);
  // validation
  if (!title || !content || title.length == 0 || content.length == 0) {
    console.error("all feilds are required");
  }
  // create

  const newNote = {
    id: Date.now(),
    title: title,
    content: content,
  };

  notes.push(newNote);

  localStorage.setItem("notes", JSON.stringify(notes));

  displayNotes();

  form.reset();
});

//deleteNote
function deleteNote(noteId) {
  //delete
  console.log("deleting notes");
  notes = notes.filter((note) => note.id != noteId);

  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

//search note
const searchInput = document.getElementById("searchInput");

//adadadada

// addEventListener

searchInput.addEventListener("input", function () {
  const ipValue = searchInput.value.toLowerCase();
  console.log("searching notes");
  //abc   | abc , AbC
  const filtedData = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(ipValue) ||
      note.content.toLowerCase().includes(ipValue)
  );

  displayNotes(filtedData);
});
