if (confirm('Почати тестування?')) {
    // генерація цін на цінні папери
    const pricesList = []
    for (let i = 0; i < 12; i++) {
        pricesList.push(1 + Math.floor(Math.random() * 10000))
    }
    document.write(`Початкови масив вартості цінних паперів: <br> ${pricesList}<br><br>`)

    // 1) Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
    const pricesMoreThen1000 = pricesList.filter(price => price > 1000)
    document.write(`Масив цін більших за 1000: <br> ${pricesMoreThen1000}<br><br>`)

    // 2) Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
    const indexesPricesMoreThen1000 = []
    pricesList.forEach((element, index, prices) => {
        if (element > 1000) {
            indexesPricesMoreThen1000.push(index)
        }
    })
    document.write(`Масив цін, у якому є номери тільки тих, що більші за 1000 грн.: <br> ${indexesPricesMoreThen1000}<br><br>`)


    // 3) Сформувати список з тих цін, які більші за попереднє значення
    const pricesMoreThenPrevious = pricesList.filter((element, index, prices) => {
        if (prices[index] > prices[index - 1]) return element
    })
    document.write(`Список з тих цін, які більші за попереднє значення: <br> ${pricesMoreThenPrevious}<br><br>`)


    // 4) Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
    const maxPrice = Math.max(...pricesList);
    const percentagePriceList = pricesList.map(price => Math.round(price / maxPrice * 10000) / 100)
    // тут округлив до двох знаків після коми, щоб зручно було вивести і прочитати масив
    document.write(`Масив, що міститить значення цін у відсотках стосовно максимального: <br> ${percentagePriceList}<br><br>`)

    // 5) Підрахувати кількість змін цін
    const countChangePrices = pricesList.reduce((prevCount, price, index, prices) => (price === prices[index - 1] ? prevCount : prevCount + 1), 0)
    document.write(`Підрахувати кількість змін цін: <br> ${countChangePrices}<br><br>`)


    // 6) Визначити, чи є ціна, що менше 1000
    const isPriceLess1000 = pricesList.some(price => price < 1000)
    document.write(`Чи є ціна, що менше 1000?: <br> ${isPriceLess1000}<br><br>`)


    // 7) Визначати, чи усі ціни більше за 1000
    const areAllPricesMoreThan1000 = pricesList.every(price => price > 1000)
    document.write(`Чи усі ціни більше за 1000?: <br> ${areAllPricesMoreThan1000}<br><br>`)


    // 8) Підрахувати кількість цін, що більше за 1000
    const countPricesMoreThan1000 = pricesList.reduce((prevCount, price) => (price > 1000 ? prevCount + 1 : prevCount), 0)
    document.write(`Кількість цін, що більше за 1000: <br> ${countPricesMoreThan1000}<br><br>`)


    // 9) Підрахувати суму цін, що більше за 1000
    const sumPricesMoreThan1000 = pricesList.reduce((prevSum, price) => (price > 1000 ? prevSum + price : prevSum), 0)
    document.write(`Сума цін, що більше за 1000: <br> ${sumPricesMoreThan1000}<br><br>`)


    // 10) Знайти першу ціну, що більше за 1000
    const firstPriceMoreThan1000 = pricesList.find(price => price > 1000)
    document.write(`Перша ціна, що більше за 1000: <br> ${firstPriceMoreThan1000}<br><br>`)


    // 11) Знайти індекс першої ціни, що більше за 1000
    const firstIndexOfPriceMore1000 = pricesList.findIndex(price => price > 1000)
    document.write(`Індекс першої ціни, що більше за 1000: <br> ${firstIndexOfPriceMore1000}<br><br>`)


    // 12) Знайти останню ціну, що більше за 1000
    const lastPriceMoreThan1000 = pricesList.findLast(price => price > 1000)
    document.write(`Остання ціна, що більше за 1000: <br> ${lastPriceMoreThan1000}<br><br>`)

    // 13) Знайти індекс останньої ціни, що більше за 1000
    const lastIndexOfPriceMore1000 = pricesList.findLastIndex(price => price > 1000)
    document.write(`Індекс останньої ціни, що більше за 1000: <br> ${lastIndexOfPriceMore1000}<br><br>`)
}
