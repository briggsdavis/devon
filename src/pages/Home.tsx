import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { TextReveal } from '../components/TextReveal';
import { useDynamicText } from '../components/DynamicBackground';

/* ─────────────────────────── Intro Section ─────────────────────────── */

export const Intro = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-4xl mx-auto px-8 text-center"
      >
        <TextReveal
          text="DEVON COLEBANK"
          className="text-[12vw] md:text-[8vw] massive-text leading-none text-white mb-12"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-neon-pink text-xs uppercase tracking-[0.5em] font-bold mb-10"
        >
          Videographer &middot; Photographer &middot; Designer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-lg md:text-xl leading-relaxed text-white/70 max-w-2xl mx-auto"
        >
          Design has always been more than a profession to me — it's the way I make
          sense of the world. From the first time I picked up a camera, I knew I
          wanted to tell stories that move people. Every frame I compose, every brand
          I shape, and every edit I craft is driven by an obsession with visual
          honesty and the belief that great design should feel inevitable.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg md:text-xl leading-relaxed text-white/50 max-w-2xl mx-auto mt-6"
        >
          I chase the intersection of raw emotion and meticulous craft — because the
          work that lasts is the work that makes you feel something.
        </motion.p>
      </motion.div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-24 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        <span className="text-[10px] uppercase tracking-widest text-white opacity-40">
          Scroll
        </span>
      </div>
    </section>
  );
};

/* ─────────────────────── Featured Projects ──────────────────────── */

const projects = [
  {
    title: 'Meridian',
    tags: ['Brand Film', 'Direction'],
    img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200',
    align: 'left' as const,
    width: 'md:w-3/5',
  },
  {
    title: 'Vertex',
    tags: ['Photography', 'Post-Production'],
    img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200',
    align: 'right' as const,
    width: 'md:w-4/5',
  },
  {
    title: 'Onyx',
    tags: ['Visual Identity', 'Art Direction'],
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200',
    align: 'left' as const,
    width: 'md:w-2/5',
  },
];

