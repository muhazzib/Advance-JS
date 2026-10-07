const shoes = [
  {
    id: 1,
    name: "Air Runner",
    brand: "Adidas",
    category: "Running",
    color: "Black",
    size: 42,
    price: 120,
    inStock: true,
  },
  {
    id: 2,
    name: "Ultraboost 24",
    brand: "Adidas",
    category: "Running",
    color: "White",
    size: 43,
    price: 180,
    inStock: true,
  },
  {
    id: 3,
    name: "Classic Leather",
    brand: "Adidas",
    category: "Casual",
    color: "Brown",
    size: 41,
    price: 90,
    inStock: false,
  },
  {
    id: 4,
    name: "Old Skool",
    brand: "Vans",
    category: "Sneakers",
    color: "Black/White",
    size: 40,
    price: 75,
    inStock: true,
  },
  {
    id: 5,
    name: "Chuck Taylor All Star",
    brand: "Converse",
    category: "Casual",
    color: "Red",
    size: 42,
    price: 65,
    inStock: true,
  },
];

const ulElement = document.getElementById("list");

const onFilter = (e) => {
  ulElement.innerHTML = "";
  const filterValue = e.target.value;
  const filteredShoes = shoes.filter((shoe) => shoe.brand === filterValue);
  const shoesToRender = filterValue === "all" ? shoes : filteredShoes;
  renderShoes(shoesToRender);
};

const renderShoes = (shoesToRender) => {
  for (var i = 0; i < shoesToRender.length; i++) {
    ulElement.innerHTML += `<li>${shoesToRender[i].name}</li>`;
  }
};

renderShoes(shoes);
