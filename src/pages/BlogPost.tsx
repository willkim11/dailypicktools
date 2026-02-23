import { Link, useParams, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 3);
  
  // 만약 관련 포스트가 부족하면 다른 카테고리에서 가져오기
  if (relatedPosts.length < 3) {
      const extra = blogPosts.filter(p => p.slug !== post.slug && !relatedPosts.some(r => r.slug === p.slug));
      relatedPosts.push(...extra.slice(0, 3 - relatedPosts.length));
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title={`${post.title}`} 
        description={post.excerpt.length > 150 ? post.excerpt.substring(0, 147) + '...' : post.excerpt}
      />
      
      <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <header className="px-8 py-10 bg-gray-50 border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700 text-center">
            <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold mb-4 text-center">
                {post.category}
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                {post.title}
            </h1>
            <div className="flex justify-center items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
                <span>{post.date}</span>
                <span>•</span>
                <span>예상 읽기 시간: {post.readTime}분</span>
            </div>
        </header>

        <div className="px-8 py-10 prose prose-lg prose-blue max-w-none dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {post.toolLink && (
            <div className="px-8 pb-10 flex justify-center mt-8">
                <Link to={post.toolLink} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    관련 도구 사용해보기 ({post.toolName})
                </Link>
            </div>
        )}
      </article>

      {/* 관련 아티클 3개 */}
      {relatedPosts.length > 0 && (
          <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">관련 아티클 추천</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(p => (
                      <Link to={`/blog/${p.slug}`} key={p.slug} className="group block h-full bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-all">
                          <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">{p.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{p.excerpt}</p>
                      </Link>
                  ))}
              </div>
          </div>
      )}

      <div className="mt-8 text-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link to="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
              &larr; 블로그 메인으로
          </Link>
      </div>
    </div>
  );
}
