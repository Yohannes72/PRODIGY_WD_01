import React from 'react'
import Header from './Header'

function About() {
  return (
	<>
	<Header />
	<div className='my-20 bg-[F3F4FE'>
		<div className='shadow-lg shadow-black/20 dark:shadow-black/40 ml-20 mr-20 ring-[0000005C] h-200 flex'>
			<div>
			<div className='pt-10 pl-5'>
			<h1 className='bg-blue-700 w-24 ml-5 text-white py-2 '> About Us</h1>
			</div>
			<div id='about' className='w-64 pt-5 text-lg'>
			<h1 className='pl-10'><b>Transforming the Way</b> </h1>
			<h1 className='pr-5'><b>People Learn</b></h1>
			</div>

			<div className='pt-5 w-96 pl-4'>
				<article className='text-balance'>
				<p>
                        Our mission is to create innovative and accessible learning solutions that empower people of all ages and backgrounds to achieve their full potential. Whether you're a student looking to improve your grades,
                        a professional seeking to upskill, or an organization looking to enhance employee training.
                     </p>
				</article>

			</div>

			<div className='pt-10 w-96 pl-4'>
				<article className='text-balance'>
				<p>If you're looking for an innovative and dynamic learning experience that will help you achieve your goals and unlock your full potential, we invite you to join us on this exciting journey. Together, we can transform the way we learn and create a better future for all.
                     </p>
				</article>

			</div>
			</div>


			<div className='pl-20'>
				<img src={"https://prodigyinfotech.dev/assets/images/about/about-image.svg"} alt=""/>
			</div>

	</div>
	</div>
	</>

  )
}

export default About
