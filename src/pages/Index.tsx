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
      title: 'Полная русификация',
      description: 'Перевод всех меню, настроек и интерфейсов на русский язык',
      gradient: 'bg-gradient-purple'
    },
    {
      icon: 'Radio',
      title: 'Мультимедиа система',
      description: 'Настройка навигации, радио и мультимедийных функций',
      gradient: 'bg-gradient-orange'
    },
    {
      icon: 'Gauge',
      title: 'Приборная панель',
      description: 'Русификация цифровой приборной панели и бортового компьютера',
      gradient: 'bg-gradient-blue'
    },
    {
      icon: 'Smartphone',
      title: 'Мобильные приложения',
      description: 'Подключение российских аналогов CarPlay и Android Auto',
      gradient: 'bg-gradient-purple'
    }
  ];

  const pricing = [
    {
      name: 'Базовая',
      price: '15 000',
      features: ['Русификация меню', 'Настройка времени и даты', 'Базовая диагностика'],
      gradient: 'bg-gradient-purple'
    },
    {
      name: 'Стандарт',
      price: '25 000',
      features: ['Полная русификация', 'Настройка мультимедиа', 'Обновление ПО', 'Гарантия 6 месяцев'],
      gradient: 'bg-gradient-orange',
      popular: true
    },
    {
      name: 'Премиум',
      price: '40 000',
      features: ['Всё из Стандарт', 'Приборная панель', 'Голосовые команды', 'Гарантия 12 месяцев'],
      gradient: 'bg-gradient-blue'
    }
  ];

  const portfolio = [
    {
      brand: 'Chery Tiggo 8 Pro',
      image: 'https://cdn.poehali.dev/projects/93c9751f-a690-4b36-86a7-2a14a0999ac6/files/f4d557b0-ad50-4793-9dcb-720fabbf2cb0.jpg',
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
    <div className="min-h-screen bg-background text-foreground">
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-fade-in" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Русификация китайских автомобилей
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Профессиональная настройка мультимедиа систем. Быстро, качественно, с гарантией.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-purple hover:opacity-90 text-lg px-8" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Phone" className="mr-2" size={20} />
                Записаться
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Info" className="mr-2" size={20} />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 animate-fade-in">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Полный спектр работ по русификации</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-2 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Прайс-лист</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Прозрачные цены без скрытых платежей</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative hover:scale-105 transition-all duration-300 ${plan.popular ? 'border-primary border-4 shadow-2xl shadow-primary/20' : 'border-2'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-orange text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Популярный
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-3xl">{plan.name}</CardTitle>
                  <div className="text-5xl font-bold my-4">
                    <span className={`bg-gradient-to-r ${plan.gradient.replace('bg-', '')} bg-clip-text text-transparent`}>
                      {plan.price} ₽
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={20} className="text-primary mt-1 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full mt-6 ${plan.gradient} hover:opacity-90`} size="lg">
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Примеры наших работ</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={item.image} 
                    alt={item.brand}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{item.brand}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-4">Вопросы и ответы</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Ответы на частые вопросы</p>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-border rounded-xl px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-24 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Свяжитесь с нами удобным способом</p>
          
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Оставьте заявку</CardTitle>
              <CardDescription className="text-base">Мы перезвоним в течение 15 минут</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input 
                    placeholder="+7 (999) 123-45-67" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea 
                    placeholder="Модель автомобиля и какие услуги интересуют..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-32"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-purple hover:opacity-90">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t space-y-4">
                <div className="flex items-center gap-3 text-lg">
                  <Icon name="Phone" className="text-primary" size={24} />
                  <a href="tel:+79991234567" className="hover:text-primary transition-colors">+7 (999) 123-45-67</a>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <Icon name="Mail" className="text-primary" size={24} />
                  <a href="mailto:info@rusauto.ru" className="hover:text-primary transition-colors">info@rusauto.ru</a>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  <span>Москва, ул. Примерная, д. 123</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-muted/50 border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Русификация китайских авто. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
