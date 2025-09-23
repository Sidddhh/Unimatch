"use client"
import { CheckCircle, XCircle } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Bot, 
  ShieldCheck, 
  MessageCircle, 
  Menu, 
  X,
  Lock,
  Shield,
  Star,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  Sparkles,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Smartphone,
  Apple,
  Send
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from '@emailjs/browser';

// JSON Data
const siteData = {
  "brand": {
    "name": "UniMatch",
    "tagline": "Where real connections begin",
    "logo": "https://i.pinimg.com/1200x/21/a5/a4/21a5a484fa452dc807a05e8ac899fc8f.jpg"
  },
  "sections": {
    "hero": {
      "headline": "Find Your Perfect Match",
      "subheadline": "Smart matchmaking, safe conversations, and real connections.",
      "cta_primary": "Join Now",
      "background": "https://i.pinimg.com/1200x/e1/e2/85/e1e2855a28ec6537f3acc46d874d5af7.jpg"
    },
    "about_us": {
      "headline": "About UniMatch",
      "subheadline": "Connecting university students with meaningful relationships",
      "description": "UniMatch is crafted for university students seeking authentic connections. Our AI-powered platform combines smart matchmaking with a safe, inclusive community to help you find your ideal match.",
      "points": [
        {
          "title": "Our Mission",
          "description": "To spark meaningful relationships among students through innovative technology and a focus on safety."
        },
        {
          "title": "Student-Focused",
          "description": "Designed for the dynamic lives of university students, with features like local events and compatibility quizzes."
        },
        {
          "title": "Safe & Inclusive",
          "description": "A secure platform with verified profiles and encrypted chats, welcoming all students."
        }
      ]
    },
    "features": [
      {
        "title": "AI Matchmaking",
        "description": "Our AI analyzes preferences, habits, and compatibility to suggest your best match.",
        "icon": "Bot"
      },
      {
        "title": "Verified Profiles",
        "description": "All profiles go through a quick verification to ensure authenticity.",
        "icon": "ShieldCheck"
      },
      {
        "title": "Private Chat",
        "description": "End-to-end encrypted chats to keep your conversations safe.",
        "icon": "MessageCircle"
      }
    ],
    "testimonials": [
      {
        "name": "Aditi & Rohan",
        "feedback": "We found each other through UniMatch and couldn't be happier!",
        "image": "https://i.pinimg.com/1200x/65/be/6f/65be6f87550a756872886b762b33da71.jpg"
      },
      {
        "name": "Meera",
        "feedback": "The AI matchmaking felt like magic. I met someone who truly understands me.",
        "image": "https://i.pinimg.com/736x/22/f4/61/22f461606005f5eae52b56d15c00ef21.jpg"
      }
    ],
    "safety": {
      "headline": "Your Safety, Our Priority",
      "points": [
        "End-to-end encrypted messages",
        "Profile verification system",
        "AI moderation against fake/spam accounts"
      ]
    },
    "how_it_works": [
      {
        "step": "1",
        "title": "Create a Profile",
        "description": "Tell us about yourself and what you're looking for."
      },
      {
        "step": "2",
        "title": "Discover Matches",
        "description": "AI suggests compatible people based on your preferences."
      },
      {
        "step": "3",
        "title": "Connect & Chat",
        "description": "Start safe and meaningful conversations."
      }
    ],
    "unique_addons": [
      {
        "title": "Compatibility Quiz",
        "description": "Take a fun quiz to check compatibility with matches."
      },
      {
        "title": "Love Timeline",
        "description": "Interactive timeline that shows your dating journey."
      },
      {
        "title": "AI Matchmaking Demo",
        "description": "Showcase how our AI finds your perfect match in real time."
      },
      {
        "title": "Local Events",
        "description": "Meet matches offline through exclusive UniMatch events."
      }
    ],
    "quotes": [
      {
        "quote": "Love is not finding someone to live with; it's finding someone you can't live without.",
        "background": "https://i.pinimg.com/1200x/21/a5/a4/21a5a484fa452dc807a05e8ac899fc8f.jpg"
      },
      {
        "quote": "The best thing to hold onto in life is each other.",
        "background": "https://i.pinimg.com/1200x/65/be/6f/65be6f87550a756872886b762b33da71.jpg"
      }
    ]
  },
  "footer": {
    "links": ["About Us", "Privacy Policy", "Terms of Service", "Contact"],
    "socials": ["Facebook", "Instagram", "Twitter"]
  }
};

