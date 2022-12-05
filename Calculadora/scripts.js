const resultado = document.querySelector(".resultado");
const confirmar =document.querySelector(".igual");

function inserir(valor){
    resultado.innerHTML+=valor;
}

function limpar(){
    resultado.innerHTML='';
}

function deletar(){
    if(resultado.textContent){
        let result= document.getElementById('resultado').innerHTML;
        resultado.innerHTML=result.substring(0,result.length - 1);
    }
}

function confirma() {
    if(resultado.textContent != 'Erro'){
        document.getElementById('resultado').innerHTML =  eval(resultado.innerHTML)
    }
	
} 