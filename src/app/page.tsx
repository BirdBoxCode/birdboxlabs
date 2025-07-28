import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";

import ThreeScene from '@/components/ThreeScene';

const services = [
  {
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies."
  },
  {
    title: "Graphic Design",
    description: "Creative visual solutions for branding, marketing materials, and digital assets."
  },
  {
    title: "Video Editing",
    description: "Professional video production and post-production services for all your content needs."
  },
  {
    title: "Music Production",
    description: "Original compositions, sound design, and audio production for multimedia projects."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 px-4 text-center relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Brand. Built, Designed, and Amplified — Under One Roof.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Creative solutions for the digital age. We bring your ideas to life through innovative design and technology.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Get Started
          </Button>
        </div>
        
        {/* Absolute positioned 3D Animation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95vw] h-96 pointer-events-none z-0">
          <ThreeScene />
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
            <span className="relative z-10">Our Services</span>
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/10 to-transparent blur-xl scale-150 -z-10"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={service.title} className={`text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-border/50 ${index === 2 ? 'ring-2 ring-primary/50' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 text-center bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate to bring your creative vision to life. Contact us today to discuss your next project.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}
