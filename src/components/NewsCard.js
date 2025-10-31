import React from 'react';

function NewsCard({ news }) {
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {news.image && (
            <div className="md:w-48 flex-shrink-0">
              <img 
                src={news.image} 
                alt={news.title}
                className="w-full h-32 md:h-24 object-cover rounded"
              />
            </div>
          )}
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
              {news.title}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {news.content}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>{news.date}</span>
                <span>|</span>
                <span>{news.category}</span>
              </div>
              
              <button className="btn-primary text-sm">
                Читати далі
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default NewsCard;