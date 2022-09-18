const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = null;

const promiseOutput = (opsi) => {
  // Hasil akhir dari fungsi ini adalah dengan
  // mengembalikan Promise
  return new Promise((resolve, reject) => {
    // Kondisi gagal
    if (opsi=== null) {
      reject('Maaf, opsi Error !');
    }
    // Kondisi terpenuhi
    else {
      resolve(opsi);
        (async () => {
          var hasilx = await promiseTheaterIXX(); 
          var hasilc = await promiseTheaterVGC(); 
          counter = 0
          for (tmphasilx of hasilx) {
            if (tmphasilx['hasil'] == opsi) {
              counter++;
            }
            
          };
          for (tmphasilc of hasilc) {
            if (tmphasilc['hasil'] == opsi) {
              counter++;
            }
          };
          console.log(counter);
        })();
    }
  });
};

module.exports = {
  promiseOutput,
};