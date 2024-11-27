document.getElementById('nav-toggle').addEventListener('click',function(){
    document.querySelector('nav').classList.toggle('nav-open');
    }
);

document.getElementById('registroForm').addEventListener('submit', function(event){
    const nombre=document.getElementById('nombre').value.trim();
    const correo=document.getElementById('correo').value.trim();
    const razon=document.getElementById('razon').value.trim();

    if(!nombre==="" || correo==="" || razon===false){
        alert('Por favor, complete todos los campos oblrigatorios');
        event.preventDefault();
        return;
    }


});

