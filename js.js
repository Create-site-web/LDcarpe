// Tableau des produits avec prix définis par poids
const products = [
  {
    id: 1,
    name: "Branche",
    image: "img/plombs/Branche.jpg",
    options: {
      poids: [85, 115],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      85: 1.00,
      115: 1.00,

    }
  },
  {
    id: 2,
    name: "Sondeur",
    image: "img/plombs/sondeur.jpg",
    options: {
      poids: [100],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      100: 1.00,
    }
  },
  {
    id: 3,
    name: "Poire Plat Inline",
    image: "img/plombs/Poire inline.jpg",
    options: {
      poids: [60, 80, 90],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      60: 1.00,
      80: 1.00,
      90: 1.00,

    }
  },
  {
    id: 4,
    name: "Grappa Inline",
    image: "img/plombs/Grappa inline.jpg",
    options: {
      poids: [65, 85, 95],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      65: 1.00,
      85: 1.00,
      95: 1.00,

    }
  },
  {
    id: 5,
    name: "Moule",
    image: "img/plombs/Moule.jpg",
    options: {
      poids: [70, 90],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      70: 1.00,
      90: 1.00,

    }
  },
  {
    id: 6,
    name: "Triface Inline",
    image: "img/plombs/Triface inline.jpg",
    options: {
      poids: [115, 125, 135],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      115: 1.00,
      125: 1.00,
      135: 1.00,

    }
  },
  {
    id: 7,
    name: "Triface",
    image: "img/plombs/Triface.jpg",
    options: {
      poids: [80, 90, 100, 110],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      80: 1.00,
      90: 1.00,
      100: 1.00,
      110: 1.00,

    }
  },
  {
    id: 8,
    name: "Distance",
    image: "img/plombs/Distance.jpg",
    options: {
      poids: [40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      40: 1.00,
      50: 1.00,
      60: 1.00,
      70: 1.00,
      80: 1.00,
      90: 1.00,
      100: 1.00,
      110: 1.00,
      120: 1.00,
      130: 1.00,

    }
  },
  {
    id: 9,
    name: "Plomb Plat",
    image: "img/plombs/Plomb PLat.jpg",
    options: {
      poids: [70, 90, 120, 200],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      70: 1.00,
      90: 1.00,
      120: 1.00,
      200: 1.70,

    }
  },
  {
    id: 10,
    name: "Distance Inline",
    image: "img/plombs/Distanceinline.jpg",
    options: {
      poids: [70, 80, 90],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      70: 1.00,
      80: 1.00,
      90: 1.00,

    }
  },
  {
    id: 11,
    name: "Grips ailette",
    image: "img/plombs/Grip aillettes.jpg",
    options: {
      poids: [55, 65, 90, 110],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      55: 1.00,
      65: 1.00,
      90: 1.00,
      110: 1.00,

    }
  },
  {
    id: 12,
    name: "Grips Troué",
    image: "img/plombs/Grippe troué.jpg",
    options: {
      poids: [40, 50, 60, 90, 100, 110, 120, 130, 150, 170, 210, 230],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      40: 1.00,
      50: 1.00,
      60: 1.00,
      90: 1.00,
      100: 1.00,
      110: 1.00,
      120: 1.00,
      130: 1.00,
      150: 1.40,
      170: 1.50,
      210: 1.80,
      230: 1.90,

    }
  },
  {
    id: 13,
    name: "Losange",
    image: "img/plombs/Losange.jpg",
    options: {
      poids: [20, 40, 60, 80],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      20: 1.00,
      40: 1.00,
      60: 1.00,
      80: 1.00,

    }
  },
  {
    id: 14,
    name: "Boule",
    image: "img/plombs/Boule.jpg",
    options: {
      poids: [40, 60, 80],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      40: 1.00,
      60: 1.00,
      80: 1.00,

    }
  },
  {
    id: 15,
    name: "Grappa",
    image: "img/plombs/Grappa.jpg",
    options: {
      poids: [70, 80, 90, 110, 300, 350],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      70: 1.00,
      80: 1.00,
      90: 1.00,
      110: 1.00,
      300: 2.50,
      350: 2.70,

    }
  },
  {
    id: 16,
    name: "Bombe",
    image: "img/plombs/Bombe.jpg",
    options: {
      poids: [120, 150, 180, 200],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      120: 1.00,
      150: 1.40,
      180: 1.60,
      200: 1.70,

    }
  },
  {
    id: 17,
    name: "BackLead",
    image: "img/plombs/Backlead.jpg",
    options: {
      poids: [40, 50, 70],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      40: 1.00,
      50: 1.00,
      70: 1.00,

    }
  },
  {
    id: 18,
    name: "Cube",
    image: "img/plombs/Cube.jpg",
    options: {
      poids: [60, 70, 80, 90, 100, 120, 140],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      60: 1.00,
      70: 1.00,
      80: 1.00,
      90: 1.00,
      100: 1.00,
      120: 1.00,
      140: 1.20,

    }
  },
  {
    id: 19,
    name: "Squelette",
    image: "img/plombs/squelette.png",
    options: {
      poids: [70, 90],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      70: 1.00,
      90: 1.00,

    }
  },
  {
    id: 20,
    name: "Poire Plat",
    image: "img/plombs/Poire plat.jpg",
    options: {
      poids: [30, 50, 60, 80],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      30: 1.00,
      50: 1.00,
      60: 1.00,
      80: 1.00,

    }
  },
  {
    id: 21,
    name: "Devrilleur",
    image: "img/plombs/Devrilleur.jpg",
    options: {
      poids: [80, 108, 120,],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      80: 1.00,
      108: 1.00,
      120: 1.00,

    }
  },
  {
    id: 22,
    name: "Trilobe",
    image: "img/plombs/Trilobe.jpg",
    options: {
      poids: [80, 100, 120, 140],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      80: 1.00,
      100: 1.00,
      120: 1.00,
      140: 1.20,

    }
  },
  {
    id: 23,
    name: "Goutte d eau",
    image: "img/plombs/Goutte d eau.jpg",
    options: {
      poids: [80, 100, 120, 140],
      couleur: ["Vert Camo","Sable Foncé", "Sable Claire","Sable Vert","Noir","Noir Bleuter","Pierre","Vert Herbie","Marron"],
      aspect: ["Lisse", "Granuleux"]
    },
    prixParPoids: {
      80: 1.00,
      100: 1.00,
      120: 1.00,
      140: 1.20,

    }
  },

];

let cart = [];

// Affiche les produits
function displayProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = '';

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";

    div.setAttribute('data-prix-par-poids', JSON.stringify(product.prixParPoids));

    const defaultWeight = product.options.poids[0];
    const initialPrice = product.prixParPoids[defaultWeight] || 0;

    const optionsHtml = `
      <label>Poids:
        <select class="poids" onchange="updatePrice(this)">
          ${product.options.poids.map(p => `<option value="${p}">${p}g</option>`).join('')}
        </select>
      </label><br>
      <label>Nombre:
        <input type="number" class="nombre" min="1" value="1" onchange="updatePrice(this)">
      </label><br>
      <label>Couleur:
        <select class="couleur">
          ${product.options.couleur.map(c => `<option value="${c}">${c}</option>`).join('')}
        </select>
      </label><br>
      <label>Aspect:
        <select class="aspect">
          ${product.options.aspect.map(a => `<option value="${a}">${a}</option>`).join('')}
        </select>
      </label>
    `;

    div.innerHTML = `
      <img src="${product.image}" width="200">
      <h3>${product.name}</h3>
      ${optionsHtml}
      <p>Prix: <span class="price">${initialPrice.toFixed(2)}</span> €</p>
      <button onclick='addToCart(this, ${JSON.stringify(product).replace(/'/g, "\\'")})'>Ajouter</button>
    `;

    list.appendChild(div);
  });
}

