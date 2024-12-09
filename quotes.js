document.addEventListener('DOMContentLoaded', () => {
    const otherRadio = document.getElementById('other');
    const customDurationGroup = document.getElementById('customDurationGroup');
    const otherDurationInput = document.getElementById('otherDuration');
    const durationRadios = document.querySelectorAll('input[name="duration"]');
    const decreaseButton = document.getElementById('decreaseDuration');
    const increaseButton = document.getElementById('increaseDuration');

    let durationInMinutes = 30; // Duração inicial em minutos (0.5h)

    // Atualiza o valor exibido no campo
    function updateDurationDisplay() {
        const hours = Math.floor(durationInMinutes / 60);
        const minutes = durationInMinutes % 60;
        otherDurationInput.value = `${hours}h ${minutes > 0 ? minutes + 'min' : ''}`.trim();
    }

    // Configura os botões de incremento e decremento
    decreaseButton.addEventListener('click', () => {
        if (durationInMinutes > 30) { // Limite mínimo: 30 minutos
            durationInMinutes -= 30;
            updateDurationDisplay();
        }
    });

    increaseButton.addEventListener('click', () => {
        if (durationInMinutes < 1440) { // Limite máximo: 24 horas
            durationInMinutes += 30;
            updateDurationDisplay();
        }
    });

    // Mostrar/esconder o campo "otherDuration"
    durationRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (otherRadio.checked) {
                customDurationGroup.classList.remove('d-none');
                updateDurationDisplay();
                otherDurationInput.setAttribute('required', 'required');
            } else {
                customDurationGroup.classList.add('d-none');
                otherDurationInput.removeAttribute('required');
                otherDurationInput.value = ''; // Limpa o campo
                durationInMinutes = 30; // Reseta para o padrão
            }
        });
    });
    

    // Validação do formulário
    const form = document.getElementById('quoteForm');
    form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    });
});