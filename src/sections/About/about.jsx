import './about.css'
import Card from '../../components/Card'

const About = () => {
  return (
    <section id="about" className='about-container'>
      <h2>experience</h2>
      <div className="experience-container">
        <Card className="experience-card">
          <h4>Baker, Fortinos</h4>
          <p>Oakville, Ontario (2017 - 2018)</p>
          <p>Prepared and baked a variety of bakery products, maintained a clean and safe work environment.</p>
        </Card>
        <Card className="experience-card">
          <h4>Founder & Manager, Flipify</h4>
          <p>Toronto, Ontario (2017 - 2019)</p>
          <p>Started and managed a successful Discord-based business providing resale information for limited edition collectibles, handled customer service, billing, information sourcing, and community management.</p>
        </Card>
        <Card className="experience-card">
          <h4>Co-founder & Manager, CardHops</h4>
          <p>Toronto, Ontario (2019 - 2021)</p>
          <p>Launched and managed a paid Discord community offering information on sports and Pokémon card flipping and investment opportunities, collaborated with @resellcalendar to grow the business and provide valuable content to subscribers.</p>
        </Card>
        <Card className="experience-card">
          <h4>Product Manager, SportsCardInvestor</h4>
          <p>Atlanta, Georgia (2021 - 2022)</p>
          <p>Managed the development and launch of the Hits NFT app, collaborated with cross-functional teams to ensure product quality and timely delivery, gathered and analyzed user feedback to inform product improvements.</p>
        </Card>
      </div>
        <br></br>
      <h2>education</h2>
      <div className="education-container">
        <Card className="education-card">
          <h4>Toronto Metropolitan University</h4>
          <p>Bachelor of Commerce (BCOMM), Business Management (2019 - Present)</p>
        </Card>
        <Card className="education-card">
          <h4>App Academy</h4>
          <p>Full Stack Web Development (2022-2023)</p>
        </Card>
        <Card className="education-card">
          <h4>Garth Webb Secondary School</h4>
          <p>High School Diploma (2019)</p>
        </Card>
      </div>
    </section>
  )
}

export default About
