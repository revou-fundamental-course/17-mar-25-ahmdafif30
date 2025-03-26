document.getElementById("sisi").addEventListener("input", function() {
    let sisi = this.value;
    document.getElementById("tampilkan").innerHTML = `
    Diketahui : <br>
    Sisi = ${sisi} cm
    `;
})

document.getElementById("luas").addEventListener("click", function() {
    let sisi = parseFloat(document.getElementById("sisi").value);
    let jawaban = document.getElementById("jawaban");

    jawaban.innerHTML = `
    Luas = sisi x sisi <br> 
    Luas = ${sisi} x ${sisi} <br>
    Luas = ${sisi * sisi} cm2
    `;
    document.getElementById("reset").style.display = "block";
})

document.getElementById("keliling").addEventListener("click", function() {
    let sisi = parseFloat(document.getElementById("sisi").value);
    let jawaban = document.getElementById("jawaban");

    jawaban.innerHTML = `
    Keliling = 4 x sisi  <br> 
    Keliling = 4 x ${sisi} <br>
    Keliling = ${sisi * 4} cm
    `;
    document.getElementById("reset").style.display = "block";
})

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("sisi").value = "";
    document.getElementById("tampilkan").innerHTML = "";
    document.getElementById("jawaban").innerHTML = "";
    document.getElementById("reset").style.display = "none";    
})        