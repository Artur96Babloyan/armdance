'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function VideosPage() {
  const { t } = useLanguage();
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const videos = [
    { 
      id: 'video1', 
      src: '/copy_23123E67-CF85-4A95-8FA6-B666B7A947FF (3).mov',
      thumbnail: '/dance-bg.jpg',
      title: 'Armenian Dance Show Performance',
      description: 'Watch our talented dancers perform traditional Armenian dances with passion and grace.'
    },
    { 
      id: 'video2', 
      src: '/1662380387137459.mov',
      thumbnail: '/dance-bg.jpg',
      title: 'Traditional Dance Performance',
      description: 'Experience the beauty of Armenian traditional dance.'
    },
    { 
      id: 'video3', 
      src: '/166238040757721.MP4',
      thumbnail: '/dance-bg.jpg',
      title: 'Dance Showcase',
      description: 'Our dancers showcasing their skills and dedication.'
    },
    { 
      id: 'video4', 
      src: '/1662380430938323.MP4',
      thumbnail: '/dance-bg.jpg',
      title: 'Cultural Performance',
      description: 'Celebrating Armenian culture through dance.'
    },
    { 
      id: 'video5', 
      src: '/1662380450835598.MP4',
      thumbnail: '/dance-bg.jpg',
      title: 'Student Performance',
      description: 'Our students demonstrating their progress and talent.'
    },
    { 
      id: 'video6', 
      src: '/86222d53-eff3-47dd-abc2-b60a6927237d.MP4',
      thumbnail: '/dance-bg.jpg',
      title: 'Armenian Dance Show',
      description: 'A beautiful performance of traditional Armenian dances.'
    },
    { 
      id: 'video7', 
      src: '/harsiPars.MP4',
      thumbnail: '/dance-bg.jpg',
      title: 'Dance Recital',
      description: 'Annual recital showcasing our dancers\' achievements.'
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight" style={{ color: '#3c4c59' }}>
            {t.videos.title}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light" style={{ color: '#3c4c59', opacity: 0.7 }}>
            {t.videos.subtitle}
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="card rounded-lg overflow-hidden">
                <div className="relative w-full aspect-video bg-black group cursor-pointer" onClick={() => setPlayingVideo(playingVideo === video.id ? null : video.id)}>
                  {playingVideo === video.id ? (
                    <video
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                      preload="metadata"
                      style={{ backgroundColor: '#000' }}
                    >
                      <source src={video.src} type="video/quicktime" />
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <>
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl text-white shadow-lg transition-transform group-hover:scale-110" style={{ background: '#789ebf' }}>
                          ▶
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#3c4c59' }}>
                    {video.title}
                  </h3>
                  <p className="text-sm font-light" style={{ color: '#3c4c59', opacity: 0.8 }}>
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Channel CTA */}
      <section className="py-24 px-6 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card rounded-lg p-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight" style={{ color: '#3c4c59' }}>
              {t.videos.subscribe}
            </h2>
            <p className="text-lg font-light mb-10" style={{ color: '#3c4c59', opacity: 0.7 }}>
              {t.videos.subscribeDesc}
            </p>
            <Link
              href="https://www.youtube.com/@armdanceshowballet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 text-white rounded-md text-base font-medium transition-all duration-200 btn-primary"
            >
              {t.videos.visitChannel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
