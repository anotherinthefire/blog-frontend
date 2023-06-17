/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        <Link key={index} className='p-4 md:w-1/2' to={`/article/${article.name}`}>
          <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
              <img
                className='lg:h-48 md:h-36 w-full object-cover object-center'
                src={article.thumbnail}
                alt='blog'
              />
            <div className='p-6'>
                <h3 className='text-lg font-medium text-gray-900 mb-3'>
                  {article.title}
                </h3>
              <p className='leading-relaxed mb-3'>
                {article.content[0].substring(0, 110)}...
              </p>
              <div className='flex item-center flex-wrap'>
                <div
                  className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>
                  Learn more
                </div>
              </div>
            </div>
          </div>
          </Link>
      ))}
    </>
  );
};


export default Articles;
