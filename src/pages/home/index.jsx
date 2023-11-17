import React from 'react'
import Header from '../../components/header'
// import phoneimg  from '../../../src/assets/image5.png'
import img2 from '../../../src/assets/fahim-muntashir-v-FOvoL3onk-unsplash.png'
import img3 from '../../../src/assets/Group 1000002691.png'
import img4 from '../../../src/assets/Group 1000002692 (1).svg'
import img5 from '../../../src/assets/Group 1000002693 (1).svg'
import img6 from '../../../src/assets/Group 1000002699.png'
import img7 from '../../../src/assets/image 7.png'
import img8 from '../../../src/assets/image 1.png'
import img9 from '../../../src/assets/Vector.svg'
import img10 from '../../../src/assets/Group 237.svg'



function HomePage() {
  return (
    <div className='w-full'>
      <Header />
      <div className='w-full p-8 md:p-16 lg:p- container'>

        <div className='flex flex-col md:flex-row justify-between items-center'>
          <p className='font-bold text-2xl md:text-4xl lg:text-2xl text-center md:text-left mb-4 md:mb-0'>
            A space where Innovation Meets Excellence!
          </p>
          {/* <img src={phoneimg} alt='' className='w-full md:w-1/2 lg:w- mx-auto md:mx-0'></img> */}
        </div>

        <div className='mt-8 text-center md:text-left'>
          <p className='text-lg md:text-xl'>We are keen on turning <br /> your idea into reality</p>
          <p className='text-lg md:text-xl'>Working with you to overcome your business <br />challenges using technology.</p>
        </div>

        <div className='mt-8 flex flex-col md:flex-row gap-10'>
          <img src={img2} alt='' className='w-full md:w-1/2 lg:w-1/3'></img>
          <div className='mt-4 md:mt-0'>
            <div className='border-2 rounded-2xl text-white bg-blue w-fit h-fit p-3 font-bold'>
              We are an expert team 
            </div>
            <div className='mt-4'>
              <div className='text-xl font-bold mb-2'>Who are we?</div>
              <p className='text-base md:text-lg lg:text-xl'>
                We build custom software that drives innovation and social impact. Techend LTD is one of the fastest-growing 
                IT companies providing various solutions and services across industries. We provide complete solutions 
                that include the development of mobile apps, web apps, and fin-tech solutions. Our client base has grown exponentially within years,
                 including clients from America, Australia, the United Kingdom, Saudi Arabia, Germany, India, Russia, and the Central Republic of Africa.
                  Our current target is to provide cost-effective & user-friendly solutions using the latest technological trends.
              </p>
            </div> 
          </div>  
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:w-full mt-10 lg:mt-20 gap-5'>
          <div className='border-2 rounded-lg p-5 md:p-10'>
            <p className='font-bold text-lg'>Our vision</p>
            <p>Crafting Tomorrow's Possibilities</p>
            <p>We envision a future where technology seamlessly integrates with human potential, transforming challenges into opportunities. 
              At Techend, we strive to redefine industries, elevate experiences, and spark the evolution of possibilities through our innovative solutions.</p>
          </div>
          <div className='border-2 rounded-lg p-5 md:p-10'>
            <p className='font-bold text-lg'>Our mission</p>
            <p>Innovation, Integrity, Impact</p>
            <p>Our mission is to drive innovation with unwavering integrity, creating solutions that not only
               meet the needs of today but anticipate the demands of tomorrow. We aim to make a lasting impact,
                empowering businesses to thrive in the fast-paced world of technology.</p>
          </div>
        </div>
        <div className='mt-[100px]'>
          <div>
            Our services
          </div>
          <p>The entire cycle of digital transformation effortlessly handled for you.</p>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:w-full mt-10 lg:mt-20 gap-5'>
            <div className=' p-5 md:p-10'>
              <img src={img3} alt=''></img>
              <p className='text-sm font-bold mb-2'>IT Audit and Advisory</p>
              <p>At TechEnd Ltd, we take pride in offering cutting-edge IT Audit and Advisory 
                services designed to fortify the technological backbone of your business. In an era where digital
                 landscapes evolve rapidly, our commitment is to ensure that your business not only keeps pace but stays ahead.</p>
            </div>
            <div className=' p-5 md:p-10'>
              <img src={img4} alt=''></img>
              <p className='text-sm font-bold mb-2'>UX/UI Graphic Design and Prototyping</p>
              <p>At TechEnd Ltd, we take pride in offering cutting-edge IT Audit and Advisory services 
                designed to fortify the technological backbone of your business. In an era where digital landscapes evolve rapidly, 
                our commitment is to ensure that your business not only keeps pace but stays ahead.</p>
            </div>
            <div className=' p-5 md:p-10'>
              <img src={img3} alt=''></img>
              <p className='text-sm font-bold mb-2'>Custom Software Development</p>
              <p>At TechEnd Ltd, we redefine possibilities through our bespoke Custom Software Development service. 
                As a pioneering force in the tech industry, we understand that off-the-shelf solutions don't always cut it.
                 That's where our commitment to crafting tailor-made software comes into play.</p>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:w-full mt-10 lg:mt-20 gap-5'>
            <div className=' p-5 md:p-10'>
              <img src={img6} alt=''></img>
              <p className='text-sm font-bold mb-2'>Mobile App Development</p>
              <p>At TechEnd Ltd, we redefine possibilities through our cutting-edge Mobile App Development service.
                 Our commitment is to transform your unique ideas into functional and engaging mobile applications
                  that stand out in the digital landscape.</p>
            </div>
            <div className=' p-5 md:p-10'>
              <img src={img3} alt=''></img>
              <p className='text-sm font-bold mb-2'>Software as a service (SaaS)</p>
              <p>I am delighted to introduce you to TechEnd Ltd, a pioneering company at the forefront of
                 providing cutting-edge Software as a Service (SaaS) solutions. TechEnd Ltd is committed to revolutionizing 
                 the way businesses operate by delivering innovative and scalable software solutions that cater to the evolving needs of the digital landscape.</p>
            </div>
            <div className=' p-5 md:p-10'>
              <img src={img5} alt=''></img>
              <p className='text-sm font-bold mb-2'>Other Services</p>
              <p>At TechEnd Ltd, we believe in going beyond the expected, and our commitment to innovation extends to our 
                comprehensive suite of services. Introducing "Other Services" – a category that goes beyond conventional offerings, 
                designed to cater to your unique needs and elevate your experience with us.</p>
            </div>
          </div>
          
           <div className='flex flex-col md:flex-row justify-between items-center'>
              <div className='text-center md:text-left mb-4 md:mb-0'>
                <p className='font-bold text-2xl'>Our Portfolio</p>
                <p>As a beacon of innovation and a steadfast partner in your technological <br /> endeavors.</p>
                <p className='font-bold mt-[15px]'>Want to see our projects?  Click on the Button!</p>
                <p className='mt-[15px]'>We are delighted to present our portfolio, a testament to our commitment to excellence, innovation, and the relentless pursuit of technological advancements. At TechEnd Ltd, we don't just provide services; we craft transformative solutions that propel businesses into the future.
                <p className='mt-[15px]'>our portfolio, a testament to our commitment to <br /> excellence, innovation,
                  and the relentless pursuit of technological <br /> advancements. At TechEnd Ltd, we don't just provide services; we craft <br /> 
                  transformative solutions that propel businesses into the future. <br /></p>
                </p>
              </div>
              <img src={img7} alt='' className='w-full md:w-1/2 lg:w- mx-auto md:mx-0'></img>
           </div>
        </div>
        <div>
          <div>
            <p>Meet Our Talented Team</p>
            <p>We are already a Family of a vital number of Talented Individuals & Growing.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:w-full mt-10 lg:mt-20 gap-5'>
              <div className=' p-5 md:p-10'>
                <img src={img8} alt='' className=' border-8 rounded-full border-green' ></img>
                <p className='border-2 rounded-full bg-blue text-center w-fit mx-auto p-3  mt-5'>01</p>
                <p className='text-center'>OLADEJO SHERIFF</p>
                <div className='bg-[#FFD400] h-0.5 w-[140px]  mx-auto'></div>
                <p className='font-bold text-center'>Managing Director</p>
              </div>
              <div className=' p-5 md:p-10'>
                <img src={img8} alt='' className=' border-8 rounded-full border-green'></img>
                <p className='border-2 rounded-full bg-blue text-center w-fit mx-auto p-3  mt-5'>01</p>
                <p className='text-center'>NURUDEEN SAKA</p>
                <div className='bg-[#FFD400] h-0.5 w-[140px]  mx-auto'></div>
                <p className='font-bold text-center'>Chief Tech Officer</p>
              </div>
              <div className=' p-5 md:p-10'>
                <img src={img8} alt='' className=' border-8 rounded-full border-green'></img>
                <p className='border-2 rounded-full bg-blue text-center w-fit mx-auto p-3  mt-5'>01</p>
                <p className='text-center'>TAIWO KAFFO</p>
                <div className='bg-[#FFD400] h-0.5 w-[140px]  mx-auto'></div>
                <p className='font-bold text-center'>Executive Director</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div>
            <p>Our clients</p>
            <p>Here are what our esteemed satisfied clients have to say about us.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:w-full mt-10 lg:mt-20 gap-5'>
            <div className='border-2 rounded-lg border-[#FFD400] h-[500px] p-5 md:p-10'>
              <p className='text-center font-bold text-lg'>Mr. Sheriff Alubankudi</p>
              <div className='flex justify-center mt-[20px]'>
                <img src={img9} alt='' className='  w-[25px]'></img>
                <img src={img9} alt='' className='  w-[25px]'></img>
                <img src={img9} alt='' className='  w-[25px]'></img>
                <img src={img9} alt='' className='  w-[25px]'></img>
                <img src={img9} alt='' className='  w-[25px]'></img>
              </div>
              <div className='bg-[#676767] h-0.5 max-w-[600px] mx-auto mt-20 lg:mt-[20px]'></div>
              <p className='text-center mt-[20px]'>Obviously it’s natural to be skeptical digital <br /> presence. After we stumble Paysmosmo idea;
                the option <br /> that was on the table is Techend Incubation <br /> which they did in a short while</p>
                <p className='text-center mt-[50px]'><a href="https://www.paysmosmo.com/"> www.paysmosmo.com </a></p>
            </div>
            <div className='border-2 rounded-lg border-[#FFD400] p-5 md:p-10'>
              <p className='text-center font-bold text-lg'>AbdurRauf Oyemala</p>
                <div className='flex justify-center mt-[20px]'>
                  <img src={img9} alt='' className='  w-[25px]'></img>
                  <img src={img9} alt='' className='  w-[25px]'></img>
                  <img src={img9} alt='' className='  w-[25px]'></img>
                  <img src={img9} alt='' className='  w-[25px]'></img>
                  <img src={img9} alt='' className='  w-[25px]'></img>
                </div>
                <div className='bg-[#676767] h-0.5 max-w-[600px] mx-auto mt-20 lg:mt-[20px]'></div>
                <p className='text-center mt-[20px]'>Obviously it’s natural to be skeptical digital <br /> presence. After we stumble Paysmosmo idea;
                  the option <br /> that was on the table is Techend Incubation <br /> which they did in a short while</p>
                <p className='text-center mt-[50px]'><a href="https://www.paysmosmo.com/"> www.avi.org </a></p>
                
            </div>
            
          </div>
          <img src={img10} alt='' className='mx-auto mt-[20px]'></img>
        </div>
        <div className='mt-10 sm:mt-20 md:mt-32 lg:mt-48'>
          <div className='border-2 bg-[#fafafa] p-8 md:p-12 lg:p-16'>
            <p className='font-bold text-lg'>Got a project in mind?</p>
            <p>Helping in bringing your Ideas to Reality.</p>
            <label htmlFor="Email"></label>
            <input type="email" placeholder='Enter your email' className='w-full md:w-96 h-12 border-2 mt-6 md:mt-8 placeholder-p-4' />
            <label htmlFor="text"></label>
            <input type="text" placeholder='Enter your message' className='w-full h-32 border-2 mt-4 md:mt-6 placeholder-p-2' />
            <button className='bg-blue p-4 rounded-lg mt-6'>Send to us</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HomePage