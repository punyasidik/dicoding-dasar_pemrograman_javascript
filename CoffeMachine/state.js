const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}
    
const isCoffeeMachineReady = true;

// Menggunakan Syntax Export Native    
    // Mengekspor nilai object coffeStock agar bisa diakses pada file lain
        // module.exports = coffeeStock;

    // Mengekspor nilai 2 object sekaligus
        // module.exports =  {coffeeStock, isCoffeeMachineReady};

// Menggunakan Syntax Export Dengan Modul ES6
// Tambahkan dulu properti "type" dengan value "module" pada file package.json
    // Satu Nilai
        // export default coffeeStock;
    // Banyak Nilai
        export {coffeeStock, isCoffeeMachineReady};