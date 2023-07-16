const Pizza = {
    pizzas: [
        {
        id: 1,
        nombre: "Especial",
        ingredientes: ["Salsa de tomate", "Jamón", "Huevo", "Morron", "Aceitunas"],
        precio: 700
    },
    {
        id: 2,
        nombre: "Cuatro quesos",
        ingredientes: ["Salsa de tomate", "Queso mozzarella", "Queso crema", "Queso cheddar", "Queso parmesano"],
        precio: 600
    },
    {
        id: 3,
        nombre: "Rucula y Jamon crudo",
        ingredientes: ["Salsa de tomate", "Jamón crudo", "Rucula", "Queso"],
        precio: 650
    },
    {
        id: 4,
        nombre: "Pollo",
        ingredientes: ["Salsa de tomate", "Pollo", "Orégano", "Tomate", "Queso"],
        precio: 500
    }
],



  // Imprimir las pizzas con id impar
  imprimirPizzasIdImpar: function()  {
    console.log("Pizzas con id impar:");
    this.pizzas.forEach(pizza => {
      if (pizza.id % 2 !== 0) {
        console.log(`- ${pizza.nombre}`);
      }
    });
  },


  // Verificar si hay alguna pizza que valga menos de $600
  hayPizzaMenosDe600: function()   {
    const pizzaMenosDe600 = this.pizzas.some(pizza => pizza.precio < 600);
    if (pizzaMenosDe600) {
      console.log("Sí, hay al menos una pizza que vale menos de $600.");
    } else {
      console.log("No, todas las pizzas valen $600 o más.");
    }
  },

  // Imprimir el nombre y precio de cada pizza
  imprimirNombreYPrecio: function()   {
    console.log("Nombre y precio de cada pizza:");
    this.pizzas.forEach(pizza => {
      console.log(`- ${pizza.nombre}, tiene un valor de $${pizza.precio}.`);
    });
  },

  // Imprimir los ingredientes de cada pizza
  imprimirIngredientes: function()  {
    console.log("Ingredientes de cada pizza:");
    this.pizzas.forEach(pizza => {
      console.log(`- ${pizza.nombre}: ${pizza.ingredientes.join(", ")}`);
    });
  }
};


Pizza.imprimirPizzasIdImpar();
Pizza.hayPizzaMenosDe600();
Pizza.imprimirNombreYPrecio();
Pizza.imprimirIngredientes();