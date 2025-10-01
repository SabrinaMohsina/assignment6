const categoriesContainer = document.getElementById("categories-container")
const allTrees = document.getElementById("all-trees")

const  loadCategories = async()=>{
    try{
     const res = await fetch("https://openapi.programming-hero.com/api/categories")
    const data = await res.json()
    const categories = data.categories
   showCategories(categories)

    } catch(error){
        console.log(error)
    }
    
}

const showCategories = (categories)=>{
     categories.forEach(catagory => {
         categoriesContainer.innerHTML += `
         <li id="${catagory.catagory_id}" class="text-center p-3  hover:bg-[#15803D] rounded-xl cursor-pointer" >${catagory.category_name}</li>`;
        
        });
        
  
       
}


const  loadTrees = async()=>{
    try{
     const res = await fetch("https://openapi.programming-hero.com/api/plants")
    const data = await res.json()
    const trees = data.plants
    showAllTrees(trees)
  

    } catch(error){
        console.log(error)
    }
    
}

const showAllTrees = (trees)=>{
     trees.forEach(tree => {
         allTrees.innerHTML += `
         <div class="bg-white p-2 h-[500px] w-[300px] shadow-sm ">
          <img src=${tree.image} class="h-[200px] w-[300px] object-cover rounded-xl" alt="">
        <div class="card-body">
           <h3  class="card-title" >${tree.name}</h3>
         <p>${tree.description}</p>
        <div class="flex justify-between items-center w-full">
           <button class="btn bg-[#9bf0bd] rounded-2xl">${tree.category}</button>
           <p>$ ${tree.price}</p>
          </div>
        <button class="btn bg-[#14532d] w-full  text-white text-center rounded-2xl mt-3">Add to Cart</button>
        </div>
         </div>
         `
        });
       
}
   allTrees.addEventListener('click' ,(e)=>{
            if(e.target.textContent === 'Add to Cart'){
                   console.log("add to btn clicked")
            }
         })
loadCategories();
loadTrees();