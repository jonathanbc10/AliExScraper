// Import required modules
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

// Load environment variables
require('dotenv').config()

// Set up the server port
const PORT = process.env.PORT || 3000

// Initialize the express app
const app = express()

// Set up middleware to parse JSON data
app.use(express.json())

// Define app endpoint
app.get('/alisearch', async (req, res) => {
    // Destructure the "term" and "pages" variables from the query string
    const { term, pages } = req.query

    // Generate an array of URLs to scrape (based on number of pages)
    const urls = Array.from({ length: pages }, (_, i) => `https://www.aliexpress.com/w/wholesale-${term}.html?page=${i+1}`)

    // Initialize an empty array to store the scraped results
    const results = []
    try {
        // Make requests to the URLs using axios and store their responses
        const responses = await Promise.all(urls.map(url => axios.get(url)))

        // Iterate through each response and scrape relevant data
        responses.forEach(response => {
            // Parse the HTML response using cheerio
            const html = response.data
            const $ = cheerio.load(html)

            // Find all items on the page with the "main--card--" class and scrape their data
            $('a[class*="main--card--"]').each(function () {
                const itemLink = $(this).attr('href').replace(/^\/*(.*aliexpress\.com)/, 'https://$1').replace("m.", ""); // Scrape item link and remove "m." from m.aliexpress links
                const itemName = $(this).find('h1').text() // Scrape item name
                const itemImg = $(this).find('.product-img').attr('src').replace(/^\/\//, 'https://') // Scrape item image URL and replace "//" with "https://"
                const prevPrice = $(this).find('div[class*="price-original"]').text() // Scrape item previous price (if available)
                const currentPrice = $(this).find('div[class*="price-sale"]').text() // Scrape item current price
                results.push({
                    itemName,
                    itemLink: itemLink.replace("m.", ""), // Store item link without "m." from m.aliexpress links
                    itemImg,
                    prevPrice,
                    currentPrice
                })
            })
        })

        // Send the scraped results as a JSON response
        res.send(results)
    } catch (error) {
        // Handle any errors that occur during scraping or sending the response
        console.error(error)
        res.status(500).send(error.message)
    }
})

// Start the server
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})