import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <section id="contact-hero" className="relative py-20 text-center bg-gradient-to-br from-neon-purple-500 to-neon-blue-500 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Let's Build Something Amazing</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Ready to start your next project? Get in touch with us today!
          </p>
        </div>
      </section>

      <section id="contact-form-info" className="py-20 bg-card text-card-foreground">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 text-primary">Send Us a Message</h2>
            <p className="text-lg max-w-md mx-auto md:mx-0 mb-8 text-muted-foreground">
              Have a question or a project in mind? Fill out the form below and we'll get back to you shortly.
            </p>
            <form className="space-y-6 max-w-md mx-auto md:mx-0">
              <div>
                <Label htmlFor="name" className="text-lg text-foreground">Name</Label>
                <Input id="name" type="text" placeholder="Your Name" className="mt-2 bg-background border-border focus-visible:ring-neon-blue-500" />
              </div>
              <div>
                <Label htmlFor="email" className="text-lg text-foreground">Email</Label>
                <Input id="email" type="email" placeholder="Your Email" className="mt-2 bg-background border-border focus-visible:ring-neon-blue-500" />
              </div>
              <div>
                <Label htmlFor="subject" className="text-lg text-foreground">Subject</Label>
                <Input id="subject" type="text" placeholder="Subject" className="mt-2 bg-background border-border focus-visible:ring-neon-blue-500" />
              </div>
              <div>
                <Label htmlFor="message" className="text-lg text-foreground">Message</Label>
                <Textarea id="message" placeholder="Your Message" rows={5} className="mt-2 bg-background border-border focus-visible:ring-neon-blue-500" />
              </div>
              <Button type="submit" className="w-full bg-neon-purple-600 hover:bg-neon-purple-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
                Send Message
              </Button>
            </form>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 text-primary">Our Contact Details</h2>
            <p className="text-lg max-w-md mx-auto md:mx-0 mb-8 text-muted-foreground">
              Feel free to reach out to us through any of the following channels. We're always happy to chat!
            </p>
            <div className="space-y-6">
              <div className="flex items-center justify-center md:justify-start text-lg">
                <Mail size={24} className="text-neon-blue-600 mr-4" />
                <a href="mailto:info@neuraflow.com" className="hover:text-neon-blue-600 transition-colors">info@neuraflow.com</a>
              </div>
              <div className="flex items-center justify-center md:justify-start text-lg">
                <Phone size={24} className="text-neon-blue-600 mr-4" />
                <a href="tel:+1234567890" className="hover:text-neon-blue-600 transition-colors">+1 (234) 567-890</a>
              </div>
              <div className="flex items-center justify-center md:justify-start text-lg">
                <MapPin size={24} className="text-neon-blue-600 mr-4" />
                <span>123 Digital Way, Suite 400, Innovation City, CA 90210</span>
              </div>
            </div>
            <div className="mt-12 w-full max-w-md mx-auto md:mx-0 h-64 bg-muted rounded-lg shadow-lg flex items-center justify-center text-muted-foreground">
              {/* Placeholder for an embedded map */}
              <p>Map Placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;