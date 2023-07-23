const userLog = () => {
    let nameUser = prompt('Cree su usuario');
    let namePassword = prompt('Cree su clave');
    alert(`Tu usuario es ${nameUser} y tu clave es ${namePassword}`)
    let nameConfirmation = prompt('Ingrese su usuario');
    let passwordConfirmation = prompt('Ingrese su clave');
    if (nameUser === nameConfirmation && namePassword === passwordConfirmation) {
        alert('Ingreso exitoso');
        new shopPhone();
    }else {
        alert('Usuario o clave incorrecto');
    }
};

// para que funcione tenes que poner en el primer prompt celular y en el segundo apple o samsung
class shopPhone {
    constructor() {
        let product = {
            tipo: 'celular',
            marca: 'apple',
            precio: '$ 454.000',
        }
        let product2 = {
            tipo: 'celular',
            marca: 'samsung',
            precio: '$ 300.000',
        }
        let type = prompt('Que producto busca');
        if (type === product.tipo && product2.tipo) {
            alert('Usted busca un celular');
        }else {
            alert('No encontramos el producto o no ingresaste ningun producto');
        }
        let brand = prompt('Que marca de celular busca');
        if (brand === product.marca) {
            alert(`El ${product.tipo} de marca ${product.marca} cuesta ${product.precio}`);
        }else if (brand === product2.marca){
            alert(`El ${product2.tipo} de marca ${product2.marca} cuesta ${product2.precio}`);
        }else{
            alert('No ingresaste ningun producto');
        }
    };  
}
    
userLog();