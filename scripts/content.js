const button = document.createElement('button');
button.textContent = "Descargar Pdf";
button.title = "Recuerda visualizar todo el documento antes de descargar."
button.classList.add('btn-downloader');

button.addEventListener('click', () => {
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
  pdf.save("Archivo_Exportado.pdf");
})
document.body.appendChild(button);