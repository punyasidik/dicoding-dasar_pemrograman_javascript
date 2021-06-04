/**
 * RANGKUMAN MATERI
 * 
 * Object adalah tipe data kompleks untuk menyimpan banyak data dengan format key-value. Key pada object harus berupa string.
 * Array digunakan untuk menyimpan banyak data. Data pada array disusun secara berurutan dan diakses menggunakan index.
 * Map menyimpan banyak data dengan format key-value seperti object. Namun, key pada Map dapat bertipe apa pun.
 * Set digunakan untuk menyimpan banyak data secara unik, tidak ada duplikasi, tidak berurutan, dan tidak diindeks.
 */

// TUGAS OBJECT
console.log("================================================");
console.log("TUGAS OBJECT");
console.log("------------------------------------------------");
    /**
     * TODO
     * 1. Buatlah variabel dengan nama restaurant yang object dengan ketentuan berikut:
     *    - Memiliki properti bernama "name"
     *       - Bertipe data string
     *       - Bernilai apa pun, asalkan tidak string kosong atau null.
     *    - Memiliki properti bernama "city"
     *       - Bertipe data string
     *       - Bernilai apa pun, asalkan tidak string kosong atau null.
     *    - Memiliki properti "favorite drink"
     *       - Bertipe data string
     *       - Bernilai apa pun, asalkan tidak string kosong atau null.
     *    - Memiliki properti "favorite food"
     *       - Bertipe data string
     *       - Bernilai apa pun, asalkan tidak string kosong atau null.
     *    - Memiliki properti "isVegan"
     *       - Bertipe data boolean
     *       - Bernilai boolean apa pun.
     *
     * 2. Buatlah variabel bernama name.
     *    Kemudian isi dengan nilai name dari properti object restaurant
     * 3. Buatlah variabel bernama favoriteDrink.
     *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
     */


    // TODO
    let restaurant = {
        name : "Kebab Durian Mbleberr",
        city : "Bogor",
        "favorite drink" : "Susu Kocok",
        "favorite food" : "Kebab Durian Coklat",
        isVegan : false
        };

    let name = restaurant.name;
    let favoriteDrink = restaurant["favorite drink"];

    console.log(restaurant.name);
    console.log(restaurant.city);
    console.log(restaurant["favorite drink"]);
    console.log(restaurant["favorite food"]);
    console.log(restaurant.isVegan);

    console.log(name);
    console.log(favoriteDrink);

// TUGAS ARRAY
console.log("================================================");
console.log("TUGAS ARRAY"); 
console.log("------------------------------------------------");
    /**
     * TODO:
     * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
     *   - Array tersebut menampung bilangan genap dari 1 hingga 100
     *
     * Catatan:
     *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
     */

    // TODO
    let evenNumber = [];
    let i;

    for (i=1; i<=100; i++){
        if (i%2==0){
            evenNumber.push(i);
        };
    };

    console.log(evenNumber);

// TUGAS MAP
console.log("================================================");
console.log("TUGAS MAP"); 
console.log("------------------------------------------------");
    /**
     * TODO:
     * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
     *   - key "USD", value 14000
     *   - key "JPY", value 131
     *   - key "SGD", value 11000
     *   - key "MYR", value 3500
     * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
     *     - priceInJPY dengan nilai currency JPY
     */

    const priceInJPY = 5000;

    // TODO
    const currency = new Map([
        ['USD', 14000],
        ['JPY', 131],
        ['SGD', 11000],
        ['MYR', 3500],
    ]);
    
    let priceInIDR = priceInJPY * currency.get('JPY');
    
    console.log(priceInIDR);