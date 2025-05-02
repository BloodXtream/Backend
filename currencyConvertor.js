import https from 'https'
import readline from 'readline'
import chalk from 'chalk'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const apiKey = '5f7c415446d0e11814639e1d'
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`

const convertCurrency = (amount, rate) => {
    return (amount * rate).toFixed(2)
}

https.get(url, (response) => {
    let data = ''
    response.on('data', (chunks) => {
        data += chunks
    })

    response.on('end', () => {
        const rates = JSON.parse(data).conversion_rates
        rl.question(`Enter the amount in USD: `, (amount) => {
            rl.question(`Enter the target currency (e.g. INR, EUR, JPN): `, (currency) => {
                const rate = rates[currency.toUpperCase()]
                if (rate) {
                    console.log(`${amount} USD is aproxx ${convertCurrency(amount, rate)} ${currency}`)
                } else {
                    console.log(`Invalid Currecny Code....\n Try Again...`)
                }
                rl.close()
            })
        })
    })
})