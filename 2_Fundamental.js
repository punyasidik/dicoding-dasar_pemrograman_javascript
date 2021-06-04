/**
 * RANGKUMAN MATERI FUNDAMENTAL
 * 
 * Gunakan comments untuk memberitahu interpreter supaya mengabaikan kode atau teks yang kita tulis. Ini akan berguna untuk membuat dokumentasi atau penjelasan atas kode yang kita tulis.
 * Kita dapat menyimpan suatu nilai ke dalam variabel. ES6 mengenalkan dua cara baru untuk mendefinisikan variabel, yaitu let dan const. Gunakan const untuk menyimpan nilai yang tidak akan berubah setelah diinisialisasi. Gunakan let apabila nilai di dalam variabel bisa berubah atau diinisialisasi ulang.
 * Terdapat tujuh (7) tipe data primitif yang mendefinisikan suatu nilai dalam JavaScript. Ketujuh nilai tersebut antara lain: Undefined, Number, BigInt, String, Boolean, Null, dan Symbol.
 * JavaScript memiliki beragam operator yang memberi tahu interpreter untuk melakukan operasi matematika, relasional, atau logika untuk memberikan hasil akhir.
 * Pengambilan keputusan adalah hal yang penting dalam pemrograman. Kita bisa memanfaatkan if-else statement atau switch-case untuk memilih satu opsi berdasarkan kondisi yang diberikan.
 * Pemrograman juga membantu kita untuk melakukan pekerjaan yang berulang. Dengan kode for atau while, kita bisa melakukan perulangan terhadap suatu kode sebanyak ratusan bahkan ribuan kali hanya dengan beberapa baris saja. 
 */

/**
 * TUGAS !
 * Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan:
 *  1. Jika nilai score lebih atau sama dengan 90
 *      - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
 *  2. Jika nilai score ada di antara 80 hingga 89
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
 *  3. Jika nilai score ada di antara 70 hingga 79
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
 *  4. Jika nilai score ada di antara 60 hingga 69:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
 *  5. Jika nilai score di bawah 60:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'
 *
 *
 *  Note: - Mohon untuk tidak menghapus kode yang sudah ada sebelumnya.
 *        - Anda tidak perlu membuat variabel result dan score secara manual.
 *          Gunakan variabel yang sudah disediakan.
 *
 */

// Membuat function, dengan 1 parameter yaitu nilai score
 function scoreChecker(score) {
    
    // Membuat variabel result untuk menampung hasil/nilai yang akan dikembalikan
    let result;
  
    // Membuat percabangan menggunakan if
  if (score >= 90){
   result =  'Selamat! Anda mendapatkan nilai A.';
  }
    else if (score >=80 && score < 90){
   result =  'Anda mendapatkan nilai B.';
  }
    else if (score >=70 && score < 80){
   result =  'Anda mendapatkan nilai C.';
  }
    else if (score >=60 && score < 70){
   result =  'Anda mendapatkan nilai D.';
  }
    else if (score < 60){
   result =  'Anda mendapatkan nilai E.';
  }
  
  
    // Mengembalikan nilai result
    return result;
  }

  console.log(scoreChecker(80));        // menampilkan hasil/nilai dari fungsi scoreChecker() dengan parameter nilai scorenya sebesar 80