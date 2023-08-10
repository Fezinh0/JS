      // Declarar as variaveis. 
      var curso = "Desenvolvedor Front-end, "
      var curso1 = "Desenvolvedor Back-end  "
      var data = new Date() // instanciando as funções.
      var dia = data.getDate()
      var mes = data.getMonth() + 1
      var ano = data.getFullYear()
      var horario = data.getMilliseconds()
      var segundos = data.getSeconds()
     
      // var dataCompleta = dia+"/0" +mes+ "/" +ano
      var dataCompletaSimplificada = data.toLocaleDateString()
     
      // alert('funcionou')  pode ser utilizado para a verificação do código 
      
      var nome = "Fernando";
      var idade = 20;

     // document.write(curso);
     //  document.write(dataCompletaSimplificada);

      console.log("Hoje é dia:" +dia);
      console.log("Hoje é o mês:" +mes);
      console.log("Olá, meu Nome é Fernando tenho 20 anos e hoje é dia " +dataCompletaSimplificada);
      


      // mexendo com o DOM do navegador.
      /* 
       {
           window.alert('Isso é uma interação JS!'); 
           window.confirm('Entendeu o conceito?');
           window.prompt('Qual é o seu nome?');
       }
       */

       var primeiro = prompt("Digite um numero");
       console.log(primeiro)
       var segundo = prompt("Digite outro numero");
       console.log(segundo)
       

        