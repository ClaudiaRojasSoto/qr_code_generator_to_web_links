document.getElementById('generateButton').addEventListener('click', function() {
    let url = document.getElementById('urlInput').value;
    if(url) {
        document.getElementById('urlInput').style.display = 'none';
        document.getElementById('generateButton').style.display = 'none';

        document.getElementById('qrcode').style.display = 'block';
        document.getElementById('qrcode').innerHTML = "";
        new QRCode(document.getElementById('qrcode'), url);

        document.getElementById('qrTitle').style.display = 'block';
        document.getElementById('qrTitle').innerHTML = `Este es el QR para la dirección: ${url}`;
        document.getElementById('backButton').style.display = 'block';
    } else {
        alert('Por favor, ingresa una URL.');
    }
});

document.getElementById('backButton').addEventListener('click', function() {
    document.getElementById('qrTitle').style.display = 'none';
    document.getElementById('qrcode').style.display = 'none';
    document.getElementById('backButton').style.display = 'none';

    document.getElementById('urlInput').style.display = 'block';
    document.getElementById('generateButton').style.display = 'block';

    document.getElementById('urlInput').value = '';
    document.getElementById('qrcode').innerHTML = '';
});
