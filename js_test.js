

function onchangeval(){

    var a = document.getElementById('input_a').value;
    var b = document.getElementById('input_b').value;
    console.log(' a '+a);

    c = parseInt(a?a:0) +  parseInt(b?b:0);
    document.getElementById('result').innerHTML = c; 
}

