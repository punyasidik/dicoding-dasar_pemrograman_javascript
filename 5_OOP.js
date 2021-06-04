/**
 * RANGKUMAN MATERI OOP (Object Oriented Programming)
 * 
 * OOP merupakan paradigma yang berdasarkan pada konsep objek yang memiliki atribut serta dapat melakukan operasi atau prosedur tertentu.
 * Terdapat 4 (empat) pilar dalam object oriented programming, antara lain: encapsulation, abstraction, inheritance, dan polymorphism.
 * Class merupakan blueprint untuk mendefinisikan karakteristik dari sebuah objek.
 * Object composition memungkinkan penyusunan kumpulan perilaku/method untuk menghindari pewarisan dan hirarki yang kompleks.
 */

// TUGAS OOP
    /**
     * TODO:
     * 1. Buatlah class bernama Animal dengan ketentuan:
     *    - Memiliki properti:
     *      - name: string
     *      - age: int
     *      - isMammal: boolean
     *    - Memiliki constructor untuk menginisialisasi properti:
     *      - name
     *      - age
     *      - isMammal
     * 2. Buatlah class bernama Rabbit dengan ketentuan:
     *    - Merupakan turunan dari class Animal
     *    - Memiliki method:
     *      - eat yang mengembalikan nilai string "${this.name} sedang makan!"
     *    - Ketika diinstansiasi, properti isMammal harus bernilai true
     * 3. Buatlah class bernama Eagle dengan ketentuan:
     *    - Merupakan turunan dari class Animal
     *    - Memiliki method:
     *      - fly yang mengembalikan nilai string "${this.name} sedang terbang!"
     *    - Ketika diinstansiasi, properti isMammal harus bernilai false
     * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
     *    - properti name bernilai: "Labi"
     *    - properti age bernilai: 2
     * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
     *    - properti name bernilai: "Elo"
     *    - properti age bernilai: 4
     */


    // TODO

    class Animal{
        constructor(name, age, isMammal){
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
        } 
    }
    
    class Rabbit extends Animal {
        constructor(name, age){
        super(name, age);
        this.isMammal = true;
        }
        
        eat(){
        return this.name + " sedang makan!";
        }
    }
    
    class Eagle extends Animal {
        constructor(name, age){
        super(name, age);
        this.isMammal = false;
        }
        
        fly(){
        return this.name + " sedang terbang!";
        }
    }
    
    let myRabbit = new Rabbit("Labi", 2, true);
    let myEagle = new Eagle("Elo", 4, false);
    
    let eat = new Rabbit("Labi",2).eat();
    let fly = new Eagle("Elo",4).fly();
    
    console.log(myRabbit);
    console.log(myEagle);
    console.log(eat);
    console.log(fly);
  