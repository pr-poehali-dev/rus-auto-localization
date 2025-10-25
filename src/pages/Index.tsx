import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const services = [
    {
      icon: 'Languages',
      title: 'ПОЛНАЯ РУСИФИКАЦИЯ',
      description: 'Перевод всех меню, настроек и интерфейсов на русский язык',
      color: 'bg-purple-500'
    },
    {
      icon: 'Radio',
      title: 'МУЛЬТИМЕДИА',
      description: 'Настройка навигации, радио и мультимедийных функций',
      color: 'bg-pink-500'
    },
    {
      icon: 'Gauge',
      title: 'ПРИБОРНАЯ ПАНЕЛЬ',
      description: 'Русификация цифровой приборной панели и бортового компьютера',
      color: 'bg-yellow-500'
    },
    {
      icon: 'Smartphone',
      title: 'ПРИЛОЖЕНИЯ',
      description: 'Подключение российских аналогов CarPlay и Android Auto',
      color: 'bg-purple-500'
    }
  ];

  const pricing = [
    {
      name: 'БАЗОВАЯ',
      price: '15 000',
      features: ['Русификация меню', 'Настройка времени и даты', 'Базовая диагностика'],
      color: 'purple'
    },
    {
      name: 'СТАНДАРТ',
      price: '25 000',
      features: ['Полная русификация', 'Настройка мультимедиа', 'Обновление ПО', 'Гарантия 6 месяцев'],
      popular: true,
      color: 'pink'
    },
    {
      name: 'ПРЕМИУМ',
      price: '40 000',
      features: ['Всё из Стандарт', 'Приборная панель', 'Голосовые команды', 'Гарантия 12 месяцев'],
      color: 'yellow'
    }
  ];

  const portfolio = [
    {
      brand: 'Chery Tiggo 8 Pro',
      image: 'https://cdn.poehali.dev/projects/93c9751f-a690-4b36-86a7-2a14a0999ac6/files/851771a3-44c9-4bb3-8521-8bc7c7127be1.jpg',
      description: 'Полная русификация мультимедиа и приборной панели'
    },
    {
      brand: 'Geely Coolray',
      image: 'https://cdn.poehali.dev/projects/93c9751f-a690-4b36-86a7-2a14a0999ac6/files/e4ef2040-042c-468b-b2b4-180485d74c74.jpg',
      description: 'Настройка всех систем на русский язык'
    },
    {
      brand: 'Haval Jolion',
      image: 'https://cdn.poehali.dev/projects/93c9751f-a690-4b36-86a7-2a14a0999ac6/files/2c3a5da6-66c0-45ee-a79f-730d920f69ee.jpg',
      description: 'Русификация + подключение российских сервисов'
    }
  ];

  const faqs = [
    {
      question: 'Сколько времени занимает русификация?',
      answer: 'В среднем процесс занимает от 2 до 4 часов в зависимости от модели автомобиля и выбранного пакета услуг.'
    },
    {
      question: 'Можно ли вернуть китайский язык после русификации?',
      answer: 'Да, все изменения полностью обратимы. Мы сохраняем резервные копии оригинальных настроек.'
    },
    {
      question: 'Влияет ли русификация на гарантию автомобиля?',
      answer: 'Нет, мы используем официальные методы настройки через сервисное меню, что не влияет на заводскую гарантию.'
    },
    {
      question: 'Какие марки автомобилей вы обслуживаете?',
      answer: 'Мы работаем со всеми популярными китайскими брендами: Chery, Geely, Haval, Omoda, Exeed, Tank, Voyah и другими.'
    },
    {
      question: 'Нужна ли предварительная запись?',
      answer: 'Да, рекомендуем записаться заранее по телефону или через форму на сайте для удобного времени обслуживания.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-comic-dots">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/93c9751f-a690-4b36-86a7-2a14a0999ac6/files/3eb6fbf2-7992-46a5-9be1-05ed8896d253.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white" />
        
        <div className="absolute top-10 right-10 w-48 h-48 animate-float">
          <img src="https://cdn.poehali.dev/projects/93c9751f-a690-4b36-86a7-2a14a0999ac6/files/f9006931-425d-463b-8b1e-8f3f78d8310b.jpg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-slide-up">
            <div className="inline-block mb-6 px-8 py-4 bg-yellow-400 border-4 border-black transform -rotate-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-black font-bold text-xl">⚡ КИТАЙСКИЕ АВТО ⚡</p>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
              <span className="block text-purple-600 [text-shadow:4px_4px_0px_#000,_8px_8px_0px_#EC4899]">РУСИФИКАЦИЯ</span>
              <span className="block mt-4 text-pink-500 [text-shadow:4px_4px_0px_#000]">АВТОМОБИЛЕЙ!</span>
            </h1>
            
            <div className="bg-white border-4 border-black p-6 max-w-2xl mx-auto mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-xl md:text-2xl font-semibold uppercase">
                Профессиональная настройка мультимедиа систем
                <br />
                <span className="text-purple-600">БЫСТРО • КАЧЕСТВЕННО • С ГАРАНТИЕЙ</span>
              </p>
            </div>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white text-xl px-10 py-7 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all uppercase font-bold"
                onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Phone" className="mr-2" size={24} />
                ЗАПИСАТЬСЯ!
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-black text-xl px-10 py-7 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all uppercase font-bold"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Zap" className="mr-2" size={24} />
                УЗНАТЬ БОЛЬШЕ
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 sm:py-20 md:py-24 px-4 relative bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-400 border-4 border-black px-8 py-3 mb-4 transform rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">НАШИ УСЛУГИ!</h2>
            </div>
            <p className="text-xl font-semibold mt-4 uppercase">⚡ Полный спектр работ по русификации ⚡</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className={`w-20 h-20 ${service.color} border-4 border-black flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                    <Icon name={service.icon} size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-base font-medium text-black">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 sm:py-20 md:py-24 px-4 bg-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-comic-dots opacity-30" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-pink-500 border-4 border-black px-8 py-3 mb-4 transform -rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">ПРАЙС-ЛИСТ!</h2>
            </div>
            <p className="text-xl font-semibold mt-4 uppercase">💰 Прозрачные цены без скрытых платежей 💰</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative border-4 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-all duration-300 ${plan.popular ? 'scale-110 ring-4 ring-yellow-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-yellow-400 border-4 border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-3">
                      <span className="text-black font-bold text-lg uppercase">★ ХИТ! ★</span>
                    </div>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-3xl mb-4">{plan.name}</CardTitle>
                  <div className="inline-block border-4 border-black bg-gradient-to-br from-purple-400 to-pink-400 px-6 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-5xl font-bold text-white [text-shadow:3px_3px_0px_#000]">{plan.price} ₽</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-400 border-2 border-black flex items-center justify-center shrink-0 mt-1">
                          <Icon name="Check" size={16} className="text-black font-bold" />
                        </div>
                        <span className="font-semibold">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8 bg-purple-600 hover:bg-purple-700 text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] py-6 text-lg font-bold uppercase">
                    ВЫБРАТЬ!
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-white to-yellow-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-600 border-4 border-black px-8 py-3 mb-4 transform rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">ПОРТФОЛИО!</h2>
            </div>
            <p className="text-xl font-semibold mt-4 uppercase">📸 Примеры наших работ 📸</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden group border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden h-64 border-b-4 border-black">
                  <img 
                    src={item.image} 
                    alt={item.brand}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-6">
                    <span className="font-bold uppercase text-sm">✓ СДЕЛАНО!</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{item.brand}</CardTitle>
                  <CardDescription className="text-base font-semibold text-black">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 sm:py-20 md:py-24 px-4 bg-purple-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-400 border-4 border-black px-8 py-3 mb-4 transform -rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">ВОПРОСЫ!</h2>
            </div>
            <p className="text-xl font-semibold mt-4 uppercase">❓ Ответы на частые вопросы ❓</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-6">
                <AccordionTrigger className="text-lg font-bold uppercase hover:text-purple-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base font-medium pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-white to-pink-50 relative">
        <div className="absolute inset-0 bg-comic-dots opacity-20" />
        
        <div className="container mx-auto max-w-2xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-pink-500 border-4 border-black px-8 py-3 mb-4 transform rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">КОНТАКТЫ!</h2>
            </div>
            <p className="text-xl font-semibold mt-4 uppercase">📞 Свяжитесь с нами! 📞</p>
          </div>
          
          <Card className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white">
            <CardHeader>
              <CardTitle className="text-2xl uppercase">Оставьте заявку!</CardTitle>
              <CardDescription className="text-base font-semibold text-black">⚡ Мы перезвоним в течение 15 минут ⚡</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-bold mb-2 block uppercase">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-semibold"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold mb-2 block uppercase">Телефон</label>
                  <Input 
                    placeholder="+7 (999) 123-45-67" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-12 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-semibold"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold mb-2 block uppercase">Сообщение</label>
                  <Textarea 
                    placeholder="Модель автомобиля и какие услуги интересуют..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-32 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-semibold"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] py-7 text-xl font-bold uppercase">
                  <Icon name="Send" className="mr-2" size={24} />
                  ОТПРАВИТЬ!
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t-4 border-black space-y-4">
                <div className="flex items-center gap-4 text-lg font-semibold">
                  <div className="w-12 h-12 bg-purple-500 border-4 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Icon name="Phone" className="text-white" size={24} />
                  </div>
                  <a href="tel:+79991234567" className="hover:text-purple-600 transition-colors">+7 (999) 123-45-67</a>
                </div>
                <div className="flex items-center gap-4 text-lg font-semibold">
                  <div className="w-12 h-12 bg-pink-500 border-4 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Icon name="Mail" className="text-white" size={24} />
                  </div>
                  <a href="mailto:info@rusauto.ru" className="hover:text-purple-600 transition-colors break-all">info@rusauto.ru</a>
                </div>
                <div className="flex items-center gap-4 text-lg font-semibold">
                  <div className="w-12 h-12 bg-yellow-400 border-4 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Icon name="MapPin" className="text-black" size={24} />
                  </div>
                  <span>Москва, ул. Примерная, д. 123</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-black border-t-4 border-black">
        <div className="container mx-auto text-center">
          <div className="inline-block bg-yellow-400 border-4 border-white px-8 py-3 mb-6 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
            <p className="text-2xl font-bold uppercase">⚡ РУСИФИКАЦИЯ АВТО ⚡</p>
          </div>
          <p className="text-white text-sm font-semibold uppercase">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
