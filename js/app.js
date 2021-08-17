const menu = [
    {
        id:1,
        title:"country delight",
        category: "breakfast",
        price: 40.99,
        img:"../css/images/menu.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id:2,
        title:"Magma",
        category: "lunch",
        price: 20.99,
        img:"../css/images/menu2.jpg",
        desc: `Bacon crumble, garlic and parmesan oil (for crust), Havarti, nachos chips, red onion, spicy pepperoni, Sriracha, garlic sauce and cheese`,
    },
    {
        id:3,
        title:"BBQ King",
        category: "dinner",
        price: 25.99,
        img:"../css/images/menu3.jpg",
        desc: `Cream cheese, garlic and parmesan oil (for crust), jalapeno, pepper cheese, pepperoni, pulled pork, BBQ sauce and cheese`,
    },
    {
        id:4,
        title:"Fiesta",
        category: "shakes",
        price: 30.99,
        img:"../css/images/menu4.jpg",
        desc: `Cream cheese, Fresh garlic, garlic and parmesan oil (for crust), mushrooms, oregano, pepperoni, pineapple, sauce and cheese`,
    },
    {
        id:5,
        title:"Italiana",
        category: "breakfast",
        price: 22.99,
        img:"../css/images/menu5.jpg",
        desc: `Balsamic glaze, cream cheese, dates, garlic and parmesan oil (for crust), pepperoni, semi dried tomatoes, spinach, sauce and cheese`,
    },
    {
        id:6,
        title:"Meat & Cheese",
        category: "lunch",
        price: 80.99,
        img:"../css/images/menu6.jpg",
        desc: `Bacon crumble, black pepper, cream cheese, garlic and parmesan oil (for crust), pepper cheese, pepperoni, sauce and cheese`,
    }
]

const itemBox = document.querySelector(".item-box");
const btn = document.querySelectorAll(".btn");

window.addEventListener("DOMContentLoaded",function(){
  displayItem(menu);
});

btn.forEach(function(btns){
  btns.addEventListener('click',function(e){
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      // console.log(menuItem.category);
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === "all") {
      displayItem(menu);
    } else {
      displayItem(menuCategory);
    }
  })
})



function displayItem(menuItems){
  let displayMenu = menuItems.map(function(item){
    return `<div class="item-1">
    <div class="item-1__img">
      <img src="${item.img}" alt="image 1" class="img">
    </div>
    <div class="item-1__data">
      <div class="item-1__data--top">
        <h3 class="tertiary-header">${item.title}</h3>
        <p class="price">$${item.price}</p>
      </div>
      <div class="item-1__data--bottom">
        <p class="paragraph">${item.desc}</p>
      </div>
    </div>
  </div>`
})
displayMenu = displayMenu.join("");
itemBox.innerHTML = displayMenu;
}