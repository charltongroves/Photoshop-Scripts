var originalPhoto = app.activeDocument.activeLayer;
var originalPhotoDup = originalPhoto.duplicate();
var ANGLE = 2; // Determines how much the layer is rotated
var xstart = 1; //DONT CHANGE
var xend = ((app.activeDocument.width * (1.0/2.54) * app.activeDocument.resoltion) | 0) - 1; //SET TO WIDTH OF DOCUMENT - 1
var ystart = 1; //DONT CHANGE
var yend = ((app.activeDocument.height * (1.0/2.54) * app.activeDocument.resoltion) | 0) - 1; //SET TO HEIGHT OF DOCUMENT - 1
alert(xend.toString());
alert(yend.toString());
var INC = 50; // Determines how big the size difference is between each layer
var repetitions = 16; //how many layers are made

function TunnelOneSide(side, ANGLE, xstart, xend, ystart, yend, INC, repetitions) {
    if (side !== 1) {
        ANGLE = ANGLE * -1
    }
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
