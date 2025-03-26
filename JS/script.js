function validasiInput() {
  let sisi = document.getElementById("sisi").value;

  if (sisi === "") {
    alert("Input tidak boleh kosong!");
    return false;
  } else if (isNaN(sisi) || sisi <= 0) {
    alert("Angka harus diatass 0!");
    return false;
  }

  return true;
}

document.getElementById("sisi").addEventListener("input", function () {
  let sisi = this.value;
  document.getElementById("tampilkan").innerHTML = `
    Diketahui : <br>
    Sisi = ${sisi} cm
    `;
});

document.getElementById("luas").addEventListener("click", function () {
  if (validasiInput()) {
    let sisi = parseFloat(document.getElementById("sisi").value);
    let jawaban = document.getElementById("jawaban");

    jawaban.innerHTML = `
        Luas = sisi x sisi <br> 
        Luas = ${sisi} x ${sisi} <br>
        Luas = ${sisi * sisi} cm<sup>2</sup>
        `;
    document.getElementById("reset").style.display = "block";
  }
});

document.getElementById("keliling").addEventListener("click", function () {
  if (validasiInput()) {
    let sisi = parseFloat(document.getElementById("sisi").value);
    let jawaban = document.getElementById("jawaban");

    jawaban.innerHTML = `
        Keliling = 4 x sisi  <br> 
        Keliling = 4 x ${sisi} <br>
        Keliling = ${sisi * 4} cm
        `;
    document.getElementById("reset").style.display = "block";
  }
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("sisi").value = "";
  document.getElementById("tampilkan").innerHTML = "";
  document.getElementById("jawaban").innerHTML = "";
  document.getElementById("reset").style.display = "none";
});
