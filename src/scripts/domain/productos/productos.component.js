angular
  .module('btk')
  .component('productos', {

    templateUrl: './productos.html',

    controller: [function () {

      this.productos = [
        { nombre: 'Coca-Cola', categoria: 'Bebida', precio_compra: '10', precio_venta: '40', stock: 100 },
        { nombre: 'SevenUp', categoria: 'Bebida', precio_compra: '10', precio_venta: '40', stock: 50 },
        { nombre: 'Sarlompa', categoria: 'Carta Magic', precio_compra: '1', precio_venta: '400', stock: 2 },
      ]

    }]

  });