import React, { useState, useRef } from 'react';
import video from "./vide.mp4"; 
import thumbnail from "./Thumbnail.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPlay } from '@fortawesome/free-solid-svg-icons';

const Presentation = () => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    
    const backgroundStyle = {
        backgroundImage: 'url("https://vu.edu.bd/uploads/media/images/pcampus1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (playing) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setPlaying(!playing);
        }
    };

    const handlePlay = () => {
        videoRef.current.controls = true;
        togglePlay();
    };

    const handlePause = () => {
        videoRef.current.controls = false;
        togglePlay();
    };

    return (
        <div style={backgroundStyle} className='w-full p-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='relative w-full h-auto'>
                    <video
                        className='w-full h-auto'
                        ref={videoRef}
                        onClick={playing ? handlePause : handlePlay}
                        style={{
                            cursor: 'pointer',
                            maxWidth: '100%', 
                        }}
                        poster={thumbnail} 
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {!playing && (
                        <button
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            onClick={handlePlay}
                        >
                            <FontAwesomeIcon icon={faPlay} className="text-6xl text-white" />
                        </button>
                    )}
                </div>
                <div>
                    <p className="text-lg md:text-xl lg:text-5xl font-bold text-[#c44c2c]">Varendra University</p><br />
                <p className='text-xl '>    Varendra University is home to approximately 6,500 students, with a commendable record of 6,772 students having benefited from tuition fee scholarships to date. The institution boasts a robust faculty comprised of 152 full-time members and 40 adjunct professors. The university's operations are supported by 84 officials and 39 staff members. For educational activities, there are 58 classrooms available to accommodate the various academic programs offered.</p>
                </div>
            </div>

            <div className='mx-auto justify-center text-center items-center mt-20'><a href="https://maps.app.goo.gl/6eXysXYbV1y9qvxG6" className="relative rounded px-5 py-2.5 overflow-hidden group bg-[#c44c2c] hover:bg-gradient-to-r text-white hover:ring-2  hover:ring-green-400 ">
            <span className="relative">Locate us on Google Maps <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon></span>
          </a></div>
        </div>
    );
};

export default Presentation;
