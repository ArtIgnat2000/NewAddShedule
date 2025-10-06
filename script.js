function showDay(day) {
    // Удаляем класс 'active' у всех кнопок
    removeClassFromElements('.buttons button', 'active');

    // Добавляем класс 'active' нажатой кнопке
    const activeButton = document.querySelector(`button[onclick="showDay('${day}')"]`);
    activeButton.classList.add('active');

    // Скрываем все расписания
    hideElements('.schedule');

    // Показываем выбранное расписание
    const scheduleElement = document.getElementById(day);
    scheduleElement.classList.add('show');

    // Get all table cells in the schedule
    const cells = document.querySelectorAll('.schedule table td');

    // Loop through each cell and capitalize the first letter
    cells.forEach(cell => {
        const text = cell.textContent;
        const capitalizedText = text.replace(/^\w/, c => c.toUpperCase())
                                     .replace(/\b\w/g, c => c.toUpperCase());
        cell.textContent = capitalizedText;
    });
}

function removeClassFromElements(selector, className) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => element.classList.remove(className));
}

function hideElements(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => element.classList.remove('show'));
}