import { motion } from "motion/react"
import { Link, useParams } from "react-router"
import { CATEGORIES, type Project } from "../lib/categories"
import { TextReveal } from "../components/text-reveal"

// ─── Project card ─────────────────────────────────────────────────────────────
const ProjectCard = ({
  project,
  index,
}: {
  project: Project
  index: number
}) => (
  <motion.div
    className="group relative overflow-hidden"
    style={{ minHeight: "clamp(480px, 70vh, 780px)" }}
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{
      duration: 0.7,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    }}
  >
    {/* Image */}
    <img
      src={project.img}
      alt={project.title}
      loading="lazy"
      referrerPolicy="no-referrer"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    />

    {/* Gradient overlay */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

    {/* Bottom-left content */}
    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
      {/* Two category tags */}
      <div className="mb-3 flex items-center gap-2">
        <span className="bg-black/80 px-2.5 py-1 text-[9px] font-bold tracking-[0.22em] uppercase text-white/65 backdrop-blur-sm">
          {project.tags[0]}
        </span>
        <span className="bg-black/80 px-2.5 py-1 text-[9px] font-bold tracking-[0.22em] uppercase text-white/65 backdrop-blur-sm">
          {project.tags[1]}
        </span>
      </div>

      {/* Project title */}
      <h3 className="mb-4 font-display text-3xl uppercase leading-[0.9] text-white md:text-4xl">
        {project.title}
      </h3>

      {/* Descriptor tag — white pill with dot */}
      <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 text-[9px] font-bold tracking-[0.22em] uppercase text-black">
        <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-black/40" />
        {project.descriptor}
      </span>
    </div>
  </motion.div>
)

// ─── Category page ────────────────────────────────────────────────────────────
export const CategoryPage = () => {
  const { category: slug } = useParams<{ category: string }>()
  const category = CATEGORIES.find((c) => c.slug === slug)

  if (!category) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-8">
        <TextReveal text="NOT FOUND" className="massive-text text-[8vw]" immediate />
        <Link to="/portfolio" className="btn-industrial">
          ← Back to Portfolio
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="border-b border-white/10 px-8 pb-16 md:px-16">
        <Link
          to="/portfolio"
          className="mb-6 block text-[9px] font-bold tracking-[0.4em] uppercase text-white/30 transition-colors hover:text-white"
        >
          ← Portfolio
        </Link>
        <TextReveal
          text={category.name.toUpperCase()}
          className="massive-text text-[clamp(3rem,10vw,9rem)] leading-none"
        />
      </section>

      {/* 3 project cards side by side */}
      <div className="flex flex-col divide-y divide-white/10 md:flex-row md:divide-x md:divide-y-0">
        {category.projects.map((project, i) => (
          <div key={i} className="flex-1">
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-between border-t border-white/10 px-8 py-16 md:px-16">
        <Link to="/portfolio" className="btn-industrial">
          ← All Categories
        </Link>
        <Link to="/contact" className="btn-industrial">
          Start a Project →
        </Link>
      </div>
    </div>
  )
}
