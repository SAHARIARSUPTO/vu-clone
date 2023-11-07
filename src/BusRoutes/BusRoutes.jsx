import { faBus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Navbar from '../Home/Navbar';
import "./BusRoutes.css";
import bus from "./bus.png";
import Footer from "../Footer/Footer.jsx";
const BusRoutes = () => {
  
  useEffect(() => {
    // Add a class to the timeline to start the animation when the component mounts
    document.querySelector('.vertical-timeline').classList.add('start-animation');
  }, []);
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
     <div className='parent flex'>

<div> <div>
      <div className='mt-10'>
        <div><p className='font-bold text-xl text-[#c44c2c] text-center justify-center mx-auto'>Route-1</p></div>
        <img className='w-1/5 text-center justify-center mx-auto rounded-2xl' src="https://scontent.fdac148-1.fna.fbcdn.net/v/t1.6435-9/67404461_2348395345426818_2841625842788859904_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeEzSU2GXQ2mVRFDrWk52HlZeh7lIOnzGnJ6HuUg6fMactz7HZeOZyQsdz3IiJ8vYp2cSPrvxx67AsRcHms7rH4S&_nc_ohc=wym5xAoad9oAX9GjZSz&_nc_ht=scontent.fdac148-1.fna&oh=00_AfBt_4iJWJtErlVJJ_Wt0XWizCbZ5YllLh5YSZs3TsrAug&oe=657111EE" alt="" />
      </div>
      <VerticalTimeline className="relative vertical-timeline">
      {/* Each VerticalTimelineElement represents a bus stop */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ boxShadow: 'none' }} 
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date=" VU Campus - 9.15AM/1.00PM/3.00PM/05.10PM"
        iconStyle={{ background: '#c44c2c', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faBus}></FontAwesomeIcon>}
      >
        {/* Content for VU Campus */}
      </VerticalTimelineElement>

      {/* Repeat for other stops */}
      {/* CNB More */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="8.20AM/10.00PM/01.50PM/03/50PM - Veripara"
        iconStyle={{ background: '#c44c2c', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faBus}></FontAwesomeIcon>}
      >
        {/* Content for CNB More */}
      </VerticalTimelineElement>

   
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="C&B More" 
        icon={<FontAwesomeIcon icon={faBus}></FontAwesomeIcon>}
        iconStyle={{ background: '#c44c2c', color: '#fff' }}
      >
        {/* Content for Zero Point */}
      </VerticalTimelineElement>


      {/* Zero Point */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Zero Point" 
        icon={<FontAwesomeIcon icon={faBus}></FontAwesomeIcon>}
        iconStyle={{ background: '#c44c2c', color: '#fff' }}
      >
        {/* Content for Zero Point */}
      </VerticalTimelineElement>

      {/* Alupotti */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Alupotti"
        icon={<FontAwesomeIcon icon={faBus}></FontAwesomeIcon>}
        iconStyle={{ background: '#c44c2c', color: '#fff' }}
      >
        {/* Content for Alupotti */}
      </VerticalTimelineElement>




      {/* Hadir More */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="8.30 AM - Hadir More"
        icon={<FontAwesomeIcon icon={faBus}></FontAwesomeIcon>}
        iconStyle={{ background: '#c44c2c', color: '#fff' }}
      >
        {/* Content for Hadir More */}
      </VerticalTimelineElement>

 {/* Alupotti */}
 <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Talaimari"
        icon={<FontAwesomeIcon icon={faBus}></FontAwesomeIcon>}
        iconStyle={{ background: '#c44c2c', color: '#fff' }}
      >
        {/* Content for Alupotti */}
      </VerticalTimelineElement>



      {/* Oktroi More */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Oktroi More"
        icon={<FontAwesomeIcon icon={faBus}></FontAwesomeIcon>}
        iconStyle={{ background: '#c44c2c', color: '#fff' }}
      >
        {/* Content for Oktroi More */}
      </VerticalTimelineElement>

      {/* VU Campus - Ending Point */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="8.50 AM - VU Campus"
        icon={<FontAwesomeIcon icon={faBus}></FontAwesomeIcon>}
        iconStyle={{ background: '#c44c2c', color: '#fff' }}
       >
        {/* Content for VU Campus */}
      </VerticalTimelineElement>
    </VerticalTimeline>
      </div></div>
<div className='child-two'>
<div>
      <div className='mt-10'>
        <div><p className='font-bold text-xl text-[#c44c2c] text-center justify-center mx-auto'>Route-2</p></div>
        <img className='w-1/5 text-center justify-center mx-auto rounded-2xl' src="https://scontent.fdac148-1.fna.fbcdn.net/v/t1.6435-9/67404461_2348395345426818_2841625842788859904_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeEzSU2GXQ2mVRFDrWk52HlZeh7lIOnzGnJ6HuUg6fMactz7HZeOZyQsdz3IiJ8vYp2cSPrvxx67AsRcHms7rH4S&_nc_ohc=wym5xAoad9oAX9GjZSz&_nc_ht=scontent.fdac148-1.fna&oh=00_AfBt_4iJWJtErlVJJ_Wt0XWizCbZ5YllLh5YSZs3TsrAug&oe=657111EE" alt="" />
      </div>
      <VerticalTimeline className="relative vertical-timeline">
      {/* Each VerticalTimelineElement represents a bus stop */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ boxShadow: 'none' }} 
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="VU Campus - 9.15AM/1.00PM/3.00PM/05.10PM"
        iconStyle={{ background: '#c44c2c', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faBus}></FontAwesomeIcon>}
      >
        {/* Content for VU Campus */}
      </VerticalTimelineElement>

      {/* Repeat for other stops */}
      {/* CNB More */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="8.20AM/10.00PM/01.50PM/03/5.10PM - Court Station"
        iconStyle={{ background: '#c44c2c', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faBus}></FontAwesomeIcon>}
      >
        {/* Content for CNB More */}
      </VerticalTimelineElement>

      {/* Zero Point */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Bohorompur Mor" 
        icon={<FontAwesomeIcon icon={faBus}></FontAwesomeIcon>}
        iconStyle={{ background: '#c44c2c', color: '#fff' }}
      >
        {/* Content for Zero Point */}
      </VerticalTimelineElement>

      {/* Alupotti */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="City Bypass"
        icon={<FontAwesomeIcon icon={faBus}></FontAwesomeIcon>}
        iconStyle={{ background: '#c44c2c', color: '#fff' }}
      >
        {/* Content for Alupotti */}
      </VerticalTimelineElement>

      {/* Hadir More */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Bornali Mor"
        icon={<FontAwesomeIcon icon={faBus}></FontAwesomeIcon>}
        iconStyle={{ background: '#c44c2c', color: '#fff' }}
      >
        {/* Content for Hadir More */}
      </VerticalTimelineElement>

      {/* Oktroi More */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Railgate"
        icon={<FontAwesomeIcon icon={faBus}></FontAwesomeIcon>}
        iconStyle={{ background: '#c44c2c', color: '#fff' }}
      >
        {/* Content for Oktroi More */}
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Amchottor"
        icon={<FontAwesomeIcon icon={faBus}></FontAwesomeIcon>}
        iconStyle={{ background: '#c44c2c', color: '#fff' }}
       >
        {/* Content for VU Campus */}
      </VerticalTimelineElement>

      {/* VU Campus - Ending Point */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="8.50 AM - VU Campus"
        icon={<FontAwesomeIcon icon={faBus}></FontAwesomeIcon>}
        iconStyle={{ background: '#c44c2c', color: '#fff' }}
       >
        {/* Content for VU Campus */}
      </VerticalTimelineElement>
    </VerticalTimeline>
      </div>
</div>

     </div>
  <Footer></Footer>
    </div>



  );
};

export default BusRoutes;
