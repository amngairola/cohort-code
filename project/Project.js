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

localStorage.setItem("notes", JSON.stringify(notesData));

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

  container.innerHTML = "";

  displayData.map(
    (note) =>
      (container.innerHTML += `
    
    <div key=${note.id} class="">
        <h2>
        ${note.title}
        </h2>
        <p>
        ${note.content}
        </p>

        <button onClick = "deleteNotes(${note.id})">
            DELETE
        </button>
    </div>

    `)
  );
}

//create
const form = document.getElementById("noteForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("noteTitle").value().trim();
  const content = document.getElementById("noteContent").value().trim();

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
function deleteNotes(noteId) {
  //delete

  notes = notes.filter((note) => note.id != noteId);

  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

//search note
const searchInput = document.getElementById("searchInput");

//adadadada

// addEventListener

searchInput.addEventListener("input", function () {
  const ipValue = searchInput.value().toLowerCase();

  //abc   | abc , AbC
  const filtedData = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(ipValue) ||
      note.content.toLowerCase().includes(ipValue)
  );

  displayNotes(filtedData);
});
