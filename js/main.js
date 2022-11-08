var domList = document.querySelector(".domList");
let elTemplate=document.querySelector(".item-tempale").content

//Dom Search element
const elFormSearch=document.querySelector(".search-form");
const elFormSearchInput=elFormSearch.querySelector(".form-control")
const elFormSelect=document.querySelector(".form-select");
const elFormselectType=document.querySelector(".form-select-type");
const elSortBySelec=document.querySelector(".sort-by");

// For fragment dom element
var fragment =new DocumentFragment()
let selectFragment=new DocumentFragment()
let selectFragmentType=new DocumentFragment()
let selectFragmentheight=new DocumentFragment()

let weaknessesArray= new Set()
let typeCate=new Set()
let heigthArray=[]

function makeList(array) {
    domList.innerHTML=""
    for (var pokemon of array) {
        let tempaleClone=elTemplate.cloneNode(true);

        tempaleClone.querySelector(".topNumber").textContent = pokemon.num
        tempaleClone.querySelector(".itemImg").dataset.id = pokemon.id
        tempaleClone.querySelector(".itemName").textContent = pokemon.name
        tempaleClone.querySelector(".itemCandy").textContent = pokemon.candy
        tempaleClone.querySelector(".itemImg").src = pokemon.img
        tempaleClone.querySelector(".itemTime").dateTime = pokemon.spawn_time
        tempaleClone.querySelector(".itemTime").textContent = pokemon.spawn_time


        tempaleClone.querySelector(".text-weaknesses").textContent=`Weaknesses: ${pokemon.weaknesses}`
        tempaleClone.querySelector(".type-pokemon").textContent=`Type: ${pokemon.type}`
        tempaleClone.querySelector(".height-pokemon").textContent = `Heigth: ${pokemon.height} m`
        tempaleClone.querySelector(".weight-pokemon").textContent = `Weight: ${pokemon.weight} kg`
        tempaleClone.querySelector(".candy_count-pokemon").textContent = `Candy count: ${pokemon.candy_count || "Not"}`
        tempaleClone.querySelector(".egg-pokemon ").textContent = `Egg: ${pokemon.egg}`


        fragment.appendChild(tempaleClone)
    }
    domList.appendChild(fragment)
}

pokemons = pokemons.map(item=>{
    return {
        id: 2,
		num: item.num,
		name: item.name,
		img: item.img,
		type: item.type,
		height: Number(item.height.split(" ")[0]),
		weight: Number(item.weight.split(" ")[0]),
		candy: item.candy,
		candy_count: item.candy_count,
		egg: item.egg,
		spawn_chance: item.spawn_chance,
		avg_spawns: item.avg_spawns,
		spawn_time: item.spawn_time,
		multipliers: item.multipliers,
		weaknesses: item.weaknesses,
		prev_evolution: item.prev_evolution,
		next_evolution: item.next_evolution
    }
})

function filletSerachElm(item) {
    return pokemons.filter(elm=>{
        return elm.name.match(item) && (elFormSelect.value === "All" || elm.weaknesses.includes(elFormSelect.value)) && (elFormselectType.value==="All" || elm.type.includes(elFormselectType.value))
    })
}

function sortBy(array, whichBy){
    if (whichBy==="a-z") {
        array.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0))
    }else if(whichBy=="z-a"){
        array.sort((a, b) => b.name.charCodeAt(0) - a.name.charCodeAt(0))
    }else if(whichBy==="default"){
        return 0
    }else if(whichBy=="m"){
        array.sort((a, b) => b.height - a.height)
    }else if(whichBy=="kg"){
        array.sort((a, b) => b.weight - a.weight)
    }else{
        return 0
    }
}

function findWeaknesses(){
    pokemons.forEach(item=>{
        let candies=item.weaknesses
        let typePok=item.type

        
        candies.forEach(elm=>{
            weaknessesArray.add(elm)
        })

        typePok.forEach(i=>{
            typeCate.add(i)
        })
    })
}
 

function createOption() {
    weaknessesArray.forEach(item=>{
        let forEloption=document.createElement("option");
        forEloption.textContent=item
        forEloption.value=item
        selectFragment.appendChild(forEloption)
    })
    elFormSelect.appendChild(selectFragment)

    typeCate.forEach(elm=>{
        let forTypeOp=document.createElement("option");
        forTypeOp.textContent=elm;
        forTypeOp.value=elm
        selectFragmentType.appendChild(forTypeOp)
    })
    elFormselectType.appendChild(selectFragmentType)
}

elFormSearch.addEventListener("submit", function(evt) {
    evt.preventDefault();
    let inputValue = new RegExp(elFormSearchInput.value.trim(), 'gi')
    let newArrayFilter=filletSerachElm(inputValue)


    if (newArrayFilter.length > 0){

        sortBy(newArrayFilter, elSortBySelec.value)
        makeList(newArrayFilter)
    }else{
        alert("Sory i can't find this pokemon")
    }
})

findWeaknesses()
createOption()
makeList(pokemons)