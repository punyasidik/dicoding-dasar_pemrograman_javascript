// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");

/*
// Menggunakan Syntax import Native
    // Mengimpor nilai object coffeStock yang ada pada file state.js
        // const coffeeStock = require("./state")

    // Mengimpor nilai 2 object sekaligus yang ada pada file state.js
        const {coffeeStock, isCoffeeMachineReady} = require("./state");

    function makeCoffe(type, miligrams) {
        if (coffeeStock[type] >= 80){
            console.log("Kopi berhasil dibuat !");
        } else {
            console.log("Biji kopi habis !");
        }
    }

    // Menjalankan fungsi makeCoffe
        makeCoffe("robusta", 80);

    console.log(coffeeStock);
    console.log(isCoffeeMachineReady);
*/

// Menggunakan Syntax Import Dengan Modul ES6
// Tambahkan dulu properti "type" dengan value "module" pada file package.json
    // Satu Nilai
        // import coffeeStock from './state.js';
        // console.log(coffeeStock);

    // Banyak Nilai
        import {coffeeStock, isCoffeeMachineReady} from './state.js';
        console.log(coffeeStock);
        console.log(isCoffeeMachineReady);