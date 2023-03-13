const fetch = require('node-fetch');
const cheerio = require('cheerio');
const {'v5': uuidv5} = require('uuid');

/**
 * Parse webpage restaurant
 * @param  {String} data - html response
 * @return {Object} restaurant
 */
const parse = data => {
  const $ = cheerio.load(data, {'xmlMode': true});

  return $('li.item.product-item')
    .map((i, element) => {
      const link = $(element)
        .find('a')
        .attr('href');

      return {
        link,
        'brand': 'panafrica',
        'price': parseInt(
          $(element)
            .find('span.amount')
            .text()
        ),
        'name': $(element)
          .find('h3.e__title')
          .text()
          .trim()
          .replace(/\s/g, ' '),
        'photo': $(element)
          .find('div.packshot img')
          .attr('data-lazy-src'),
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
