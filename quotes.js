// Validação personalizada do formulário
(function () {
    'use strict';
    const form = document.getElementById('quoteForm');

    if (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    }
})();

// Mostrar/ocultar o campo de "outra duração"
document.addEventListener('DOMContentLoaded', () => {
    const otherRadio = document.getElementById('other');
    const otherDurationInput = document.getElementById('otherDuration');
    const durationRadios = document.querySelectorAll('input[name="duration"]');

    durationRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (otherRadio.checked) {
                otherDurationInput.classList.remove('d-none');
            } else {
                otherDurationInput.classList.add('d-none');
            }
        });
    });
});
