export function convertToRupiah(usd:number) {
    const exchangeRate = 14000; // assuming 1 USD = 14000 IDR
    const rupiah = usd * exchangeRate;
    return "Rp " + rupiah.toLocaleString();
  }