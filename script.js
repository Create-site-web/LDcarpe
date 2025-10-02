// --- VARIABLES ---
const productsContainer = document.getElementById("products");
const cartIcon = document.getElementById("cartIcon");
const cartPanel = document.getElementById("cartPanel");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const orderEmailBtn = document.getElementById("orderEmail");
const cartCount = document.getElementById("cartCount");

let cart = [];

// --- LISTE DES PRODUITS ---
let products = [
  {
    name: "Sondeur",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/sondeur.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["100"],
    quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Granuleux"]
  },
  {
    name: "Branche",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Branche.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["85","115"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Granuleux"]
  },
  {
    name: "Moule",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Moule.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["70","90"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Triface",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Triface.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["80","90","100","110"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Distance",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Distance.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["40","50","60","70","80","90","100","110","120","130"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Plomb plat",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Plomb PLat.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["70","90","120","140","200"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Grip ailettes",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Grip aillettes.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["55","75","90","110"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Grip troué",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Grippe troué.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["40","50","60","90","100","110","120","130","150","170","210","230"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Losange",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Losange.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["20","40","60","80"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Boule",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Boule.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["40","60","80"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Grappa",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Grappa.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["70","80","90","110","300","350"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Backlead",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Backlead.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["70","50","70"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Cube",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Cube.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["60","70","80","90","100","120","140"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Squelette",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/squelette.png",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["70","90"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Poire plat",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Poire plat.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["30","50","60","80"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Goutte d'eau",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Goutte d eau.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["20","30","40","50","60","80","110","140"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Devrilleur",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Devrilleur.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["80","108","120"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Trilobe",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Trilobe.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["80","100","120","140"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Bombe",
    description: "Accrochage par clip plomb",
    price: 1.00,
    image: "boutique plombs/Bombe.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["120","150","180","200"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Poire plat inline",
    description: "Montagne inline, Nylon par l'intérieur de la gaine du plomb",
    price: 1.00,
    image: "boutique plombs/Poire inline.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["60","80","90"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Grappa inline",
    description: "Montagne inline, Nylon par l'intérieur de la gaine du plomb",
    price: 1.00,
    image: "boutique plombs/Grappa inline.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["65","85","95"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Triface inline",
    description: "Montagne inline, Nylon par l'intérieur de la gaine du plomb",
    price: 1.00,
    image: "boutique plombs/Triface inline.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["115","125","135"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Distance inline",
    description: "Montagne inline, Nylon par l'intérieur de la gaine du plomb",
    price: 1.00,
    image: "boutique plombs/Distanceinline.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["70","80","90"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
  {
    name: "Triangle inline",
    description: "Montagne inline, Nylon par l'intérieur de la gaine du plomb",
    price: 1.00,
    image: "boutique plombs/Triangleinline.jpg",
    colors: ["Vert camo", "Sable foncé", "Sable claire", "Sable vert", "Noir", "Noir bleuté","Noir moucheté", "Pierre", "Vert herbié", "Marron"],
    weights: ["40","50","60"],
       quantities: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","20","25","30","35","40","45","50","55","60","65","70","75","80","85","90","95","100","110","120","130","140","150","160","170","180","190","200"],
    aspects: ["Lisse", "Ganuleux"]
  },
];

// --- CALCUL DU PRIX SELON POIDS ---
function getPriceByWeight(weightStr, basePrice) {
  if (!weightStr) return basePrice;
  let grams = parseInt(weightStr.replace(/[^\d]/g, ""));
  if (isNaN(grams)) return basePrice;

  if (grams <= 120) return 1.00;
  if (grams === 140) return 1.20;
  if (grams === 145) return 1.30;
  if (grams === 150) return 1.40;
  if (grams === 170) return 1.50;
  if (grams === 180) return 1.60;
  if (grams === 200) return 1.70;
  if (grams === 210) return 1.80;
  if (grams === 230) return 1.90;
  if (grams === 300) return 2.50;
  if (grams === 350) return 2.70;

  return basePrice;
}

// --- RENDU DES PRODUITS ---
function renderProducts() {
  productsContainer.innerHTML = "";

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    const img = document.createElement("img");
    img.src = p.image;

    const title = document.createElement("h3");
    title.textContent = p.name;

    const desc = document.createElement("p");
    desc.textContent = p.description;

    const priceEl = document.createElement("p");
    priceEl.textContent = `Prix : ${p.price.toFixed(2).replace(".", ",")} €`;

    const selects = [];

    // --- Options Couleur ---
    if (p.colors.length) {
      const wrapper = document.createElement("div");
      wrapper.className = "product-option";

      const label = document.createElement("label");
      label.textContent = "Couleur :";
      wrapper.appendChild(label);

      const sel = document.createElement("select");
      p.colors.forEach(c => {
        const opt = document.createElement("option");
        opt.textContent = c;
        sel.appendChild(opt);
      });
      wrapper.appendChild(sel);
      selects.push({ type: "Couleur", sel });
      card.appendChild(wrapper);
    }

    // --- Options Poids ---
    if (p.weights.length) {
      const wrapper = document.createElement("div");
      wrapper.className = "product-option";

      const label = document.createElement("label");
      label.textContent = "Poids :";
      wrapper.appendChild(label);

      const sel = document.createElement("select");
      p.weights.forEach(w => {
        const opt = document.createElement("option");
        opt.textContent = w;
        sel.appendChild(opt);
      });
      wrapper.appendChild(sel);
      selects.push({ type: "Poids", sel });
      card.appendChild(wrapper);

      sel.addEventListener("change", () => {
        let finalPrice = getPriceByWeight(sel.value, parseFloat(p.price));
        priceEl.textContent = `Prix : ${finalPrice.toFixed(2).replace(".", ",")} €`;
      });
    }

    // --- Options Quantité ---
    if (p.quantities.length) {
      const wrapper = document.createElement("div");
      wrapper.className = "product-option";

      const label = document.createElement("label");
      label.textContent = "Nombre :";
      wrapper.appendChild(label);

      const sel = document.createElement("select");
      p.quantities.forEach(q => {
        const opt = document.createElement("option");
        opt.textContent = q;
        sel.appendChild(opt);
      });
      wrapper.appendChild(sel);
      selects.push({ type: "Nombre", sel });
      card.appendChild(wrapper);
    }

    // --- Options Aspect ---
    if (p.aspects.length) {
      const wrapper = document.createElement("div");
      wrapper.className = "product-option";

      const label = document.createElement("label");
      label.textContent = "Aspect :";
      wrapper.appendChild(label);

      const sel = document.createElement("select");
      p.aspects.forEach(a => {
        const opt = document.createElement("option");
        opt.textContent = a;
        sel.appendChild(opt);
      });
      wrapper.appendChild(sel);
      selects.push({ type: "Aspect", sel });
      card.appendChild(wrapper);
    }

    // --- Bouton Ajouter au Panier ---
    const btn = document.createElement("button");
    btn.textContent = "Ajouter au panier";
    btn.addEventListener("click", () => {
      let selectedWeight = selects.find(s => s.type === "Poids")?.sel.value || "";
      let finalPrice = getPriceByWeight(selectedWeight, parseFloat(p.price));

      let selectedQuantity = parseInt(selects.find(s => s.type === "Nombre")?.sel.value || "1");
      let totalPrice = finalPrice * selectedQuantity;

      const chosen = selects.map(s => `${s.type}: ${s.sel.value}`).join(", ");
      addToCart({ name: p.name, price: totalPrice, options: chosen, quantity: selectedQuantity });
    });

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(priceEl);
    card.appendChild(btn);

    productsContainer.appendChild(card);
  });
}

// --- GESTION DU PANIER ---
function addToCart(item) {
  cart.push(item);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} (${item.options}) x${item.quantity} - ${item.price.toFixed(2).replace(".", ",")} €`;

    // bouton suppression
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.style.marginLeft = "10px";
    removeBtn.addEventListener("click", () => removeFromCart(index));

    li.appendChild(removeBtn);
    cartItems.appendChild(li);

    total += item.price;
  });

  total += cart.length > 0 ? 1 : 0; // frais fixe 1€
  cartTotal.textContent = cart.length > 0
    ? `Total (avec 1€ frais) : ${total.toFixed(2).replace(".", ",")} €`
    : "Votre panier est vide";

  cartCount.textContent = cart.length;
}

// --- OUVRIR / FERMER PANIER ---
cartIcon.addEventListener("click", () => {
  cartPanel.classList.toggle("hidden");
});

// --- BOUTON FERMER ---
const closeBtn = document.createElement("button");
closeBtn.textContent = "❌ Fermer";
closeBtn.className = "close-cart";
closeBtn.addEventListener("click", () => {
  cartPanel.classList.add("hidden");
});
cartPanel.prepend(closeBtn);

// --- BOUTON VIDER LE PANIER ---
const clearBtn = document.createElement("button");
clearBtn.textContent = "🗑️ Vider le panier";
clearBtn.className = "clear-cart";
clearBtn.addEventListener("click", clearCart);
cartPanel.appendChild(clearBtn);

// --- COMMANDER PAR EMAIL ---
orderEmailBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Votre panier est vide !");
    return;
  }

  let body = cart.map(item => 
    `${item.name} (${item.options}) x${item.quantity} - ${item.price.toFixed(2).replace(".", ",")} €`
  ).join("%0D%0A");

  let total = cart.reduce((sum, i) => sum + i.price, 0) + 1;
  body += `%0D%0A---%0D%0ATotal avec frais : ${total.toFixed(2).replace(".", ",")} €`;

  window.location.href = `mailto:ldcarpepro@gmail.com?subject=Commande&body=${body}`;
});

// --- INIT ---

renderProducts();
