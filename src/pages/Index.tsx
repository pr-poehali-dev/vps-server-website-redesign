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
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-12 max-w-7xl relative z-10">
        
        <header className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/30 backdrop-blur-sm">
            <Icon name="Server" size={24} />
            <span className="text-sm font-semibold tracking-wider uppercase">VPS Агрегатор</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-slide-up leading-tight">
            Найдите идеальный VPS
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Сравните провайдеров, тарифы и отзывы в одном месте. Выберите лучший VPS для ваших задач.
          </p>
          
          <div className="mt-8 flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>6+ провайдеров</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span>5000+ отзывов</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span>Актуально 24/7</span>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card className="lg:col-span-1 animate-slide-up bg-card/50 backdrop-blur-xl border-2 border-border/50 shadow-2xl shadow-primary/5">
            <CardHeader className="border-b border-border/50">
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon name="SlidersHorizontal" size={18} className="text-primary" />
                </div>
                Фильтры
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 mt-6">
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

          <div className="lg:col-span-3 space-y-6">
            {filteredProviders.map((provider, index) => (
              <Card 
                key={provider.id} 
                className="group relative overflow-hidden bg-card/50 backdrop-blur-xl border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-6xl p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                        {provider.logo}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-2xl font-bold">{provider.name}</CardTitle>
                          {provider.popular && (
                            <Badge variant="default" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/30 animate-pulse">
                              <Icon name="TrendingUp" size={12} className="mr-1" />
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
                      <div className="px-6 py-3 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 backdrop-blur-sm">
                        <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{provider.price} ₽</div>
                        <div className="text-xs text-muted-foreground font-medium">в месяц</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors">
                      <div className="p-2 rounded-lg bg-primary/20">
                        <Icon name="Cpu" size={18} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground font-medium">Процессор</div>
                        <div className="font-semibold text-foreground">{provider.cpu}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/5 border border-secondary/20 hover:bg-secondary/10 transition-colors">
                      <div className="p-2 rounded-lg bg-secondary/20">
                        <Icon name="MemoryStick" size={18} className="text-secondary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground font-medium">Память</div>
                        <div className="font-semibold text-foreground">{provider.ram}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-colors">
                      <div className="p-2 rounded-lg bg-accent/20">
                        <Icon name="HardDrive" size={18} className="text-accent" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground font-medium">Диск</div>
                        <div className="font-semibold text-foreground">{provider.storage}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors">
                      <div className="p-2 rounded-lg bg-primary/20">
                        <Icon name="MapPin" size={18} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground font-medium">Локация</div>
                        <div className="font-semibold text-foreground">{provider.location}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {provider.features.map((feature, idx) => (
                      <Badge key={idx} className="bg-muted/80 text-foreground border border-border/50 backdrop-blur-sm hover:bg-muted transition-colors px-3 py-1">
                        <Icon name="Check" size={12} className="mr-1 text-primary" />
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 font-semibold">
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                    <Button variant="outline" className="flex-1 border-2 hover:bg-primary/10 hover:border-primary transition-all duration-300">
                      <Icon name="GitCompare" size={16} className="mr-2" />
                      Сравнить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Tabs defaultValue="comparison" className="mt-16 animate-fade-in">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-card/50 backdrop-blur-xl border-2 border-border/50 p-1 h-12">
            <TabsTrigger value="comparison" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground font-semibold">
              Сравнение
            </TabsTrigger>
            <TabsTrigger value="guide" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground font-semibold">
              Помощь в выборе
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="comparison" className="mt-8">
            <Card className="bg-card/50 backdrop-blur-xl border-2 border-border/50 shadow-2xl shadow-primary/5">
              <CardHeader className="border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Icon name="BarChart3" size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Сравнительная таблица</CardTitle>
                    <CardDescription>Детальное сравнение характеристик провайдеров</CardDescription>
                  </div>
                </div>
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

          <TabsContent value="guide" className="mt-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="group bg-card/50 backdrop-blur-xl border-2 border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 border border-primary/30">
                    <Icon name="Zap" size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">Для малых проектов</CardTitle>
                  <CardDescription className="text-base">Сайты, блоги, лендинги</CardDescription>
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

              <Card className="group bg-card/50 backdrop-blur-xl border-2 border-primary hover:border-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 border border-secondary/30 shadow-lg shadow-secondary/20">
                    <Icon name="Rocket" size={28} className="text-secondary" />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <CardTitle className="text-xl">Для бизнеса</CardTitle>
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">Рекомендуем</Badge>
                  </div>
                  <CardDescription className="text-base">Интернет-магазины, SaaS</CardDescription>
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

              <Card className="group bg-card/50 backdrop-blur-xl border-2 border-border/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 border border-accent/30">
                    <Icon name="Flame" size={28} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl">Высокие нагрузки</CardTitle>
                  <CardDescription className="text-base">Highload, ML, большие базы</CardDescription>
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

        <footer className="mt-20 text-center border-t border-border/50 pt-12 pb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
              <Icon name="Server" size={20} className="text-primary" />
            </div>
            <span className="text-lg font-semibold">VPS Агрегатор</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 VPS Агрегатор. Сравните и выберите лучший VPS для ваших задач.</p>
          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">О платформе</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Контакты</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">API</a>
          </div>
        </footer>
      </div>
    </div>
  );
}