import { Link } from 'react-router-dom';
import { Course } from '../courses';

type CourseSummaryProps = {
  course: Course;
};

function CourseSummary({ course }: CourseSummaryProps) {
  return (
    <section key={course.id} className="summary">
      <div>
        <div className="title">
          <h2>
            <Link
              className="no-underline cursor-pointer"
              to={'/courses/' + course.id}
            >
              {course.title}
            </Link>
          </h2>
        </div>
        <p>
          <Link
            className="no-underline cursor-pointer"
            to={'/courses/' + course.id}
          >
            {course.description}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default CourseSummary;
