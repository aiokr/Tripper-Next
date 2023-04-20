import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import style from './post.module.css';
import 'highlight.js/styles/default.css';
import hljs from 'highlight.js';

//Markdown
import tocAndAnchor from 'markdown-it-toc-and-anchor';
import emoji from 'markdown-it-emoji';
import footnote from 'markdown-it-footnote';
import highlightjs from 'markdown-it-highlightjs';
var md = require('markdown-it')({
  breaks: true,
  breaks: true,
  langPrefix: 'language-',
  linkify: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          '</code></pre>';
      } catch (__) { }
    }
    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});
md.use(emoji).use(footnote).use(tocAndAnchor).use(highlightjs);

const upyunImg = ({ src, width, quality }) => {
  return `${src}_itp/fw/${width}`
}

export function fetchPost(props) {
  const post = allPosts.find((post) => post.url == props.params.slug)
  const url = 'https://next.tripper.press/post/' + props.params.slug
  const postCont = post.body.raw
  const title = post.title + ' - Tripper Press'
  const result = md.render(postCont);
  return {
    post,
    result,
    title,
  };
}

export function generateMetadata(props) {
  const { title } = fetchPost(props);
  return {
    title,
  }
}

export default function generateStaticParams(props) {
  const { post, result } = fetchPost(props);
  return (
    <main>
      {post.cover ? (
        <div className={`${style['postCoverHeader']}`} style={{ backgroundImage: 'url("' + post.cover + '")' }}>
          <div className={`${style['postHeaderLayer']}`}>
            <div className={`${style['info-area']} lg:px-8 max-w-[800px]`}>
              <div className='text-3xl font-medium pt-4'>{post.title}</div>
              <div className='opacity-60 pt-4'>{format(parseISO(post.date), 'yyyy-MM-dd')}{post.category ? `/${post.category}` : ''}{post.tags ? `/${post.tags}` : ''}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${style['postDefaultHeader']}`}>
          <div className={`${style['postHeaderLayer']}`}>
            <div className={`${style['info-area']} lg:px-8 max-w-[800px]`}>
              <div className='text-3xl font-medium pt-4'>{post.title}</div>
              <div className='opacity-60 pt-4'>{format(parseISO(post.date), 'yyyy-MM-dd')}{post.category ? `/${post.category}` : ''}{post.tags ? `/${post.tags}` : ''}</div>
            </div>
          </div>
        </div>
      )}
      <div className='container pt-8 lg:px-8 max-w-[800px] article' dangerouslySetInnerHTML={{ __html: result }} />
      <div className={`${style['commentHr']} pt-10 pb-6`}>
      </div>
    </main>
  );
}