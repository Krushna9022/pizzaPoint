document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("logo");
  const logoContainer = document.getElementById("logoContainer");
  const mainContent = document.getElementById("mainContent");

  logo.classList.add("animate__zoomIn");

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

    const pizzas = [
      {
        name: "Margherita Pizza",
        desc: "Classic pizza with fresh tomatoes, mozzarella, and basil.",
        price: 200,
        img: "./1.jpg"
      },
      {
        name: "Pepperoni Pizza",
        desc: "Spicy pepperoni with melted cheese and tomato sauce.",
        price: 200,
        img: "./2.webp"
      },
      {
        name: "Veggie Delight",
        desc: "Loaded with bell peppers, olives, onions, and mushrooms.",
        price: 200,
        img: "./3.png"
      },
      {
        name: "BBQ Chicken Pizza",
        desc: "BBQ sauce base with grilled chicken and red onions.",
        price: 200,
        img: "./4.jpeg"
      },
      {
        name: "Cheese Burst Pizza",
        desc: "Overflowing with cheese and herbs on a soft crust.",
        price: 200,
        img: "./5.jpg"
      },
      {
        name: "Farmhouse Special",
        desc: "Farm-fresh vegetables with mozzarella on a garlic base.",
        price: 200,
        img: "./1.jpg",
        category:"offer"
      },

      {
        name: "BBQ Chicken Pizza",
        desc: "BBQ sauce base with grilled chicken and red onions.",
        price: 200,
        img: "./logo.png",
        category:"special"
      },
      {
        name: "Cheese Burst Pizza",
        desc: "Overflowing with cheese and herbs on a soft crust.",
        img: "./2.webp",
         category: "all"
      },
      {
        name: "Farmhouse Special",
        desc: "Farm-fresh vegetables with mozzarella on a garlic base.",
        price: 400,
        img: "./3.png",
        category: "all"
      }
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
          <img src="${pizza.img}" class="card-img-top rounded-3 mx-auto d-block" style="height: 180px; width: auto; object-fit: cover;" alt="${pizza.name}" />
          <div class="card-body text-center">
            <h5 class="card-title fw-bold text-danger">${pizza.name}</h5>
            <p class="text-success fs-5 fw-semibold mb-1">${pizza.price}</p>
            <p class="card-text text-muted">${pizza.desc}</p>
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

