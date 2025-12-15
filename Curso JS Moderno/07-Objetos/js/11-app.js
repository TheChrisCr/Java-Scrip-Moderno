const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    //this es una manera de referirse al objeto en si mismo
    monstrarInfo: function () {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} `)
    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 3000,
    disponible: true,
    //this es una manera de referirse al objeto en si mismo
    monstrarInfo: function () {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} `)
    }
}

producto.monstrarInfo();
producto2.monstrarInfo();