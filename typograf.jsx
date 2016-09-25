doc = app.activeDocument;
window = app.activeWindow;

if (window.constructor.name == "LayoutWindow"){
  selection = window.selection;
  if (selection.length){
    if (selection[0].constructor.name == "TextFrame"){
      text=selection[0];
      typography(text);
    }
  }
}
function typography(object) {
  setupGrep();
  //spaces
  app.findGrepPreferences.findWhat = "( ){2,}";
  app.changeGrepPreferences.changeTo = " ";
  object.changeGrep();

  clearGrep();
  //preposition
  app.findGrepPreferences.findWhat = " ([\\l\\u]{1,2}) ";
  app.changeGrepPreferences.changeTo = " $1~S";
  object.changeGrep();

  clearGrep();
  //dash replace
  app.findGrepPreferences.findWhat = " -{1,2} ";
  //app.changeGrepPreferences.underline = true;
  app.changeGrepPreferences.changeTo = " —~S";
  //dash nobr
  object.changeGrep();

  clearGrep();
  //dash replace
  app.findGrepPreferences.findWhat = "“(.+?)”";
  //app.changeGrepPreferences.underline = true;
  app.changeGrepPreferences.changeTo = "«$1»";
  //dash nobr
  object.changeGrep();

}


function clearGrep() {
  app.findGrepPreferences = null;
  app.changeGrepPreferences = null;
}
function setupGrep() {
  clearGrep();
  app.findChangeGrepOptions.includeFootnotes = false;
  app.findChangeGrepOptions.includeHiddenLayers = false;
  app.findChangeGrepOptions.includeLockedLayersForFind = false;
  app.findChangeGrepOptions.includeLockedStoriesForFind = false;
  app.findChangeGrepOptions.includeMasterPages = false;
}
