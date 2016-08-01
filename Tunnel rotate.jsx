var originalPhoto = app.activeDocument.activeLayer;
var originalPhotoDup = originalPhoto.duplicate();
var ANGLE = 2; // Determines how much the layer is rotated
var xstart = 1; //DONT CHANGE
var xend = 1499; //SET TO WIDTH OF DOCUMENT - 1
var ystart = 1; //DONT CHANGE
var yend = 1499; //SET TO HEIGHT OF DOCUMENT - 1
var INC = 50; // Determines how big the size difference is between each layer
var repetitions = 16; //how many layers are made
for (var i = 1; i < repetitions; i++) {
        var newPhoto = originalPhotoDup.duplicate();
        app.activeDocument.activeLayer = newPhoto;
        //activeDocument.activeLayer.move( activeDocument, ElementPlacement.PLACEATBEGINNING ); 
        var selRegion = Array(Array(xstart,ystart),
        Array(xend,ystart),
        Array(xend,yend),
        Array(xstart,yend));
        app.activeDocument.selection.select(selRegion, SelectionType.REPLACE, 0, false);
        app.activeDocument.selection.invert();
        app.activeDocument.selection.cut();
        //app.activeDocument.selection.fill(app.foregroundColor);
        activeDocument.activeLayer.rotate((ANGLE * i), AnchorPosition.MIDDLECENTER);
        var xstart = xstart+INC;
        var xend = xstart-INC;
        var ystart = ystart+INC;
        var yend = yend-INC;
}
var ANGLE = -2; // Determines how much the layer is rotated
var xstart = 1; //DONT CHANGE
var xend = 1499; //SET TO WIDTH OF DOCUMENT - 1
var ystart = 1; //DONT CHANGE
var yend = 1499; //SET TO HEIGHT OF DOCUMENT - 1
var INC = 50; // Determines how big the size difference is between each layer
for (var i = 1; i < repetitions; i++) {
        var newPhoto = originalPhotoDup.duplicate();
        app.activeDocument.activeLayer = newPhoto;
        //activeDocument.activeLayer.move( activeDocument, ElementPlacement.PLACEATBEGINNING ); 
        var selRegion = Array(Array(xstart,ystart),
        Array(xend,ystart),
        Array(xend,yend),
        Array(xstart,yend));
        app.activeDocument.selection.select(selRegion, SelectionType.REPLACE, 0, false);
        app.activeDocument.selection.invert();
        app.activeDocument.selection.cut();
        //app.activeDocument.selection.fill(app.foregroundColor);
        activeDocument.activeLayer.rotate((ANGLE * i), AnchorPosition.MIDDLECENTER);
        var xstart = xend+INC;
        var xend = xend-INC;
        var ystart = ystart+INC;
        var yend = yend-INC;
}