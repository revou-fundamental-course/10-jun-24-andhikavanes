document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let temperature = parseFloat(document.getElementById('temperature').value);
    let scale = document.getElementById('scale').value;
    let result;
    let cara;

    if (isNaN(temperature)) {
        result = 'Please enter a valid number.';
    } else {
        if (scale === 'celsius') {
            hasil =(temperature * 9/5) + 32;
            result = `${temperature} °C = ${hasil} °F.`;
        } else {
            hasil = (temperature - 32) * 5/9;
            result = `${temperature} °F = ${hasil} °C.`;
        }
    }

    if (isNaN(temperature)) {
        cara = 'caranya sebagai berikut';
    } else {
        if (scale === 'celsius') {
            cara = `${temperature} °C * (9/5) + 32 = ${hasil} °F`;
        } else {
            cara = `(${temperature} °F - 32) * 5/9 = ${hasil} °C`;
        }
    }

    document.getElementById('result').innerText = result;
    document.getElementById('cara').innerText = cara;
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('temperatureForm').reset();
    document.getElementById('result').innerText = '';
    document.getElementById('cara').innerText = '';
});
