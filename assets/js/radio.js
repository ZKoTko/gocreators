document.querySelectorAll('.custom-radio').forEach((radio) => {
    radio.addEventListener('click', () => {
        const group = radio.closest('.custom-radio-group');
        
        // Убираем класс active у всех радио-кнопок в группе
        group.querySelectorAll('.custom-radio').forEach((r) => r.classList.remove('active'));
        
        // Добавляем класс active выбранной радио-кнопке
        radio.classList.add('active');
        
        // Устанавливаем значение соответствующего скрытого input
        const input = radio.querySelector('input[type="radio"]');
        if (input) input.checked = true;
    });
});

// Проверка формы
document.getElementById('custom-radio-form').addEventListener('submit', (e) => {
    const selectedRadio = document.querySelector('input[name="custom-radio"]:checked');
    if (!selectedRadio) {
        alert('Please select an option before submitting!');
        e.preventDefault(); // Отменяем отправку формы
    }
});