const ProjectCard = ({
  title,
  tags,
  img,
  align,
  width,
}: (typeof projects)[number]) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);
  const { textColor, textColorMuted } = useDynamicText();

  const textWidth =
    width === 'md:w-3/5'
      ? 'md:w-2/5'
      : width === 'md:w-4/5'
        ? 'md:w-1/5'
        : width === 'md:w-2/5'
          ? 'md:w-3/5'
          : 'md:w-2/5';

  return (
    <section ref={ref} className="py-32 px-8">
      <div
        className={`flex flex-col gap-12 items-center max-w-7xl mx-auto ${
          align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}
      >
        {/* Image */}
        <div className={`w-full relative aspect-[16/10] overflow-hidden ${width}`}>
          <motion.img
            style={{ y, scale, height: 'calc(100% + 200px)', top: '-100px' }}
            src={img}
            alt={title}
            className="absolute w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Text */}
        <motion.div className={`w-full space-y-5 ${textWidth}`} style={{ color: textColor }}>
          <div className="flex gap-3 flex-wrap">
            {tags.map((tag) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, x: align === 'left' ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-neon-pink text-xs uppercase tracking-[0.4em] font-bold"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          <TextReveal
            text={title}
            className="text-6xl md:text-8xl massive-text leading-none"
          />
        </motion.div>
      </div>
    </section>
  );
};

export const FeaturedProjects = () => {
  const { textColor } = useDynamicText();

  return (
    <div>
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}

      <div className="flex justify-center pb-24">
        <Link to="/portfolio">
          <motion.span
            style={{ color: textColor }}
            className="btn-industrial inline-block"
            whileHover={{ scale: 1.05 }}
          >
            See Portfolio
          </motion.span>
        </Link>
      </div>
    </div>
  );
};

/* ──────────────── Unique Value Propositions (Sticky Swap) ──────────────── */

const uvps = [
  {
    title: 'Story-Driven Craft',
    text: 'Every project begins with a narrative. I dig into the heart of your brand before a single frame is shot, ensuring the final product carries meaning that resonates far beyond aesthetics.',
    img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1400',
  },
  {
    title: 'End-to-End Vision',
    text: 'From concept to color grade, I own the entire creative pipeline. No hand-offs, no lost intent. The vision that starts on the mood board is the same one delivered on screen.',
    img: 'https://images.unsplash.com/photo-1505739998589-00fc462ffbef?auto=format&fit=crop&q=80&w=1400',
  },
  {
    title: 'Built for Impact',
    text: 'Design without purpose is decoration. I create work calibrated to move audiences — whether that means driving engagement, shifting perception, or sparking conversation.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=1400',
  },
];

export const ValueProps = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const { textColor, textColorMuted } = useDynamicText();

  /* Map scroll progress to a 0-2 range so we get 3 slots: 0, 1, 2 */
  const rawIndex = useTransform(scrollYProgress, [0, 1], [0, 2]);

  return (
    <div ref={containerRef} className="relative" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Image half */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
          {uvps.map((uvp, i) => {
            const imgOpacity = useTransform(
              rawIndex,
              i === 0
                ? [0, 0.4, 0.8]
                : i === 1
                  ? [0.6, 1, 1.4]
                  : [1.6, 2, 2],
              i === 0
                ? [1, 1, 0]
                : i === 1
                  ? [0, 1, 0]
                  : [0, 1, 1],
            );

            const imgScale = useTransform(
              rawIndex,
              i === 0
                ? [0, 0.8]
                : i === 1
                  ? [0.6, 1.4]
                  : [1.6, 2],
              [1.1, 1],
            );

            return (
              <motion.img
                key={i}
                src={uvp.img}
                alt={uvp.title}
                style={{ opacity: imgOpacity, scale: imgScale }}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            );
          })}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Text half */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center px-8 md:px-16">
          {uvps.map((uvp, i) => {
            const textOpacity = useTransform(
              rawIndex,
              i === 0
                ? [0, 0.2, 0.6, 0.8]
                : i === 1
                  ? [0.6, 0.8, 1.2, 1.4]
                  : [1.4, 1.6, 2, 2],
              i === 0
                ? [0, 1, 1, 0]
                : i === 1
                  ? [0, 1, 1, 0]
                  : [0, 1, 1, 1],
            );

            const textY = useTransform(
              rawIndex,
              i === 0
                ? [0, 0.2, 0.6, 0.8]
                : i === 1
                  ? [0.6, 0.8, 1.2, 1.4]
                  : [1.4, 1.6, 2, 2],
              [40, 0, 0, -40],
            );

            return (
              <motion.div
                key={i}
                style={{ opacity: textOpacity, y: textY }}
                className="absolute max-w-lg space-y-6"
              >
                <motion.span
                  className="text-neon-pink text-xs uppercase tracking-[0.4em] font-bold block"
                >
                  0{i + 1}
                </motion.span>
                <motion.h2
                  style={{ color: textColor }}
                  className="text-5xl md:text-7xl massive-text leading-none"
                >
                  {uvp.title}
                </motion.h2>
                <motion.p
                  style={{ color: textColorMuted }}
                  className="text-lg leading-relaxed"
                >
                  {uvp.text}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────── Services Preview ─────────────────────── */

const services = [
  {
    title: 'Videography',
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Photography',
    img: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Graphic Design',
    img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
  },
];

export const ServicesPreview = () => {
  const { textColor, textColorMuted } = useDynamicText();

  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <motion.h2
          style={{ color: textColor }}
          className="text-[15vw] md:text-[10vw] massive-text leading-none text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Services
        </motion.h2>

        {/* Staggered service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {services.map((service, i) => {
            const staggerOffset = i === 0 ? 'md:mt-0' : i === 1 ? 'md:mt-16' : 'md:mt-32';

            return (
              <motion.div
                key={service.title}
                className={staggerOffset}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Title */}
                <motion.h3
                  style={{ color: textColor }}
                  className="text-3xl md:text-4xl massive-text leading-none"
                >
                  {service.title}
                </motion.h3>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-24">
          <Link to="/services">
            <motion.span
              style={{ color: textColor }}
              className="btn-industrial inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Discover More
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────── Brand Marquee (kept) ─────────────────────── */

export const BrandMarquee = () => {
  const logos = ['NIKE', 'APPLE', 'TESLA', 'SONY', 'ADIDAS', 'BMW', 'AUDI', 'NASA'];
  const { textColor } = useDynamicText();

  return (
    <div className="py-24 border-y border-white/10 overflow-hidden bg-white/5 backdrop-blur-sm">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex gap-24 whitespace-nowrap"
      >
        {[...logos, ...logos].map((logo, i) => (
          <motion.span
            key={i}
            style={{ color: textColor }}
            className="text-6xl font-black massive-text opacity-10 hover:opacity-100 transition-opacity"
          >
            {logo}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
