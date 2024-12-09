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

    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('quoteForm');
        const foamCannonCheckbox = document.getElementById('foamCannon');
        const cascadeMachineCheckbox = document.getElementById('cascadeMachine');
        const servicesGroup = document.getElementById('servicesGroup');
    
        form.addEventListener('submit', (event) => {
            // Verificar se pelo menos um checkbox está marcado
            if (!foamCannonCheckbox.checked && !cascadeMachineCheckbox.checked) {
                event.preventDefault();
                event.stopPropagation();
                servicesGroup.classList.add('was-validated');
                servicesGroup.querySelector('.invalid-feedback').style.display = 'block';
            } else {
                servicesGroup.querySelector('.invalid-feedback').style.display = 'none';
            }
        });
    
        // Remover mensagem de erro ao marcar um checkbox
        [foamCannonCheckbox, cascadeMachineCheckbox].forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                if (foamCannonCheckbox.checked || cascadeMachineCheckbox.checked) {
                    servicesGroup.querySelector('.invalid-feedback').style.display = 'none';
                }
            });
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