
var arr = ['10','20'];

function arrayTraverse(){

    var result = '';
    for(var i=0;i<arr.length;i++){

        result = result + arr[i] + ",";
    }
    if(arr.length > 0){
        var lastindexofComma = result.lastIndexOf(',', 0);
        result = result.slice(0, result.length-1);
    }

    document.getElementById('traverseArray').innerHTML = result;
}

function arrayInsertion(){
    
    

}

function onchangeval(){

    var a = document.getElementById('input_a').value;
    var b = document.getElementById('input_b').value;
    console.log(' a '+a);

    c = parseInt(a?a:0) +  parseInt(b?b:0);
    document.getElementById('result').innerHTML = c; 
}

