import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-amber-400">CineStudio</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-zinc-300 hover:text-amber-400 transition-colors">Услуги</a>
              <a href="#about" className="text-zinc-300 hover:text-amber-400 transition-colors">О нас</a>
              <a href="#portfolio" className="text-zinc-300 hover:text-amber-400 transition-colors">Портфолио</a>
              <a href="#contact" className="text-zinc-300 hover:text-amber-400 transition-colors">Контакты</a>
            </div>
            <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-zinc-900">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-amber-900/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
            Создаем
            <span className="text-amber-400 block">Кино</span>
            для брендов
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 animate-fade-in">
            Разрабатываем творческие концепции и создаем рекламные видеоролики под ключ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-amber-400 text-zinc-900 hover:bg-amber-500 text-lg px-8 py-6">
              <Icon name="Play" className="mr-2" />
              Смотреть работы
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 text-lg px-8 py-6">
              <Icon name="MessageCircle" className="mr-2" />
              Обсудить проект
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-amber-400" size={32} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Наши услуги</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Полный цикл создания рекламных видеороликов от идеи до финального монтажа
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-zinc-800 border-zinc-700 hover:border-amber-400 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Icon name="Lightbulb" className="text-amber-400 mx-auto mb-4" size={48} />
                <CardTitle className="text-white">Творческая концепция</CardTitle>
                <CardDescription className="text-zinc-400">
                  Разработка уникальных идей и сценариев для ваших видеороликов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700 hover:border-amber-400 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Icon name="Video" className="text-amber-400 mx-auto mb-4" size={48} />
                <CardTitle className="text-white">Видеопродакшн</CardTitle>
                <CardDescription className="text-zinc-400">
                  Профессиональная съемка с использованием современного оборудования
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700 hover:border-amber-400 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Icon name="Scissors" className="text-amber-400 mx-auto mb-4" size={48} />
                <CardTitle className="text-white">Постпродакшн</CardTitle>
                <CardDescription className="text-zinc-400">
                  Монтаж, цветокоррекция, спецэффекты и звуковой дизайн
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-zinc-900/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">О студии</h2>
              <p className="text-lg text-zinc-300 mb-6">
                Мы — команда креативных профессионалов, которые превращают идеи брендов в 
                захватывающие видеоистории. Наш опыт в кинематографии позволяет создавать 
                рекламные ролики, которые не только продают, но и вдохновляют.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">150+</div>
                  <div className="text-zinc-400">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">8</div>
                  <div className="text-zinc-400">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="Play" className="text-zinc-900" size={64} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Наши работы</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Каждый проект — это уникальная история, рассказанная через призму кинематографа
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="bg-zinc-800 border-zinc-700 overflow-hidden hover:border-amber-400 transition-all duration-300 hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-zinc-700 to-zinc-900 relative group">
                  <div className="absolute inset-0 bg-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Play" className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={48} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">Проект {item}</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Рекламный ролик для крупного бренда
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-zinc-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Готовы создать кино?</h2>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами, чтобы обсудить ваш проект и получить коммерческое предложение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-amber-400 text-zinc-900 hover:bg-amber-500 text-lg px-8 py-6">
              <Icon name="Mail" className="mr-2" />
              Написать нам
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 text-lg px-8 py-6">
              <Icon name="Phone" className="mr-2" />
              +7 (999) 123-45-67
            </Button>
          </div>
          
          <div className="flex justify-center gap-8">
            <a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors">
              <Icon name="Mail" size={32} />
            </a>
            <a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors">
              <Icon name="Phone" size={32} />
            </a>
            <a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors">
              <Icon name="Instagram" size={32} />
            </a>
            <a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors">
              <Icon name="Youtube" size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold text-amber-400 mb-4">CineStudio</div>
          <p className="text-zinc-400">© 2024 CineStudio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;