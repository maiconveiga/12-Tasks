$(document).ready(function(){

    
    let numero = 0
    let letra = 'Task';


    $('form').on('submit', function(e){
        e.preventDefault();
        const atividade = $('#tarefa').val();
        const data = $('#data').val();
        const novaAtividade = $('<li style ="list-style-type: circle"></li>');
        let id = letra + numero.toString();
        const novaTarefa = `<li id="${id}"><p>${atividade} | ${data}</p></li>`
        $(novaTarefa).appendTo(novaAtividade);

        numero++;
        
        $(novaAtividade).appendTo('ul');

    })

    $('ul').on('click', 'li', function () {

        $(this).css("text-decoration", "line-through");

    });

    $('.cmds').on('click', '#doneall', function () {
        $('li').css("text-decoration", "line-through");
    });
    $('.cmds').on('click', '#resetall', function () {
        $('li').css("text-decoration", "none");
    });
});


