'use client'

import Giscus from '@giscus/react';

export default function GiscusComment(post) {
  console.log(post.id.url)
  return (
    <Giscus
      id="comments"
      repo="aiokr/Tripper-Next"
      repoId="R_kgDOJT_6FA"
      category="Comments"
      categoryId="DIC_kwDOJT_6FM4CXiD0"
      mapping="specific"
      term={post.id.url}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
}