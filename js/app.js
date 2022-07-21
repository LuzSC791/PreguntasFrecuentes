// ACCEDER A LAS CATEGORIAS 
const categories = document.querySelectorAll('#categories .category');
console.log(categories);

// ACCEDER AL CONTENEDOR DE PREGUNTAS
const containerQuestions = document.querySelectorAll('.container-questions');
let categoryActive = null;

// ACCEDEMOS A CADA UNA DE LAS CATEGORIAS
categories.forEach(category => {
    // CADA FUNCIÓN SE EJECUTA X CADA UNA DE LAS CATEGORIAS
    category.addEventListener('click', (e) => {
        categories.forEach(element =>{
            // Ejecuta una función por cada elemento
            element.classList.remove('activa'); 
        });
        console.log(e.currentTarget); 
        e.currentTarget.classList.toggle('activa'); 
        categoryActive = category.dataset.category // Guqrdamos en la variable la categoria que este activa y se accede al (data-category)
        console.log(categoryActive);

        // ACTIVAMOS EL CONTENEDOR DE PREGUNTAS QUE CORRESPONDE
        containerQuestions.forEach(container => {
            // Se verificara si el contenedor tiene el mismo dataset que la categoriaActiva (CategoryActive)
            if(container.dataset.category === categoryActive){
                container.classList.add('active');
            }else{
                container.classList.remove('active');
            }
        });
    });
    // POR CADA CLICK SE EJECUTARA CADA UNO DE ELLOS
});