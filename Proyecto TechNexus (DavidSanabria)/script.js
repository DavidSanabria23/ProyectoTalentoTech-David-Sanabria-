<script>
    document.addEventListener("DOMContentLoaded", function() {
        var form = document.querySelector('.contact-form');

        if (!form) {
            console.error('Formulario no encontrado');
            return;
        }

        form.addEventListener('submit', function(event) {
            var nombre = document.getElementById('nombre').value;
            var apellido = document.getElementById('apellido').value;
            var correo = document.getElementById('correo').value;
            var celular = document.getElementById('celular').value;
            var opcional = document.getElementById('opcional').value;

            if (!validarTexto(nombre)) {
                alert('El campo Nombre solo debe contener letras y espacios.');
                event.preventDefault();
                return;
            }

            if (!validarTexto(apellido)) {
                alert('El campo Apellido solo debe contener letras y espacios.');
                event.preventDefault();
                return;
            }

            if (!validarCorreo(correo)) {
                alert('El correo electrónico ingresado no es válido.');
                event.preventDefault();
                return;
            }

            if (!validarTelefono(celular)) {
                alert('El campo Celular solo debe contener números.');
                event.preventDefault();
                return;
            }

            if (opcional.trim() !== '' && !validarTelefono(opcional)) {
                alert('El campo Opcional solo debe contener números.');
                event.preventDefault();
                return;
            }
        });

        function validarTexto(texto) {
            return /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑüÜ]+$/.test(texto);
        }

        function validarCorreo(correo) {
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo);
        }

        function validarTelefono(telefono) {
            return /^\d+$/.test(telefono);
        }
    });
</script>
