
    var a_input = document.getElementById('a');
    var b_input = document.getElementById('b');
    var c_output = document.getElementById('c');
    var submit_button = document.getElementById('calculate');

    submit_button.addEventListener('click', function(event) {
/*        console.log("The a_input value is: ");
        console.log(a_input);
        console.log("The b_input value is: ");
        console.log(b_input);*/
        debugger;
        var a = a_input.value;
        var b = b_input.value;
            c_output.innerHTML = Math.sqrt(a * a + b * b);
        }, false);

        