// <stdin>
import React, { useState, useEffect } from "https://esm.sh/react@18.2.0";
import { MapPin, Phone, Clock, Calculator, FileText, MessageCircle, Star, ChevronRight, Wrench, Car, Zap, PaintBucket } from "https://esm.sh/lucide-react?deps=react@18.2.0,react-dom@18.2.0";
var TelegramMiniApp = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [calculatorData, setCalculatorData] = useState({
    services: [],
    // Теперь массив для множественного выбора
    carType: "sedan",
    complexity: "simple"
  });
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
      window.Telegram.WebApp.setHeaderColor("#1a1a1a");
      window.Telegram.WebApp.setBackgroundColor("#1a1a1a");
    }
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll("[data-parallax]");
      parallaxElements.forEach((element) => {
        const speed = element.dataset.parallax || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const priceData = [
    {
      category: "\u{1F527} \u0414\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0438 \u0422\u041E",
      services: [
        { name: "\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430", price: "\u043E\u0442 800 \u20BD", basePrice: 800 },
        { name: "\u0417\u0430\u043C\u0435\u043D\u0430 \u043C\u0430\u0441\u043B\u0430 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F", price: "\u043E\u0442 500 \u20BD", basePrice: 500 },
        { name: "\u0417\u0430\u043C\u0435\u043D\u0430 \u0432\u043E\u0437\u0434\u0443\u0448\u043D\u043E\u0433\u043E \u0444\u0438\u043B\u044C\u0442\u0440\u0430", price: "\u043E\u0442 200 \u20BD", basePrice: 200 },
        { name: "\u0417\u0430\u043C\u0435\u043D\u0430 \u0442\u043E\u043F\u043B\u0438\u0432\u043D\u043E\u0433\u043E \u0444\u0438\u043B\u044C\u0442\u0440\u0430", price: "\u043E\u0442 400 \u20BD", basePrice: 400 },
        { name: "\u0417\u0430\u043C\u0435\u043D\u0430 \u0441\u0432\u0435\u0447\u0435\u0439 \u0437\u0430\u0436\u0438\u0433\u0430\u043D\u0438\u044F", price: "\u043E\u0442 600 \u20BD", basePrice: 600 },
        { name: "\u0422\u041E-1 (\u0431\u0430\u0437\u043E\u0432\u043E\u0435)", price: "\u043E\u0442 2500 \u20BD", basePrice: 2500 },
        { name: "\u0422\u041E-2 (\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u043E\u0435)", price: "\u043E\u0442 4500 \u20BD", basePrice: 4500 }
      ]
    },
    {
      category: "\u2699\uFE0F \u0420\u0435\u043C\u043E\u043D\u0442 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F",
      services: [
        { name: "\u0417\u0430\u043C\u0435\u043D\u0430 \u0440\u0435\u043C\u043D\u044F \u0413\u0420\u041C", price: "\u043E\u0442 3500 \u20BD", basePrice: 3500 },
        { name: "\u0417\u0430\u043C\u0435\u043D\u0430 \u043F\u0440\u043E\u043A\u043B\u0430\u0434\u043A\u0438 \u0413\u0411\u0426", price: "\u043E\u0442 8000 \u20BD", basePrice: 8e3 },
        { name: "\u0420\u0435\u043C\u043E\u043D\u0442 \u0413\u0411\u0426", price: "\u043E\u0442 15000 \u20BD", basePrice: 15e3 },
        { name: "\u0417\u0430\u043C\u0435\u043D\u0430 \u043F\u043E\u0440\u0448\u043D\u0435\u0432\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u044B", price: "\u043E\u0442 25000 \u20BD", basePrice: 25e3 },
        { name: "\u041A\u0430\u043F\u0438\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0435\u043C\u043E\u043D\u0442 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F", price: "\u043E\u0442 50000 \u20BD", basePrice: 5e4 },
        { name: "\u0417\u0430\u043C\u0435\u043D\u0430 \u0432\u043E\u0434\u044F\u043D\u043E\u0433\u043E \u043D\u0430\u0441\u043E\u0441\u0430", price: "\u043E\u0442 2500 \u20BD", basePrice: 2500 },
        { name: "\u0417\u0430\u043C\u0435\u043D\u0430 \u0442\u0435\u0440\u043C\u043E\u0441\u0442\u0430\u0442\u0430", price: "\u043E\u0442 1200 \u20BD", basePrice: 1200 },
        { name: "\u041F\u0440\u043E\u043C\u044B\u0432\u043A\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u044F", price: "\u043E\u0442 1500 \u20BD", basePrice: 1500 }
      ]
    },
    {
      category: "\u{1F697} \u0425\u043E\u0434\u043E\u0432\u0430\u044F \u0447\u0430\u0441\u0442\u044C",
      services: [
        { name: "\u0417\u0430\u043C\u0435\u043D\u0430 \u0430\u043C\u043E\u0440\u0442\u0438\u0437\u0430\u0442\u043E\u0440\u043E\u0432 (\u043F\u0430\u0440\u0430)", price: "\u043E\u0442 2000 \u20BD", basePrice: 2e3 },
        { name: "\u0417\u0430\u043C\u0435\u043D\u0430 \u0441\u0442\u043E\u0435\u043A \u0441\u0442\u0430\u0431\u0438\u043B\u0438\u0437\u0430\u0442\u043E\u0440\u0430", price: "\u043E\u0442 800 \u20BD", basePrice: 800 },
        { name: "\u0417\u0430\u043C\u0435\u043D\u0430 \u0440\u0443\u043B\u0435\u0432\u044B\u0445 \u0442\u044F\u0433", price: "\u043E\u0442 1500 \u20BD", basePrice: 1500 },
        { name: "\u0417\u0430\u043C\u0435\u043D\u0430 \u0448\u0430\u0440\u043E\u0432\u044B\u0445 \u043E\u043F\u043E\u0440", price: "\u043E\u0442 1800 \u20BD", basePrice: 1800 },
        { name: "\u0417\u0430\u043C\u0435\u043D\u0430 \u0441\u0442\u0443\u043F\u0438\u0447\u043D\u044B\u0445 \u043F\u043E\u0434\u0448\u0438\u043F\u043D\u0438\u043A\u043E\u0432", price: "\u043E\u0442 2500 \u20BD", basePrice: 2500 },
        { name: "\u0417\u0430\u043C\u0435\u043D\u0430 \u0442\u043E\u0440\u043C\u043E\u0437\u043D\u044B\u0445 \u043A\u043E\u043B\u043E\u0434\u043E\u043A", price: "\u043E\u0442 1200 \u20BD", basePrice: 1200 },
        { name: "\u0417\u0430\u043C\u0435\u043D\u0430 \u0442\u043E\u0440\u043C\u043E\u0437\u043D\u044B\u0445 \u0434\u0438\u0441\u043A\u043E\u0432", price: "\u043E\u0442 1500 \u20BD", basePrice: 1500 },
        { name: "\u041F\u0440\u043E\u043A\u0430\u0447\u043A\u0430 \u0442\u043E\u0440\u043C\u043E\u0437\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B", price: "\u043E\u0442 800 \u20BD", basePrice: 800 }
      ]
    },
    {
      category: "\u26A1 \u042D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0430 \u0438 \u043A\u0443\u0437\u043E\u0432",
      services: [
        { name: "\u0417\u0430\u043C\u0435\u043D\u0430 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0430", price: "\u043E\u0442 2000 \u20BD", basePrice: 2e3 },
        { name: "\u0417\u0430\u043C\u0435\u043D\u0430 \u0441\u0442\u0430\u0440\u0442\u0435\u0440\u0430", price: "\u043E\u0442 1500 \u20BD", basePrice: 1500 },
        { name: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438", price: "\u043E\u0442 5000 \u20BD", basePrice: 5e3 },
        { name: "\u0420\u0438\u0445\u0442\u043E\u0432\u043A\u0430 \u043A\u0443\u0437\u043E\u0432\u0430 (\u044D\u043B\u0435\u043C\u0435\u043D\u0442)", price: "\u043E\u0442 3000 \u20BD", basePrice: 3e3 },
        { name: "\u041F\u043E\u043A\u0440\u0430\u0441\u043A\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430", price: "\u043E\u0442 5000 \u20BD", basePrice: 5e3 },
        { name: "\u041F\u043E\u043B\u0438\u0440\u043E\u0432\u043A\u0430 \u043A\u0443\u0437\u043E\u0432\u0430", price: "\u043E\u0442 8000 \u20BD", basePrice: 8e3 },
        { name: "\u0410\u043D\u0442\u0438\u043A\u043E\u0440\u0440\u043E\u0437\u0438\u0439\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430", price: "\u043E\u0442 4000 \u20BD", basePrice: 4e3 },
        { name: "\u0417\u0430\u043C\u0435\u043D\u0430 \u043B\u043E\u0431\u043E\u0432\u043E\u0433\u043E \u0441\u0442\u0435\u043A\u043B\u0430", price: "\u043E\u0442 3500 \u20BD", basePrice: 3500 }
      ]
    }
  ];
  const news = [
    {
      id: 1,
      title: "\u{1F389} \u0421\u043A\u0438\u0434\u043A\u0430 15% \u043D\u0430 \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0443!",
      content: "\u0422\u043E\u043B\u044C\u043A\u043E \u0434\u043E \u043A\u043E\u043D\u0446\u0430 \u043C\u0435\u0441\u044F\u0446\u0430 - \u0441\u043A\u0438\u0434\u043A\u0430 15% \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u0443\u044E \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0443 \u0434\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432! \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434 DIAG15 \u043F\u0440\u0438 \u0437\u0430\u043F\u0438\u0441\u0438.",
      date: "2025-01-20",
      image: null
    },
    {
      id: 2,
      title: "\u{1F527} \u041D\u043E\u0432\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 Hunter",
      content: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0438 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u0435\u043D\u0434 Hunter \u0434\u043B\u044F 3D \u0440\u0430\u0437\u0432\u0430\u043B-\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F. \u0422\u0435\u043F\u0435\u0440\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0438 \u043A\u043E\u043B\u0435\u0441 \u0435\u0449\u0435 \u0442\u043E\u0447\u043D\u0435\u0435!",
      date: "2025-01-18",
      image: null
    },
    {
      id: 3,
      title: "\u2744\uFE0F \u0417\u0438\u043C\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
      content: "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0430\u044F \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043A \u0437\u0438\u043C\u0435: \u0437\u0430\u043C\u0435\u043D\u0430 \u043C\u0430\u0441\u043B\u0430 + \u0430\u043D\u0442\u0438\u0444\u0440\u0438\u0437 + \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0430\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430 = \u0441\u043A\u0438\u0434\u043A\u0430 20%!",
      date: "2025-01-15",
      image: null
    },
    {
      id: 4,
      title: "\u{1F697} \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441 \u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A\u0430\u043C\u0438",
      content: "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043B\u044F \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432 \u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A\u043E\u0432 \u0438 \u0442\u0430\u043A\u0441\u0438. \u0412\u044B\u0435\u0437\u0434\u043D\u043E\u0435 \u0422\u041E, \u0433\u0438\u0431\u043A\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0441\u043A\u0438\u0434\u043E\u043A.",
      date: "2025-01-12",
      image: null
    },
    {
      id: 5,
      title: "\u26A1 \u042D\u043A\u0441\u0442\u0440\u0435\u043D\u043D\u0430\u044F \u043F\u043E\u043C\u043E\u0449\u044C 24/7",
      content: "\u041D\u0430\u0448\u0430 \u0432\u044B\u0435\u0437\u0434\u043D\u0430\u044F \u0441\u043B\u0443\u0436\u0431\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043A\u0440\u0443\u0433\u043B\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u043E! \u042D\u0432\u0430\u043A\u0443\u0430\u0442\u043E\u0440, \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430, \u0437\u0430\u043F\u0443\u0441\u043A \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F.",
      date: "2025-01-10",
      image: null
    }
  ];
  const TELEGRAM_BOT_TOKEN = "7287254885:AAGkwk4VaSuZ7-zd58NW3egnkvjvqpTlb-4";
  const TELEGRAM_ADMIN_IDS = ["6783751615", "1241389797"];
  const sendToTelegram = async (formData) => {
    const message = `\u{1F697} *\u041D\u041E\u0412\u0410\u042F \u0417\u0410\u042F\u0412\u041A\u0410 \u0418\u0417 MINI APP*

\u{1F464} *\u0418\u043C\u044F:* ${formData.name}
\u{1F4F1} *\u0422\u0435\u043B\u0435\u0444\u043E\u043D:* ${formData.phone}
\u{1F699} *\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C:* ${formData.car || "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D"}
\u{1F527} *\u0423\u0441\u043B\u0443\u0433\u0430:* ${formData.service || "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430"}
\u{1F4B0} *\u041F\u0440\u0438\u043C\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C:* ${formData.price || "\u041D\u0435 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043D\u0430"}
\u{1F4DD} *\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439:* ${formData.comment || "\u041D\u0435\u0442"}

\u23F0 *\u0412\u0440\u0435\u043C\u044F:* ${(/* @__PURE__ */ new Date()).toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}
\u{1F310} *\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A:* Telegram Mini App`;
    try {
      const promises = TELEGRAM_ADMIN_IDS.map(
        (adminId) => fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: adminId,
            text: message,
            parse_mode: "Markdown"
          })
        })
      );
      const responses = await Promise.all(promises);
      const results = await Promise.all(responses.map((r) => r.json()));
      return results.some((result) => result.ok);
    } catch (error) {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0432 Telegram:", error);
      return false;
    }
  };
  const toggleService = (serviceName) => {
    setCalculatorData((prev) => {
      const services = [...prev.services];
      const serviceIndex = services.findIndex((s) => s.name === serviceName);
      if (serviceIndex >= 0) {
        services.splice(serviceIndex, 1);
      } else {
        const serviceInfo = findServiceInfo(serviceName);
        if (serviceInfo) {
          services.push(serviceInfo);
        }
      }
      return { ...prev, services };
    });
  };
  const findServiceInfo = (serviceName) => {
    for (const category of priceData) {
      const service = category.services.find((s) => s.name === serviceName);
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
  const isServiceSelected = (serviceName) => {
    return calculatorData.services.some((s) => s.name === serviceName);
  };
  const calculatePrice = () => {
    if (calculatorData.services.length === 0) return 0;
    const carMultiplier = {
      "sedan": 1,
      // Седан/Хэтчбек - базовая цена
      "suv": 1.3,
      // Кроссовер/SUV - +30%
      "truck": 1.5,
      // Грузовик/Фургон - +50%
      "premium": 1.8
      // Премиум-класс - +80%
    };
    const complexityMultiplier = {
      "simple": 1,
      // Простая работа - базовая цена
      "medium": 1.3,
      // Средняя сложность - +30%
      "complex": 1.7
      // Сложная работа - +70%
    };
    const serviceCountDiscount = {
      1: 1,
      // 1 услуга - без скидки
      2: 0.95,
      // 2 услуги - скидка 5%
      3: 0.9,
      // 3 услуги - скидка 10%
      4: 0.85
      // 4+ услуг - скидка 15%
    };
    let totalPrice = 0;
    calculatorData.services.forEach((service) => {
      const servicePrice = service.basePrice * carMultiplier[calculatorData.carType] * complexityMultiplier[calculatorData.complexity];
      totalPrice += servicePrice;
    });
    const serviceCount = Math.min(calculatorData.services.length, 4);
    const discount = serviceCountDiscount[serviceCount] || 0.85;
    totalPrice *= discount;
    return Math.round(totalPrice);
  };
  const getSelectedServicesText = () => {
    if (calculatorData.services.length === 0) return "";
    return calculatorData.services.map((s) => s.name).join(", ");
  };
  const HomeTab = () => /* @__PURE__ */ React.createElement("div", { className: "min-h-screen flex flex-col items-center justify-center relative overflow-hidden" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "absolute inset-0 bg-cover bg-center bg-fixed",
      style: {
        backgroundImage: `url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        transform: "translateZ(0)"
      }
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/75 to-gray-900/90" }), /* @__PURE__ */ React.createElement("div", { className: "relative z-10 text-center px-4 w-full max-w-md" }, /* @__PURE__ */ React.createElement("div", { className: "mb-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center space-x-3 mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg" }, /* @__PURE__ */ React.createElement("span", { className: "text-white font-bold text-2xl" }, "AG")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-bold text-orange-500", style: { fontFamily: "monospace" } }, "AutoGarage"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-300 text-sm" }, "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u0441\u0435\u0440\u0432\u0438\u0441"))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-4 mb-8" }, /* @__PURE__ */ React.createElement("div", { className: "bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-orange-500/30" }, /* @__PURE__ */ React.createElement("div", { className: "text-orange-500 text-xl mb-1" }, "\u26A1"), /* @__PURE__ */ React.createElement("div", { className: "text-orange-500 font-bold text-sm" }, "30 \u043C\u0438\u043D"), /* @__PURE__ */ React.createElement("div", { className: "text-gray-300 text-xs" }, "\u0414\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430")), /* @__PURE__ */ React.createElement("div", { className: "bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-orange-500/30" }, /* @__PURE__ */ React.createElement("div", { className: "text-orange-500 text-xl mb-1" }, "\u{1F6E1}\uFE0F"), /* @__PURE__ */ React.createElement("div", { className: "text-orange-500 font-bold text-sm" }, "1 \u0433\u043E\u0434"), /* @__PURE__ */ React.createElement("div", { className: "text-gray-300 text-xs" }, "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F")), /* @__PURE__ */ React.createElement("div", { className: "bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-orange-500/30" }, /* @__PURE__ */ React.createElement("div", { className: "text-orange-500 text-xl mb-1" }, "\u{1F3C6}"), /* @__PURE__ */ React.createElement("div", { className: "text-orange-500 font-bold text-sm" }, "15+ \u043B\u0435\u0442"), /* @__PURE__ */ React.createElement("div", { className: "text-gray-300 text-xs" }, "\u041E\u043F\u044B\u0442")))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-4" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setActiveTab("contacts"),
      className: "bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-orange-600 hover:to-red-600",
      style: {
        boxShadow: "0 0 20px rgba(255, 107, 53, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)",
        transition: "all 0.3s ease"
      },
      onMouseEnter: (e) => {
        e.target.style.boxShadow = "0 0 30px rgba(255, 107, 53, 0.8), 0 12px 40px rgba(0, 0, 0, 0.4)";
      },
      onMouseLeave: (e) => {
        e.target.style.boxShadow = "0 0 20px rgba(255, 107, 53, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)";
      }
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center space-y-2" }, /* @__PURE__ */ React.createElement(MapPin, { className: "w-8 h-8 text-white" }), /* @__PURE__ */ React.createElement("span", { className: "text-white font-bold text-lg" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), /* @__PURE__ */ React.createElement("span", { className: "text-white/80 text-xs text-center" }, "\u0410\u0434\u0440\u0435\u0441, \u0442\u0435\u043B\u0435\u0444\u043E\u043D, \u043A\u0430\u0440\u0442\u0430"))
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setActiveTab("price"),
      className: "bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-orange-600 hover:to-red-600",
      style: {
        boxShadow: "0 0 20px rgba(255, 107, 53, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)",
        transition: "all 0.3s ease"
      },
      onMouseEnter: (e) => {
        e.target.style.boxShadow = "0 0 30px rgba(255, 107, 53, 0.8), 0 12px 40px rgba(0, 0, 0, 0.4)";
      },
      onMouseLeave: (e) => {
        e.target.style.boxShadow = "0 0 20px rgba(255, 107, 53, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)";
      }
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center space-y-2" }, /* @__PURE__ */ React.createElement(FileText, { className: "w-8 h-8 text-white" }), /* @__PURE__ */ React.createElement("span", { className: "text-white font-bold text-lg" }, "\u041F\u0440\u0430\u0439\u0441"), /* @__PURE__ */ React.createElement("span", { className: "text-white/80 text-xs text-center" }, "\u0426\u0435\u043D\u044B \u043D\u0430 \u0443\u0441\u043B\u0443\u0433\u0438"))
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setActiveTab("news"),
      className: "bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-orange-600 hover:to-red-600",
      style: {
        boxShadow: "0 0 20px rgba(255, 107, 53, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)",
        transition: "all 0.3s ease"
      },
      onMouseEnter: (e) => {
        e.target.style.boxShadow = "0 0 30px rgba(255, 107, 53, 0.8), 0 12px 40px rgba(0, 0, 0, 0.4)";
      },
      onMouseLeave: (e) => {
        e.target.style.boxShadow = "0 0 20px rgba(255, 107, 53, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)";
      }
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center space-y-2" }, /* @__PURE__ */ React.createElement(MessageCircle, { className: "w-8 h-8 text-white" }), /* @__PURE__ */ React.createElement("span", { className: "text-white font-bold text-lg" }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438"), /* @__PURE__ */ React.createElement("span", { className: "text-white/80 text-xs text-center" }, "\u0410\u043A\u0446\u0438\u0438 \u0438 \u043D\u043E\u0432\u043E\u0441\u0442\u0438"))
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setActiveTab("calculator"),
      className: "bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-orange-600 hover:to-red-600",
      style: {
        boxShadow: "0 0 20px rgba(255, 107, 53, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)",
        transition: "all 0.3s ease"
      },
      onMouseEnter: (e) => {
        e.target.style.boxShadow = "0 0 30px rgba(255, 107, 53, 0.8), 0 12px 40px rgba(0, 0, 0, 0.4)";
      },
      onMouseLeave: (e) => {
        e.target.style.boxShadow = "0 0 20px rgba(255, 107, 53, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)";
      }
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center space-y-2" }, /* @__PURE__ */ React.createElement(Calculator, { className: "w-8 h-8 text-white" }), /* @__PURE__ */ React.createElement("span", { className: "text-white font-bold text-lg" }, "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440"), /* @__PURE__ */ React.createElement("span", { className: "text-white/80 text-xs text-center" }, "\u0420\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438"))
  )), /* @__PURE__ */ React.createElement("div", { className: "mt-8" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => window.open("tel:+79997871308"),
      className: "w-full bg-gradient-to-r from-orange-500 to-red-500 py-4 rounded-lg text-white font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105",
      style: {
        boxShadow: "0 0 20px rgba(255, 107, 53, 0.5), 0 8px 32px rgba(0, 0, 0, 0.3)",
        transition: "all 0.3s ease"
      },
      onMouseEnter: (e) => {
        e.target.style.boxShadow = "0 0 30px rgba(255, 107, 53, 0.9), 0 12px 40px rgba(0, 0, 0, 0.4)";
      },
      onMouseLeave: (e) => {
        e.target.style.boxShadow = "0 0 20px rgba(255, 107, 53, 0.5), 0 8px 32px rgba(0, 0, 0, 0.3)";
      }
    },
    "\u{1F4DE} \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441"
  )), /* @__PURE__ */ React.createElement("div", { className: "mt-8 grid grid-cols-3 gap-3 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "bg-black/20 backdrop-blur-sm rounded-lg p-2 border border-gray-600/30" }, /* @__PURE__ */ React.createElement("div", { className: "text-orange-500 font-bold text-lg" }, "15+"), /* @__PURE__ */ React.createElement("div", { className: "text-gray-300 text-xs" }, "\u041B\u0435\u0442 \u043E\u043F\u044B\u0442\u0430")), /* @__PURE__ */ React.createElement("div", { className: "bg-black/20 backdrop-blur-sm rounded-lg p-2 border border-gray-600/30" }, /* @__PURE__ */ React.createElement("div", { className: "text-orange-500 font-bold text-lg" }, "5000+"), /* @__PURE__ */ React.createElement("div", { className: "text-gray-300 text-xs" }, "\u041A\u043B\u0438\u0435\u043D\u0442\u043E\u0432")), /* @__PURE__ */ React.createElement("div", { className: "bg-black/20 backdrop-blur-sm rounded-lg p-2 border border-gray-600/30" }, /* @__PURE__ */ React.createElement("div", { className: "text-orange-500 font-bold text-lg" }, "24/7"), /* @__PURE__ */ React.createElement("div", { className: "text-gray-300 text-xs" }, "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430")))));
  const ContactsTab = () => /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "text-center mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center space-x-2 mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-white font-bold text-lg" }, "AG")), /* @__PURE__ */ React.createElement("h1", { className: "text-2xl font-bold text-orange-500", style: { fontFamily: "monospace" } }, "AutoGarage")), /* @__PURE__ */ React.createElement("p", { className: "text-gray-300" }, "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u0441\u0435\u0440\u0432\u0438\u0441")), /* @__PURE__ */ React.createElement("div", { className: "bg-gray-800 rounded-lg p-4 border border-gray-700" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold text-orange-500 mb-4 flex items-center" }, /* @__PURE__ */ React.createElement(MapPin, { className: "w-5 h-5 mr-2" }), "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-3" }, /* @__PURE__ */ React.createElement("div", { className: "w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center" }, /* @__PURE__ */ React.createElement(MapPin, { className: "w-5 h-5 text-white" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "font-medium text-gray-200" }, "\u0410\u0434\u0440\u0435\u0441"), /* @__PURE__ */ React.createElement("div", { className: "text-gray-400 text-sm" }, "\u0433. \u0421\u0435\u043B\u044C\u0446\u043E, \u0443\u043B. \u041A\u0438\u0440\u043E\u0432\u0430, 67"))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-3" }, /* @__PURE__ */ React.createElement("div", { className: "w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center" }, /* @__PURE__ */ React.createElement(Phone, { className: "w-5 h-5 text-white" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "font-medium text-gray-200" }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), /* @__PURE__ */ React.createElement("a", { href: "tel:+79997871308", className: "text-orange-400 text-sm hover:text-orange-300" }, "+7 (999) 787-13-08"))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-3" }, /* @__PURE__ */ React.createElement("div", { className: "w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center" }, /* @__PURE__ */ React.createElement(Clock, { className: "w-5 h-5 text-white" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "font-medium text-gray-200" }, "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B"), /* @__PURE__ */ React.createElement("div", { className: "text-gray-400 text-sm" }, "\u041F\u043D-\u0421\u0431: 8:00-19:00", /* @__PURE__ */ React.createElement("br", null), "\u0412\u0441: \u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0439"))))), /* @__PURE__ */ React.createElement("div", { className: "bg-gray-800 rounded-lg p-4 border border-gray-700" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold text-orange-500 mb-4" }, "\u{1F4CD} \u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435"), /* @__PURE__ */ React.createElement("div", { className: "bg-gray-700 rounded-lg h-64 overflow-hidden" }, /* @__PURE__ */ React.createElement(
    "iframe",
    {
      src: "https://yandex.ru/map-widget/v1/?ll=34.109624%2C53.379305&z=16&pt=34.109624%2C53.379305%2Cpm2rdm",
      width: "100%",
      height: "100%",
      frameBorder: "0",
      style: { borderRadius: "8px" },
      title: "\u041A\u0430\u0440\u0442\u0430 AutoGarage - \u0433. \u0421\u0435\u043B\u044C\u0446\u043E, \u0443\u043B. \u041A\u0438\u0440\u043E\u0432\u0430, 67"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "mt-3 flex space-x-2" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => window.open("https://yandex.ru/maps/?ll=34.109624%2C53.379305&z=16&pt=34.109624%2C53.379305", "_blank"),
      className: "flex-1 bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded text-white text-sm font-medium transition-colors"
    },
    "\u{1F5FA}\uFE0F \u042F\u043D\u0434\u0435\u043A\u0441.\u041A\u0430\u0440\u0442\u044B"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => window.open("https://maps.google.com/?q=53.379305,34.109624", "_blank"),
      className: "flex-1 bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white text-sm font-medium transition-colors"
    },
    "\u{1F30D} Google Maps"
  ))), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => window.open("tel:+79997871308"),
      className: "w-full bg-gradient-to-r from-orange-500 to-red-500 py-4 rounded-lg text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
    },
    "\u{1F4DE} \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441"
  ), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gray-800 rounded-lg p-3 text-center border border-gray-700" }, /* @__PURE__ */ React.createElement("div", { className: "text-2xl mb-1" }, "\u26A1"), /* @__PURE__ */ React.createElement("div", { className: "text-orange-500 font-bold text-sm" }, "30 \u043C\u0438\u043D"), /* @__PURE__ */ React.createElement("div", { className: "text-gray-400 text-xs" }, "\u0414\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430")), /* @__PURE__ */ React.createElement("div", { className: "bg-gray-800 rounded-lg p-3 text-center border border-gray-700" }, /* @__PURE__ */ React.createElement("div", { className: "text-2xl mb-1" }, "\u{1F6E1}\uFE0F"), /* @__PURE__ */ React.createElement("div", { className: "text-orange-500 font-bold text-sm" }, "1 \u0433\u043E\u0434"), /* @__PURE__ */ React.createElement("div", { className: "text-gray-400 text-xs" }, "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F")), /* @__PURE__ */ React.createElement("div", { className: "bg-gray-800 rounded-lg p-3 text-center border border-gray-700" }, /* @__PURE__ */ React.createElement("div", { className: "text-2xl mb-1" }, "\u{1F3C6}"), /* @__PURE__ */ React.createElement("div", { className: "text-orange-500 font-bold text-sm" }, "15+ \u043B\u0435\u0442"), /* @__PURE__ */ React.createElement("div", { className: "text-gray-400 text-xs" }, "\u041E\u043F\u044B\u0442"))));
  const [orderModal, setOrderModal] = useState({ isOpen: false, category: "", service: "" });
  const PriceTab = () => /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-center mb-6" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-bold text-orange-500 mb-2" }, "\u{1F4B0} \u041F\u0440\u0430\u0439\u0441-\u043B\u0438\u0441\u0442"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-400 text-sm" }, "\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0435 \u0446\u0435\u043D\u044B \u043D\u0430 \u0432\u0441\u0435 \u0432\u0438\u0434\u044B \u0440\u0430\u0431\u043E\u0442")), priceData.map((category, index) => /* @__PURE__ */ React.createElement("div", { key: index, className: "bg-gray-800 rounded-lg border border-gray-700" }, /* @__PURE__ */ React.createElement("div", { className: "p-4 border-b border-gray-700" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-orange-500" }, category.category)), /* @__PURE__ */ React.createElement("div", { className: "p-4 space-y-3" }, category.services.map((service, serviceIndex) => /* @__PURE__ */ React.createElement("div", { key: serviceIndex, className: "flex justify-between items-center py-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-gray-200 text-sm" }, service.name), /* @__PURE__ */ React.createElement("span", { className: "text-orange-500 font-bold text-sm" }, service.price))), /* @__PURE__ */ React.createElement("div", { className: "pt-3 border-t border-gray-700" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setOrderModal({ isOpen: true, category: category.category, service: "" }),
      className: "w-full bg-gradient-to-r from-orange-500 to-red-500 py-2 px-4 rounded-lg text-white font-bold text-sm hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
    },
    "\u{1F527} \u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0443"
  ))))), /* @__PURE__ */ React.createElement("div", { className: "bg-orange-500 bg-opacity-20 border border-orange-500 rounded-lg p-4 mt-6" }, /* @__PURE__ */ React.createElement("h4", { className: "font-bold text-orange-500 mb-2" }, "\u{1F389} \u0410\u043A\u0446\u0438\u0438"), /* @__PURE__ */ React.createElement("div", { className: "text-gray-300 text-sm space-y-1" }, /* @__PURE__ */ React.createElement("div", null, "\u{1F4A5} \u0421\u043A\u0438\u0434\u043A\u0430 15% \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432"), /* @__PURE__ */ React.createElement("div", null, "\u{1F4A5} \u0421\u043A\u0438\u0434\u043A\u0430 10% \u043F\u0440\u0438 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u043E\u043C \u0440\u0435\u043C\u043E\u043D\u0442\u0435"), /* @__PURE__ */ React.createElement("div", null, "\u{1F4A5} \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u043F\u0440\u0438 \u0440\u0435\u043C\u043E\u043D\u0442\u0435 \u0441\u0432\u044B\u0448\u0435 10 000 \u20BD"))), orderModal.isOpen && /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gray-800 rounded-lg p-6 w-full max-w-md border border-gray-700" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mb-4" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold text-orange-500" }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0443"), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setOrderModal({ isOpen: false, category: "", service: "" }),
      className: "text-gray-400 hover:text-white text-2xl"
    },
    "\xD7"
  )), /* @__PURE__ */ React.createElement("div", { className: "mb-4 p-3 bg-gray-700 rounded-lg" }, /* @__PURE__ */ React.createElement("p", { className: "text-orange-500 font-semibold text-sm" }, orderModal.category)), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-gray-300 mb-2 text-sm" }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0443"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: orderModal.service,
      onChange: (e) => setOrderModal({ ...orderModal, service: e.target.value }),
      className: "w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white text-sm focus:border-orange-500 focus:outline-none"
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0443"),
    priceData.find((cat) => cat.category === orderModal.category)?.services.map((service, idx) => /* @__PURE__ */ React.createElement("option", { key: idx, value: service.name }, service.name, " - ", service.price))
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
      value: orderModal.name || "",
      onChange: (e) => setOrderModal({ ...orderModal, name: e.target.value }),
      className: "w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white text-sm focus:border-orange-500 focus:outline-none"
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "tel",
      placeholder: "+7 (___) ___-__-__",
      value: orderModal.phone || "",
      onChange: (e) => setOrderModal({ ...orderModal, phone: e.target.value }),
      className: "w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white text-sm focus:border-orange-500 focus:outline-none"
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      placeholder: "\u041C\u0430\u0440\u043A\u0430 \u0438 \u043C\u043E\u0434\u0435\u043B\u044C \u0430\u0432\u0442\u043E",
      value: orderModal.car || "",
      onChange: (e) => setOrderModal({ ...orderModal, car: e.target.value }),
      className: "w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white text-sm focus:border-orange-500 focus:outline-none"
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    "textarea",
    {
      placeholder: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F",
      value: orderModal.comment || "",
      onChange: (e) => setOrderModal({ ...orderModal, comment: e.target.value }),
      className: "w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white text-sm focus:border-orange-500 focus:outline-none h-20 resize-none"
    }
  )), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: async () => {
        if (!orderModal.name || !orderModal.phone || !orderModal.service) {
          alert("\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u044F");
          return;
        }
        const formData = {
          name: orderModal.name,
          phone: orderModal.phone,
          car: orderModal.car,
          service: orderModal.service,
          comment: orderModal.comment,
          price: "\u0423\u0442\u043E\u0447\u043D\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0435"
        };
        const success = await sendToTelegram(formData);
        if (success) {
          alert("\u2705 \u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430! \u041C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F.");
          setOrderModal({ isOpen: false, category: "", service: "", name: "", phone: "", car: "", comment: "" });
        } else {
          alert("\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438. \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435: +7 (999) 787-13-08");
        }
      },
      className: "w-full bg-gradient-to-r from-orange-500 to-red-500 py-3 px-4 rounded-lg text-white font-bold text-sm hover:from-orange-600 hover:to-red-600 transition-all duration-300"
    },
    "\u{1F697} \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"
  )))));
  const NewsTab = () => /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "text-center mb-6" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-bold text-orange-500 mb-2" }, "\u{1F4F0} \u041D\u043E\u0432\u043E\u0441\u0442\u0438"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-400 text-sm" }, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438 \u0430\u043A\u0446\u0438\u0438")), news.map((article) => /* @__PURE__ */ React.createElement("div", { key: article.id, className: "bg-gray-800 rounded-lg p-4 border border-gray-700" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-orange-500 mb-2" }, article.title), /* @__PURE__ */ React.createElement("p", { className: "text-gray-300 text-sm mb-3" }, article.content), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-gray-500 text-xs" }, article.date), /* @__PURE__ */ React.createElement(ChevronRight, { className: "w-4 h-4 text-gray-500" })))), /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-4 text-center" }, /* @__PURE__ */ React.createElement(MessageCircle, { className: "w-8 h-8 mx-auto mb-2 text-white" }), /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-white mb-2" }, "\u041F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0439\u0442\u0435\u0441\u044C \u043D\u0430 \u043A\u0430\u043D\u0430\u043B!"), /* @__PURE__ */ React.createElement("p", { className: "text-white text-sm mb-3" }, "\u041D\u0435 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0439\u0442\u0435 \u0430\u043A\u0446\u0438\u0438 \u0438 \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0441\u043E\u0432\u0435\u0442\u044B \u043F\u043E \u0440\u0435\u043C\u043E\u043D\u0442\u0443 \u0430\u0432\u0442\u043E"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        if (window.Telegram?.WebApp) {
          window.Telegram.WebApp.openTelegramLink("https://t.me/your_channel");
        } else {
          window.open("https://t.me/your_channel", "_blank");
        }
      },
      className: "w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm hover:from-orange-600 hover:to-red-600 transition-all duration-300"
    },
    "\u{1F4E2} \u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u0430\u043D\u0430\u043B"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => window.open("tel:+79997871308"),
      className: "w-full bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-opacity-30 transition-all duration-300"
    },
    "\u{1F4DE} \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C +7 (999) 787-13-08"
  ))));
  const CalculatorTab = () => /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "text-center mb-6" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-bold text-orange-500 mb-2" }, "\u{1F9EE} \u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u0446\u0435\u043D\u044B"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-400 text-sm" }, "\u041F\u0440\u0438\u043C\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0440\u0435\u043C\u043E\u043D\u0442\u0430")), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gray-800 rounded-lg p-4 border border-gray-700" }, /* @__PURE__ */ React.createElement("label", { className: "block text-gray-300 mb-3 font-medium" }, "\u0422\u0438\u043F \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F:"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: calculatorData.carType,
      onChange: (e) => setCalculatorData({ ...calculatorData, carType: e.target.value }),
      className: "w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:border-orange-500 focus:outline-none"
    },
    /* @__PURE__ */ React.createElement("option", { value: "sedan" }, "\u{1F697} \u0421\u0435\u0434\u0430\u043D/\u0425\u044D\u0442\u0447\u0431\u0435\u043A"),
    /* @__PURE__ */ React.createElement("option", { value: "suv" }, "\u{1F699} \u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440/SUV"),
    /* @__PURE__ */ React.createElement("option", { value: "truck" }, "\u{1F69A} \u0413\u0440\u0443\u0437\u043E\u0432\u0438\u043A/\u0424\u0443\u0440\u0433\u043E\u043D"),
    /* @__PURE__ */ React.createElement("option", { value: "premium" }, "\u{1F3CE}\uFE0F \u041F\u0440\u0435\u043C\u0438\u0443\u043C-\u043A\u043B\u0430\u0441\u0441")
  )), /* @__PURE__ */ React.createElement("div", { className: "bg-gray-800 rounded-lg p-4 border border-gray-700" }, /* @__PURE__ */ React.createElement("label", { className: "block text-gray-300 mb-3 font-medium" }, "\u0421\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442:"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-2" }, [
    { value: "simple", label: "\u041F\u0440\u043E\u0441\u0442\u0430\u044F", color: "green" },
    { value: "medium", label: "\u0421\u0440\u0435\u0434\u043D\u044F\u044F", color: "yellow" },
    { value: "complex", label: "\u0421\u043B\u043E\u0436\u043D\u0430\u044F", color: "red" }
  ].map((complexity) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: complexity.value,
      onClick: () => setCalculatorData({ ...calculatorData, complexity: complexity.value }),
      className: `p-2 rounded-lg border text-sm font-medium transition-all ${calculatorData.complexity === complexity.value ? "bg-orange-500 border-orange-500 text-white" : "bg-gray-700 border-gray-600 text-gray-300 hover:border-orange-500"}`
    },
    complexity.label
  )))), /* @__PURE__ */ React.createElement("div", { className: "bg-gray-800 rounded-lg p-4 border border-gray-700" }, /* @__PURE__ */ React.createElement("label", { className: "block text-gray-300 mb-3 font-medium" }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0438:", calculatorData.services.length > 0 && /* @__PURE__ */ React.createElement("span", { className: "ml-2 text-orange-500 text-sm" }, "(", calculatorData.services.length, " \u0432\u044B\u0431\u0440\u0430\u043D\u043E)")), calculatorData.services.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mb-4 p-3 bg-orange-500 bg-opacity-20 rounded-lg border border-orange-500" }, /* @__PURE__ */ React.createElement("h5", { className: "text-orange-500 font-medium text-sm mb-2" }, "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438:"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, calculatorData.services.map((service, index) => /* @__PURE__ */ React.createElement("div", { key: index, className: "bg-orange-500 text-white px-2 py-1 rounded-lg text-xs flex items-center space-x-1" }, /* @__PURE__ */ React.createElement("span", null, service.name), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => toggleService(service.name),
      className: "ml-1 text-white hover:text-gray-200"
    },
    "\xD7"
  )))), calculatorData.services.length >= 2 && /* @__PURE__ */ React.createElement("div", { className: "mt-2 text-green-400 text-xs" }, "\u{1F389} \u0421\u043A\u0438\u0434\u043A\u0430 ", calculatorData.services.length >= 4 ? "15%" : calculatorData.services.length >= 3 ? "10%" : "5%", " \u0437\u0430 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u0439 \u0440\u0435\u043C\u043E\u043D\u0442!")), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, priceData.map((category, categoryIndex) => /* @__PURE__ */ React.createElement("div", { key: categoryIndex }, /* @__PURE__ */ React.createElement("h4", { className: "text-orange-500 font-medium text-sm mb-2" }, category.category), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 gap-2" }, category.services.slice(0, 3).map((service, serviceIndex) => {
    const isSelected = isServiceSelected(service.name);
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: serviceIndex,
        onClick: () => toggleService(service.name),
        className: `p-3 rounded-lg border text-sm font-medium transition-all text-left ${isSelected ? "bg-orange-500 border-orange-500 text-white" : "bg-gray-700 border-gray-600 text-gray-300 hover:border-orange-500"}`
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React.createElement("div", { className: `w-4 h-4 rounded border-2 flex items-center justify-center ${isSelected ? "bg-white border-white" : "border-gray-400"}` }, isSelected && /* @__PURE__ */ React.createElement("div", { className: "w-2 h-2 bg-orange-500 rounded" })), /* @__PURE__ */ React.createElement("span", { className: "text-xs" }, service.name)), /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold" }, service.price))
    );
  })))))), calculatorData.services.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6 text-center" }, /* @__PURE__ */ React.createElement("h3", { className: "text-white font-bold text-lg mb-2" }, "\u041F\u0440\u0438\u043C\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C:"), /* @__PURE__ */ React.createElement("div", { className: "text-white text-3xl font-bold mb-2" }, calculatePrice().toLocaleString(), " \u20BD"), /* @__PURE__ */ React.createElement("p", { className: "text-white text-sm opacity-90 mb-2" }, "* \u0422\u043E\u0447\u043D\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0438"), calculatorData.services.length > 1 && /* @__PURE__ */ React.createElement("p", { className: "text-green-200 text-sm mb-4" }, "\u2728 \u041F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0430 \u0441\u043A\u0438\u0434\u043A\u0430 \u0437\u0430 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u0439 \u0440\u0435\u043C\u043E\u043D\u0442!"), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-lg p-4 mt-4" }, /* @__PURE__ */ React.createElement("h4", { className: "text-orange-500 font-bold mb-3" }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0440\u0435\u043C\u043E\u043D\u0442"), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
      value: calculatorData.name || "",
      onChange: (e) => setCalculatorData({ ...calculatorData, name: e.target.value }),
      className: "w-full p-2 border border-gray-300 rounded text-gray-800 text-sm"
    }
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "tel",
      placeholder: "+7 (___) ___-__-__",
      value: calculatorData.phone || "",
      onChange: (e) => setCalculatorData({ ...calculatorData, phone: e.target.value }),
      className: "w-full p-2 border border-gray-300 rounded text-gray-800 text-sm"
    }
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      placeholder: "\u041C\u0430\u0440\u043A\u0430 \u0438 \u043C\u043E\u0434\u0435\u043B\u044C \u0430\u0432\u0442\u043E",
      value: calculatorData.car || "",
      onChange: (e) => setCalculatorData({ ...calculatorData, car: e.target.value }),
      className: "w-full p-2 border border-gray-300 rounded text-gray-800 text-sm"
    }
  ), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      placeholder: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
      value: calculatorData.comment || "",
      onChange: (e) => setCalculatorData({ ...calculatorData, comment: e.target.value }),
      className: "w-full p-2 border border-gray-300 rounded text-gray-800 text-sm h-16 resize-none"
    }
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: async () => {
        if (!calculatorData.name || !calculatorData.phone) {
          alert("\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0438\u043C\u044F \u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D");
          return;
        }
        const formData = {
          name: calculatorData.name,
          phone: calculatorData.phone,
          car: calculatorData.car,
          service: getSelectedServicesText(),
          price: `${calculatePrice().toLocaleString()} \u20BD`,
          comment: calculatorData.comment
        };
        const success = await sendToTelegram(formData);
        if (success) {
          alert("\u2705 \u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430! \u041C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F.");
          setCalculatorData({
            services: calculatorData.services,
            carType: calculatorData.carType,
            complexity: calculatorData.complexity,
            name: "",
            phone: "",
            car: "",
            comment: ""
          });
        } else {
          alert("\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438. \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435: +7 (999) 787-13-08");
        }
      },
      className: "w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
    },
    "\u{1F697} \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"
  )))))));
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gray-900 text-white" }, /* @__PURE__ */ React.createElement("div", { className: activeTab === "home" ? "" : "p-4 pb-20" }, activeTab === "home" && /* @__PURE__ */ React.createElement(HomeTab, null), activeTab === "contacts" && /* @__PURE__ */ React.createElement(ContactsTab, null), activeTab === "price" && /* @__PURE__ */ React.createElement(PriceTab, null), activeTab === "news" && /* @__PURE__ */ React.createElement(NewsTab, null), activeTab === "calculator" && /* @__PURE__ */ React.createElement(CalculatorTab, null)), activeTab !== "home" && /* @__PURE__ */ React.createElement("div", { className: "fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-5 gap-1" }, [
    { id: "home", icon: /* @__PURE__ */ React.createElement(Star, { className: "w-5 h-5" }), label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" },
    { id: "contacts", icon: /* @__PURE__ */ React.createElement(MapPin, { className: "w-5 h-5" }), label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B" },
    { id: "price", icon: /* @__PURE__ */ React.createElement(FileText, { className: "w-5 h-5" }), label: "\u041F\u0440\u0430\u0439\u0441" },
    { id: "news", icon: /* @__PURE__ */ React.createElement(MessageCircle, { className: "w-5 h-5" }), label: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438" },
    { id: "calculator", icon: /* @__PURE__ */ React.createElement(Calculator, { className: "w-5 h-5" }), label: "\u0420\u0430\u0441\u0447\u0435\u0442" }
  ].map((tab) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: tab.id,
      onClick: () => setActiveTab(tab.id),
      className: `p-3 text-center transition-all duration-300 relative ${activeTab === tab.id ? "text-orange-500 bg-gray-700" : "text-gray-400 hover:text-orange-400"}`,
      style: {
        filter: activeTab === tab.id ? "drop-shadow(0 0 8px rgba(255, 107, 53, 0.6))" : "none",
        transition: "all 0.3s ease"
      },
      onMouseEnter: (e) => {
        if (activeTab !== tab.id) {
          e.target.style.filter = "drop-shadow(0 0 12px rgba(255, 107, 53, 0.8))";
          e.target.style.transform = "translateY(-2px)";
        }
      },
      onMouseLeave: (e) => {
        if (activeTab !== tab.id) {
          e.target.style.filter = "none";
          e.target.style.transform = "translateY(0)";
        }
      }
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center space-y-1" }, tab.icon, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-medium" }, tab.label)),
    activeTab === tab.id && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-orange-500 rounded-b-full",
        style: {
          boxShadow: "0 0 8px rgba(255, 107, 53, 0.8)"
        }
      }
    )
  )))));
};
var stdin_default = TelegramMiniApp;
export {
  stdin_default as default
};
