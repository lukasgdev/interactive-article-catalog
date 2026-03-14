import { useState, useMemo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/carousel.css';
import { Search, BookMarked, X, GraduationCap, Code, Brain, Shield, Wrench, BarChart3, Network, Heart, Users, MessageSquare, Leaf, Lock, Lightbulb, Vote, Archive } from 'lucide-react';
import { ArticleCard } from './components/ArticleCard';
import { CategoryCard } from './components/CategoryCard';
import { articles, getCategories, getYears, getCategoryCounts } from './data/articles-data';

// Mapeamento de ícones e cores para cada categoria
const categoryConfig: Record<string, { icon: any; color: string }> = {
  'Ética Computacional': {
    icon: Lightbulb,
    color: 'bg-gradient-to-br from-yellow-500 to-yellow-600 text-white'
  },
  'Saúde e Computação': {
    icon: Heart,
    color: 'bg-gradient-to-br from-red-500 to-red-600 text-white'
  },
  'Acessibilidade e Inclusão': {
    icon: Users,
    color: 'bg-gradient-to-br from-teal-500 to-teal-600 text-white'
  },
  'Impacto Social e Computação': {
    icon: Users,
    color: 'bg-gradient-to-br from-purple-500 to-purple-600 text-white'
  },
  'Computação Aplicada à Educação': {
    icon: GraduationCap,
    color: 'bg-gradient-to-br from-blue-500 to-blue-600 text-white'
  },
  'Desinformação e Sociedade': {
    icon: MessageSquare,
    color: 'bg-gradient-to-br from-orange-500 to-orange-600 text-white'
  },
  'IA, Aprendizado de Máquina e Sociedade': {
    icon: Brain,
    color: 'bg-gradient-to-br from-pink-500 to-pink-600 text-white'
  },
  'Herança Digital': {
    icon: Archive,
    color: 'bg-gradient-to-br from-indigo-500 to-indigo-600 text-white'
  },
  'Segurança de dados': {
    icon: Lock,
    color: 'bg-gradient-to-br from-red-600 to-red-700 text-white'
  },
  'Computação e Política': {
    icon: Vote,
    color: 'bg-gradient-to-br from-slate-600 to-slate-700 text-white'
  },
  'Computação e Comunicação': {
    icon: MessageSquare,
    color: 'bg-gradient-to-br from-cyan-500 to-cyan-600 text-white'
  },
  'Computação Verde': {
    icon: Leaf,
    color: 'bg-gradient-to-br from-green-500 to-green-600 text-white'
  },
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = getCategories();
  const categoryCounts = getCategoryCounts();
  const years = getYears();

  // Ordenar categorias por quantidade de artigos (crescente)
  const sortedCategories = useMemo(() => {
    return [...categories].sort((b, a) => {
      const countA = categoryCounts[a] || 0;
      const countB = categoryCounts[b] || 0;
      return countA - countB;
    });
  }, [categories, categoryCounts]);

  // Filtrar artigos
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = selectedCategory === null || article.categoria === selectedCategory;
      const matchesYear = selectedYear === 'all' || article.ano === selectedYear;
      const matchesSearch =
        article.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.resumo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.palavrasChave.some(palavra => palavra.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesCategory && matchesYear && matchesSearch;
    });
  }, [selectedCategory, selectedYear, searchTerm]);

  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedYear('all');
    setSearchTerm('');
  };

  // Verificar se há filtros ativos
  const hasActiveFilters = selectedCategory !== null || selectedYear !== 'all' || searchTerm !== '';

  // Configuração do carrossel
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3 mb-2">
            <BookMarked className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Artigos WICS 2021-2025
            </h1>
          </div>
          <p className="text-gray-600">
            Catalogação de {articles.length} artigos científicos dos Anais do Workshop sobre as Implicações da Computação na Sociedade
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cards de Categorias */}
        <div className="mb-14 sm:mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Categorias</h2>

          {/* Carrossel para Mobile */}
          <div className="block sm:hidden">
            <Slider {...sliderSettings}>
              {sortedCategories.map((category) => {
                const config = categoryConfig[category] || {
                  icon: BookMarked,
                  color: 'bg-gradient-to-br from-gray-500 to-gray-600 text-white'
                };
                return (
                  <div key={category} className="px-2">
                    <CategoryCard
                      name={category}
                      count={categoryCounts[category] || 0}
                      icon={config.icon}
                      isSelected={selectedCategory === category}
                      onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                      color={config.color}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>

          {/* Grid para Desktop */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sortedCategories.map((category) => {
              const config = categoryConfig[category] || {
                icon: BookMarked,
                color: 'bg-gradient-to-br from-gray-500 to-gray-600 text-white'
              };
              return (
                <CategoryCard
                  key={category}
                  name={category}
                  count={categoryCounts[category] || 0}
                  icon={config.icon}
                  isSelected={selectedCategory === category}
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                  color={config.color}
                />
              );
            })}
          </div>
        </div>

        {/* Filtros de Busca e Ano (abaixo das categorias) */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Barra de Busca */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Filtro de Ano */}
          <div className="sm:w-48">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
            >
              <option value="all">Todos os anos</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filtros Ativos */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="text-sm text-gray-600">Filtros ativos:</span>
            {selectedCategory && (
              <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="hover:bg-green-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedYear !== 'all' && (
              <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                {selectedYear}
                <button
                  onClick={() => setSelectedYear('all')}
                  className="hover:bg-green-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {searchTerm && (
              <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                "{searchTerm}"
                <button
                  onClick={() => setSearchTerm('')}
                  className="hover:bg-green-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              onClick={resetFilters}
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              Limpar todos
            </button>
          </div>
        )}

        {/* Contador de Resultados */}
        <div className="mb-6">
          <p className="text-gray-700">
            Mostrando <span className="font-semibold">{filteredArticles.length}</span> de{' '}
            <span className="font-semibold">{articles.length}</span> artigos
          </p>
        </div>

        {/* Grid de Artigos */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nenhum artigo encontrado
            </h3>
            <p className="text-gray-600 mb-4">
              Tente ajustar os filtros ou o termo de busca
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 text-sm">
            Trabalho de Metodologia Científica - WICS 2021-2025
          </p>
        </div>
      </footer>
    </div>
  );
}