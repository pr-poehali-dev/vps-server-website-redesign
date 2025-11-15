import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface VPSProvider {
  id: number;
  name: string;
  logo: string;
  rating: number;
  reviews: number;
  price: number;
  cpu: string;
  ram: string;
  storage: string;
  location: string;
  uptime: string;
  features: string[];
  popular: boolean;
}

const providers: VPSProvider[] = [
  {
    id: 1,
    name: 'CloudMaster Pro',
    logo: '☁️',
    rating: 4.9,
    reviews: 1243,
    price: 599,
    cpu: '4 vCPU',
    ram: '8 GB',
    storage: '160 GB SSD',
    location: 'EU, US, Asia',
    uptime: '99.99%',
    features: ['DDoS защита', 'Бесплатный SSL', 'Автобэкап', 'API доступ'],
    popular: true
  },
  {
    id: 2,
    name: 'ServerHub Elite',
    logo: '🚀',
    rating: 4.8,
    reviews: 987,
    price: 499,
    cpu: '2 vCPU',
    ram: '4 GB',
    storage: '80 GB SSD',
    location: 'EU, US',
    uptime: '99.95%',
    features: ['Панель управления', 'SSH доступ', 'Мониторинг 24/7'],
    popular: false
  },
  {
    id: 3,
    name: 'VPSMax Solutions',
    logo: '⚡',
    rating: 4.7,
    reviews: 756,
    price: 799,
    cpu: '6 vCPU',
    ram: '16 GB',
    storage: '320 GB NVMe',
    location: 'Global',
    uptime: '99.98%',
    features: ['NVMe диски', 'Premium сеть', 'DDoS защита', 'Kubernetes'],
    popular: true
  },
  {
    id: 4,
    name: 'HostForce Cloud',
    logo: '💻',
    rating: 4.6,
    reviews: 634,
    price: 399,
    cpu: '2 vCPU',
    ram: '2 GB',
    storage: '50 GB SSD',
    location: 'EU',
    uptime: '99.90%',
    features: ['cPanel', 'Бесплатный домен', 'Email хостинг'],
    popular: false
  },
  {
    id: 5,
    name: 'TurboVPS Network',
    logo: '🔥',
    rating: 4.8,
    reviews: 892,
    price: 699,
    cpu: '4 vCPU',
    ram: '12 GB',
    storage: '240 GB SSD',
    location: 'US, Asia',
    uptime: '99.97%',
    features: ['Низкая задержка', 'Snapshot', 'IPv6', 'Load Balancer'],
    popular: true
  },
  {
    id: 6,
    name: 'DataCore Systems',
    logo: '🛡️',
    rating: 4.5,
    reviews: 521,
    price: 549,
    cpu: '3 vCPU',
    ram: '6 GB',
    storage: '120 GB SSD',
    location: 'EU, US, Asia',
    uptime: '99.92%',
    features: ['Защита данных', 'Резервирование', 'Техподдержка 24/7'],
    popular: false
  }
];

