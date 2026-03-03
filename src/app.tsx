import { motion } from "motion/react"
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router"
import { ColumnWipe } from "./components/column-wipe"
import { CustomCursor } from "./components/custom-cursor"
import { Footer } from "./components/footer"
import { Navbar } from "./components/navbar"
import { SmoothScroll } from "./components/smooth-scroll"
import { scrollToSection } from "./lib/scroll-to-section"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import {
  FeaturedProjects,
  Hero,
  IntroText,
  ServiceTrinity,
  ValuePropositions,
} from "./pages/home"
import { NotFound } from "./pages/not-found"
import { Portfolio } from "./pages/portfolio"
import { Services } from "./pages/services"

const Home = () => (
  <>
    <Hero />
    <IntroText />
    <FeaturedProjects />
    <ValuePropositions />
    <ServiceTrinity />
  </>
)

const ServicesSidebar = () => {
  const location = useLocation()
  if (location.pathname !== "/services") return null

  const links = [
    { label: "A", id: "service-a", title: "Videography" },
    { label: "B", id: "service-b", title: "Photography" },
    { label: "C", id: "service-c", title: "Graphic Design" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="fixed top-1/2 right-6 z-100 flex -translate-y-1/2 flex-col gap-4"
    >
      {links.map(({ label, id, title }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          title={title}
          className="flex h-8 w-8 items-center justify-center border border-current/20 bg-black/40 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-black"
        >
          {label}
        </button>
      ))}
    </motion.div>
  )
}

export default function App() {
  return (
    <Router>
      <CustomCursor />
      <div className="industrial-grid pointer-events-none fixed inset-0 opacity-20" />

      {/* Column Lines — z-[1] keeps them above the background but below page content (z-[2]) */}
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className="column-line"
          style={{ left: `${(100 / 6) * i}%` }}
        />
      ))}

      <Navbar />
      <ServicesSidebar />

      <ColumnWipe>
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </SmoothScroll>
      </ColumnWipe>
    </Router>
  )
}
