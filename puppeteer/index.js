const puppeteer = require("puppeteer");
const fs = require("fs/promises");

const scrape = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.02ws.co.il/");

  const selector = ".forcast_text";
  const text = await page.$eval(selector, (x) => {
    console.log(x.textContent);
    return x.textContent;
  });

  // const photos = await page.$$eval("img", (imgs) => {
  //   return imgs.map((img) => img.src);
  // });

  // for (const photo of photos) {
  //   const imagePage = await page.goto(photo);
  //   await fs.writeFile(photo.split("/").pop(), await imagePage.buffer());
  // }

  await fs.writeFile("test.txt", text.toString());

  // await browser.close();
};
scrape();
