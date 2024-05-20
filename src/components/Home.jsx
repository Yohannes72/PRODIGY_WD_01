import React from 'react'
import Header from './Header'
import About from './About'
import Intern from './Intern'

function Home() {
  return (
	<>
	<Header />
	<div className='bg-[#0356D3] text-[#FFFFFF] h-80'>
		<div className='py-24'>


    <h1 className='justify-center text-6xl'>Prodigy InfoTech</h1>
	<p className='justify-center pt-8 pb-4 leading-5'>Providing World Class E-Learning Experince with Real world</p>
	<p className='justify-center leading-5 pb-2'>Internships</p>
	</div>
	</div>
	<About />
	<Intern />
	</>
  )
}

export default Home
