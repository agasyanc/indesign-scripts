doc = app.activeDocument;
name = doc.name.replace(/\..+$/, '');
path = new File(doc.filePath+"/"+name+".pdf")

doc.exportFile(ExportFormat.PDF_TYPE, path);
alert("saved")
