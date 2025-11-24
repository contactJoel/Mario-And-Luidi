
const form = document.querySelector (".formulario-fale-conosco")
const mascara = document.querySelector (".mascara-formulario")

const img = document.querySelector (".mario-desentupidor")
const imgmascara = document.querySelector (".mascara-desentupidor")

function cliqueinobotao(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}
function esconderform(){
    form.style.left = "-300%"
    form.style.transform = "translateX(0%)"
    mascara.style.visibility = "hidden"
}
function nossosservicos(){
    img.style.botton = "0"
    img.style.left = "-20px"
    img.style.transfrom = "translatex(-50%)"
    imgmascara.style.visibility = "visible"
}
function esconderservicos(){
    img.style.left = "-300%"
    img.style.transform = "translateX(0%)"
    imgmascara.style.visibility = "hidden"
}