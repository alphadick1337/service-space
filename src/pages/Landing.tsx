import { motion } from "framer-motion";
import { ExternalLink, Zap, Code, Palette, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import caseStep1 from "@/assets/case-step1.jpg";
import caseStep2 from "@/assets/case-step2.jpg";
import caseResult from "@/assets/case-result.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(174_42%_40%/0.3),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(12_80%_62%/0.2),transparent_60%)]" />
        </div>
        <div className="relative container py-28 md:py-40 text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-8xl font-serif"
          >
            lovable
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto"
          >
            En utvärdering av AI-driven webbutveckling — ett skolprojekt
          </motion.p>
        </div>
      </section>

      {/* Om projektet */}
      <section id="about" className="container py-20 max-w-3xl space-y-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-3xl md:text-4xl font-serif text-foreground"
        >
          Om projektet
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-muted-foreground text-lg leading-relaxed"
        >
          Det här är ett skolprojekt där jag utvärderar verktyget <strong className="text-foreground">Lovable</strong> — en AI-plattform som genererar fullständiga webbapplikationer från text&shy;beskrivningar. Syftet är att undersöka hur effektivt verktyget är, vilka begränsningar som finns, och hur resultatet kan jämföras med traditionell webbutveckling.
        </motion.p>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="text-muted-foreground text-lg leading-relaxed"
        >
          Som en del av utvärderingen har jag byggt en tjänstemarknadsplats — "Tjänstbörsen" — helt med hjälp av Lovable, för att testa verktygets kapacitet i praktiken.
        </motion.p>
      </section>

      {/* Verktygsöversikt */}
      <section className="bg-secondary/40">
        <div className="container py-20 space-y-10">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-3xl md:text-4xl font-serif text-foreground"
          >
            Verktygsöversikt
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6 text-accent" />,
                title: "AI-generering",
                desc: "Beskriv vad du vill bygga med text och få en fungerande app genererad på sekunder.",
              },
              {
                icon: <Code className="w-6 h-6 text-primary" />,
                title: "React & TypeScript",
                desc: "Genererar modern kod med React, TypeScript, Tailwind CSS och Vite — redo för produktion.",
              },
              {
                icon: <Palette className="w-6 h-6 text-accent" />,
                title: "Design & UX",
                desc: "Bygger responsiva gränssnitt med animationer, teman och tillgänglighet inbyggt.",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
              >
                <Card className="h-full border-border/50 hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-3">
                    {feature.icon}
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
          >
            <a
              href="https://lovable.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              Besök Lovable <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Fallstudie */}
      <section className="container py-20 space-y-12">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-3xl md:text-4xl font-serif text-foreground"
        >
          Fallstudie
        </motion.h2>

        <div className="space-y-8">
          {[
            {
              step: "Steg 1",
              title: "Beskrivning av tjänsten",
              desc: "Jag beskrev en tjänstemarknadsplats med filtrering, bokningssystem och formulär för att lägga upp egna tjänster.",
              color: "bg-primary",
              image: caseStep1,
            },
            {
              step: "Steg 2",
              title: "Generering & iteration",
              desc: "Lovable genererade hela applikationen inklusive komponenter, routing och designsystem. Jag itererade med ytterligare instruktioner för att förbättra resultatet.",
              color: "bg-accent",
              image: caseStep2,
            },
            {
              step: "Resultat",
              title: "Färdig applikation",
              desc: "En fullt fungerande tjänstemarknadsplats med sökfunktion, kategorifilter, områdesfiltrering och bokningsformulär — byggd helt utan manuell kodning.",
              color: "bg-primary",
              image: caseResult,
            },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="flex gap-6 items-start"
            >
              <div className="flex flex-col items-center gap-2">
                <Badge className={`${item.color} text-primary-foreground px-3 py-1 text-xs font-sans`}>
                  {item.step}
                </Badge>
                {i < 2 && <div className="w-px h-16 bg-border" />}
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-serif text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                <div className="w-full h-48 rounded-lg bg-muted flex items-center justify-center text-muted-foreground text-sm border border-border/50">
                  Platshållare för skärmbild
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Analys */}
      <section className="bg-secondary/40">
        <div className="container py-20 space-y-10">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-3xl md:text-4xl font-serif text-foreground"
          >
            Analys
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" /> Fördelar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Extremt snabb prototypning — minuter istället för timmar",
                      "Genererar modern, välstrukturerad kod",
                      "Inbyggt designsystem med Tailwind CSS",
                      "Enkel iteration via naturligt språk",
                      "Stödjer TypeScript och React best practices",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-muted-foreground">
                        <ArrowRight className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-accent" /> Nackdelar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Begränsad kontroll över detaljerad arkitektur",
                      "Kan kräva manuella justeringar för komplex logik",
                      "Beroende av AI:ns tolkning av instruktioner",
                      "Begränsat stöd för backend-integration utan tillägg",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-muted-foreground">
                        <ArrowRight className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="max-w-3xl"
          >
            <h3 className="text-xl font-serif text-foreground mb-3">Sammanfattning</h3>
            <p className="text-muted-foreground leading-relaxed">
              Lovable visar stor potential som verktyg för snabb webbutveckling. Det är särskilt effektivt för prototypning och enklare applikationer. För mer komplexa projekt kan det fungera som en utmärkt startpunkt, men kräver sannolikt kompletterande manuellt arbete. Verktyget demokratiserar webbutveckling och gör det tillgängligt för fler.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          © 2026 Skolprojekt — AI-driven webbutveckling med Lovable
        </div>
      </footer>
    </div>
  );
};

export default Landing;
