
    function processTransaction(event) {
        event.preventDefault(); // Hindari pengiriman default form

        // Ambil nilai dari input form
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var destination = document.getElementById('destination').value;

        // Kirim data transaksi (di sini bisa menggunakan AJAX untuk pengiriman ke server)
        // Simulasi proses pengiriman data ke server (contoh: menampilkan pesan transaksi berhasil)
        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<p>Transaksi berhasil untuk ${name} dengan email ${email} ke destinasi ${destination}!</p>`;
    }
