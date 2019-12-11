$(document).ready(function(){

    $(document).on('click', '.quadratini',function(){
        var that = this;
        $.ajax({

            'url' : "https://flynn.boolean.careers/exercises/api/random/int",
            'methods' : 'GET',
            success :function(data){
                console.log(data.response);
                if (data.response <= 5) {

                $(that).addClass('yellow');

                }else{
                    $(that).addClass('green');
                }
            },


            error : function(){

            alert("E' avvenuto un errore. ");

            }

            });

    });



    var template_html = $('#template-quadratino').html();
    var template_function = Handlebars.compile(template_html);


    for (var i = 0; i < 36; i++) {

    $('.container').append(template_function());

    }






});
