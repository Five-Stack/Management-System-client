import React from 'react'
import Department from '../DepartmentSection/Department'
import LabSection from '../LabSection/LabSection'
import TeacherSection from '../TeacherSection/TeacherSection'
import BannerSection from '../BannerSection/BannerSection'
import BenefitsSection from '../BenefitsSection/BenefitsSection'
import ContactUsSection from '../ContactUsSection/ContactUsSection'

const Home = () => {
  return (
    <>
      <BannerSection/>
      <BenefitsSection/>
      <Department />
      <LabSection/>
      <TeacherSection/>
      <ContactUsSection/>
    </>
  )
}

export default Home