function check() {
  
    let a = parseFloat(document.getElementById('n1').value);
    let b = parseFloat(document.getElementById('n2').value);
    let c = parseFloat(document.getElementById('n3').value);
    let d = parseFloat(document.getElementById('n4').value);
    let e = parseFloat(document.getElementById('n5').value);

   
    let largest = Math.max(a, b, c, d, e);

    
    if (isNaN(largest)) {
        document.getElementById('ans').innerHTML = "Please enter all numbers!";
    } else {
        document.getElementById('ans').innerHTML = "Largest Number is: " + largest;
    }
}