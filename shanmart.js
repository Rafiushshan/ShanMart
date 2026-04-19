let cart = [];

async function loadProducts() {
    let res = await fetch("http://localhost:5000/products");
    let data = await res.json();

    let container = document.getElementById("products");

    data.forEach(p => {
        let div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id}, '${p.name}', ${p.price})">Add</button>
        `;

        container.appendChild(div);
    });
}

function addToCart(id, name, price) {
    cart.push({ id, name, price });
    document.getElementById("cartCount").innerText = cart.length;
}

function viewCart() {
    alert(JSON.stringify(cart, null, 2));
}

loadProducts();