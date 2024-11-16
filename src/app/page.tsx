'use client';

import { Bell,Music, Users, Radio, Upload, MessageSquare } from 'lucide-react'
import Image from "next/image"
import { useState, useRef } from "react"
import Button from './components/ui/Button';
import Input from './components/ui/Input';
import Visualizer from './components/ui/Visualizer';

export default function Component() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const learnMoreRef = useRef<HTMLDivElement>(null);
  const subscribeRef = useRef<HTMLDivElement>(null);
  

  const screenshots = [
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20page-3-r1YwMNPrJCrxSWlgWFYDTcsw0jkXDf.png",
      title: "Live Music Streaming",
      description: "Stream and visualize music in real-time"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20page-2-mFEleY1jkNhWoa10SClgo3ixQxbbOn.png",
      title: "Smart Notifications",
      description: "Stay updated with your favorite artists"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20page-6-hThXGfUyC04CWeEQF7r4Tm1G42kv9j.png",
      title: "Social Experience",
      description: "Engage with the community in real-time"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Search-NLrKqiIMkMlJHfN8iyow9BGrJQ40et.png",
      title: "Discover Artists",
      description: "Find and follow your favorite streamers"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Story-ta7Cpb3uZiqXarECIN1ibcb5T4mmBk.png",
      title: "Stories & Updates",
      description: "Get exclusive content from artists"
    },
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20page-5-Ufb2Bo67Y2GQuDJwE0df9cxbbv8S2G.png",
      title: "Rich Profiles",
      description: "Showcase your musical journey"
    }
  ]


  const scrollToLearnMore = () => {
    learnMoreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSubscribe = () => {
    subscribeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0))
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%203-ZLoGOB1SygNeQmphuKjfH9Ygdpqm8D.png"
            alt="Beatstream Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
          <div className="flex items-center gap-4">
            <Button onClick={scrollToSubscribe} variant="ghost" className="text-white hover:bg-white/10">
              Sign Up for Beta
            </Button>
            <Button onClick={scrollToLearnMore} className="bg-white text-black hover:bg-white/90">Learn More</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32">
        <div className="container mx-auto px-4 py-32 text-center">
          <Visualizer />
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Share the Beat<br />Share the Moment
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
            Experience music together in real-time. Stream your favorite tracks, connect with artists,
            and share emotions through the universal language of music.
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={scrollToSubscribe} className="bg-white text-black hover:bg-white/90">Join the Waitlist</Button>
            <Button onClick={scrollToLearnMore} variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* App Screenshots Showcase */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Beatstream Preview</h2>
          <p className="mb-16 text-center text-xl text-gray-400">
            Our app is currently under development. Here's a sneak peek of what's coming!
          </p>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-10"
            style={{
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none', /* IE and Edge */
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div
              className="flex space-x-8 px-4 no-scrollbar"
              style={{
                scrollbarWidth: 'none', /* Firefox */
                msOverflowStyle: 'none', /* IE and Edge */
              }}
            >
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 transition-transform duration-300 ease-in-out transform hover:scale-110"
                >
                  <div
                    className="relative aspect-[9/19.5] overflow-hidden rounded-[2.5rem] border border-white/10 bg-gray-900 shadow-xl "
                  >
                    <Image
                      src={screenshot.url}
                      alt={screenshot.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-semibold">{screenshot.title}</h3>
                    <p className="mt-2 text-sm text-gray-400">{screenshot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section ref={learnMoreRef} className="py-24 ">
  <div className="container mx-auto px-4">
    <h2 className="mb-12 text-center text-3xl font-bold">Learn More About Beatstream</h2>
    <div className="grid gap-12 md:grid-cols-2">
      <div>
        <h3 className="mb-4 text-2xl font-semibold">What is Beatstream?</h3>
        <p className="text-gray-400">
          Beatstream is a groundbreaking music streaming platform that allows users to create and manage their own custom streaming channels. Users can stream any track they choose, sharing their favorite music with their followers. When a user starts or schedules a stream, their followers receive notifications to join and enjoy the live broadcast.
        </p>
      </div>
      <div>
        <h3 className="mb-4 text-2xl font-semibold">Our Mission</h3>
        <p className="text-gray-400">
          The core purpose of Beatstream is to enhance the way people share musical experiences and moments. We aim to empower content creators, such as artists, by providing a direct platform to publish their work and engage with fans without relying on intermediaries or publishing companies.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* App Features */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-3xl font-bold">Why BeatStream?</h2>
          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Music className="h-12 w-12" />}
              title="Live Streaming"
              description="Stream music in real-time and share your favorite tracks with friends and followers."
            />
            <FeatureCard
              icon={<Users className="h-12 w-12" />}
              title="Artist Interaction"
              description="Connect directly with artists through live premieres and exclusive streams."
            />
            <FeatureCard
              icon={<Radio className="h-12 w-12" />}
              title="Social Experience"
              description="Share reactions, comments, and emotions while listening together."
            />
            <FeatureCard
              icon={<Upload className="h-12 w-12" />}
              title="Personal Libraries"
              description="Use our extensive music library or upload your own tracks for streaming."
            />
            <FeatureCard
              icon={<Bell className="h-12 w-12" />}
              title="Smart Notifications"
              description="Get notified when your favorite artists and streamers go live."
            />
            <FeatureCard
              icon={<MessageSquare className="h-12 w-12" />}
              title="Instant Feedback"
              description="Artists can receive real-time reactions to their new releases."
            />
          </div>
        </div>
      </section>

      

      {/* Coming Soon */}
      <section ref={subscribeRef} className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold">Coming Soon to Your Device</h2>
          <p className="mb-12 text-xl text-gray-400">
            BeatStream is currently in development. Sign up for our waitlist to be the first to know when we launch!
          </p>
          <div className="mx-auto max-w-md">
            <form className="flex space-x-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
              <Button type="submit" className="bg-white text-black hover:bg-white/90">
                Join Waitlist
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%203-ZLoGOB1SygNeQmphuKjfH9Ygdpqm8D.png"
              alt="Beatstream Logo"
              width={100}
              height={40}
              className="h-8 w-auto"
            />
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="mailto:admin@beatstream.app" className="hover:text-white">
                admin@beatstream.app
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group text-center">
      <div className="mb-6 inline-block rounded-full bg-white/5 p-4 transition-all duration-300 group-hover:bg-white/10">
        <div className="text-blue-400 transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}