// Function to save note
function saveNote() {
    const noteInput = document.getElementById('noteInput').value;
    if (noteInput.trim() === "") return; // Skip if input is empty

    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(noteInput);
    localStorage.setItem('notes', JSON.stringify(notes));
    document.getElementById('noteInput').value = ""; // Clear input after save
    displayNotes();
}

// Function to display notes
function displayNotes() {
    const notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = ""; // Clear container before rendering

    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach((note, index) => {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        noteDiv.innerHTML = `
            <p>${note}</p>
            <button class="deleteBtn" onclick="deleteNote(${index})">X</button>
        `;
        notesContainer.appendChild(noteDiv);
    });
}

// Function to delete note
function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
}

// Event listener for save button
document.getElementById('saveBtn').addEventListener('click', saveNote);

// Display notes on page load
window.onload = displayNotes;
