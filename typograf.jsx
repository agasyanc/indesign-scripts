doc = app.activeDocument;
window = app.activeWindow;
if (window.constructor.name == "LayoutWindow"){
  selection = window.selection;
  if (selection.length){
    alert (selection[0].texts[0]);
  }
}
