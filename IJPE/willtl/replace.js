$(document).ready(function() {
    console.log('ready');
    url = 'https://willtl.github.io/IJPE/experiment01/dcolor30.html'
    $('#chart').attr('src', url) 
    
    $(function(){
        $('#btn01').click(function() {
            var instance = $('#instances').find(":selected").text();
            url = 'https://willtl.github.io/IJPE/experiment01/' + instance + '.html'
            $('#chart').attr('src', url)  
            
            
        });
    });
    
    $("#instances").change(function(){ 
        var instance = $('#instances').find(":selected").text();
        url = 'https://willtl.github.io/IJPE/experiment01/' + instance + '.html'
        $('#chart').attr('src', url)  
    });
    
})

  
