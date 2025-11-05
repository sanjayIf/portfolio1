import { motion } from "framer-motion";
import { experience } from "@/data/content";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gradient-cyan">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className="relative pl-8 md:pl-20"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-6px] md:left-[26px] top-2 w-4 h-4 rounded-full bg-primary glow-cyan" />
                  
                  {/* Icon */}
                  <div className="absolute left-[-2px] md:left-[30px] top-12 w-6 h-6 text-primary hidden md:block">
                    <Briefcase className="w-full h-full" />
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-primary font-semibold mb-2">
                      {exp.company}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.duration}
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      {exp.summary}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