// Icon mapping
const iconMap = {
  Bot,
  ShieldCheck,
  MessageCircle,
  Lock,
  Shield,
  Heart,
  Star,
  Calendar,
  Clock,
  Sparkles,
  MapPin
};

// Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Enforce dark theme
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } bg-transparent`} // Changed to transparent
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-3">
        {/* Mobile Layout */}
        <div className="flex items-center justify-between md:hidden">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-pink-500/80 dark:bg-pink-700/80 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <motion.h1
                className="font-bold text-xl text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {siteData.brand.name}
              </motion.h1>
              <motion.p
                className="text-xs text-gray-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {siteData.brand.tagline}
              </motion.p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-pink-500/20"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Desktop Layout - Centered */}
        <div className="hidden md:flex items-center justify-center w-full">
          <div className="absolute left-4 flex items-center space-x-3">
            <div className="w-10 h-10 bg-pink-500/80 dark:bg-pink-700/80 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <motion.h1
                className="font-bold text-xl text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {siteData.brand.name}
              </motion.h1>
              <motion.p
                className="text-xs text-gray-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {siteData.brand.tagline}
              </motion.p>
            </div>
          </div>
          
          <div className="flex items-center space-x-8 bg-pink-500/10 dark:bg-pink-700/10 backdrop-blur-md rounded-full px-8 py-3">
            <motion.a
              href="#about-us"
              className="text-white hover:text-pink-200 transition-all duration-300 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              About Us
            </motion.a>
            <motion.a
              href="#features"
              className="text-white hover:text-pink-200 transition-all duration-300 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Features
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="text-white hover:text-pink-200 transition-all duration-300 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              How it Works
            </motion.a>
            <motion.a
              href="#testimonials"
              className="text-white hover:text-pink-200 transition-all duration-300 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Stories
            </motion.a>
          </div>

          <div className="absolute right-4 flex items-center space-x-2">
            <Button size="sm" className="bg-pink-500/20 dark:bg-pink-700/20 hover:bg-pink-600/30 dark:hover:bg-pink-800/30 text-white px-3 py-1.5">
              <Apple className="w-4 h-4 mr-1" />
              Mac
            </Button>
            <Button size="sm" className="bg-pink-500/20 dark:bg-pink-700/20 hover:bg-pink-600/30 dark:hover:bg-pink-800/30 text-white px-3 py-1.5">
              <Smartphone className="w-4 h-4 mr-1" />
              Android
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-pink-500/90 dark:bg-pink-700/90 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <motion.a
                href="#about-us"
                className="block text-white hover:text-pink-200 transition-colors font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                About Us
              </motion.a>
              <motion.a
                href="#features"
                className="block text-white hover:text-pink-200 transition-colors font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Features
              </motion.a>
              <motion.a
                href="#how-it-works"
                className="block text-white hover:text-pink-200 transition-colors font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                How it Works
              </motion.a>
              <motion.a
                href="#testimonials"
                className="block text-white hover:text-pink-200 transition-colors font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                Stories
              </motion.a>
              <div className="flex space-x-2 pt-2">
                <Button size="sm" className="flex-1 bg-pink-500/20 dark:bg-pink-700/20 hover:bg-pink-600/30 dark:hover:bg-pink-800/30 text-white">
                  <Apple className="w-4 h-4 mr-1" />
                  Mac
                </Button>
                <Button size="sm" className="flex-1 bg-pink-500/20 dark:bg-pink-700/20 hover:bg-pink-600/30 dark:hover:bg-pink-800/30 text-white">
                  <Smartphone className="w-4 h-4 mr-1" />
                  Android
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Hero Section
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [displayedText, setDisplayedText] = useState('');
  const fullText = siteData.sections.hero.headline;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-800 to-pink-600">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <img 
          src={siteData.sections.hero.background} 
          alt="Hero Background" 
          className="w-full h-screen object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-800/70 via-pink-600/50 to-pink-800/70" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {displayedText}
          <span className="animate-cursor">|</span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {siteData.sections.hero.subheadline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" className="bg-pink-500 dark:bg-pink-700 text-white hover:bg-pink-600 dark:hover:bg-pink-800 px-8 py-6 text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300">
            {siteData.sections.hero.cta_primary}
          </Button>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button size="lg" className="bg-pink-500 dark:bg-pink-700 text-white hover:bg-pink-600 dark:hover:bg-pink-800 px-6 py-4 rounded-2xl font-medium shadow-lg hover:scale-105 transition-all duration-300 flex items-center">
            <Apple className="w-5 h-5 mr-2" />
            Download for Mac
          </Button>
          <Button size="lg" className="bg-pink-500 dark:bg-pink-700 text-white hover:bg-pink-600 dark:hover:bg-pink-800 px-6 py-4 rounded-2xl font-medium shadow-lg hover:scale-105 transition-all duration-300 flex items-center">
            <Smartphone className="w-5 h-5 mr-2" />
            Download for Android
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

// About Us Section
const AboutUsSection = () => {
  const aboutIcons = [Heart, Sparkles, Shield];

  return (
    <section id="about-us" className="py-20 md:py-28 bg-gradient-to-br from-pink-800 to-pink-600">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {siteData.sections.about_us.headline}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {siteData.sections.about_us.subheadline}
          </motion.p>
          <motion.p
            className="text-lg text-gray-200 max-w-3xl mx-auto mt-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {siteData.sections.about_us.description}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteData.sections.about_us.points.map((point, index) => {
            const IconComponent = aboutIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-pink-800/50 dark:bg-pink-900/50 border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-500 dark:bg-pink-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <motion.h3
                        className="text-lg font-semibold text-white"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {point.title}
                      </motion.h3>
                      <motion.p
                        className="text-sm text-gray-200 leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {point.description}
                      </motion.p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button size="lg" className="bg-pink-500 dark:bg-pink-700 text-white hover:bg-pink-600 dark:hover:bg-pink-800 px-8 py-6 text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300">
            Join UniMatch Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-gradient-to-br from-pink-800 to-pink-600">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose UniMatch?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience dating reimagined with cutting-edge technology and genuine care for your safety.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {siteData.sections.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full bg-pink-800/50 dark:bg-pink-900/50 border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="w-16 h-16 bg-pink-500 dark:bg-pink-700 rounded-2xl flex items-center justify-center mx-auto mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.h3
                      className="text-2xl font-bold mb-4 text-white"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-200 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {feature.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % siteData.sections.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + siteData.sections.testimonials.length) % siteData.sections.testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-r from-pink-800 to-pink-600">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Love Stories
          </motion.h2>
          <motion.p
            className="text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real people, real connections, real happiness
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              className="text-center"
            >
              <Card className="bg-pink-800/50 dark:bg-pink-900/50 border-0 shadow-lg p-8 md:p-12 rounded-3xl">
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <img 
                      src={siteData.sections.testimonials[currentIndex].image} 
                      alt={siteData.sections.testimonials[currentIndex].name}
                      className="w-24 h-24 rounded-full object-cover object-center shadow-lg ring-4 ring-pink-400"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-pink-500 dark:bg-pink-700 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <motion.blockquote
                    className="text-2xl md:text-3xl font-medium mb-6 text-white leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    "{siteData.sections.testimonials[currentIndex].feedback}"
                  </motion.blockquote>
                  <motion.footer
                    className="text-lg text-pink-400 font-semibold"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    — {siteData.sections.testimonials[currentIndex].name}
                  </motion.footer>
                  <div className="flex mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 p-0 border-pink-400 text-white hover:bg-pink-600 dark:hover:bg-pink-800"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex space-x-2">
              {siteData.sections.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-pink-400 scale-110' : 'bg-pink-400/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 p-0 border-pink-400 text-white hover:bg-pink-600 dark:hover:bg-pink-800"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Safety Section
const SafetySection = () => {
  const safetyIcons = [Lock, ShieldCheck, Bot];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-bl from-pink-800 to-pink-600">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {siteData.sections.safety.headline}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We prioritize your security with industry-leading safety measures.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteData.sections.safety.points.map((point, index) => {
            const IconComponent = safetyIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-pink-800/50 dark:bg-pink-900/50 border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-500 dark:bg-pink-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <motion.h3
                        className="text-lg font-semibold text-white"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {point}
                      </motion.h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
// How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      step: "1",
      title: "Create a Profile",
      description: "Tell us about yourself and what you're looking for.",
      image: "https://i.postimg.cc/NM54jrvW/1.png"
    },
    {
      step: "2",
      title: "Discover Matches",
      description: "AI suggests compatible people based on your preferences.",
      image: "https://i.postimg.cc/Jz5K6LQd/2.png"
    },
    {
      step: "3",
      title: "Connect & Chat",
      description: "Start safe and meaningful conversations.",
      image: "https://i.postimg.cc/434PjSL4/3.png"
    },
    {
      step: "4",
      title: "Set Preferences",
      description: "Customize your experience with personalized settings.",
      image: "https://i.postimg.cc/GpMKRxVF/4.png"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gradient-to-tr from-pink-800 to-pink-600">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Four simple steps to find your perfect match
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-pink-800 to-pink-600 transform -translate-y-1/2 hidden md:block" />
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative">
                  <div className="w-24 h-24 bg-pink-500 dark:bg-pink-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-1 bg-gradient-to-r from-pink-800 to-pink-600 transform -translate-y-1/2" />
                  )}
                </div>
                <img src={step.image} alt={step.title} className="w-full h-64 object-contain mb-4 rounded-lg shadow-md" />
                <motion.h3
                  className="text-2xl font-bold mb-4 text-white"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  className="text-gray-200 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


// Unique Addons Section
const UniqueAddonsSection = () => {
  const addonIcons = [Calendar, Clock, Sparkles, MapPin];
  
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-pink-800 to-pink-600">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Unique Features
          </motion.h2>
          <motion.p
            className="text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience dating like never before
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.sections.unique_addons.map((addon, index) => {
            const IconComponent = addonIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-pink-800/50 dark:bg-pink-900/50 border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="w-14 h-14 bg-pink-500 dark:bg-pink-700 rounded-xl flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </motion.div>
                    <motion.h3
                      className="text-lg font-bold mb-2 text-white"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {addon.title}
                    </motion.h3>
                    <motion.p
                      className="text-sm text-gray-200 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {addon.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Quotes Section
const QuotesSection = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % siteData.sections.quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden min-h-[60vh] flex items-center bg-gradient-to-br from-pink-800 to-pink-600">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuoteIndex}
          className="absolute inset-0 z-0"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <img 
            src={siteData.sections.quotes[currentQuoteIndex].background} 
            alt="Quote Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-pink-800/70" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={currentQuoteIndex}
            className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-5xl mx-auto text-white border-b-2 border-yellow-400 pb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            "{siteData.sections.quotes[currentQuoteIndex].quote}"
          </motion.blockquote>
        </AnimatePresence>

        <div className="flex justify-center mt-8 space-x-2">
          {siteData.sections.quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuoteIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentQuoteIndex ? 'bg-pink-400 scale-110' : 'bg-pink-400/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '', // Added for template's {{title}}
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.title.trim()) newErrors.title = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setShowSuccess(false);
    setShowError(false);
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      console.log('EmailJS Config:', {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      });

      const currentTime = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'medium',
        timeStyle: 'short',
      });

      const templateParams = {
        name: formData.name,
        from_email: formData.email,
        title: formData.title,
        to_name: 'UniMatch Support',
        time: currentTime,
        message: formData.message,
      };

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_js4gvw9',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_gex7z2c',
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '4KgIw-Y2X_OeAM3Td'
      );

      console.log('EmailJS Response:', response);
      setFormData({ name: '', email: '', title: '', message: '' });
      setErrors({});
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000); // Auto-hide after 5 seconds
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMessage(`Failed to send message: ${error.text || 'Unknown error. Please check console for details.'}`);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000); // Auto-hide after 5 seconds
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-pink-800 to-pink-600">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </motion.div>

        <Card className="bg-pink-800/50 dark:bg-pink-900/50 border-0 shadow-lg">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`bg-pink-800/50 text-white placeholder:text-gray-400 border-pink-400 ${errors.name ? 'border-red-500' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`bg-pink-800/50 text-white placeholder:text-gray-400 border-pink-400 ${errors.email ? 'border-red-500' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="title" className="text-white">
                  Subject
                </Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Message subject"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className={`bg-pink-800/50 text-white placeholder:text-gray-400 border-pink-400 ${errors.title ? 'border-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`bg-pink-800/50 text-white placeholder:text-gray-400 border-pink-400 min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              {/* Success Message */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-green-800/70 border border-green-500 text-white p-4 rounded-lg flex items-center justify-center gap-2 shadow-lg"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 1, repeat: 1, ease: "easeOut" }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </motion.div>
                    <span className="font-medium">Message sent successfully!</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Message */}
              <AnimatePresence>
                {showError && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-red-800/70 border border-red-500 text-white p-4 rounded-lg flex items-center justify-center gap-2 shadow-lg"
                  >
                    <motion.div
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 1, repeat: 1, ease: "easeOut" }}
                    >
                      <XCircle className="w-6 h-6 text-red-400" />
                    </motion.div>
                    <span className="font-medium">{errorMessage || 'Failed to send message.'}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <Button
                type="submit"
                className="w-full bg-pink-500 dark:bg-pink-700 text-white hover:bg-pink-600 dark:hover:bg-pink-800"
                disabled={isSubmitting}
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

  // Footer Component
  const Footer = () => {
    const socialIcons = {
      Facebook: Facebook,
      Instagram: Instagram,
      Twitter: Twitter
    };
  
    return (
      <footer className="bg-gradient-to-br from-pink-800 to-pink-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-800/50 to-pink-600/50"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-pink-500 dark:bg-pink-700 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <motion.h3
                    className="font-bold text-2xl text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {siteData.brand.name}
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {siteData.brand.tagline}
                  </motion.p>
                </div>
              </div>
              <motion.p
                className="text-gray-200 leading-relaxed max-w-lg text-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Join thousands of people who have found their perfect match through our AI-powered platform. 
                Start your love story today.
              </motion.p>
              
              <div className="space-y-4">
                <motion.h4
                  className="font-semibold text-lg text-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Download Our App
                </motion.h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-pink-500 dark:bg-pink-700 text-white hover:bg-pink-600 dark:hover:bg-pink-800 px-6 py-3 rounded-xl font-medium shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    <Apple className="w-5 h-5 mr-2" />
                    App Store
                  </Button>
                  <Button className="bg-pink-500 dark:bg-pink-700 text-white hover:bg-pink-600 dark:hover:bg-pink-800 px-6 py-3 rounded-xl font-medium shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 mr-2" />
                    Google Play
                  </Button>
                </div>
              </div>
            </div>
  
            <div>
              <motion.h4
                className="font-semibold mb-6 text-lg text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Quick Links
              </motion.h4>
              <ul className="space-y-3">
                {siteData.footer.links.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
  
            <div>
              <motion.h4
                className="font-semibold mb-6 text-lg text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Follow Us
              </motion.h4>
              <div className="flex flex-wrap gap-3">
                {siteData.footer.socials.map((social, index) => {
                  const IconComponent = socialIcons[social];
                  return (
                    <motion.a
                      key={index}
                      href={`https://${social.toLowerCase()}.com/unimatch`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-pink-500/20 dark:bg-pink-700/20 rounded-xl flex items-center justify-center hover:bg-pink-600/30 dark:hover:bg-pink-800/30 transition-all duration-300 hover:scale-110"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
  
          <div className="border-t border-pink-400 mt-16 pt-8 text-center">
            <motion.p
              className="text-gray-200 text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              © 2025 {siteData.brand.name}. All rights reserved. Made with ❤️ for finding love.
            </motion.p>
          </div>
        </div>
      </footer>
    );
  };
  
  // Main Landing Page Component
  const LandingPage = () => {
    return (
      <div className="min-h-screen bg-gray-900 dark:bg-gray-900">
        <Navbar />
        <HeroSection />
        <AboutUsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <SafetySection />
        <HowItWorksSection />
        <UniqueAddonsSection />
        <QuotesSection />
        <ContactSection />
        <Footer />
      </div>
    );
  };
  
  export default LandingPage;