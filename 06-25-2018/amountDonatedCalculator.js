
    var a_input = document.getElementById('a');
    var b_output = document.getElementById('b');
    var submit_button = document.getElementById('donate');
    var total = 0;
        
    submit_button.addEventListener('click', function(event) {
        var a = a_input.value;
        total = total + parseInt(a);
        b_output.innerHTML = parseInt(total);
        }, false);