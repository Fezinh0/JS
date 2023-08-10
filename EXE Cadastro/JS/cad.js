let nome = window.document.getElementById('nome')
let serie = window.document.getElementById('serie')
let materia = window.document.getElementById('materia')
let bimestre1 = window.document.getElementById('bimestre1')
let bimestre2 = window.document.getElementById('bimestre2')
let bimestre3 = window.document.getElementById('bimestre3')
let bimestre4 = window.document.getElementById('bimestre4')
let media = window.document.getElementById('media')


function calcular(){
    event.preventDefault()
    media.value = (parseFloat(bimestre1.value)+ parseFloat(bimestre2.value)+ parseFloat(bimestre3.value)+  parseFloat(bimestre4.value)) /4
    document.getElementById('nomef').innerHTML = nome.value
    document.getElementById('serief').innerHTML = serie.value
    document.getElementById('materiaf').innerHTML = materia.value
    document.getElementById('bimestref').innerHTML = bimestre1.value
    document.getElementById('bimestreff').innerHTML = bimestre2.value
    document.getElementById('bimestrefff').innerHTML = bimestre3.value
    document.getElementById('bimestreffff').innerHTML = bimestre4.value
    document.getElementById('mediaf').innerHTML = media.value
}