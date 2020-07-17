const puppeteer = require("puppeteer");
const readlineSync = require('readline-sync');

async function robo() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const moedaBase = readlineSync.question('Informe uma moeda base: ') || "dolar";
  const moedaFinal = readlineSync.question('Informauma moeda desejada: ') || "real";

  const BaseURL = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome..69i57j0l7.1943j1j9&sourceid=chrome&ie=UTF-8`;
  await page.goto(BaseURL);

  //await page.screenshot({ path: "exemplo.png" });
  const resultado = await page.evaluate(() => {
    return document.querySelector(".a61j6.vk_gy.vk_sh.Hg3mWc").value;
  });

  console.log(`o Valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`);
  await browser.close();
}

robo();
