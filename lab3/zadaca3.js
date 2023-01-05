const pi = 3.14

class Cilindar{
    
    constructor (radius, visina){
        this.radius = radius
        this.visina = visina

    }

    volumen() {
        return pi * this.radius * this.radius * this.visina
    }
}

var objekt1 = new Cilindar(5 ,5)
console.log("volumenot na cilindarot e: " + objekt1.volumen())