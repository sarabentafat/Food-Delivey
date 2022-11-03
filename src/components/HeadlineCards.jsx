import React from 'react';
import AboutCard from './AboutCard';
import pc1 from '../assets/p4.jpg'
import pc2 from '../assets/p2.jpg'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 grid sm:grid-cols-2 lg:grid-cols-4 '>
        <AboutCard title='desserts' details=' best desrts u can find '
        img={pc1}
        />
    <AboutCard img={pc2} title='fast food' details =' hamburgr ,pizza'/>
    <AboutCard img={pc2}  title='desserts' details=' best desrts u can find '/>
    <AboutCard img={pc1}  title='fast food' details =' hamburgr ,pizza'/>
    <AboutCard  img={pc1}  title='desserts' details=' best desrts u can find '/>
    <AboutCard img={pc1}  title='fast food' details =' hamburgr ,pizza'/>
    </div>
  )
}

export default HeadlineCards