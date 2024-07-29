
    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('.product button');

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const product = this.parentElement;
                const productName = product.querySelector('h3').textContent;
                const productPrice = product.querySelector('p').textContent;

                addToCart(productName, productPrice);
            });
        });

        function addToCart(name, price) {
            // Aquí podrías agregar la lógica para agregar el producto al carrito
            console.log(`Producto agregado: ${name}, Precio: ${price}`);
            alert(`Has agregado al carrito: ${name} - ${price}`);
        }
    });

