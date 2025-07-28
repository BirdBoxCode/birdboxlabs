import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

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
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <Image
              src="/bblight.svg"
              alt="BirdBox Labs Logo"
              width={400}
              height={300}
              className="max-w-md w-full h-auto"
            />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Creative solutions for the digital age. We bring your ideas to life through innovative design and technology.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Get Started
          </Button>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
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
