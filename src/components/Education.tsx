import { motion } from "framer-motion";
import { education } from "@/data/content";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 md:px-8 lg:px-16 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gradient-orange">
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Card className="h-full bg-card border-border hover:border-secondary/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                        <GraduationCap className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 group-hover:text-gradient-orange transition-all">
                          {edu.degree}
                          {edu.field && ` - ${edu.field}`}
                        </CardTitle>
                        <CardDescription className="text-foreground/70">
                          {edu.institute}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground mt-2">
                          {edu.year}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
