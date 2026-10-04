const coffees = [
    { title: "Café Espresso", desc: "Intenso y concentrado, preparado con granos tostados.", price: "$3.50" },
    { title: "Café Americano", desc: "Espresso diluido en agua caliente, sabor suave.", price: "$3.00" },
    { title: "Cappuccino", desc: "Espresso con leche vaporizada y abundante espuma.", price: "$4.00" },
    { title: "Café Latte", desc: "Espresso con bastante leche caliente y capa fina de espuma.", price: "$4.25" },
    { title: "Mocha", desc: "Combinación perfecta de espresso, leche y chocolate.", price: "$4.50" },
    { title: "Macchiato", desc: "Espresso manchado con una pequeña cantidad de leche.", price: "$3.75" },
    { title: "Flat White", desc: "Doble shot de espresso con fina capa de leche cremosa.", price: "$4.20" },
    { title: "Café Frío (Cold Brew)", desc: "Café infusionado en frío durante 12 horas, muy fresco.", price: "$4.50" },
    { title: "Affogato", desc: "Una bola de helado de vainilla ahogada en espresso.", price: "$5.00" },
    { title: "Caramel Macchiato", desc: "Espresso con leche, toque de vainilla y caramelo.", price: "$4.75" }
];

const container = document.getElementById("card-container");

coffees.forEach((coffee, index) => {
    const cardNumber = index + 1;

    const cardHTML = `
        <div class="card">
            <img src="imgs/coffe${cardNumber}.jpg" alt="${coffee.title}" class="card-img">
            <div class="card-content">
                <h3>${coffee.title}</h3>
                <p>${coffee.desc}</p>
                <span class="price">${coffee.price}</span>
                <button class="btn" onclick="window.location.href='detalle.html?id=${cardNumber}'">Ver más</button>
            </div>
        </div>
    `;

    // Insertar la tarjeta en el contenedor
    container.innerHTML += cardHTML;
});

// Registrar el Service Worker para habilitar la PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then((reg) => console.log('Service Worker registrado con éxito:', reg.scope))
            .catch((err) => console.error('Error al registrar Service Worker:', err));
    });
}