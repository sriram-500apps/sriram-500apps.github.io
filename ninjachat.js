var request = require("request");
var puppeteer = require("puppeteer");

request("sriram-500apps.github.io", function(
  error,
  response,
  html
) {
  if (!error && response.statusCode == 200) {
    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto("https://www.linkedin.com/in/pothuraju-sriram/");

      // Get the "viewport" of the page, as reported by the page.
      const dimensions = await page.evaluate(() => {
        return {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight,
          deviceScaleFactor: window.devicePixelRatio,
        };
      });

      console.log("Dimensions:", dimensions);

      await browser.close();
    })();
  }
});
