import insertTextAtCursor from "insert-text-at-cursor";

export default function insertSymbolsFromKeyboard(event, id) {
    const el = document.getElementById(id);
    try {
      switch (event.key) {
        case "F4":
          insertTextAtCursor(el, "\\neg");
          break;
        case "F5":
          insertTextAtCursor(el, "\\land");
          break;
        case "F6":
          insertTextAtCursor(el, "\\lor");
          break;
        case "F7":
          insertTextAtCursor(el, "\\Rightarrow");
          break;
        case "F8":
          insertTextAtCursor(el, "\\Leftrightarrow");
          break;
        case "F9":
          insertTextAtCursor(el, "\\forall");
          break;
        case "F10":
          insertTextAtCursor(el, "\\exists");
          break;
      }
    } catch (err) {
      console.log(err);
    }
  }