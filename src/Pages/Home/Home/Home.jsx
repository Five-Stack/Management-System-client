import React from 'react'
import Department from '../DepartmentSection/Department'
import LabSection from '../LabSection/LabSection'
import TeacherSection from '../TeacherSection/TeacherSection'
import BannerSection from '../BannerSection/BannerSection'

const Home = () => {
  return (
    <>
      <BannerSection/>
      <Department></Department>
      <LabSection/>
      <TeacherSection/>
    </>
  )
}

export default Home