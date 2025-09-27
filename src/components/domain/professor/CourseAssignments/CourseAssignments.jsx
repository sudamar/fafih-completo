import styles from '@/CourseAssignments.module.css';

const CourseAssignments = ({ courses = [] }) => {
  if (!courses.length) {
    return null;
  }

  return (
    <section className={styles.section} data-testid="professor-courses">
      <header>
        <h2>Cursos em que atua</h2>
        <p>
          Atribuições e papéis exercidos pelo professor nos cursos da instituição.
        </p>
      </header>

      <ul className={styles.list}>
        {courses.map((course) => (
          <li key={course.id || course.title}>
            <div>
              <strong>{course.title}</strong>
              {course.role && <span>{course.role}</span>}
            </div>
            {course.link && (
              <a href={course.link}>Ver detalhes</a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CourseAssignments;
