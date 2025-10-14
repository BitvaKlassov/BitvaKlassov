var bukvaSelect = document.getElementById('bukvaSelect');
var classSelect = document.getElementById('classes');

var bukvaA = document.getElementById('bukvaA');
var bukvaB = document.getElementById('bukvaB');
var bukvaC = document.getElementById('bukvaC');
var bukvaD = document.getElementById('bukvaD');
var bukvaE = document.getElementById('bukvaE');
var bukvaF = document.getElementById('bukvaF');
var bukvaG = document.getElementById('bukvaG');
var bukvaH = document.getElementById('bukvaH');
var bukvaI = document.getElementById('bukvaI');
var bukvaJ = document.getElementById('bukvaJ');
var bukvaK = document.getElementById('bukvaK');

classSelect.addEventListener('change', function () {
    bukvaA.classList.add("hidden");
    bukvaB.classList.add("hidden");
    bukvaC.classList.add("hidden");
    bukvaD.classList.add("hidden");
    bukvaE.classList.add("hidden");
    bukvaF.classList.add("hidden");
    bukvaG.classList.add("hidden");
    bukvaH.classList.add("hidden");
    bukvaI.classList.add("hidden");
    bukvaJ.classList.add("hidden");
    bukvaK.classList.add("hidden");

    if(this.value<8){
        bukvaSelect.classList.remove("bukvaEN");
        bukvaSelect.classList.remove("bukvaTE");
        bukvaSelect.classList.add("bukvaFSS");

        bukvaA.classList.remove("hidden");
        bukvaB.classList.remove("hidden");
        bukvaC.classList.remove("hidden");
        bukvaD.classList.remove("hidden");
        bukvaE.classList.remove("hidden");
        bukvaF.classList.remove("hidden");
        bukvaG.classList.remove("hidden");
    }else if(this.value>7 && this.value<10){
        bukvaSelect.classList.add("bukvaEN");
        bukvaSelect.classList.remove("bukvaTE");
        bukvaSelect.classList.remove("bukvaFSS");

        bukvaA.classList.remove("hidden");
        bukvaB.classList.remove("hidden");
        bukvaC.classList.remove("hidden");
        bukvaD.classList.remove("hidden");
        bukvaH.classList.remove("hidden");
        bukvaJ.classList.remove("hidden");
    }else{
        bukvaSelect.classList.remove("bukvaEN");
        bukvaSelect.classList.add("bukvaTE");
        bukvaSelect.classList.remove("bukvaFSS");

        bukvaH.classList.remove("hidden");
        bukvaI.classList.remove("hidden");
        bukvaJ.classList.remove("hidden");
        bukvaK.classList.remove("hidden");
    }
});

function bukvaSelected(a){

    alert(classSelect.value + a);
    
}