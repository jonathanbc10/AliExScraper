const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

require('dotenv').config()

const PORT = process.env.PORT || 3000
const urls = [
	'https://www.aliexpress.com/w/wholesale-grinder.html?page=1',
	'https://www.aliexpress.com/w/wholesale-grinder.html?page=2',
	'https://www.aliexpress.com/w/wholesale-grinder.html?page=3',
	'https://www.aliexpress.com/w/wholesale-grinder.html?page=4',
]

const app = express()

const results = []

const getLinks = async () => {
	try {
		const responses = await Promise.all(
			urls.map(url => axios.get(url))
		)

		responses.forEach(response => {
			const html = response.data
			const $ = cheerio.load(html)
			$('a[class*="main--card--"]').each(function () {
				const itemLink = $(this).attr('href')
				const itemName = $(this).find('h1').text()
				const itemImg = $(this).find('.product-img').attr('src')
				const prevPrice = $(this).find('div[class*="price-original"]').text()
				const currentPrice = $(this).find('div[class*="price-sale"]').text()
				results.push({
					itemName,
					itemLink,
					itemImg,
					prevPrice,
					currentPrice
				})
			})
		})

		console.log(getResults())
		
	} catch (error) {
		console.error(error)
	}
}

const getResults = () => {
	return results
}

getLinks()

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}!`)
})