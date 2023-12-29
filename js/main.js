$(document).ready(function(){

    
    let numero = 0
    let letra = 'Task';


    $('form').on('submit', function(e){
        e.preventDefault();
        const atividade = $('#tarefa').val();
        const novaAtividade = $('<li></li>');
        let id = letra + numero.toString();
        const novaTarefa = `<li id="${id}"><p>${id} | ${atividade}</p></li>`
        $(novaTarefa).appendTo(novaAtividade);

        numero++;
        
        $(novaAtividade).appendTo('ul');

    })

    $('ul').on('click', function() {

        $('li').css("text-decoration", "line-through");

    });


});


