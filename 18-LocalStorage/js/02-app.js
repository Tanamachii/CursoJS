var cat = {name:"Athena"}

function swap(feline){
    feline.name = "Wild";
    feline = {name:"Tabby"}
}

swap(cat)
console.log(cat.name)