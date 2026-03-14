import { ExternalLink, BookOpen, Calendar, Tag } from 'lucide-react';
import { Article } from '../data/articles-data';
import { HighlightText } from './HighlightText';

interface ArticleCardProps {
  article: Article;
  searchTerm?: string;
}

export function ArticleCard({ article, searchTerm }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200 flex flex-col h-full">
      {/* Cabeçalho com ano e categoria */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>{article.ano}</span>
        </div>
        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
          {article.categoria}
        </span>
      </div>

      {/* Título */}
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        <HighlightText text={article.titulo} highlight={searchTerm} />
      </h3>

      {/* Resumo */}
      <p className="text-sm text-gray-600 mb-4 flex-grow text-justify">
        <HighlightText text={article.resumo} highlight={searchTerm} />
      </p>

      {/* Palavras-chave */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Tag className="w-4 h-4 text-gray-500" />
          <span className="text-xs text-gray-500">Palavras-chave:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {article.palavrasChave.map((palavra, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
            >
              <HighlightText text={palavra} highlight={searchTerm} />
            </span>
          ))}
        </div>
      </div>

      {/* Link para o PDF */}
      <a
        href={article.linkPdf}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 mt-auto"
      >
        <BookOpen className="w-4 h-4" />
        <span className="text-sm">Ler Artigo</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}
