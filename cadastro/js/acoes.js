let nome = document.getElementById('nome')
let cargo = document.getElementById('cargo')
let idade = document.getElementById('idade')
let salario = document.getElementById('salario')

 
function salvar(){
    event.preventDefault()
    document.getElementById('fnome').innerHTML = nome.value
    document.getElementById('fidade').innerHTML = idade.value
    document.getElementById('fsalario').innerHTML = salario.value
    document.getElementById('fcargo').innerHTML = cargo.value
}