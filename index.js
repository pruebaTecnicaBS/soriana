const puppeteer = require("puppeteer");
const cors = require("cors");
var express = require("express");
var $ = require("jquery");
var app = express();
app.use(cors());
app.options("*", cors());

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
  );
  await page.goto("https://www.soriana.com/");

  await page.click(".popover__content .btn-group .btn-close");
  await page.click(".js-title-menu");

  const enlaces = await page.evaluate(() => {
    const elements = document.querySelectorAll(".submenu");
    links = [];

    for (let e of elements) {
      obj = {};
      categories = [];
      a = document.querySelector(`.${e.id} .cat-title-and-close  .cat-lvl-one`);
      obj.departament = a.innerText.replace(/\n/g, "");
      obj.url = a.href;

      cat = document.querySelectorAll(
        `.${e.id}.submenu > .subcat-list .one-third`
      );

      for (let c of cat) {
        cat1 = {};
        cat1.name = c.children[0].innerText.replace(/\n/g, "");
        cat1.url = c.children[0].children[0].href;
        sub = c.children[1];
        subCategories = [];
        $(sub).each(function () {
          var li = $(this).find("li a");
          li.each(function () {
            subCategories.push(
              JSON.stringify({
                name: $(this).text().replace(/\n/g, ""),
                url: $(this).attr("href"),
              })
            );
          });
        });
        cat1.subCategories = subCategories;

        categories.push(cat1);
      }
      obj.categories = categories;
      links.push(obj);
    }
    return links;
  });

  for (let e of enlaces) {
    console.log(e.categories);
  }
  //await browser.close();
})();
