import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Calculator, FileText, MessageCircle, Star, ChevronRight, Wrench, Car, Zap, PaintBucket } from 'lucide-react';

const TelegramMiniApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [calculatorData, setCalculatorData] = useState({
    services: [], // Теперь массив для множественного выбора
    carType: 'sedan',
    complexity: 'simple'
  });

  // Инициализация Telegram Web App
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
      
      // Настройка темы
      window.Telegram.WebApp.setHeaderColor('#1a1a1a');
      window.Telegram.WebApp.setBackgroundColor('#1a1a1a');
    }
    
    // Parallax эффект
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.parallax || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Данные для прайса (на основе реального прайса с сайта)
  const priceData = [
    {
      category: '🔧 Диагностика и ТО',
      services: [
        { name: 'Компьютерная диагностика', price: 'от 800 ₽', basePrice: 800 },
        { name: 'Замена масла двигателя', price: 'от 500 ₽', basePrice: 500 },
        { name: 'Замена воздушного фильтра', price: 'от 200 ₽', basePrice: 200 },
        { name: 'Замена топливного фильтра', price: 'от 400 ₽', basePrice: 400 },
        { name: 'Замена свечей зажигания', price: 'от 600 ₽', basePrice: 600 },
        { name: 'ТО-1 (базовое)', price: 'от 2500 ₽', basePrice: 2500 },
        { name: 'ТО-2 (расширенное)', price: 'от 4500 ₽', basePrice: 4500 }
      ]
    },
    {
      category: '⚙️ Ремонт двигателя',
      services: [
        { name: 'Замена ремня ГРМ', price: 'от 3500 ₽', basePrice: 3500 },
        { name: 'Замена прокладки ГБЦ', price: 'от 8000 ₽', basePrice: 8000 },
        { name: 'Ремонт ГБЦ', price: 'от 15000 ₽', basePrice: 15000 },
        { name: 'Замена поршневой группы', price: 'от 25000 ₽', basePrice: 25000 },
        { name: 'Капитальный ремонт двигателя', price: 'от 50000 ₽', basePrice: 50000 },
        { name: 'Замена водяного насоса', price: 'от 2500 ₽', basePrice: 2500 },
        { name: 'Замена термостата', price: 'от 1200 ₽', basePrice: 1200 },
        { name: 'Промывка системы охлаждения', price: 'от 1500 ₽', basePrice: 1500 }
      ]
    },
    {
      category: '🚗 Ходовая часть',
      services: [
        { name: 'Замена амортизаторов (пара)', price: 'от 2000 ₽', basePrice: 2000 },
        { name: 'Замена стоек стабилизатора', price: 'от 800 ₽', basePrice: 800 },
        { name: 'Замена рулевых тяг', price: 'от 1500 ₽', basePrice: 1500 },
        { name: 'Замена шаровых опор', price: 'от 1800 ₽', basePrice: 1800 },
        { name: 'Замена ступичных подшипников', price: 'от 2500 ₽', basePrice: 2500 },
        { name: 'Замена тормозных колодок', price: 'от 1200 ₽', basePrice: 1200 },
        { name: 'Замена тормозных дисков', price: 'от 1500 ₽', basePrice: 1500 },
        { name: 'Прокачка тормозной системы', price: 'от 800 ₽', basePrice: 800 }
      ]
    },
    {
      category: '⚡ Электрика и кузов',
      services: [
        { name: 'Замена генератора', price: 'от 2000 ₽', basePrice: 2000 },
        { name: 'Замена стартера', price: 'от 1500 ₽', basePrice: 1500 },
        { name: 'Установка сигнализации', price: 'от 5000 ₽', basePrice: 5000 },
        { name: 'Рихтовка кузова (элемент)', price: 'от 3000 ₽', basePrice: 3000 },
        { name: 'Покраска элемента', price: 'от 5000 ₽', basePrice: 5000 },
        { name: 'Полировка кузова', price: 'от 8000 ₽', basePrice: 8000 },
        { name: 'Антикоррозийная обработка', price: 'от 4000 ₽', basePrice: 4000 },
        { name: 'Замена лобового стекла', price: 'от 3500 ₽', basePrice: 3500 }
      ]
    }
  ];

  // Новости канала (актуальные для автосервиса)
  const news = [
    {
      id: 1,
      title: '🎉 Скидка 15% на диагностику!',
      content: 'Только до конца месяца - скидка 15% на компьютерную диагностику для новых клиентов! Используйте промокод DIAG15 при записи.',
      date: '2025-01-20',
      image: null
    },
    {
      id: 2,
      title: '🔧 Новое оборудование Hunter',
      content: 'Установили современный стенд Hunter для 3D развал-схождения. Теперь настройка геометрии колес еще точнее!',
      date: '2025-01-18',
      image: null
    },
    {
      id: 3,
      title: '❄️ Зимние предложения',
      content: 'Комплексная подготовка к зиме: замена масла + антифриз + проверка аккумулятора = скидка 20%!',
      date: '2025-01-15',
      image: null
    },
    {
      id: 4,
      title: '🚗 Работаем с автопарками',
      content: 'Специальные условия для владельцев автопарков и такси. Выездное ТО, гибкая система скидок.',
      date: '2025-01-12',
      image: null
    },
    {
      id: 5,
      title: '⚡ Экстренная помощь 24/7',
      content: 'Наша выездная служба работает круглосуточно! Эвакуатор, мобильная диагностика, запуск двигателя.',
      date: '2025-01-10',
      image: null
    }
  ];

  // Telegram Bot Configuration
  const TELEGRAM_BOT_TOKEN = '7287254885:AAGkwk4VaSuZ7-zd58NW3egnkvjvqpTlb-4';
  const TELEGRAM_ADMIN_IDS = ['6783751615', '1241389797']; // Два админа

  // Функция отправки в Telegram
  const sendToTelegram = async (formData) => {
    const message = `🚗 *НОВАЯ ЗАЯВКА ИЗ MINI APP*\n\n` +
      `👤 *Имя:* ${formData.name}\n` +
      `📱 *Телефон:* ${formData.phone}\n` +
      `🚙 *Автомобиль:* ${formData.car || 'Не указан'}\n` +
      `🔧 *Услуга:* ${formData.service || 'Не указана'}\n` +
      `💰 *Примерная стоимость:* ${formData.price || 'Не рассчитана'}\n` +
      `📝 *Комментарий:* ${formData.comment || 'Нет'}\n\n` +
      `⏰ *Время:* ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}\n` +
      `🌐 *Источник:* Telegram Mini App`;
    
    try {
      // Отправляем сообщение обоим админам
      const promises = TELEGRAM_ADMIN_IDS.map(adminId =>
        fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: adminId,
            text: message,
            parse_mode: 'Markdown'
          })
        })
      );
      
      const responses = await Promise.all(promises);
      const results = await Promise.all(responses.map(r => r.json()));
      
      // Возвращаем true если хотя бы одно сообщение доставлено
      return results.some(result => result.ok);
    } catch (error) {
      console.error('Ошибка отправки в Telegram:', error);
      return false;
    }
  };

  // Функция добавления/удаления услуги
  const toggleService = (serviceName) => {
    setCalculatorData(prev => {
      const services = [...prev.services];
      const serviceIndex = services.findIndex(s => s.name === serviceName);
      
      if (serviceIndex >= 0) {
        // Услуга уже выбрана - удаляем
        services.splice(serviceIndex, 1);
      } else {
        // Услуга не выбрана - добавляем
        const serviceInfo = findServiceInfo(serviceName);
        if (serviceInfo) {
          services.push(serviceInfo);
        }
      }
      
      return { ...prev, services };
    });
  };

  // Функция поиска информации об услуге
  const findServiceInfo = (serviceName) => {
    for (const category of priceData) {
      const service = category.services.find(s => s.name === serviceName);
      if (service) {
        return {
          name: service.name,
          basePrice: service.basePrice,
          category: category.category
        };
      }
    }
    return null;
  };

  // Проверка выбрана ли услуга
  const isServiceSelected = (serviceName) => {
    return calculatorData.services.some(s => s.name === serviceName);
  };

  // Калькулятор цены на основе реального прайса (с поддержкой множественного выбора)
  const calculatePrice = () => {
    if (calculatorData.services.length === 0) return 0;

    // Коэффициенты по типу автомобиля
    const carMultiplier = {
      'sedan': 1.0,      // Седан/Хэтчбек - базовая цена
      'suv': 1.3,        // Кроссовер/SUV - +30%
      'truck': 1.5,      // Грузовик/Фургон - +50%
      'premium': 1.8     // Премиум-класс - +80%
    };

    // Коэффициенты по сложности
    const complexityMultiplier = {
      'simple': 1.0,     // Простая работа - базовая цена
      'medium': 1.3,     // Средняя сложность - +30%
      'complex': 1.7     // Сложная работа - +70%
    };

    // Скидка при выборе нескольких услуг
    const serviceCountDiscount = {
      1: 1.0,     // 1 услуга - без скидки
      2: 0.95,    // 2 услуги - скидка 5%
      3: 0.90,    // 3 услуги - скидка 10%
      4: 0.85,    // 4+ услуг - скидка 15%
    };

    let totalPrice = 0;
    
    // Суммируем стоимость всех выбранных услуг
    calculatorData.services.forEach(service => {
      const servicePrice = service.basePrice * carMultiplier[calculatorData.carType] * complexityMultiplier[calculatorData.complexity];
      totalPrice += servicePrice;
    });

    // Применяем скидку за количество услуг
    const serviceCount = Math.min(calculatorData.services.length, 4);
    const discount = serviceCountDiscount[serviceCount] || 0.85;
    totalPrice *= discount;

    return Math.round(totalPrice);
  };

  // Получить список выбранных услуг для отображения
  const getSelectedServicesText = () => {
    if (calculatorData.services.length === 0) return '';
    return calculatorData.services.map(s => s.name).join(', ');
  };

  // Компонент главной страницы
  const HomeTab = () => (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          transform: 'translateZ(0)'
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/75 to-gray-900/90"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-md">
        {/* Logo and Title */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">AG</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-orange-500" style={{fontFamily: 'monospace'}}>AutoGarage</h1>
              <p className="text-gray-300 text-sm">Профессиональный автосервис</p>
            </div>
          </div>
          
          {/* Hero Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-orange-500/30">
              <div className="text-orange-500 text-xl mb-1">⚡</div>
              <div className="text-orange-500 font-bold text-sm">30 мин</div>
              <div className="text-gray-300 text-xs">Диагностика</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-orange-500/30">
              <div className="text-orange-500 text-xl mb-1">🛡️</div>
              <div className="text-orange-500 font-bold text-sm">1 год</div>
              <div className="text-gray-300 text-xs">Гарантия</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-orange-500/30">
              <div className="text-orange-500 text-xl mb-1">🏆</div>
              <div className="text-orange-500 font-bold text-sm">15+ лет</div>
              <div className="text-gray-300 text-xs">Опыт</div>
            </div>
          </div>
        </div>

        {/* Main Categories */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setActiveTab('contacts')}
            className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-orange-600 hover:to-red-600"
            style={{
              boxShadow: '0 0 20px rgba(255, 107, 53, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 0 30px rgba(255, 107, 53, 0.8), 0 12px 40px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)';
            }}
          >
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-8 h-8 text-white" />
              <span className="text-white font-bold text-lg">Контакты</span>
              <span className="text-white/80 text-xs text-center">Адрес, телефон, карта</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('price')}
            className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-orange-600 hover:to-red-600"
            style={{
              boxShadow: '0 0 20px rgba(255, 107, 53, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 0 30px rgba(255, 107, 53, 0.8), 0 12px 40px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)';
            }}
          >
            <div className="flex flex-col items-center space-y-2">
              <FileText className="w-8 h-8 text-white" />
              <span className="text-white font-bold text-lg">Прайс</span>
              <span className="text-white/80 text-xs text-center">Цены на услуги</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('news')}
            className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-orange-600 hover:to-red-600"
            style={{
              boxShadow: '0 0 20px rgba(255, 107, 53, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 0 30px rgba(255, 107, 53, 0.8), 0 12px 40px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)';
            }}
          >
            <div className="flex flex-col items-center space-y-2">
              <MessageCircle className="w-8 h-8 text-white" />
              <span className="text-white font-bold text-lg">Новости</span>
              <span className="text-white/80 text-xs text-center">Акции и новости</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('calculator')}
            className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-orange-600 hover:to-red-600"
            style={{
              boxShadow: '0 0 20px rgba(255, 107, 53, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 0 30px rgba(255, 107, 53, 0.8), 0 12px 40px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)';
            }}
          >
            <div className="flex flex-col items-center space-y-2">
              <Calculator className="w-8 h-8 text-white" />
              <span className="text-white font-bold text-lg">Калькулятор</span>
              <span className="text-white/80 text-xs text-center">Расчет стоимости</span>
            </div>
          </button>
        </div>

        {/* Quick Action */}
        <div className="mt-8">
          <button 
            onClick={() => window.open('tel:+79997871308')}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-4 rounded-lg text-white font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            style={{
              boxShadow: '0 0 20px rgba(255, 107, 53, 0.5), 0 8px 32px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 0 30px rgba(255, 107, 53, 0.9), 0 12px 40px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.5), 0 8px 32px rgba(0, 0, 0, 0.3)';
            }}
          >
            📞 Позвонить сейчас
          </button>
        </div>

        {/* Additional Stats */}
        <div className="mt-8 grid grid-cols-3 gap-3 text-center">
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-2 border border-gray-600/30">
            <div className="text-orange-500 font-bold text-lg">15+</div>
            <div className="text-gray-300 text-xs">Лет опыта</div>
          </div>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-2 border border-gray-600/30">
            <div className="text-orange-500 font-bold text-lg">5000+</div>
            <div className="text-gray-300 text-xs">Клиентов</div>
          </div>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-2 border border-gray-600/30">
            <div className="text-orange-500 font-bold text-lg">24/7</div>
            <div className="text-gray-300 text-xs">Поддержка</div>
          </div>
        </div>
      </div>
    </div>
  );

  // Компонент контактов
  const ContactsTab = () => (
    <div className="space-y-6">
      {/* Заголовок */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">AG</span>
          </div>
          <h1 className="text-2xl font-bold text-orange-500" style={{fontFamily: 'monospace'}}>AutoGarage</h1>
        </div>
        <p className="text-gray-300">Профессиональный автосервис</p>
      </div>

      {/* Контактная информация */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <h3 className="text-lg font-bold text-orange-500 mb-4 flex items-center">
          <MapPin className="w-5 h-5 mr-2" />
          Контакты
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-medium text-gray-200">Адрес</div>
              <div className="text-gray-400 text-sm">г. Сельцо, ул. Кирова, 67</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-medium text-gray-200">Телефон</div>
              <a href="tel:+79997871308" className="text-orange-400 text-sm hover:text-orange-300">
                +7 (999) 787-13-08
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-medium text-gray-200">Время работы</div>
              <div className="text-gray-400 text-sm">Пн-Сб: 8:00-19:00<br />Вс: выходной</div>
            </div>
          </div>
        </div>
      </div>

      {/* Карта */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <h3 className="text-lg font-bold text-orange-500 mb-4">📍 Расположение</h3>
        <div className="bg-gray-700 rounded-lg h-64 overflow-hidden">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=34.109624%2C53.379305&z=16&pt=34.109624%2C53.379305%2Cpm2rdm"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ borderRadius: '8px' }}
            title="Карта AutoGarage - г. Сельцо, ул. Кирова, 67"
          ></iframe>
        </div>
        <div className="mt-3 flex space-x-2">
          <button 
            onClick={() => window.open('https://yandex.ru/maps/?ll=34.109624%2C53.379305&z=16&pt=34.109624%2C53.379305', '_blank')}
            className="flex-1 bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded text-white text-sm font-medium transition-colors"
          >
            🗺️ Яндекс.Карты
          </button>
          <button 
            onClick={() => window.open('https://maps.google.com/?q=53.379305,34.109624', '_blank')}
            className="flex-1 bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white text-sm font-medium transition-colors"
          >
            🌍 Google Maps
          </button>
        </div>
      </div>

      {/* Кнопка звонка */}
      <button 
        onClick={() => window.open('tel:+79997871308')}
        className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-4 rounded-lg text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
      >
        📞 Позвонить сейчас
      </button>

      {/* Преимущества */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-lg p-3 text-center border border-gray-700">
          <div className="text-2xl mb-1">⚡</div>
          <div className="text-orange-500 font-bold text-sm">30 мин</div>
          <div className="text-gray-400 text-xs">Диагностика</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-3 text-center border border-gray-700">
          <div className="text-2xl mb-1">🛡️</div>
          <div className="text-orange-500 font-bold text-sm">1 год</div>
          <div className="text-gray-400 text-xs">Гарантия</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-3 text-center border border-gray-700">
          <div className="text-2xl mb-1">🏆</div>
          <div className="text-orange-500 font-bold text-sm">15+ лет</div>
          <div className="text-gray-400 text-xs">Опыт</div>
        </div>
      </div>
    </div>
  );

  // Состояние для модального окна заказа
  const [orderModal, setOrderModal] = useState({ isOpen: false, category: '', service: '' });

  // Компонент прайса
  const PriceTab = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-orange-500 mb-2">💰 Прайс-лист</h2>
        <p className="text-gray-400 text-sm">Прозрачные цены на все виды работ</p>
      </div>

      {priceData.map((category, index) => (
        <div key={index} className="bg-gray-800 rounded-lg border border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h3 className="font-bold text-orange-500">{category.category}</h3>
          </div>
          <div className="p-4 space-y-3">
            {category.services.map((service, serviceIndex) => (
              <div key={serviceIndex} className="flex justify-between items-center py-2">
                <span className="text-gray-200 text-sm">{service.name}</span>
                <span className="text-orange-500 font-bold text-sm">{service.price}</span>
              </div>
            ))}
            <div className="pt-3 border-t border-gray-700">
              <button
                onClick={() => setOrderModal({ isOpen: true, category: category.category, service: '' })}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-2 px-4 rounded-lg text-white font-bold text-sm hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
              >
                🔧 Заказать услугу
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-orange-500 bg-opacity-20 border border-orange-500 rounded-lg p-4 mt-6">
        <h4 className="font-bold text-orange-500 mb-2">🎉 Акции</h4>
        <div className="text-gray-300 text-sm space-y-1">
          <div>💥 Скидка 15% для постоянных клиентов</div>
          <div>💥 Скидка 10% при комплексном ремонте</div>
          <div>💥 Бесплатная диагностика при ремонте свыше 10 000 ₽</div>
        </div>
      </div>

      {/* Модальное окно заказа */}
      {orderModal.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-orange-500">Заказать услугу</h3>
              <button 
                onClick={() => setOrderModal({ isOpen: false, category: '', service: '' })}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="mb-4 p-3 bg-gray-700 rounded-lg">
              <p className="text-orange-500 font-semibold text-sm">{orderModal.category}</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2 text-sm">Выберите услугу</label>
                <select
                  value={orderModal.service}
                  onChange={(e) => setOrderModal({...orderModal, service: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white text-sm focus:border-orange-500 focus:outline-none"
                >
                  <option value="">Выберите услугу</option>
                  {priceData.find(cat => cat.category === orderModal.category)?.services.map((service, idx) => (
                    <option key={idx} value={service.name}>{service.name} - {service.price}</option>
                  ))}
                </select>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={orderModal.name || ''}
                  onChange={(e) => setOrderModal({...orderModal, name: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white text-sm focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={orderModal.phone || ''}
                  onChange={(e) => setOrderModal({...orderModal, phone: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white text-sm focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Марка и модель авто"
                  value={orderModal.car || ''}
                  onChange={(e) => setOrderModal({...orderModal, car: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white text-sm focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <textarea
                  placeholder="Дополнительные пожелания"
                  value={orderModal.comment || ''}
                  onChange={(e) => setOrderModal({...orderModal, comment: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white text-sm focus:border-orange-500 focus:outline-none h-20 resize-none"
                />
              </div>

              <button
                onClick={async () => {
                  if (!orderModal.name || !orderModal.phone || !orderModal.service) {
                    alert('Пожалуйста, заполните все обязательные поля');
                    return;
                  }

                  const formData = {
                    name: orderModal.name,
                    phone: orderModal.phone,
                    car: orderModal.car,
                    service: orderModal.service,
                    comment: orderModal.comment,
                    price: 'Уточняется при диагностике'
                  };

                  const success = await sendToTelegram(formData);

                  if (success) {
                    alert('✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
                    setOrderModal({ isOpen: false, category: '', service: '', name: '', phone: '', car: '', comment: '' });
                  } else {
                    alert('❌ Ошибка отправки. Позвоните: +7 (999) 787-13-08');
                  }
                }}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-3 px-4 rounded-lg text-white font-bold text-sm hover:from-orange-600 hover:to-red-600 transition-all duration-300"
              >
                🚗 Отправить заявку
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Компонент новостей
  const NewsTab = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-orange-500 mb-2">📰 Новости</h2>
        <p className="text-gray-400 text-sm">Последние новости и акции</p>
      </div>

      {news.map(article => (
        <div key={article.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <h3 className="font-bold text-orange-500 mb-2">{article.title}</h3>
          <p className="text-gray-300 text-sm mb-3">{article.content}</p>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-xs">{article.date}</span>
            <ChevronRight className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      ))}

      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-4 text-center">
        <MessageCircle className="w-8 h-8 mx-auto mb-2 text-white" />
        <h3 className="font-bold text-white mb-2">Подписывайтесь на канал!</h3>
        <p className="text-white text-sm mb-3">Не пропускайте акции и полезные советы по ремонту авто</p>
        <div className="space-y-2">
          <button 
            onClick={() => {
              if (window.Telegram?.WebApp) {
                window.Telegram.WebApp.openTelegramLink('https://t.me/your_channel');
              } else {
                window.open('https://t.me/your_channel', '_blank');
              }
            }}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm hover:from-orange-600 hover:to-red-600 transition-all duration-300"
          >
            📢 Перейти в канал
          </button>
          <button 
            onClick={() => window.open('tel:+79997871308')}
            className="w-full bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-opacity-30 transition-all duration-300"
          >
            📞 Позвонить +7 (999) 787-13-08
          </button>
        </div>
      </div>
    </div>
  );

  // Компонент калькулятора
  const CalculatorTab = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-orange-500 mb-2">🧮 Калькулятор цены</h2>
        <p className="text-gray-400 text-sm">Примерная стоимость ремонта</p>
      </div>

      <div className="space-y-4">
        {/* Тип автомобиля */}
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <label className="block text-gray-300 mb-3 font-medium">Тип автомобиля:</label>
          <select
            value={calculatorData.carType}
            onChange={(e) => setCalculatorData({...calculatorData, carType: e.target.value})}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:border-orange-500 focus:outline-none"
          >
            <option value="sedan">🚗 Седан/Хэтчбек</option>
            <option value="suv">🚙 Кроссовер/SUV</option>
            <option value="truck">🚚 Грузовик/Фургон</option>
            <option value="premium">🏎️ Премиум-класс</option>
          </select>
        </div>

        {/* Сложность работ */}
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <label className="block text-gray-300 mb-3 font-medium">Сложность работ:</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: 'simple', label: 'Простая', color: 'green' },
              { value: 'medium', label: 'Средняя', color: 'yellow' },
              { value: 'complex', label: 'Сложная', color: 'red' }
            ].map(complexity => (
              <button
                key={complexity.value}
                onClick={() => setCalculatorData({...calculatorData, complexity: complexity.value})}
                className={`p-2 rounded-lg border text-sm font-medium transition-all ${
                  calculatorData.complexity === complexity.value
                    ? 'bg-orange-500 border-orange-500 text-white'
                    : 'bg-gray-700 border-gray-600 text-gray-300 hover:border-orange-500'
                }`}
              >
                {complexity.label}
              </button>
            ))}
          </div>
        </div>

        {/* Выбор услуг (множественный выбор) */}
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <label className="block text-gray-300 mb-3 font-medium">
            Выберите услуги: 
            {calculatorData.services.length > 0 && (
              <span className="ml-2 text-orange-500 text-sm">
                ({calculatorData.services.length} выбрано)
              </span>
            )}
          </label>
          
          {/* Показываем выбранные услуги */}
          {calculatorData.services.length > 0 && (
            <div className="mb-4 p-3 bg-orange-500 bg-opacity-20 rounded-lg border border-orange-500">
              <h5 className="text-orange-500 font-medium text-sm mb-2">Выбранные услуги:</h5>
              <div className="flex flex-wrap gap-2">
                {calculatorData.services.map((service, index) => (
                  <div key={index} className="bg-orange-500 text-white px-2 py-1 rounded-lg text-xs flex items-center space-x-1">
                    <span>{service.name}</span>
                    <button 
                      onClick={() => toggleService(service.name)}
                      className="ml-1 text-white hover:text-gray-200"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              {calculatorData.services.length >= 2 && (
                <div className="mt-2 text-green-400 text-xs">
                  🎉 Скидка {calculatorData.services.length >= 4 ? '15%' : calculatorData.services.length >= 3 ? '10%' : '5%'} за комплексный ремонт!
                </div>
              )}
            </div>
          )}
          
          <div className="space-y-3">
            {priceData.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h4 className="text-orange-500 font-medium text-sm mb-2">{category.category}</h4>
                <div className="grid grid-cols-1 gap-2">
                  {category.services.slice(0, 3).map((service, serviceIndex) => {
                    const isSelected = isServiceSelected(service.name);
                    return (
                      <button
                        key={serviceIndex}
                        onClick={() => toggleService(service.name)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all text-left ${
                          isSelected
                            ? 'bg-orange-500 border-orange-500 text-white'
                            : 'bg-gray-700 border-gray-600 text-gray-300 hover:border-orange-500'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                              isSelected ? 'bg-white border-white' : 'border-gray-400'
                            }`}>
                              {isSelected && <div className="w-2 h-2 bg-orange-500 rounded"></div>}
                            </div>
                            <span className="text-xs">{service.name}</span>
                          </div>
                          <span className="text-xs font-bold">{service.price}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Результат калькулятора */}
        {calculatorData.services.length > 0 && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6 text-center">
              <h3 className="text-white font-bold text-lg mb-2">Примерная стоимость:</h3>
              <div className="text-white text-3xl font-bold mb-2">
                {calculatePrice().toLocaleString()} ₽
              </div>
              <p className="text-white text-sm opacity-90 mb-2">
                * Точная стоимость определяется после диагностики
              </p>
              {calculatorData.services.length > 1 && (
                <p className="text-green-200 text-sm mb-4">
                  ✨ Применена скидка за комплексный ремонт!
                </p>
              )}
              
              {/* Форма записи */}
              <div className="bg-white rounded-lg p-4 mt-4">
                <h4 className="text-orange-500 font-bold mb-3">Записаться на ремонт</h4>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={calculatorData.name || ''}
                    onChange={(e) => setCalculatorData({...calculatorData, name: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded text-gray-800 text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={calculatorData.phone || ''}
                    onChange={(e) => setCalculatorData({...calculatorData, phone: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded text-gray-800 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Марка и модель авто"
                    value={calculatorData.car || ''}
                    onChange={(e) => setCalculatorData({...calculatorData, car: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded text-gray-800 text-sm"
                  />
                  <textarea
                    placeholder="Дополнительный комментарий"
                    value={calculatorData.comment || ''}
                    onChange={(e) => setCalculatorData({...calculatorData, comment: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded text-gray-800 text-sm h-16 resize-none"
                  />
                  <button 
                    onClick={async () => {
                      if (!calculatorData.name || !calculatorData.phone) {
                        alert('Пожалуйста, заполните имя и телефон');
                        return;
                      }
                      
                      const formData = {
                        name: calculatorData.name,
                        phone: calculatorData.phone,
                        car: calculatorData.car,
                        service: getSelectedServicesText(),
                        price: `${calculatePrice().toLocaleString()} ₽`,
                        comment: calculatorData.comment
                      };
                      
                      const success = await sendToTelegram(formData);
                      
                      if (success) {
                        alert('✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
                        // Очищаем форму
                        setCalculatorData({
                          services: calculatorData.services,
                          carType: calculatorData.carType,
                          complexity: calculatorData.complexity,
                          name: '',
                          phone: '',
                          car: '',
                          comment: ''
                        });
                      } else {
                        alert('❌ Ошибка отправки. Позвоните: +7 (999) 787-13-08');
                      }
                    }}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                  >
                    🚗 Отправить заявку
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Основной компонент
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Контент */}
      <div className={activeTab === 'home' ? '' : 'p-4 pb-20'}>
        {activeTab === 'home' && <HomeTab />}
        {activeTab === 'contacts' && <ContactsTab />}
        {activeTab === 'price' && <PriceTab />}
        {activeTab === 'news' && <NewsTab />}
        {activeTab === 'calculator' && <CalculatorTab />}
      </div>

      {/* Нижняя навигация - показывается только когда не на главной */}
      {activeTab !== 'home' && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700">
          <div className="grid grid-cols-5 gap-1">
            {[
              { id: 'home', icon: <Star className="w-5 h-5" />, label: 'Главная' },
              { id: 'contacts', icon: <MapPin className="w-5 h-5" />, label: 'Контакты' },
              { id: 'price', icon: <FileText className="w-5 h-5" />, label: 'Прайс' },
              { id: 'news', icon: <MessageCircle className="w-5 h-5" />, label: 'Новости' },
              { id: 'calculator', icon: <Calculator className="w-5 h-5" />, label: 'Расчет' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-3 text-center transition-all duration-300 relative ${
                  activeTab === tab.id
                    ? 'text-orange-500 bg-gray-700'
                    : 'text-gray-400 hover:text-orange-400'
                }`}
                style={{
                  filter: activeTab === tab.id 
                    ? 'drop-shadow(0 0 8px rgba(255, 107, 53, 0.6))' 
                    : 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.filter = 'drop-shadow(0 0 12px rgba(255, 107, 53, 0.8))';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.filter = 'none';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                <div className="flex flex-col items-center space-y-1">
                  {tab.icon}
                  <span className="text-xs font-medium">{tab.label}</span>
                </div>
                {activeTab === tab.id && (
                  <div 
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-orange-500 rounded-b-full"
                    style={{
                      boxShadow: '0 0 8px rgba(255, 107, 53, 0.8)'
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TelegramMiniApp;