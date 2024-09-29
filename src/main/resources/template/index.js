    const translations = {
        ru: {
            title: "Умное приложение для общественного транспорта",
            schedule: "Расписание",
            scheduleOfRoutes: "Расписание маршрутов",
            scheduleDesc: "Здесь отображается актуальное расписание общественного транспорта.",
            ticket: "Покупка билета с помощью QR-кода",
            ticketLink: "Покупка билета",
            booking: "Заказ билетов",
            routeLabel: "Выберите маршрут:",
            seatsLabel: "Количество мест:",
            security: "Безопасность",
            securityDesc: "Ваши данные защищены с помощью современных методов шифрования и аутентификации."
        },
        en: {
            title: "Smart Public Transport App",
            schedule: "Schedule",
            scheduleOfRoutes: "Route Schedule",
            scheduleDesc: "The current public transport schedule is displayed here.",
            ticket: "Buy Ticket with QR Code",
            ticketLink: "Buy Ticket",
            booking: "Ticket Booking",
            routeLabel: "Select Route:",
            seatsLabel: "Number of Seats:",
            security: "Security",
            securityDesc: "Your data is protected by modern encryption and authentication methods."
        },
        zh: {
            title: "智能公共交通应用程序",
            schedule: "路线时间表",
            scheduleOfRoutes: "路线时间表",
            scheduleDesc: "这里显示当前的公共交通时间表。",
            ticket: "通过二维码购买票",
            ticketLink: "通过二维码购买票",
            booking: "票务预订",
            routeLabel: "选择路线：",
            seatsLabel: "座位数量：",
            security: "安全",
            securityDesc: "您的数据通过现代加密和身份验证方法得到保护。"
        }
    };

    function updateLanguage(language) {
        document.getElementById('app-title').innerText = translations[language].title;
        document.getElementById('schedule-title').innerText = translations[language].scheduleOfRoutes;
        document.getElementById('schedule-link').innerText = translations[language].schedule;
        document.getElementById('schedule-description').innerText = translations[language].scheduleDesc;
        document.getElementById('ticket-title').innerText = translations[language].ticket;
        document.getElementById('ticket-link').innerText = translations[language].ticketLink;
        document.getElementById('booking-title').innerText = translations[language].booking;
        document.getElementById('booking-link').innerText = translations[language].booking;
        document.getElementById('route-label').innerText = translations[language].routeLabel;
        document.getElementById('seats-label').innerText = translations[language].seatsLabel;
        document.getElementById('security-title').innerText = translations[language].security;
        document.getElementById('security-link').innerText = translations[language].security;
        document.getElementById('security-description').innerText = translations[language].securityDesc;
    }

    document.getElementById('language-select').addEventListener('change', (event) => {
        updateLanguage(event.target.value);
        loadScheduleData(); // Загрузка расписания при смене языка
    });

    async function loadScheduleData() {
        const response = await fetch('/api/schedule'); // Пример URL для запроса расписания
        const scheduleData = await response.json();
        const scheduleContainer = document.getElementById('schedule-container');
        scheduleContainer.innerHTML = ''; // Очистка контейнера

        scheduleData.forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${item.route}</strong>: ${item.time}`;
            scheduleContainer.appendChild(div);
        });
    }

    // Начальная загрузка расписания
    loadScheduleData();

    // Добавляем обработчик для формы заказа
    document.getElementById('booking-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        const route = document.getElementById('route').value;
        const seats = document.getElementById('seats').value;
        const response = await fetch('/api/book-tickets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ route, seats })
        });

        if (response.ok) {
            alert('Билеты успешно забронированы!');
        } else {
            alert('Ошибка при бронировании билетов.');
        }
    });
