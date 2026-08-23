import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <div className="project-card__header">
        <div>
          <p className="project-card__category">{project.category}</p>
          <h3>{project.title}</h3>
        </div>
        {project.featured && <span className="project-badge">Featured</span>}
      </div>

      <p className="project-card__summary">{project.summary}</p>

      <ul className="project-card__highlights">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="project-card__stack">
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-card__links">
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          <FaGithub size={16} />
          GitHub
        </a>
        <a href={project.demoUrl} target="_blank" rel="noreferrer">
          <ArrowUpRight size={16} />
          Live Demo
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
