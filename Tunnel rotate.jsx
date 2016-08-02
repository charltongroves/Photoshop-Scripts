var originalPhoto = app.activeDocument.activeLayer;
/*
    hey there.
    This script works best on images with a 1:1 ratio (square images). so crop em to that before you run it
    have fun!
*/

// VARIABLES YOU CAN CHANGE!
var repetitions = 15; //How many layers are made per side
var ANGLE = 2; // Determines how much the layer is rotated

//DON'T TOUCH STUFF BELOW HERE
var xstart = 1; //DON'T CHANGE
var ratio = 1.0/2.54; // ratio between cm and inches, photoshop is crap and uses both metric and imperial >:(  DON'T CHANGE
var resolution = app.activeDocument.resolution;
var xend = ((parseFloat(app.activeDocument.width.toString())  * ratio* resolution) | 0) - 1; //SET TO WIDTH OF DOCUMENT - 1
var ystart = 1; //DON'T CHANGE
var yend = ((parseFloat(app.activeDocument.height.toString()) * ratio* resolution) | 0) - 1; //SET TO HEIGHT OF DOCUMENT - 1
var INC = 50; // DON'T CHANGE
if (xend > yend) {
    INC = yend / (2*repetitions);
} else { 
    INC = xend / (2*repetitions);
}
function TunnelOneSide(side, ANGLE, xstart, xend, ystart, yend, INC, repetitions) {
    if (side !== 1) {
        ANGLE = ANGLE * -1
    }
    for (var i = 1; i < repetitions; i++) {
            var newPhoto = originalPhoto.duplicate();
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
            if (side == 1) {
                var xstart = xstart+INC;
                var xend = xstart-INC;
            }else{
                var xstart = xend+INC;
                var xend = xend-INC;
            }
            var ystart = ystart+INC;
            var yend = yend-INC;
    }
}
TunnelOneSide(1, ANGLE, xstart, xend, ystart, yend, INC, repetitions);
TunnelOneSide(2, ANGLE, xstart, xend, ystart, yend, INC, repetitions);
