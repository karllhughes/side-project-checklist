'use strict';
require('dotenv').config();
const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);
const fs = require('fs');
const listsDirectory = './_includes/lists/';

async function run() {
  const categories = await (base('Categories').select().all());
  const products = await (base('Products').select().all());

  categories.forEach(category => {
    let theseProducts = products.filter(product => {
      if (product.fields.Category) {
        return product.fields.Category.includes(category.id);
      }
    });

    if (theseProducts && theseProducts.length) {
      // Sort the products
      theseProducts.sort((a, b) => {
        if (a.fields['Vote Count'] === b.fields['Vote Count']) {
          return (a.fields['Name'] < b.fields['Name']) ? -1 : (a.fields['Name'] > b.fields['Name']) ? 1 : 0;
        } else {
          return (a.fields['Vote Count'] > b.fields['Vote Count']) ? -1 : 1;
        }
      });
      let markdownArray = generateMarkdown(theseProducts);
      saveToFile(replaceAll(category.fields.Name, ' ', '-') + '.md', markdownArray);
    }
  });
}

function generateMarkdown(products) {
  return products.map(product => {
    return getLink(product) + '**[' + product.fields.Name + '](' + product.fields.URL + ')** ' + getPrice(product) + getDescription(product);
  });
}

function getLink(product) {
  return '- <a href="#vote-form" class="vote-link" rel="modal:open" id="' +
    replaceAll(product.fields.Name, ' ', '_') +
    '">&#x25B2; <span class="count">' +
    product.fields['Vote Count'] +
    '</span></a> &nbsp;';
}

function getDescription(product) {
  return product.fields.Description ? ' - ' + product.fields.Description : '';
}

function getPrice(product) {
  if (product.fields['Cheapest Plan'] || product.fields['Cheapest Plan'] === 0) {
    return '<span style="color: grey;">($' + product.fields['Cheapest Plan'] + ')</span>'
  }
  return '';
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function saveToFile(filename, markdownArray) {
  let path = listsDirectory + filename;

  // Truncate the file
  if (fs.existsSync(path)) {
    fs.truncateSync(path, 0);
  }

  // Add each line
  markdownArray.forEach(markdownLine => {
    fs.appendFileSync(path, markdownLine + '\r\n\r\n');
  });
}

run();
