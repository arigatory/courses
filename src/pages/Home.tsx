import courses from '../courses'
import CourseSummary from '../components/CourseSummary'

function Home() {
  return (
    <div className="Home page">
      <header>
        <h1>Курсы Real Board Games</h1>
      </header>
      {courses.map((course) => (
        <CourseSummary course={course} key={course.id} />
      ))}
    </div>
  )
}

export default Home