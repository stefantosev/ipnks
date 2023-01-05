class Kniga{
    
    constructor(title, author, alreadyRead){
        this.title = title
        this.author = author
        this.alreadyRead = alreadyRead
    }

    pecati(){
        if(this.alreadyRead==true){
            console.log(`You already read "${this.title}" by "${this.author}"`)
        }
        else{
            console.log(`You still need to read "${this.title}" by "${this.author}"`)
        }
    }

}

var kniga1 = new Kniga("The Hobbit", "J.R.R. Tolkien", false)
var kniga2 = new Kniga("1984", "George Orwell", true)
var kniga3 = new Kniga("Pride and Prejudice", "Jane Austen", true)
var kniga4 = new Kniga("The Book Thief", "Markus Zusak", false)


//da gi cuvame vo niza za da printame
var niza = [kniga1, kniga2, kniga3, kniga4]

for(var i=0; i<niza.length; i++){
    console.log(niza[i].pecati())
}

