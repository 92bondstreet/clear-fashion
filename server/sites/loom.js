const fetch = require('node-fetch');
const cheerio = require('cheerio');
const { v5: uuidv5 } = require('uuid');

/**
 * Parse webpage restaurant
 * @param  {String} data - html response
 * @return {Object} restaurant
 */
const parse = data => {
  const $ = cheerio.load(data, {'xmlMode': true});

  return $('product-card')
    .map((i, element) => {
      const link = `https://www.loom.fr${$(element)
        .find('a')
        .attr('href')}`;

      return {
        link,
        'brand': 'loom',
        'price': parseInt(
          $(element)
            .find('p[product-card-price]')
            .text()
        ),
        'name': $(element)
          .find('h2')
          .text()
          .trim()
          .replace(/\s/g, ' '),
        'photo': $(element)
          .find('img')
          .attr('src'),
        'uuid': uuidv5(link, uuidv5.URL)
      };
    })
    .get();
};

module.exports.scrape = async url => {
  const response = await fetch(url);

  if (response.ok) {
    const body = await response.text();

    return parse(body);
  }

  console.error(response);

  return null;
};
