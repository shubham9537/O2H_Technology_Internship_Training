function undo() {
  if (undoStack.length === 0) {
    console.log("Nothing to undo");
    return showMenu();
  }

  const current = getAllTasks();
  redoStack.push(JSON.stringify(current));

  const prev = JSON.parse(undoStack.pop());
  saveTasks(prev);

  console.log("Undo successful");
  showMenu();
}
function redo() {
  if (redoStack.length === 0) {
    console.log("Nothing to redo");
    return showMenu();
  }

  const current = getAllTasks();
  undoStack.push(JSON.stringify(current));

  const next = JSON.parse(redoStack.pop());
  saveTasks(next);

  console.log("Redo successful");
  showMenu();
}