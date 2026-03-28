'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useParams } from 'next/navigation';
import { getMediaUrl, SITE_VIDEO_PATHS } from '@/lib/media';

export default function BlogPostPage() {
  const { t } = useLanguage();
  const params = useParams();
  const postId = parseInt(params.id as string);
  const [isPlaying, setIsPlaying] = useState(false);

  const post = t.blog.posts.find((p) => p.id === postId);

  const videoPath = post
    ? SITE_VIDEO_PATHS[(post.id - 1) % SITE_VIDEO_PATHS.length]
    : null;
  const videoSrc = videoPath ? getMediaUrl(videoPath) : null;
  const thumbnailImage = post
    ? getMediaUrl(post.id === 1 ? '/IMG_0996.JPG' : '/dance-bg.jpg')
    : '';

  if (!post) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-b from-white via-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>Post Not Found</h1>
          <Link href="/blog" className="text-base font-semibold hover:text-primary transition-colors duration-200" style={{ color: 'var(--primary)' }}>
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 px-6 bg-gradient-to-br from-white via-blue-50/30 to-orange-50/20">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center mb-8 text-sm font-semibold hover:text-primary transition-colors duration-200"
            style={{ color: 'var(--primary)' }}
          >
            ← {t.blog.title}
          </Link>
          <div className="mb-6">
            <span className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white shadow-md" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)' }}>
              {post.category}
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight leading-tight" style={{ color: 'var(--foreground)' }}>
            {post.title}
          </h1>
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
            {post.date}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Video Section */}
          {videoSrc && (
            <div className="mb-12 card rounded-xl overflow-hidden shadow-xl">
              <div className="relative w-full aspect-video bg-black group cursor-pointer rounded-t-xl overflow-hidden" onClick={() => setIsPlaying(true)}>
                {!isPlaying ? (
                  <>
                    <Image
                      src={thumbnailImage}
                      alt={post.title}
                      fill
                      className="object-cover object-top image-hover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full flex items-center justify-center text-3xl text-white shadow-2xl transition-all duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)' }}>
                        ▶
                      </div>
                    </div>
                  </>
                ) : (
                  <video
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    preload="metadata"
                    style={{ backgroundColor: '#000' }}
                  >
                    <source src={videoSrc} type="video/quicktime" />
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed font-light mb-10 text-gray-700" style={{ color: 'var(--foreground-light)' }}>
              {post.excerpt}
            </p>
            <div className="text-lg leading-relaxed font-light space-y-6" style={{ color: 'var(--foreground-light)' }}>
              <p>{post.content}</p>
            </div>
          </div>
          <div className="mt-16 pt-10 border-t" style={{ borderColor: 'var(--border)' }}>
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 rounded-lg text-base font-semibold transition-all duration-300 btn-primary shadow-lg hover:shadow-xl"
            >
              ← Back to {t.blog.title}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
