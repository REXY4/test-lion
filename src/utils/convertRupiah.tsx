export function convertToRupiah(amount: number) {
    // const exchangeRate = 14000; // assuming 1 USD = 14000 IDR
    const rp = amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    return "Rp " + rp.toLocaleString();
}

export function Idr(usd: number) {
    const exchangeRate = 14000; // assuming 1 USD = 14000 IDR
    const rupiah = usd * exchangeRate;
    return rupiah;
}
