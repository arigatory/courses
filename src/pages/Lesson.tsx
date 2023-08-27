import { Link, useParams } from 'react-router-dom'
import courses from '../courses'
import Vimeo from '@u-wave/react-vimeo';

function Lesson() {
  const { courseId, lessonId } = useParams()
  const course = courses.find(course => course.id === courseId)
  if (course === undefined) return <h1>No course</h1>
  const lesson = course.lessons.find(lesson => lesson.id === lessonId)
  if (lesson === undefined) return <h1>No lesson</h1>
  return (
    <div className="Lesson page">
      <header>
        <p>
          <Link to={'/courses/' + course.id}>Back to {course.title}</Link>
        </p>
        <h1>{lesson.title}</h1>
      </header>
      <div className="Content">
        <Vimeo video={lesson.vimeoId} responsive />
      </div>
    </div>
  )
}

export default Lesson