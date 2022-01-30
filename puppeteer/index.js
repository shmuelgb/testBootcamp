const puppeteer = require("puppeteer");
const fs = require("fs/promises");

const scrape = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://sad-wescoff-918f8d.netlify.app/");

  const selector = "#root a";
  const text = await page.$$eval(selector, (x) => {
    console.log(x[0].attributes[1].value);
    return x.map((a) => a.attributes[1].value);
  });
  // const text = await page.evaluate(() => {
  // });

  await fs.writeFile("test.txt", text.toString());

  await browser.close();
};
scrape();
