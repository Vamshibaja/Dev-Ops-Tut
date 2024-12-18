import QRCode from "qrcode";

// Data to be encoded in the QR Code
const data = "Hello, this is a QR code with sample data!";

// Generate the QR Code and display it
const qrCodeContainer = document.getElementById("qrcode");

QRCode.toDataURL(data)
  .then((url) => {
    // Create an image element to display the QR Code
    const img = document.createElement("img");
    img.src = url;
    img.alt = "QR Code";
    qrCodeContainer.appendChild(img);
  })
  .catch((err) => {
    console.error("Error generating QR Code:", err);
  });
