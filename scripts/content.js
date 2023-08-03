/* const article = document.querySelector("article");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
} */

const button = document.createElement('button');
button.textContent = "Descargar Pdf";
button.style.position = 'absolute';
button.style.zIndex = '100000';
button.style.left = '10px';
button.style.top = '100px';

button.addEventListener('click', () => {
  /* let jspdf = document.createElement("script");
  jspdf.onload = function () {
      let pdf = new jsPDF();
      let elements = document.getElementsByTagName("img");
      for (let i in elements) {
          let img = elements[i];
          console.log("add img ", img);
          if (!/^blob:/.test(img.src)) {
              console.log("invalid src");
              continue;
          }
          let can = document.createElement('canvas');
          let con = can.getContext("2d");
          can.width = img.width;
          can.height = img.height;
          con.drawImage(img, 0, 0, img.width, img.height);
          let imgData = can.toDataURL("image/jpeg", 1.0);
          pdf.addImage(imgData, 'JPEG', 0, 0);
          pdf.addPage();
      }
      pdf.save("Exported_File.pdf");
  };
  jspdf.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js';
  document.body.appendChild(jspdf); */

    let pdf = new jsPDF();
    let elements = document.getElementsByTagName("img");
    for (let i in elements) {
        let img = elements[i];
        console.log("add img ", img);
        if (!/^blob:/.test(img.src)) {
            console.log("invalid src");
            continue;
        }
        let can = document.createElement('canvas');
        let con = can.getContext("2d");
        can.width = img.width;
        can.height = img.height;
        con.drawImage(img, 0, 0, img.width, img.height);
        let imgData = can.toDataURL("image/jpeg", 1.0);
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.addPage();
    }
    pdf.save("Exported_File.pdf");
})
document.body.appendChild(button);