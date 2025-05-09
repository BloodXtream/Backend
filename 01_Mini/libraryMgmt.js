class Library {
    constructor(name, author, price) {
        this.books = []  // saari books ka record hai yha pr
    }
    addBooks(books) {
        this.books.push(...books)
    }
    listAllBooks() {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}: ${book.name} by ${book.author}`)
        })
    }
}

class Book {
    constructor(name, isbn, price, author) {
        this.name = name
        this.isbn = isbn
        this.price = price
        this.author = author
        this.readStatus = false
    }
    info() {
        console.log(`${this.readStatus ? "✅" : "❌"} ${this.name} is written by ${this.author} and you have ${this.readStatus ? "read it" : "not reaad this book"} is availablw at amazon with at a price range of ${this.price}`)
    }

    changeReadStatus() {
        this.readStatus = !this.readStatus
    }
}

let jashiLibriry = new Library()
let book1 = new Book("Wealth is Life", "2hjdhf35343hdkfh", 120, "Pragyanam Tiwari")
let book2 = new Book("Indian War", "2hjdhf35343fkhskhfh", 10000, "Pragyanam Tiwari")
let book3 = new Book("lovely", "2hjdhf353sodkjfksdf", 2000, "harsh sharma")
let book4 = new Book("69", "2hjdhf353sodkjfksdf", 690, "kamasutra")


jashiLibriry.addBooks([book1, book2, book3, book4])