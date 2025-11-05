import { motion } from "framer-motion";
import { bio } from "@/data/content";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, Linkedin, Github, Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-cyan">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Let's discuss your next Unity project
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer" onClick={() => copyToClipboard(bio.email, "Email")}>
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">{bio.email}</p>
                </div>
                <Copy className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <div className="flex items-center gap-4 group cursor-pointer" onClick={() => copyToClipboard(bio.phone, "Phone")}>
                <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">{bio.phone}</p>
                </div>
                <Copy className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
              </div>

              <div className="pt-6 flex gap-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 flex-1"
                  asChild
                >
                  <a href={bio.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-secondary text-secondary hover:bg-secondary/10 flex-1"
                  asChild
                >
                  <a href={bio.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                toast({
                  title: "Form Submitted",
                  description: "This is a static demo. No data was sent.",
                });
              }}>
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
