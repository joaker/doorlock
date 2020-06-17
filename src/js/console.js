function logToTop(message) {
  const newItem = document.createElement("LI");
  newItem.appendChild(document.createTextNode(message));

  addToTop(newItem, getLog());
}

function addToTop(elem, target) {
  if (!target) throw new Error("addToTop missing target");
  if (!elem) throw new Error("addToTop missing elem to add");

  target.insertBefore(elem, target.childNodes[0]);
}

const ENTER_KEY = 13;
function createHandleText(consoleSelector) {
  const enterButton = document.querySelector(
    `${consoleSelector} > form > button`
  );
  return function handleText(event) {
    event.preventDefault();
    if (event.keyCode === ENTER_KEY) {
      enterButton.click();
    }
  };
}
let consoleSelector = null;
function ensureConsoleSelector() {
  if (!consoleSelector) {
    throw new Error("consoleSelector has not been initialized");
  }
}
function getLog() {
  ensureConsoleSelector();
  return document.querySelector(`${consoleSelector} .log`);
}

function getInput() {
  ensureConsoleSelector();
  return document.querySelector(`${consoleSelector} > form > input`);
}
function getButton() {
  ensureConsoleSelector();
  return document.querySelector(`${consoleSelector} > form > button`);
}

function installConsole(_consoleSelector, onEnter) {
  consoleSelector = _consoleSelector;
  const log = getLog();
  const input = getInput();
  const button = getButton();

  button.addEventListener("click", onEnter, false); // GOTCHA - what does the false mean?
  const handleText = createHandleText(consoleSelector, onEnter);
  input.addEventListener("keyup", handleText);
  logToTop("twenty-one");
}
