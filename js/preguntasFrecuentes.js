const questions = document.querySelectorAll('.questions .container-question');

questions.forEach(question => {
    // Cunado se de click ejecutara una función 
    question.addEventListener('click', (e) => {
        console.log(e.currentTarget);
        e.currentTarget.classList.toggle('activa'); // toggle activa la clase 'activa' si no la tiene (al realizar un click o la desactiva)
    
        // DARLE TAMAÑO AL CONTENEDOR PARA QUE ACTVIVA RESPETE EL CONTENEDOR COMPLETO DE LA RESPUESTA
        const answer = question.querySelector('.answer'); 
        const heightRealAnswer = answer.scrollHeight; //Obtiene la altura real
        console.log(heightRealAnswer);

        console.log(answer.style.maxHeight); //VACIO
        //answer.style.maxHeight = '15px'; //NO ESTA VACIA

        if(!answer.style.maxHeight){
            //console.log('Esta vacia');
            answer.style.maxHeight = heightRealAnswer + 'px';
        }else{
            // console.log('No esta vacia');
            answer.style.maxHeight = null; //Reiniciarle el valor
        }

        //REINICIA LAS DEMAS PREGUNTAS PARA ABRIR SOLO UNA
        questions.forEach(element => {
            if(question !== element){
                element.classList.remove('activa');
                element.querySelector('.answer').style.maxHeight = null;
            }
        });
    });
});