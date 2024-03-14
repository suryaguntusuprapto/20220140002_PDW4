function myFunction() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var kelas = document.getElementById("kelas").value;
    if (nama == "" || email == "" || kelas == "") {
        alert("Mohon lengkapi semua kolom!");
    } else {
        alert("Data Berhasil Dikirim");
    }
}

tanggal = new Date()
document.getElementById("hasil").innerHTML = tanggal