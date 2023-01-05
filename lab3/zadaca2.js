var list = [1, 2, 3, 4, 6, 7, 2, 2, 2]
console.log(list)
var element

function funkcija(list, element) {
    var nova = []
    for(i=0; i < list.length; i++){  
        if(nova.indexOf(list[i]) === -1) {  
          nova.push(list[i])
        }  
    }
    return nova
}


console.log(funkcija(list,2))   
