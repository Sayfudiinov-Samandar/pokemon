var elContiner=document.querySelector(".container");
var domList=document.createElement("ul");



console.log(pokemons);

for (var pokemon of pokemons) {
    



    var listItem=document.createElement("li");

    var topNumber=document.createElement("span");

    var listTopBox=document.createElement("div");
    var itemName=document.createElement("h3");

    var itemImg=document.createElement("img");

    var itemBottombox=document.createElement("div");
    var itemCandy=document.createElement("div");
    var itemTime=document.createElement("time");
    
    
    domList.className='row justify-content-center p-0 gap-3 ' 


    listItem.className='bg-info col-2 d-flex flex-column rounded-3 border-2 border-dark list-unstyled align-items-center p-0 position-relative' 
    
    topNumber.className='position-absolute bg-danger text-warning px-1 rounded-3 top-0 start-100 translate-middle'
    
    itemName.className='text-warning py-1 px-1 mt-3 bg-danger rounded-4'

    itemBottombox.classList='p-3 text-white text-center d-flex flex-column'
    
    itemCandy.className='d-inline w-auto text-dark '
    
    topNumber.textContent=pokemon.num


    itemName.textContent=pokemon.name;
    itemCandy.textContent=pokemon.candy
    itemImg.src=pokemon.img;
    itemTime.dateTime=pokemon.spawn_time
    itemTime.textContent=pokemon.spawn_time
    itemImg.width="150";
    itemImg.height="200";



    
    elContiner.appendChild(domList);
    domList.appendChild(listItem);

    listItem.appendChild(topNumber)

    listItem.appendChild(listTopBox)
    listTopBox.appendChild(itemName);
    
    listItem.appendChild(itemImg);

    listItem.appendChild(itemBottombox)
    itemBottombox.appendChild(itemTime);
    itemBottombox.appendChild(itemCandy);



}


