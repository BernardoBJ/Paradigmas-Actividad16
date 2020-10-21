const app = Vue.createApp({
    data() {
        return {
            // Encabezado
            titulo: 'Paradigmas de programacion - Vue',
            instrucciones: [
                'Mostrar una lista de productos con los siguientes campos: nombre, cantidad',
                'Agregar al menos tres productos desde vue js',
                'Si la cantidad de algun producto es igual a 0 mostrar el mensaje "Sin stock"',
                'Agregar un input para crear nuevos productos.',
                'Se puede agregar un producto por medio de un boton o al dar enter en el input',
                'Permitir la modificacion de cantidad por medio de un input',
                'Agregar un boton para SUMAR de 1 en 1 la cantidad del producto seleccionado',
                'Agregar un boton para RESTAR de 1 en 1 la cantidad del producto seleccionado',
                'Mostrar la cantidad total de los productos'
            ],
            alumno: 'Bernardo Alfonso Borunda Jaquez',
            matricula: '314788',
            // Aplicacion
            productos: [
                { nombre: 'cerveza', cantidad: 10 },
                { nombre: 'vino', cantidad: 2 },
                { nombre: 'agua', cantidad: 0 }
            ],
            productoNuevo: '',
            total: 0,
        }
    },
    methods: {
        agregarProducto() {
            this.productos.push({
                nombre: this.productoNuevo,
                cantidad: 0
            });
            this.productoNuevo = '';
        }
    },
    computed: {
        sumarCantidad() {
            this.total = 0;
            for (producto of this.productos) {
                this.total += producto.cantidad;
            }
            return this.total;
        }
    }
});

const vm = app.mount('#app');