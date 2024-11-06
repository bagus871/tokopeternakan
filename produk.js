function sendTowWa(productName, productPrice) {
    let phoneNumber = '+6281260138699'; // Ganti dengan nomor WhatsApp Anda
    let message = 'Halo! Saya ingin memesan ' + productName + ' dengan harga ' + productPrice + '.'; 
    window.open('https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message), '_blank');
  }
  
  // Menambahkan event listener untuk menunggu hingga halaman dimuat
  window.addEventListener('load', () => {
    const productCards = document.querySelectorAll('.product-card');
    
    // Menambahkan kelas 'visible' untuk memicu animasi
    productCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 200); // Menambahkan delay untuk setiap kartu produk
    });
  });
  
  // Fungsi untuk mengirim pesan ke WhatsApp
  function sendTowWa(productName, price) {
    const message = `Saya ingin memesan ${productName} seharga ${price}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }