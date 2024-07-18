import OracleLogo from '../assets/logos/oracle.png';
import DynamatixLogo from '../assets/logos/dynamatix.jpeg';
import OjasLogo from '../assets/logos/ojas.jpeg';

function InternshipCard() {
    return (
        <div>

            <div className=' flex flex-row my-4'>
                <img src={OracleLogo} alt="OracleLogo" className='max-sm:w-[20%] lg:w-[10%] max-h-[80px]' />
                <div className=' max-sm:w-[80%] lg:w-[90%] lg:ml-8'>
                <div className=' flex flex-row justify-between'>
                    <div className='font-bold'>Oracle</div>
                    <div className='text-end'>January'24 - July'24</div>
                </div>
                <div className='my-1'><i>Project Intern</i></div>
                <div className='text-justify'>I was responsible for automating feature implementation of the application - Oracle Communications Unified Assurance. Involved automating UI functionality and command line functionality from the Linux based Virtual Machine. <br />Skills: Python, Shell scripting, Selenium, RobotFramework</div>
                </div>
            </div>

            <div className=' flex flex-row my-4'>
                <img src={DynamatixLogo} alt="DynamatixLogo" className='max-sm:w-[20%] lg:w-[10%] max-h-[80px]' />
                <div className=' max-sm:w-[80%] lg:w-[90%] lg:ml-8'>
                <div className=' flex flex-row justify-between'>
                    <div className='font-bold'>Dynamatix Analytics</div>
                    <div className='text-end'>June'23 - July'23</div>
                </div>
                <div className='my-1'><i>Software Development Intern</i></div>
                <div className='text-justify'>Researched and worked on Dynamatix’s flagship platform - RiskHawk™️, where I developed and enhanced existing features of RiskHawk™️.<br />Skills: Java, MySQL</div>
                </div>
            </div>

            <div className=' flex flex-row my-4'>
                <img src={OjasLogo} alt="OjasLogo" className='max-sm:w-[20%] lg:w-[10%] max-h-[80px]' />
                <div className=' max-sm:w-[80%] lg:w-[90%] lg:ml-8'>
                <div className=' flex flex-row justify-between'>
                    <div className='font-bold'>Ojas Innovative Technologies</div>
                    <div className='text-end'>May'22 - June'22</div>
                </div>
                <div className='my-1'><i>Training Internship</i></div>
                <div className='text-justify'>Trained under subject matter experts of Data Science and Machine Learning, and applied the same in various datasets as projects and PoCs.</div>
                </div>
            </div>

        </div>
    )
}
export default InternshipCard;