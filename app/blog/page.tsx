'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogPage() {
  const { t } = useLanguage();
  const [playingVideo, setPlayingVideo] = useState<{ postId: number; videoId: string } | null>(null);

  // Map videos to blog posts - Last concert video is first
  const videos = [
    '/copy_23123E67-CF85-4A95-8FA6-B666B7A947FF (3).mov', // Last Concert
    '/1662380387137459.mov',
    '/166238040757721.MP4',
    '/1662380430938323.MP4',
    '/1662380450835598.MP4',
    '/86222d53-eff3-47dd-abc2-b60a6927237d.MP4',
    '/1662380387137459.mov',
    '/berd.MP4',
    '/arcax.MP4.MP4',
    '/harsiPars.MP4',
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-orange-50/20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight" style={{ color: 'var(--foreground)' }}>
            {t.blog.title}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed" style={{ color: 'var(--foreground-light)' }}>
            {t.blog.subtitle}
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.blog.posts.map((post, index) => {
              const videoSrc = videos[index % videos.length];
              const isPlaying = playingVideo?.postId === post.id;
              const thumbnailImage = post.id === 1 ? '/IMG_0996.JPG' : '/dance-bg.jpg';

              return (
                <article
                  key={post.id}
                  className="card rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 w-full bg-black cursor-pointer rounded-t-xl overflow-hidden" onClick={() => setPlayingVideo(isPlaying ? null : { postId: post.id, videoId: videoSrc })}>
                    {isPlaying ? (
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
                    ) : (
                      <>
                        <Image
                          src={thumbnailImage}
                          alt={post.title}
                          fill
                          className="object-cover object-top image-hover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl text-white shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-3xl" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)' }}>
                            ▶
                          </div>
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white shadow-md" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)' }}>
                            {post.category}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-8">
                    <p className="text-xs font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>{post.date}</p>
                    <h2 className="text-base font-bold mb-4 leading-tight" style={{ color: 'var(--foreground)' }}>
                      {post.title}
                    </h2>
                    <p className="text-sm font-light leading-relaxed mb-6" style={{ color: 'var(--foreground-light)' }}>
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-sm font-semibold hover:text-primary inline-flex items-center transition-colors duration-200"
                      style={{ color: 'var(--primary)' }}
                    >
                      {t.blog.readMore} →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
