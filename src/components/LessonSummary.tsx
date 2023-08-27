import { Link } from 'react-router-dom'
import { Lesson } from '../courses'

type LessonSummaryProps = {
  lesson: Lesson;
  courseId: string;
  num: number;
}

function LessonSummary({lesson, courseId, num }:LessonSummaryProps) {
  return (
    <section key={lesson.id} className="summary">
      <div>
        <div className="title">
          <h2>
            <Link
              className="no-underline cursor-pointer"
              to={'/courses/' + courseId + '/lessons/' + lesson.id}
            >
              {num}. {lesson.title}
            </Link>
          </h2>
        </div>
        <p>
          <Link
            className="no-underline cursor-pointer"
            to={'/courses/' + courseId + '/lessons/' + lesson.id}
          >
            {lesson.description}
          </Link>
        </p>
      </div>
    </section>
  )
}

export default LessonSummary