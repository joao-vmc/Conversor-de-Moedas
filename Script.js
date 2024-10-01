const apiKey = 'b285f1d68467fac8686e2c00';  // Insira sua chave da ExchangeRate-API
const convertButton = document.getElementById('convertButton');
const resultDiv = document.getElementById('result');

convertButton.addEventListener('click', () => {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount === "" || amount <= 0) {
        resultDiv.innerHTML = "Por favor, insira um valor válido!";
        return;
    }

    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.result === "success") {
                const convertedAmount = data.conversion_result;
                resultDiv.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
            } else {
                resultDiv.innerHTML = "Erro ao converter. Tente novamente mais tarde.";
            }
        })
        .catch(error => {
            resultDiv.innerHTML = "Erro ao se conectar com a API.";
            console.error(error);
        });
});
