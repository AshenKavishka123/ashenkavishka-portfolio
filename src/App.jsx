import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Sparkles,
  Star,
  X,
} from 'lucide-react';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import SectionHeader from './components/SectionHeader';
import ProjectCard from './components/ProjectCard';
import { education, experience, navLinks, profile, projects, skillGroups } from './data/portfolioData';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  mail: FaEnvelope,
  whatsapp: FaWhatsapp,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <nav className="navbar container" aria-label="Main navigation">
          <a href="#home" className="brand" aria-label="Ashen Kavishka home">
            AK
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className={`nav-panel ${menuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a href={profile.cvPath} className="nav-cta" download>
              <Download size={16} />
              Download CV
            </a>
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="hero section">
          <div className="container hero-grid">
            <motion.div
              className="hero-copy"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <p className="eyebrow">Hello, I&apos;m</p>

              <h1>Ashen Kavishka</h1>

              <h3 className="hero-subtitle">Quality Assurance Engineer | Automation Enthusiast</h3>
              <h5>Test. Automate. Improve. Deliver.</h5>

              <p className="hero-text">
                Welcome to my personal portfolio. I’m a Quality Assurance Engineer with more than two years of experience in software testing, automation, and quality engineering. This website showcases my professional journey, technical skills, projects, and experience in building reliable and high-quality software through effective testing and continuous improvement.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="primary-btn">
                  View My Work
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="social-row" aria-label="Social media links">
                {['GitHub', 'LinkedIn', 'Email', 'WhatsApp'].map((label) => {
                  const social = profile.socials.find((s) => s.label === label);
                  const Icon = social ? iconMap[social.icon] : FaGithub;
                  const href = social
                    ? social.href
                    : label === 'Email'
                    ? `mailto:${profile.email}`
                    : '#';

                  return (
                    <a
                      key={label}
                      href={href}
                      target={href && href.startsWith('http') ? '_blank' : undefined}
                      rel={href && href.startsWith('http') ? 'noreferrer' : undefined}
                      aria-label={label}
                      title={label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            <motion.aside
              className="hero-panel"
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <div className="panel-badge">
                <Sparkles size={16} />
                Available for opportunities
              </div>

              <div className="profile-card">
                <div className="profile-avatar">
                  <img
                    src="/profile.jpg"
                    alt="Ashen Kavishka"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px', display: 'block' }}
                    onLoad={(e) => {
                      const fb = e.currentTarget.nextElementSibling;
                      if (fb) fb.style.display = 'none';
                    }}
                    onError={(e) => {
                      // hide broken image so fallback initials remain visible
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="avatar-fallback">AK</div>
                </div>

                <div>
                  <h2>Ashen Kavishka</h2>
                  <p>Quality Assurance Engineer</p>
                </div>
              </div>

              <div className="info-list">
                <div className="info-item">
                  <MapPin size={16} />
                  <span>{profile.location}</span>
                </div>
                <div className="info-item">
                  <Mail size={16} />
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </div>

            </motion.aside>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="About me"
              title="Passionate About Quality, Driven by Excellence"
              description="Detail oriented Quality Assurance Engineer with more than 2 years of experience, including roles as an
Intern and Associate QA Engineer at Cloud Solutions International, and a graduate from the Faculty of
Information Technology, University of Moratuwa. Experienced in manual and automated testing with
hands on expertise in API, UI, and mobile automation, as well as performance testing. Skilled in test
design, defect management, and working in Agile environments to deliver reliable, high-quality
software solutions. Strong analytical skills with a commitment to continuous learning and improving
testing efficiency."
            />

            <div className="about-grid">
              <motion.div
                className="about-copy"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                <p>
                  My work sits at the intersection of quality engineering, test automation, and software development. I enjoy understanding how a product works from both the technical and user perspectives, identifying potential risks, and designing effective testing strategies that help deliver reliable and user-friendly software.
                </p>
                <p>
                  I have hands-on experience across manual and automated testing, including API, UI, mobile, and performance testing. I enjoy transforming repetitive testing activities into efficient automation, while ensuring that automation is meaningful, maintainable, and aligned with real business requirements.
                </p>
              </motion.div>

              <motion.div
                className="value-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
              >
                <div className="value-card">
                  <CheckCircle2 size={20} />
                  <div>
                    <h3>Quality-first Mindset</h3>
                    <p>Identifying risks early and ensuring quality throughout the development lifecycle.</p>
                  </div>
                </div>
                <div className="value-card">
                  <Star size={20} />
                  <div>
                    <h3>Automation & Efficiency</h3>
                    <p>Using automation to reduce repetitive work, improve coverage, and accelerate feedback.</p>
                  </div>
                </div>
                <div className="value-card">
                  <BriefcaseBusiness size={20} />
                  <div>
                    <h3>Product Mindset</h3>
                    <p>Looking beyond defects to deliver reliable, usable, and user-focused software.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Professional experience"
              title="Where Quality Meets Engineering"
              description="Building reliable software through quality assurance, automation, and continuous improvement."
            />

            <div className="timeline">
              {experience.map((item) => (
                <motion.article
                  key={`${item.company}-${item.role}`}
                  className="timeline-card"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="timeline-head">
                    <div>
                      <p className="timeline-role">{item.role}</p>
                      <h3>{item.company}</h3>
                    </div>
                    <span>{item.period}</span>
                  </div>

                  <p className="timeline-summary">{item.summary}</p>
                  <ul>
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section alt-section">
          <div className="container">
            <SectionHeader
              eyebrow="Skills"
              title="Quality in My Toolkit"
              description="The tools and technologies I use to test, automate, analyze, and improve software quality."
            />

            <div className="skill-grid">
              {skillGroups.map((group) => (
                <motion.div
                  key={group.title}
                  className="skill-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section alt-section">
          <div className="container">
            <SectionHeader
              eyebrow="Projects"
              title="From Ideas to Solutions"
              description="Exploring projects that combine technology, creativity, and real world problem solving."
            />

            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Education"
              title="Where It All Began"
              description="The academic experiences that shaped my technical foundation and passion for technology."
            />

            <div className="education-grid">
              {education.map((entry) => (
                <motion.article
                  key={`${entry.school}-${entry.degree}`}
                  className="education-card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="education-icon">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <p className="education-period">{entry.period}</p>
                    <h3>{entry.degree}</h3>
                    <p className="education-school">{entry.school}</p>
                    <p>{entry.summary}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <SectionHeader
                eyebrow="Contact"
                title="Let’s Start a Conversation"
                description="Whether it’s a career opportunity, collaboration, or simply a conversation about technology, feel free to reach out."
              />

              <div className="contact-links">
                <a href={`mailto:${profile.email}`}>
                  <Mail size={18} />
                  {profile.email}
                </a>
                <a href="https://wa.me/94704055549" target="_blank" rel="noreferrer">
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                <a href="https://www.linkedin.com/in/ashen-kavishka" target="_blank" rel="noreferrer">
                  <FaLinkedinIn size={18} />
                  LinkedIn
                </a>
              </div>
            </div>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              <label>
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" aria-label="Name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" aria-label="Email" required />
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows="5" placeholder="Tell me about your project or opportunity" aria-label="Message" required />
              </label>

              <button type="submit" className="primary-btn submit-btn">
                Send Message
                <ExternalLink size={18} />
              </button>

              {submitted && <p className="success-message">Your message has been drafted. I&apos;ll be in touch soon.</p>}
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} {profile.name}. Crafted with care.</p>
          <a href="#home">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;