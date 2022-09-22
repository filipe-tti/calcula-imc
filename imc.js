const calcular = document.getElementById('calcular')

function imc(){

    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

   
    
  
    if(nome !== '' && altura!== '' && peso !==''){
      
        const valorImc = (peso / (altura * altura)).toFixed(2)

        let classificacao = ''

        if (valorImc < 18.5){
            classificacao = 'abaixo do peso.'
        }else if(valorImc < 25){
            classificacao = 'com peso ideal.'
        }else if(valorImc < 30 ){
            classificacao = 'está acima do peso.'
        }else if(valorImc < 35){
            classificacao = 'com obesidade grau I.'
        }else if(valorImc < 40){
            classificacao = 'com obesidade grau II.'
        }else{
            classificacao = 'com obesidade grau III.'
        }

        resultado.textContent = `O IMC do ${nome} é ${valorImc}, está ${classificacao}`

        

    }else{

        //mandar preencher todos os campos na area do resultado
        resultado.textContent ='Preencha todos os campos!'
    }
}

