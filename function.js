function enableEditMode() {
  myTextField.document.designMode = "on";
}
function Edit(command) {
  myTextField.document.execCommand(command, false, null);
}
function execVal(command, value) {
  myTextField.document.execCommand(command, false, value);
}