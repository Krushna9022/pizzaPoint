document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("logo");
  const logoContainer = document.getElementById("logoContainer");
  const mainContent = document.getElementById("mainContent");

  logo.classList.add("animate__zoomIn","animate__slower");

  logo.addEventListener("animationend", () => {
    logoContainer.style.display = "none";

    mainContent.classList.remove("hidden");
    mainContent.classList.add("animate__animated", "animate__fadeInUp");

    mainContent.innerHTML = `
      <!-- Navigation Menu -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-danger mb-4">
        <div class="container-fluid">
          <a class="navbar-brand " href="#"><img src='./logo.png' style="height:60px">pizza point</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Pizzas</a></li>
              <li class="nav-item"><a class="nav-link" href="#">About</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="text-center mb-4">
        <button class="btn btn-outline-danger mx-2 filter-btn" data-filter="all">All</button>
        <button class="btn btn-outline-warning mx-2 filter-btn" data-filter="special">Special Pizza</button>
        <button class="btn btn-outline-success mx-2 filter-btn" data-filter="offer">Pizza Offer</button>
    </div>


      <!-- Product Grid -->
      <div class="row p-3" id="productGrid"></div>
    `;

    const pizzas =  [
  {
    name: "Margarita",
    description: "Plain cheese",
    image: "./images/marghertia.jpeg",
    price:69
  },
  {
    name: "Onion Capsicum",
    description: "Onion, capsicum, cheese",
    image: "./images/onion.webp",
    price:89
  },
  {
    name: "Onion Cheese",
    description: "Onion & mozzarella cheese",
    image: "./images/onioncheese.jpeg",
    price:79
  },
  {
    name: "Corn Cheese",
    description: "Corn & mozzarella cheese",
    image: "./images/goldencorn.jpg",
    price:89
  },
  {
    name: "Double Cheese",
    description: "Extra layer of mozzarella cheese",
    image: "./images/doublecheese.jpeg",
    price:89
  },
  {
    name: "Corn Onion Capsicum",
    description: "Corn, onion, capsicum, cheese",
    image: "./images/onioncapsium.jpeg",
    price:99
  },
  {
    name: "Paneer Pizza",
    description: "Paneer, onion, capsicum & cheese",
    image: "images/panner.jpeg",
    price:109
  },
  {
    name: "Bombay Style Pizza",
    description: "Onion, capsicum, tomato slices, red paprika & cheese",
    image: "./images/bombayPaneer.jpeg",
    price:119
  },
  {
    name: "Jalapeno Olives Paprika",
    description: "Jalapeno, olives, paprika & cheese",
    image: "./images/palipanio.jpeg",
    price:119
  },
  {
    name: "Farm Fresh",
    description: "Onion, capsicum, corn, paneer, tomato, olives & cheese",
    image: "./images/farmHouse.jpg",
    price:129
  },
  {
    name: "Exotic Veg",
    description: "Corn, onion, bell pepper, jalapeno, olives, paprika, cheese",
    image: "./images/exotoic.jpeg",
    price:129
  },
  {
    name: "Masala Paneer",
    description: "Marinated paneer, onion, capsicum & cheese",
    image: "images/masla_panner.jpeg",
    price:129
  },
  {
    name: "Peri Peri Paneer",
    description: "Paneer, onion, bell pepper marinated with peri peri masala",
    image: "images/peeri_peeri_panner.jpeg",
    price:129
  },
  {
    name: "Paneer Makhani",
    description: "Paneer, onion and capsicum marinated with makhani sauce",
    image: "images/pannerMakhani.webp",
    price:139
  },
  {
    name: "Cheese Burst",
    description: "Extra layer of cheese with toppings like paneer, corn, onion, capsicum",
    image: "images/cheeseBust.avif",
    price:139
  },
  
];


    const grid = document.getElementById("productGrid");

// Function to render pizzas
function renderPizzas(filter) {
  grid.innerHTML = ""; // clear current content
  const filtered = filter === "all"
    ? pizzas
    : pizzas.filter(p => p.category === filter);

  filtered.forEach(pizza => {
    grid.innerHTML += `
      <div class="col-12 col-md-6 col-lg-4 mb-4 p-2">
        <div class="card h-100 shadow-lg border-0 bg-light p-3 rounded-4">
          <img src="${pizza.image}" class="card-img-top rounded-3 mx-auto d-block" style="height: 180px; width: auto; object-fit: cover;" alt="${pizza.name}" />
          <div class="card-body text-center">
            <h5 class="card-title fw-bold text-danger">${pizza.name}</h5>
          <p class="text-success fs-5 fw-semibold mb-1"> ₹${pizza.price}</p>
            <p class="card-text text-muted">${pizza.description}</p>
            <a href="#" class="btn btn-danger mt-2 px-4 rounded-pill shadow-sm">Order Now</a>
          </div>
        </div>
      </div>
    `;
  });
}
renderPizzas("all");

// Add click listener to filter buttons
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    renderPizzas(filter);
  });
});

  });
});


// Initially show all

