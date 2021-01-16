// console.log(' ====>>>>', '666');
// console.log(' ====>>>>', Vue);


// var html = template('template', {user: })


$(function(){

    $.ajax({
        url: '/admin',
        type: 'get',
        dataType: 'json',
        success(msg){
            console.log('msg ====>>>>', msg);
            
            let html = template('template', {
                data: msg
            });

            $('#tbody').html(html)
        },

        error(err){
            console.log('err ====>>>>', err);
            
        }
    })



    $('#add').click(function(){
        $('#myModal').modal('show');
    })

})















































new Vue({
    el: "#app",
    data: {
        message: 'hello koa!'
    },
    delimiters: ['[[', ']]']
})
