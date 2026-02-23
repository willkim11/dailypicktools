import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState<string>('전체');

  // 추출 가능한 탭 모음
  const categories = ['전체', '개발 도구', '디자인', '웹 기초', '팁&트릭'];

  const filteredPosts = activeCategory === '전체' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="블로그" 
        description="Daily Pick Tools 블로그 — 개발 도구 활용법, 웹 기초, 디자인 팁을 다루는 유익한 아티클을 확인하세요."
      />
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">개발 및 디자인 아티클</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          실무에서 바로 활용할 수 있는 웹 기초 지식과 유용한 팁을 소개합니다.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center text-gray-500 py-12 dark:text-gray-400">해당 카테고리의 글이 없습니다.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col h-full bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto text-blue-600 dark:text-blue-400 font-medium group-hover:underline flex items-center">
                  아티클 읽기 <span className="ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
