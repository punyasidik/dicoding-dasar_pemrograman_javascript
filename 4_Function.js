/**
 * RANGKUMAN FUNGTION
 * 
 * Function/fungsi adalah blok atau kumpulan kode yang memungkinkan untuk dipanggil berkali-kali.
 * Penamaan fungsi harus mendeskripsikan fungsi dengan jelas. Penamaan yang bagus akan langsung memberi kita pemahaman tentang apa yang dilakukan atau dikembalikan.
 * Function dapat menerima masukan nilai melalui parameter.
 * Fungsi dapat mengembalikan nilai. Jika tidak, maka hasilnya adalah undefined.
 * Karena fungsi berupa nilai, fungsi dapat ditetapkan atau dideklarasikan di setiap tempat kode, termasuk variabel atau parameter dari fungsi lain.
 */

// TUGAS FUNGTION
    /**
     * TODO:
     * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
     *    - Menerima dua buah argumen number, a dan b.
     *    - Mengembalikan nilai terkecil antara a atau b.
     *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
     *
     *    contoh:
     *    minimal(1, 4) // 1
     *    minimal(3, 2) // 2
     *    minimal(3, 3) // 3
     *
     * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
     *    - Menerima dua buah argumen number, a dan b.
     *    - Mengembalikan nilai dari hasil perkalian a * a sebanyak b (fungsi kuadrat).
     *
     *    contoh:
     *    power(7, 3) // 343
     *    power(3, 3) // 27
     *    power(4, 0.5) // 2
     */


    // TODO

    function minimal(a, b){
        if(a<b || a==b){
            return a;
        };
        if (b<a){
        return b; 
        };
    };
   
   let soal1 = minimal(9,5);
   console.log(soal1);
   
   function power(a, b){
     a = a**b;
     return a;
   };
   
   let soal2 = power(4, 0.5);

   console.log(soal2);   