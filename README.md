<h1 align="center">AliExScraper</h1>

<p align="center">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/jonathanbc10/AliExScraper">
  <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/jonathanbc10/AliExScraper">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jonathanbc10/AliExScraper">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/jonathanbc10/AliExScraper">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/jonathanbc10/AliExScraper">
</p>

<p align="center">
  Get your dropshipping easily.
  <br>
  <br>
  <a href="https://github.com/jonathanbc10/AliExScraper/issues/new">Report Bug</a>
  ·
  <a href="https://github.com/jonathanbc10/AliExScraper/issues/new">Request Feature</a>
</p>

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- ✨ **Web Scraping:** Scrapes data from multiple pages on AliExpress based on search terms and number of pages.

- 🚀 **Dynamic URL Generation:** Generates the URLs dynamically based on search terms and number of pages.

- 📝 **Data Parsing:** Parses the HTML response using Cheerio to extract relevant data such as item name, item link, item image URL, previous price, and current price.

- 💬 **API Endpoint:** Defines an API endpoint (`/alisearch`) that accepts query parameters (`term` and `pages`) to initiate the web scraping process.

- 🔁 **Asynchronous Processing:** Uses asynchronous programming with `async/await` and `Promise.all` to efficiently make requests to multiple URLs and scrape data concurrently.

- ⚙️ **Server Configuration:** Sets up an Express server and configures it to listen on a specific port.

- 📚 **Environment Variables:** Loads environment variables using `dotenv` to store sensitive information or configuration details.

- 🔧 **Error Handling:** Handles errors that may occur during the web scraping process and sends appropriate responses with error messages.

- 📡 **JSON Response:** Sends the scraped results as a JSON response to the client.

- 🔌 **Middleware:** Uses Express middleware (`express.json()`) to parse JSON data in the request.

- 🌐 **Cross-Origin Requests:** Enables cross-origin requests by allowing requests to the `/alisearch` endpoint.

- 📦 **Dependency Management:** Manages project dependencies using npm and imports required modules (`axios`, `cheerio`, `express`).

## Installation

To set up this project on your local machine, follow these steps:

1. Download the zip or clone the repository:

```sh
git clone https://github.com/jonathanbc10/AliExScraper.git
```

2. Install the required dependencies:

```sh
npm install
```

3. Start the development server:

```sh
npm start
```

## Usage

To use the scraper, follow these steps:

1. Make sure you have the required environment variables set up.
2. Send a GET request to the /alisearch endpoint with the following query parameters:
   - `term`: The search term to scrape AliExpress.
   - `pages`: The number of pages to scrape.
3. The server will respond with the scraped results in JSON format.

Example usage:

```http
GET /alisearch?term=billetera-naruto&pages=1
```

Sample response:

```json
[
  {
    "itemName": "Cartera de rana de Naruto de dibujos animados, monedero de felpa personalizado, bolsa de llaves, bolsa de figura de Cosplay, accesorios de bolsa, regalos de cumpleaños de Halloween, nuevo ",
    "itemLink": "https://es.aliexpress.com/item/1005005461005861.html?browser_id=d4bad97778c04841ae68d8b80b9987c9&aff_platform=msite&m_page_id=dbadcaedbbc188740b354f12834ca581f2810a8922&gclid=&pdp_npi=3%40dis%21CLP%213867.0%21323.0%21%21%21%21%21%402122443916855740716508248d0790%2112000033173748457%21sea%21CL%210&algo_pvid=17ffd2ff-6df3-4e83-bd30-e7fdc3504d12",
    "itemImg": "https://ae04.alicdn.com/kf/S68a1d39e22aa42308d25397113a3aa33C.jpg_300x300Q70.jpg",
    "prevPrice": "CLP3.867",
    "currentPrice": "CLP323"
  },
  {
    "itemName": "Cartera de rana de Naruto para juegos de rol, accesorios de fiesta para niños, monedero grande portátil de dibujos animados de Anime ",
    "itemLink": "https://es.aliexpress.com/item/1005005535773041.html?browser_id=d4bad97778c04841ae68d8b80b9987c9&aff_platform=msite&m_page_id=dbadcaedbbc188740b354f12834ca581f2810a8922&gclid=&pdp_npi=3%40dis%21CLP%213440.0%21837.0%21%21%21%21%21%402122443916855740716508248d0790%2112000033449836358%21sea%21CL%210&algo_pvid=17ffd2ff-6df3-4e83-bd30-e7fdc3504d12",
    "itemImg": "https://ae04.alicdn.com/kf/Sbbe6f277db27499e87fe3a2a10f8149ea.jpg_300x300Q70.jpg",
    "prevPrice": "CLP3.440",
    "currentPrice": "CLP837"
  },
  ///... more items ...///
]
```

**IMPORTANT NOTE:** This scraper will work with the host's location. So the search will be adapted to your language, location and currency, if you're hosting it yourself. If not, it will take the server's.

## Built With

- **Nodejs**
- **Express**
- **Cheerio**
- **Axios**

---

## Contributing

Contributions from the community are always welcome! This project will be continuously modified and enhanced over time by the project owner, adding new functions and parameters to make searches more specific and rich. Contributions and improvements are highly appreciated and encouraged.

To contribute, please follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b {feature/fix/refactor}/my-new-feature`.
3. Make your changes and commit them: `git commit -am "Add new feature"`.
4. Push to the branch: git push origin {feature/fix/refactor}/my-new-feature.
5. Create a new Pull Request and we will review your changes to merge them to the main branch.

## License

Distributed under the MIT License. Use it as you want to, but don't forget to share :)
