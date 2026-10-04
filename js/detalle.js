const coffees = [
    { 
        id: 1,
        title: "Café Espresso", 
        desc: "Intenso y concentrado, preparado con granos tostados mediante alta presión de agua caliente. Es la base fundamental de la mayoría de las bebidas de especialidad, ofreciendo un sabor robusto con una delicada capa de crema dorada en la superficie.", 
        price: "$3.50",
        origin: "Colombia y Etiopía",
        roast: "Oscuro (Dark Roast)",
        caffeine: "Alto (63mg por shot)",
        ingredients: "100% Café arábica molido fino",
        pairing: "Repostería de chocolate oscuro o croissant clásico"
    },
    { 
        id: 2,
        title: "Café Americano", 
        desc: "Espresso diluido en agua caliente que conserva la esencia y el carácter del grano pero con una densidad mucho más suave. Perfecto para quienes buscan una taza más larga sin perder los matices tostados.", 
        price: "$3.00",
        origin: "Guatemala",
        roast: "Medio-Oscuro",
        caffeine: "Medio-Alto (95mg)",
        ingredients: "Espresso + Agua filtrada a 90°C",
        pairing: "Galletas de avena, pan dulce o tarta de manzana"
    },
    { 
        id: 3,
        title: "Cappuccino", 
        desc: "Una combinación equilibrada en tres capas iguales: un shot de espresso denso, leche vaporizada a la perfección y una abundante corona de espuma cremosa. Opcionalmente espolvoreado con cacao o canela en polvo.", 
        price: "$4.00",
        origin: "Mezcla de la casa (Brasil y Honduras)",
        roast: "Medio",
        caffeine: "Medio (63mg)",
        ingredients: "Espresso, leche entera texturizada, espuma de leche",
        pairing: "Paninis salados o muffins de arándanos"
    },
    { 
        id: 4,
        title: "Café Latte", 
        desc: "Una bebida suave y reconfortante donde predomina la textura sedosa de la leche caliente, combinada delicadamente con una dosis de espresso y coronada por una fina capa de microespuma.", 
        price: "$4.25",
        origin: "Costa Rica",
        roast: "Medio",
        caffeine: "Medio (63mg)",
        ingredients: "Espresso, abundante leche vaporizada",
        pairing: "Torta de zanahoria o galletas de mantequilla"
    },
    { 
        id: 5,
        title: "Mocha", 
        desc: "La perfecta armonía entre el mundo del café y la repostería. Combina nuestro espresso insignia con jarabe de chocolate artesanal, leche vaporizada y una suave cubierta de crema batida.", 
        price: "$4.50",
        origin: "Mezcla Latinoamericana",
        roast: "Medio",
        caffeine: "Medio-Alto (90mg)",
        ingredients: "Espresso, jarabe de chocolate semiamargo, leche, crema batida",
        pairing: "Brownies de nuez o cheesecake de frutos rojos"
    },
    { 
        id: 6,
        title: "Macchiato", 
        desc: "Una bebida corta pensada para puristas que buscan suavizar la intensidad del espresso sin diluir su cuerpo. Consiste en un shot concentrado 'manchado' con apenas una cucharada de espuma de leche densa.", 
        price: "$3.75",
        origin: "Etiopía Yirgacheffe",
        roast: "Oscuro",
        caffeine: "Alto (63mg)",
        ingredients: "Espresso, toque de espuma de leche vaporizada",
        pairing: "Biscotti italiano o chocolates finos"
    },
    { 
        id: 7,
        title: "Flat White", 
        desc: "Originario de Oceanía, este café destaca por su textura extremadamente aterciopelada. Utiliza un doble shot de ristretto mezclado con leche vaporizada que integra microburbujas sin crear capas gruesas de espuma.", 
        price: "$4.20",
        origin: "Kenia y Colombia",
        roast: "Tueste Medio",
        caffeine: "Alto (130mg)",
        ingredients: "Doble shot de Ristretto, microespuma de leche",
        pairing: "Tostadas con aguacate o scones de vainilla"
    },
    { 
        id: 8,
        title: "Café Frío (Cold Brew)", 
        desc: "Extraído pacientemente en agua fría durante 12 a 24 horas. Este proceso lento reduce la acidez natural del grano hasta en un 60%, resaltando notas dulces, acarameladas y un perfil sumamente refrescante.", 
        price: "$4.50",
        origin: "Chiapas, México",
        roast: "Medio-Claro",
        caffeine: "Muy Alto (150mg-200mg)",
        ingredients: "Café de especialidad en infusión fría, agua purificada, hielo",
        pairing: "Tarta de limón o alfajores"
    },
    { 
        id: 9,
        title: "Affogato", 
        desc: "Una exquisita experiencia que combina postre y bebida. Una bola generosa de helado artesanal de vainilla gourmet sumergida e infundida al instante por un shot de espresso hirviendo.", 
        price: "$5.00",
        origin: "Mezcla Italiana Tradicional",
        roast: "Oscuro",
        caffeine: "Medio (63mg)",
        ingredients: "Espresso caliente, helado artesanal de vainilla",
        pairing: "Waffles o galletas amaretti"
    },
    { 
        id: 10,
        title: "Caramel Macchiato", 
        desc: "Capas perfectamente marcadas de jarabe de vainilla, leche vaporizada, un shot de espresso vertido suavemente por encima y decorado con una rejilla de caramelo líquido viscoso y dulce.", 
        price: "$4.75",
        origin: "Guatemala y Brasil",
        roast: "Medio",
        caffeine: "Medio (75mg)",
        ingredients: "Espresso, leche, jarabe de vainilla natural, salsa de caramelo",
        pairing: "Donas glaseadas o crepe de manzana con canela"
    }
];

// Obtener el ID del parámetro de la URL
const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('id'));

const detailContainer = document.getElementById('detail-container');

if (id && id >= 1 && id <= coffees.length) {
    const coffee = coffees[id - 1];

    detailContainer.innerHTML = `
        <div class="detail-left">
            <img src="imgs/coffe${id}.jpg" alt="${coffee.title}" class="detail-img">
        </div>
        <div class="detail-right">
            <h2>${coffee.title}</h2>
            <p class="detail-desc">${coffee.desc}</p>
            
            <div class="detail-specs">
                <div class="spec-item">
                    <strong>Origen:</strong> <span>${coffee.origin}</span>
                </div>
                <div class="spec-item">
                    <strong>Nivel de Tostado:</strong> <span>${coffee.roast}</span>
                </div>
                <div class="spec-item">
                    <strong>Cafeína:</strong> <span>${coffee.caffeine}</span>
                </div>
                <div class="spec-item">
                    <strong>Ingredientes:</strong> <span>${coffee.ingredients}</span>
                </div>
                <div class="spec-item">
                    <strong>Maridaje Sugerido:</strong> <span>${coffee.pairing}</span>
                </div>
            </div>

            <div class="detail-footer">
                <span class="detail-price">${coffee.price}</span>
                <button class="btn btn-buy">Ordenar Ahora</button>
            </div>
        </div>
    `;
} else {
    detailContainer.innerHTML = `
        <div class="error-msg">
            <p>Producto no encontrado.</p>
            <a href="index.html" class="back-link">← Volver al catálogo</a>
        </div>
    `;
}