export default function Index() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [locationFilter, setLocationFilter] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const filteredProviders = providers
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .filter(p => locationFilter === 'all' || p.location.includes(locationFilter === 'eu' ? 'EU' : locationFilter === 'us' ? 'US' : 'Asia'))
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 text-primary">
            <Icon name="Server" size={32} />
            <span className="text-sm font-semibold tracking-wide uppercase">VPS Агрегатор</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Найдите идеальный VPS
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Сравните провайдеров, тарифы и отзывы в одном месте. Выберите лучший VPS для ваших задач.
          </p>
        </header>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card className="lg:col-span-1 animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="SlidersHorizontal" size={20} />
                Фильтры
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-3 block">Цена, ₽/месяц</label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={1000}
                  step={50}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{priceRange[0]} ₽</span>
                  <span>{priceRange[1]} ₽</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">Локация</label>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все регионы</SelectItem>
                    <SelectItem value="eu">Европа</SelectItem>
                    <SelectItem value="us">США</SelectItem>
                    <SelectItem value="asia">Азия</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">Сортировка</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                    <SelectItem value="price-low">Сначала дешевле</SelectItem>
                    <SelectItem value="price-high">Сначала дороже</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4 border-t">
                <div className="text-sm text-muted-foreground mb-2">
                  Найдено провайдеров: <span className="font-semibold text-foreground">{filteredProviders.length}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-3 space-y-4">
            {filteredProviders.map((provider, index) => (
              <Card 
                key={provider.id} 
                className="hover:shadow-lg transition-all duration-300 hover:scale-[1.01] border-2 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{provider.logo}</div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <CardTitle className="text-2xl">{provider.name}</CardTitle>
                          {provider.popular && (
                            <Badge variant="default" className="bg-gradient-to-r from-primary to-secondary">
                              Популярный
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-foreground">{provider.rating}</span>
                            <span className="text-muted-foreground">({provider.reviews} отзывов)</span>
                          </div>
                          <div className="flex items-center gap-1 text-green-600">
                            <Icon name="Activity" size={16} />
                            <span>{provider.uptime}</span>
                          </div>
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{provider.price} ₽</div>
                      <div className="text-sm text-muted-foreground">в месяц</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Cpu" size={18} className="text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Процессор</div>
                        <div className="font-medium">{provider.cpu}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MemoryStick" size={18} className="text-secondary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Память</div>
                        <div className="font-medium">{provider.ram}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="HardDrive" size={18} className="text-accent" />
                      <div>
                        <div className="text-xs text-muted-foreground">Диск</div>
                        <div className="font-medium">{provider.storage}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={18} className="text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Локация</div>
                        <div className="font-medium">{provider.location}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {provider.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Icon name="GitCompare" size={16} className="mr-2" />
                      Сравнить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Tabs defaultValue="comparison" className="mt-12 animate-fade-in">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="comparison">Сравнение</TabsTrigger>
            <TabsTrigger value="guide">Помощь в выборе</TabsTrigger>
          </TabsList>
          
          <TabsContent value="comparison" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart3" size={24} />
                  Сравнительная таблица
                </CardTitle>
                <CardDescription>Детальное сравнение характеристик провайдеров</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b">
                      <tr className="text-left">
                        <th className="py-3 px-4 font-semibold">Провайдер</th>
                        <th className="py-3 px-4 font-semibold">Рейтинг</th>
                        <th className="py-3 px-4 font-semibold">Цена</th>
                        <th className="py-3 px-4 font-semibold">CPU</th>
                        <th className="py-3 px-4 font-semibold">RAM</th>
                        <th className="py-3 px-4 font-semibold">Диск</th>
                        <th className="py-3 px-4 font-semibold">Uptime</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProviders.map((provider) => (
                        <tr key={provider.id} className="border-b hover:bg-muted/50 transition-colors">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl">{provider.logo}</span>
                              <span className="font-medium">{provider.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-1">
                              <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                              <span className="font-semibold">{provider.rating}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 font-semibold text-primary">{provider.price} ₽</td>
                          <td className="py-3 px-4">{provider.cpu}</td>
                          <td className="py-3 px-4">{provider.ram}</td>
                          <td className="py-3 px-4">{provider.storage}</td>
                          <td className="py-3 px-4 text-green-600 font-medium">{provider.uptime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guide" className="mt-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Icon name="Zap" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Для малых проектов</CardTitle>
                  <CardDescription>Сайты, блоги, лендинги</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                      <span>2-4 vCPU достаточно</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                      <span>4-8 GB RAM оптимально</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                      <span>50-100 GB SSD</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                      <span>Бюджет: 400-600 ₽/мес</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-primary">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                    <Icon name="Rocket" size={24} className="text-secondary" />
                  </div>
                  <CardTitle>Для бизнеса</CardTitle>
                  <CardDescription>Интернет-магазины, SaaS</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                      <span>4-6 vCPU рекомендуется</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                      <span>8-16 GB RAM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                      <span>160-320 GB NVMe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                      <span>Бюджет: 600-800 ₽/мес</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                    <Icon name="Flame" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Высокие нагрузки</CardTitle>
                  <CardDescription>Highload, ML, большие базы</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                      <span>6+ vCPU необходимо</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                      <span>16+ GB RAM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                      <span>320+ GB NVMe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                      <span>Бюджет: от 800 ₽/мес</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <footer className="mt-16 text-center text-sm text-muted-foreground border-t pt-8">
          <p>© 2024 VPS Агрегатор. Сравните и выберите лучший VPS для ваших задач.</p>
        </footer>
      </div>
    </div>
  );
}
