const url = "https://www.google.com/search?q=Billgates ";
const http = require("https");
const htmlt = require("html-to-text");

async function search(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        resolve(htmlt.fromString(data, { wordwrap: 130 }));
      });
    });
  });
}
async function main() {
  var abc = await search(url);
  console.log(abc);
}
main();
