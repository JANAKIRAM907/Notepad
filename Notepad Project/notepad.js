document.addEventListener("DOMContentLoaded", () => {
    loadNotes();
    document.getElementById("addNoteBtn").addEventListener("click", addNote);
});

function addNote() {
    let noteInput = document.getElementById("noteInput");
    let noteText = noteInput.value.trim();

    if (noteText === "") {
        alert("Please enter a note!");
        return;
    }

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));

    noteInput.value = "";
    displayNotes();
}

function displayNotes() {
    let notesContainer = document.getElementById("notesContainer");
    notesContainer.innerHTML = "";

    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.forEach((note, index) => {
        let noteElement = document.createElement("div");
        noteElement.classList.add(  "note");

        noteElement.innerHTML = `
            <span>${note}</span>
            <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
        `;

        notesContainer.appendChild(noteElement);
    });
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

function loadNotes() {
    displayNotes();
}
