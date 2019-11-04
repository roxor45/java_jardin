var size = [1000, 800];

//var horizontal = 1280
//var vertical = 800
var app = new PIXI.Application(size[0], size[1], {
    backgroundColor: 0xFFFFFF
});
document.body.appendChild(app.view);
// create a background...
var background = PIXI.Sprite.fromImage('images/sol2.jpg');
background.width = app.screen.width;
background.height = app.screen.height;
// add background to stage...
app.stage.addChild(background);

function backg() {
    var checkbg = document.getElementById("maskbg");
    if (checkbg.checked == true) {
        background.renderable = false;
    } else {
        background.renderable = true;
    }
}
// create a texture from an image path
var line = new PIXI.Graphics();
// Define line style (think stroke)
// width, color, alpha
line.lineStyle(1, 0xDFDFDF, 1);
var lignev = 0;
const style = new PIXI.TextStyle({fill:"silver"});

var numerotation0 = new PIXI.Text(lignev, style);
    numerotation0.x = 25;
    numerotation0.y = 25;
    app.stage.addChild(numerotation0);
	
while (lignev < size[0]) {
    line.moveTo(lignev, 50);
    line.lineTo(lignev, size[1]);
    lignev = lignev + 50;
    var numerotationv = new PIXI.Text(lignev, style);
    numerotationv.x = lignev + 30;
    numerotationv.y = 40;
    numerotationv.rotation = 5.06;
    app.stage.addChild(numerotationv);
}
var ligneh = 0;
while (ligneh < size[1]) {
    line.moveTo(50, ligneh);
    line.lineTo(size[0], ligneh);
    ligneh = ligneh + 50;
    var numerotation = new PIXI.Text(ligneh, style);
    numerotation.x = 1;
    numerotation.y = ligneh + 40;
    //numerotation.rotation = 5.06; 
    app.stage.addChild(numerotation);
}
line.renderable = false;
app.stage.addChild(line);

function affichecadrillage() {
    var checkBox = document.getElementById("checkcadrillage");
    if (checkBox.checked == true) {
        line.renderable = true;
    } else {
        line.renderable = false;
    }
}

