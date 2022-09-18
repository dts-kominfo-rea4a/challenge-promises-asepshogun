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
          counterm = 0
          countertm = 0
          for (tmphasilx of hasilx) {
            if (tmphasilx['hasil'] == opsi && opsi == 'tidak marah') {
              // console.log(tmphasilx['namaFilm']+ ' - ' +tmphasilx['hasil'])
              countertm++;
            }else if (tmphasilx['hasil'] == opsi && opsi == 'marah') {
              // console.log(tmphasilx['namaFilm']+ ' - ' +tmphasilx['hasil'])
              counterm++;
            }
            
          };
          for (tmphasilc of hasilc) {
            if (tmphasilc['hasil'] == opsi && opsi == 'tidak marah') {
              // console.log(tmphasilc['namaFilm']+ ' - ' +tmphasilc['hasil'])
              countertm++;
            }
            else if (tmphasilc['hasil'] == opsi && opsi == 'marah') {
              // console.log(tmphasilc['namaFilm']+ ' - ' +tmphasilc['hasil'])
              counterm++;
            }
          };
          if(opsi == 'marah'){
            console.log(counterm);
          }else if (opsi == 'tidak marah'){
            console.log(countertm);
          }
        })();
    }
  });
};

module.exports = {
  promiseOutput,
};