// Met à jour le prix en fonction du poids et du nombre
function updatePrice(element) {
  const productDiv = element.closest('.product');
  const poids = parseInt(productDiv.querySelector('.poids').value);
  const nombre = parseInt(productDiv.querySelector('.nombre').value) || 1;
  const prixParPoids = JSON.parse(productDiv.getAttribute('data-prix-par-poids'));
  const newPrice = (prixParPoids[poids] || 0) * nombre;
  productDiv.querySelector('.price').textContent = newPrice.toFixed(2);
}

// Ajoute un article au panier
function addToCart(button, product) {
  const productDiv = button.closest('.product');

  const poids = parseInt(productDiv.querySelector('.poids').value);
  const nombre = parseInt(productDiv.querySelector('.nombre').value) || 1;
  const couleur = productDiv.querySelector('.couleur').value;
  const aspect = productDiv.querySelector('.aspect').value;

  const prixParPoids = JSON.parse(productDiv.getAttribute('data-prix-par-poids'));
  const prixUnitaire = prixParPoids[poids] || 0;
  const prixTotal = prixUnitaire * nombre;

  cart.push({ 
    name: product.name,
    poids,
    nombre,
    couleur,
    aspect,
    prixUnitaire,
    prixTotal
  });

  updateCart();
}

// Met à jour l'affichage du panier
function updateCart() {
  const list = document.getElementById("cart-items");
  const count = document.getElementById("cart-count");
  list.innerHTML = "";

  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nombre}x ${item.name} - ${item.poids}g - ${item.couleur} - ${item.aspect}
      <strong>${item.prixTotal.toFixed(2)} €</strong>
      <button onclick="removeFromCart(${i})">❌</button>
    `;
    list.appendChild(li);
  });

  count.textContent = cart.length;
}

// Supprime un article
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Génère un email de commande
function sendOrder() {
  if (cart.length === 0) {
    alert("Votre panier est vide.");
    return;
  }

  let total = 0;
  const details = cart.map(item => {
    total += item.prixTotal;
    return `${item.nombre}x ${item.name} - ${item.poids}g - ${item.couleur} - ${item.aspect} - ${item.prixTotal.toFixed(2)}€`;
  }).join('%0D%0A');

  const body = `${details}%0D%0A%0D%0ATotal: ${total.toFixed(2)}€`;

  const mailtoLink = `mailto:ldcarpepro@gmail.com?subject=Commande Plombs&body=${body}`;
  window.location.href = mailtoLink;
}

window.onload = displayProducts;
