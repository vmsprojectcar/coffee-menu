document.addEventListener('DOMContentLoaded', () => {

  const allItems = [
    { name: "Espresso", category: "Καφές", description: "Δυνατός καφές", price: "2.50", image: "images/espresso.jpg" },
    { name: "Latte", category: "Ροφήματα", description: "Καφές με γάλα", price: "3.00", image: "images/latte.jpg" }
  ];

  const menuDiv = document.getElementById('menu');
  const filtersDiv = document.getElementById('filters');

  // Δημιουργία κουμπιών φίλτρων
  const categories = ["Όλα", ...new Set(allItems.map(i => i.category))];
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat;
    btn.classList.add("btn", "btn-warning", "m-1");
    if(cat === "Όλα") btn.classList.add("active");
    btn.addEventListener('click', () => filterMenu(cat));
    filtersDiv.appendChild(btn);
  });

  function filterMenu(category) {
    filtersDiv.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    filtersDiv.querySelectorAll('button').forEach(b => {
      if(b.textContent === category) b.classList.add('active');
    });

    const itemsToShow = category === "Όλα" ? allItems : allItems.filter(i => i.category === category);
    displayMenu(itemsToShow);
  }

  function displayMenu(items) {
    menuDiv.innerHTML = "";
    items.forEach(item => {
      const div = document.createElement('div');
      div.classList.add("card");
      div.style.width = "220px";
      div.innerHTML = `
        <img src="${item.image}" class="card-img-top" alt="${item.name}">
        <div class="card-body text-center">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description}</p>
          <strong>${item.price} €</strong>
        </div>
      `;
      menuDiv.appendChild(div);
    });
  }

  // Αρχική εμφάνιση όλων
  displayMenu(allItems);

});
