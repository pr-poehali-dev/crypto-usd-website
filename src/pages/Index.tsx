import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/20 backdrop-blur-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="/img/6c649d70-0705-46ec-9509-3227ecbe5d40.jpg"
                alt="USD Crypto"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-xl font-bold orbitron text-gradient">
                USD CRYPTO
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-sm hover:text-primary transition-colors"
              >
                О токене
              </a>
              <a
                href="#roadmap"
                className="text-sm hover:text-primary transition-colors"
              >
                Roadmap
              </a>
              <a
                href="#contact"
                className="text-sm hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-cyber-gradient hover:opacity-90 text-black font-semibold">
              Купить USD
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                🚀 Революционная криптовалюта
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black orbitron mb-6 text-gradient animate-float">
                USD CRYPTO
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Будущее цифровых финансов для трейдеров, инвесторов и DeFi
                пользователей
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-cyber-gradient hover:opacity-90 text-black font-semibold text-lg px-8 py-6"
              >
                <Icon name="TrendingUp" className="mr-2" />
                Начать торговать
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
              >
                <Icon name="BookOpen" className="mr-2" />
                Whitepaper
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold orbitron text-gradient mb-2">
                  $2.45
                </div>
                <div className="text-sm text-muted-foreground">Цена USD</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold orbitron text-gradient mb-2">
                  +24.5%
                </div>
                <div className="text-sm text-muted-foreground">
                  24ч изменение
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold orbitron text-gradient mb-2">
                  $45M
                </div>
                <div className="text-sm text-muted-foreground">
                  Капитализация
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold orbitron text-gradient mb-2">
                  $2.1M
                </div>
                <div className="text-sm text-muted-foreground">Объем 24ч</div>
              </div>
            </div>

            {/* Chart */}
            <div className="relative">
              <img
                src="/img/650ed850-cccc-4e34-92f2-fc11dbc3d91e.jpg"
                alt="Trading Chart"
                className="w-full max-w-4xl mx-auto rounded-lg neon-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold orbitron text-gradient mb-6">
              О токене USD
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              USD Crypto - это инновационная децентрализованная валюта,
              созданная для современных трейдеров и DeFi энтузиастов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card/80 border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-primary" />
                </div>
                <CardTitle className="text-xl orbitron">Безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Передовые протоколы безопасности и аудированный код для
                  максимальной защиты активов
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Zap" className="text-secondary" />
                </div>
                <CardTitle className="text-xl orbitron">Скорость</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Мгновенные транзакции с минимальными комиссиями благодаря
                  оптимизированной архитектуре
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="text-[#7C3AED]" />
                </div>
                <CardTitle className="text-xl orbitron">Доходность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Высокие APY для стейкинга и участия в ликвидности DeFi
                  протоколов
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold orbitron mb-6">
                Ключевые возможности
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">DeFi интеграция</h4>
                    <p className="text-sm text-muted-foreground">
                      Полная совместимость с популярными DeFi протоколами
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Стейкинг</h4>
                    <p className="text-sm text-muted-foreground">
                      Зарабатывайте до 15% годовых за участие в сети
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Кроссчейн</h4>
                    <p className="text-sm text-muted-foreground">
                      Работает на Ethereum, BSC, Polygon и других сетях
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
                <div className="text-5xl mb-4">💎</div>
                <h4 className="text-2xl font-bold orbitron mb-2">
                  Для инвесторов
                </h4>
                <p className="text-muted-foreground">
                  Стабильный рост и перспективы развития экосистемы
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold orbitron text-gradient mb-6">
              Roadmap
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Наш план развития USD Crypto на ближайшие кварталы
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Q1 2024 */}
              <Card className="bg-card/80 border-primary/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-cyber-gradient"></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      Q1 2024
                    </Badge>
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
                      Завершено
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl orbitron">
                    Запуск основной сети
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Запуск токена USD на Ethereum</li>
                    <li>• Листинг на DEX платформах</li>
                    <li>• Аудит безопасности</li>
                    <li>• Запуск стейкинга</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Q2 2024 */}
              <Card className="bg-card/80 border-secondary/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                      Q2 2024
                    </Badge>
                    <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">
                      В процессе
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl orbitron">
                    Расширение экосистемы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Интеграция с крупными биржами</li>
                    <li>• Запуск на Polygon и BSC</li>
                    <li>• Мобильное приложение</li>
                    <li>• Партнерства с DeFi протоколами</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Q3 2024 */}
              <Card className="bg-card/80 border-[#7C3AED]/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#7C3AED]"></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#7C3AED]/20 text-[#7C3AED] border-[#7C3AED]/30">
                      Q3 2024
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-500 border-blue-500/30">
                      Планируется
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl orbitron">
                    DeFi решения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Запуск собственного DEX</li>
                    <li>• Yield farming пулы</li>
                    <li>• NFT маркетплейс</li>
                    <li>• DAO управление</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Q4 2024 */}
              <Card className="bg-card/80 border-[#00FF88]/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#00FF88]"></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#00FF88]/20 text-[#00FF88] border-[#00FF88]/30">
                      Q4 2024
                    </Badge>
                    <Badge className="bg-gray-500/20 text-gray-500 border-gray-500/30">
                      Будущее
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl orbitron">
                    Глобальное принятие
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Интеграция с платежными системами</li>
                    <li>• Институциональные инвесторы</li>
                    <li>• Кроссчейн мосты</li>
                    <li>• Глобальная экспансия</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold orbitron text-gradient mb-6">
              Контакты
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Свяжитесь с нами для сотрудничества или получения дополнительной
              информации
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold orbitron mb-6">
                  Наши контакты
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="Mail" className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">
                        info@usdcrypto.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Icon name="MessageSquare" className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Telegram</h4>
                      <p className="text-muted-foreground">
                        @usdcrypto_official
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#7C3AED]/20 rounded-full flex items-center justify-center">
                      <Icon name="Users" className="text-[#7C3AED]" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Discord</h4>
                      <p className="text-muted-foreground">
                        USD Crypto Community
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold orbitron mb-4">
                  Присоединяйтесь к сообществу
                </h4>
                <div className="flex space-x-4">
                  <Button
                    size="sm"
                    className="bg-primary/20 hover:bg-primary/30 text-primary"
                  >
                    <Icon name="Twitter" size={16} />
                  </Button>
                  <Button
                    size="sm"
                    className="bg-secondary/20 hover:bg-secondary/30 text-secondary"
                  >
                    <Icon name="Github" size={16} />
                  </Button>
                  <Button
                    size="sm"
                    className="bg-[#7C3AED]/20 hover:bg-[#7C3AED]/30 text-[#7C3AED]"
                  >
                    <Icon name="MessageSquare" size={16} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/80 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl orbitron">
                  Отправить сообщение
                </CardTitle>
                <CardDescription>Мы ответим в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Имя
                      </label>
                      <Input
                        placeholder="Ваше имя"
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="email@example.com"
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Тема
                    </label>
                    <Input
                      placeholder="Тема сообщения"
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Сообщение
                    </label>
                    <Textarea
                      placeholder="Ваше сообщение..."
                      className="bg-background/50 min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-cyber-gradient hover:opacity-90 text-black font-semibold">
                    <Icon name="Send" className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/img/6c649d70-0705-46ec-9509-3227ecbe5d40.jpg"
                  alt="USD Crypto"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-xl font-bold orbitron text-gradient">
                  USD CRYPTO
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Революционная криптовалюта для будущего цифровой экономики
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a
                  href="#"
                  className="block hover:text-primary transition-colors"
                >
                  Токен USD
                </a>
                <a
                  href="#"
                  className="block hover:text-primary transition-colors"
                >
                  Стейкинг
                </a>
                <a
                  href="#"
                  className="block hover:text-primary transition-colors"
                >
                  DeFi
                </a>
                <a
                  href="#"
                  className="block hover:text-primary transition-colors"
                >
                  Whitepaper
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сообщество</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a
                  href="#"
                  className="block hover:text-primary transition-colors"
                >
                  Telegram
                </a>
                <a
                  href="#"
                  className="block hover:text-primary transition-colors"
                >
                  Discord
                </a>
                <a
                  href="#"
                  className="block hover:text-primary transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="block hover:text-primary transition-colors"
                >
                  Reddit
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a
                  href="#"
                  className="block hover:text-primary transition-colors"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="block hover:text-primary transition-colors"
                >
                  Документация
                </a>
                <a
                  href="#"
                  className="block hover:text-primary transition-colors"
                >
                  Контакты
                </a>
                <a
                  href="#"
                  className="block hover:text-primary transition-colors"
                >
                  Статус
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 USD Crypto. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
