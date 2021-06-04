/**
 * 
 */



// TUGAS FP
    /**
     * TODO:
     * Buatlah variabel greatAuthors yang merupakan array
     * berdasarkan hasil filter() dan map() dari books:
     *   - Gunakan fungsi filter untuk mengembalikan nilai item books
     *     yang hanya memiliki nilai sales lebih dari 1000000.
     *   - Gunakan fungsi map pada books yang sudah ter-filter,
     *     untuk mengembalikan nilai string dengan format:
     *     - `${author} adalah penulis buku ${title} yang sangat hebat!`
     *
     * Catatan: Jangan ubah nilai atau struktur dari books
     */

    const books = [
        { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
        { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
        { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
        { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
        { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
        { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
        { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
    ];
    
    // TODO
    let greatAuthors = [];

    // Membuat fungsi filter untuk mencari buku yang salesnya diatas 1000000
    function filter(books){
        let i
        let booksFiltered = []

        for (i=0; i<books.length; i++){
            if(books[i].sales >= 1000000){
                booksFiltered.push(books[i]);
            };
        };

        return booksFiltered;
    }

    // Membuat fungsi map untuk memberikan ungkapan apresiasi
    function map(books){
        let i
        let apreciate = []

        for (i=0; i<books.length; i++){
            apreciate.push(`${books[i].author} adalah penulis buku ${books[i].title} yang sangat hebat!`);
        }

        return apreciate;
    }

    greatAuthors = map(filter(books));

    console.log(greatAuthors);