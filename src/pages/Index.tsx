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
      title: '完全俄语化',
      subtitle: 'Полная русификация',
      description: 'Перевод всех меню, настроек и интерфейсов на русский язык'
    },
    {
      icon: 'Radio',
      title: '多媒体系统',
      subtitle: 'Мультимедиа система',
      description: 'Настройка навигации, радио и мультимедийных функций'
    },
    {
      icon: 'Gauge',
      title: '仪表板',
      subtitle: 'Приборная панель',
      description: 'Русификация цифровой приборной панели и бортового компьютера'
    },
    {
      icon: 'Smartphone',
      title: '移动应用',
      subtitle: 'Мобильные приложения',
      description: 'Подключение российских аналогов CarPlay и Android Auto'
    }
  ];

  const pricing = [
    {
      name: 'Базовая',
      price: '15 000',
      features: ['Русификация меню', 'Настройка времени и даты', 'Базовая диагностика']
    },
    {
      name: 'Стандарт',
      price: '25 000',
      features: ['Полная русификация', 'Настройка мультимедиа', 'Обновление ПО', 'Гарантия 6 месяцев'],
      popular: true
    },
    {
      name: 'Премиум',
      price: '40 000',
      features: ['Всё из Стандарт', 'Приборная панель', 'Голосовые команды', 'Гарантия 12 месяцев']
    }
  ];

  const portfolio = [
    {
      brand: 'Chery Tiggo 8 Pro',
      image: 'https://cdn.poehali.dev/projects/93c9751f-a690-4b36-86a7-2a14a0999ac6/files/ba32e24a-dba0-4c4e-aa86-daae080fb5f0.jpg',
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
    <div className="min-h-screen bg-background text-foreground bg-chinese-pattern">
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/93c9751f-a690-4b36-86a7-2a14a0999ac6/files/565246a8-b0c6-490e-b358-3f8b40f1e9a8.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        
        <div className="absolute top-10 left-10 w-32 h-32 opacity-30 animate-float">
          <img src="https://cdn.poehali.dev/projects/93c9751f-a690-4b36-86a7-2a14a0999ac6/files/aae0bae0-4f47-4eed-bdd8-0b82e219dda2.jpg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-20 right-10 w-40 h-40 opacity-30 animate-float-reverse">
          <img src="https://cdn.poehali.dev/projects/93c9751f-a690-4b36-86a7-2a14a0999ac6/files/aae0bae0-4f47-4eed-bdd8-0b82e219dda2.jpg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="inline-block mb-6 px-8 py-3 bg-primary/10 border-2 border-primary rounded-full">
              <p className="text-primary font-semibold text-lg">中俄汽车服务 · Китайские авто</p>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground leading-tight">
              <span className="block text-primary">俄语化服务</span>
              <span className="block mt-2">Русификация автомобилей</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 px-4">
              Профессиональная настройка мультимедиа систем<br className="hidden sm:block" />
              Быстро · 质量保证 · С гарантией
            </p>
            
            <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 shadow-lg" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Phone" className="mr-2" size={20} />
                Записаться
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary/10" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Info" className="mr-2" size={20} />
                Услуги
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section id="services" className="py-16 sm:py-20 md:py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.05),transparent_50%)]" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              <span className="text-primary">服务项目</span> · Наши услуги
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4" />
            <p className="text-muted-foreground text-base sm:text-lg">Полный спектр работ по русификации</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary bg-card/80 backdrop-blur animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all border-2 border-primary/20">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary mb-1">{service.title}</CardTitle>
                  <CardTitle className="text-lg text-foreground mb-2">{service.subtitle}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 sm:py-20 md:py-24 px-4 bg-muted/30 relative">
        <div className="absolute top-10 right-10 w-32 h-32 opacity-10">
          <img src="https://cdn.poehali.dev/projects/93c9751f-a690-4b36-86a7-2a14a0999ac6/files/aae0bae0-4f47-4eed-bdd8-0b82e219dda2.jpg" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              <span className="text-primary">价格表</span> · Прайс-лист
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4" />
            <p className="text-muted-foreground text-base sm:text-lg">Прозрачные цены без скрытых платежей</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-2xl transition-all duration-300 bg-card ${plan.popular ? 'border-4 border-primary scale-105' : 'border-2'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      热门选择 · Популярный
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-5xl font-bold my-4">
                    <span className="text-primary">{plan.price} ₽</span>
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
                  <Button className={`w-full mt-6 ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-primary/80 hover:bg-primary'} shadow-lg`} size="lg">
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 sm:py-20 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              <span className="text-primary">作品集</span> · Портфолио
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4" />
            <p className="text-muted-foreground text-base sm:text-lg">Примеры наших работ</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary bg-card">
                <div className="relative overflow-hidden h-64 bg-primary/5">
                  <img 
                    src={item.image} 
                    alt={item.brand}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{item.brand}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 sm:py-20 md:py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              <span className="text-primary">常见问题</span> · Вопросы и ответы
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4" />
            <p className="text-muted-foreground text-base sm:text-lg">Ответы на частые вопросы</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-border rounded-xl px-6 bg-card shadow-sm hover:shadow-md transition-shadow">
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

      <section id="contacts" className="py-16 sm:py-20 md:py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.05),transparent_50%)]" />
        
        <div className="container mx-auto max-w-2xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              <span className="text-primary">联系我们</span> · Контакты
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4" />
            <p className="text-muted-foreground text-base sm:text-lg">Свяжитесь с нами удобным способом</p>
          </div>
          
          <Card className="border-2 shadow-xl bg-card">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Оставьте заявку</CardTitle>
              <CardDescription className="text-sm sm:text-base">Мы перезвоним в течение 15 минут</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12 border-2 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input 
                    placeholder="+7 (999) 123-45-67" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-12 border-2 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea 
                    placeholder="Модель автомобиля и какие услуги интересуют..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-32 border-2 focus:border-primary"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 shadow-lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 text-base sm:text-lg">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon name="Phone" className="text-primary" size={20} />
                  </div>
                  <a href="tel:+79991234567" className="hover:text-primary transition-colors break-all">+7 (999) 123-45-67</a>
                </div>
                <div className="flex items-center gap-3 text-base sm:text-lg">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon name="Mail" className="text-primary" size={20} />
                  </div>
                  <a href="mailto:info@rusauto.ru" className="hover:text-primary transition-colors break-all">info@rusauto.ru</a>
                </div>
                <div className="flex items-center gap-3 text-base sm:text-lg">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon name="MapPin" className="text-primary" size={20} />
                  </div>
                  <span>Москва, ул. Примерная, д. 123</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 sm:py-12 px-4 bg-foreground/5 border-t-2 border-primary/20">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <p className="text-2xl font-bold text-primary">中俄汽车服务</p>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground">© 2024 Русификация китайских авто. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
