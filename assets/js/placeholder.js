document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('focus', () => {
        if (input.placeholder) {
            input.setAttribute('data-placeholder', input.placeholder); // Сохраняем placeholder
            input.removeAttribute('placeholder'); // Удаляем атрибут
        }
    });

    input.addEventListener('blur', () => {
        if (input.hasAttribute('data-placeholder')) {
            input.setAttribute('placeholder', input.getAttribute('data-placeholder')); // Восстанавливаем placeholder
        }
    });
});