import React from 'react';

const Service = () => {
    return (
        <div className='text-center my-10'>
            <h1 data-aos="fade-right" className='text-4xl font-bold text-[#9C29B2]'>Service We Provide</h1>
            <p data-aos="fade-right" className='text-5xl text-[rgb(136,201,13)] my-5 mx-2'>Providing Good Qualities Toy For Your Kids</p>
            <div className='grid md:grid-cols-4 grid-cols-1 w-[300px] md:w-full gap-10 max-w-[1100px] mx-auto my-10'>
                <div className='bg-[#FFE9E4] px-2 duration-500 text-[#FE6541] hover:text-white h-[320px] hover:bg-[#FE6541] rounded-3xl flex flex-col py-10 items-center'>
                    <div className='bg-[#FFE9E4] rounded-md'><svg fill="#FE5D37" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-49.6 -49.6 595.20 595.20" xmlSpace="preserve" width="94px" height="94px" stroke="#FE5D37"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M208,0c-20.856,0-38.592,13.384-45.2,32H120v26.208c-3.44,1.296-6.872,2.736-10.296,4.296L91.152,43.952L11.96,123.144 l18.552,18.552c-1.568,3.432-3.008,6.864-4.304,10.304H0v112h26.208c1.296,3.44,2.736,6.872,4.296,10.296l-18.552,18.552 l79.192,79.2l18.552-18.552c3.424,1.56,6.856,3,10.296,4.296V384h40v64c0,26.472,21.528,48,48,48h288v-16h-16.016 c-8.544,0-16.584-3.328-22.632-9.376c-6.048-6.048-9.368-14.088-9.368-22.64c0.008-17.632,14.36-31.984,32-31.984H496v-8v-8V0 H208z M136,368v-21.624l-5.472-1.824c-6.272-2.096-12.632-4.744-18.896-7.88l-5.152-2.576l-15.328,15.328l-56.568-56.568 l15.328-15.328l-2.576-5.16c-3.144-6.264-5.792-12.624-7.88-18.896L37.624,248H16v-80h21.624l1.824-5.472 c2.096-6.272,4.744-12.632,7.88-18.896l2.576-5.152l-15.328-15.328l56.568-56.568l15.328,15.328l5.152-2.576 c6.264-3.144,12.624-5.792,18.896-7.88l5.48-1.832V48h24h16h40v21.624l5.472,1.824c6.272,2.096,12.632,4.744,18.896,7.88 l5.16,2.576l15.328-15.328l56.568,56.568l-15.328,15.328l2.576,5.152c3.144,6.264,5.792,12.624,7.88,18.896l1.824,5.48H336v80 h-21.624l-1.824,5.472c-2.096,6.272-4.744,12.632-7.88,18.896l-2.576,5.16l15.328,15.328l-56.568,56.568l-15.328-15.328 l-5.16,2.576c-6.264,3.144-12.624,5.792-18.896,7.88L216,346.376V368H136z M325.792,152c-1.296-3.44-2.736-6.872-4.296-10.296 l18.552-18.552L304.896,88H448v136h-96v-72H325.792z M444.2,480H208c-17.648,0-32-14.352-32-32s14.352-32,32-32h236.232 c-7.608,8.496-12.24,19.712-12.248,31.984C431.976,459.912,436.296,471.184,444.2,480z M480,400H208 c-12.304,0-23.496,4.688-32,12.328V384h56v-26.208c3.44-1.296,6.872-2.736,10.296-4.296l18.552,18.552l79.2-79.2l-18.552-18.552 c1.56-3.424,3-6.856,4.296-10.296H352v-24h112V72H288.896l-28.048-28.048l-18.552,18.552c-3.424-1.56-6.856-2.992-10.296-4.296 V32h-51.552C186,22.48,196.208,16,208,16h272V400z" /> <path d="M219.968,293.248c6.44-3.336,12.464-7.352,17.96-12.008l11.616,11.616l11.312-11.312l-11.616-11.616 c4.648-5.488,8.664-11.512,12.008-17.96l15.168,6.28l6.128-14.784l-15.112-6.256c2.168-6.776,3.56-13.88,4.168-21.208H288v-16 h-16.408c-0.608-7.328-2-14.44-4.168-21.208l15.112-6.256l-6.128-14.784l-15.168,6.28c-3.336-6.44-7.352-12.464-12.008-17.96 l11.616-11.616l-11.312-11.312L237.92,134.76c-5.488-4.648-11.512-8.664-17.96-12.008l6.28-15.168l-14.784-6.128l-6.256,15.112 c-6.776-2.168-13.88-3.56-21.208-4.168V96h-16v16.408c-7.328,0.608-14.44,2-21.208,4.168l-6.256-15.112l-14.784,6.128 l6.28,15.168c-6.44,3.336-12.464,7.352-17.96,12.008l-11.616-11.616l-11.312,11.312l11.616,11.616 c-4.648,5.488-8.664,11.512-12.008,17.96l-15.168-6.28l-6.128,14.784L84.56,178.8c-2.168,6.776-3.56,13.88-4.168,21.208H64v16 h16.408c0.608,7.328,2,14.44,4.168,21.208l-15.112,6.256l6.128,14.784l15.168-6.28c3.336,6.44,7.352,12.464,12.008,17.96 l-11.616,11.616l11.312,11.312l11.616-11.616c5.488,4.648,11.512,8.664,17.96,12.008l-6.28,15.168l14.784,6.128l6.248-15.128 c6.776,2.168,13.88,3.56,21.208,4.168V320h16v-16.408c7.328-0.608,14.432-2,21.208-4.168l6.256,15.12l14.784-6.128 L219.968,293.248z M176,288c-44.112,0-80-35.888-80-80s35.888-80,80-80s80,35.888,80,80S220.112,288,176,288z" /> <rect x={192} y={440} width={192} height={16} /> <rect x={400} y={440} width={16} height={16} /> </g> </g> </g> </g></svg></div>
                    <h1 className='text-xl font-semibold py-2'>Assembling guide</h1>
                    <p>We provide an comprehensive assembling guide for all types of robots.</p>
                </div>
                <div className='bg-[#EDEAFF] px-2 duration-500 text-[#786ACF] hover:bg-[#786ACF] hover:text-white h-[320px] rounded-3xl flex flex-col py-10 items-center'>
                    <div className='bg-[#EDEAFF] px-2 rounded-md'><svg height="94px" width="94px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#786ACF" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path className="st0" d="M116.683,354.34c-26.836,0-48.607,21.764-48.607,48.6c0,26.85,21.771,48.614,48.607,48.614 c26.844,0,48.608-21.764,48.608-48.614C165.29,376.104,143.526,354.34,116.683,354.34z M116.683,424.826 c-12.08,0-21.872-9.799-21.872-21.886c0-12.073,9.792-21.865,21.872-21.865c12.08,0,21.872,9.792,21.872,21.865 C138.554,415.027,128.762,424.826,116.683,424.826z"></path> <path className="st0" d="M403.8,354.34c-26.836,0-48.6,21.764-48.6,48.6c0,26.85,21.764,48.614,48.6,48.614 c26.843,0,48.606-21.764,48.606-48.614C452.406,376.104,430.643,354.34,403.8,354.34z M403.8,424.826 c-12.073,0-21.865-9.799-21.865-21.886c0-12.073,9.792-21.865,21.865-21.865c12.079,0,21.871,9.792,21.871,21.865 C425.671,415.027,415.879,424.826,403.8,424.826z"></path> <path className="st0" d="M200.127,128.622H90.502c-3.561,0-6.957,1.582-9.23,4.331l-78.48,94.163C0.986,229.268,0,231.994,0,234.815 v82.595v43.189c0,6.648,5.389,12.029,12.03,12.029h36.844c11.626-25.9,37.621-44.024,67.81-44.024 c30.196,0,56.183,18.124,67.81,44.024h27.671V140.652C212.163,134.003,206.767,128.622,200.127,128.622z M43.931,236.052 c0-2.849,0.978-5.612,2.777-7.82l50.103-61.694c2.36-2.907,5.9-4.59,9.633-4.59h49.083c6.848,0,12.404,5.554,12.404,12.411v70.011 c0,6.849-5.555,12.404-12.404,12.404H56.334c-6.85,0-12.404-5.554-12.404-12.404V236.052z"></path> <path className="st0" d="M243.532,338.792c-3.741,0-6.763,3.03-6.763,6.77v20.303c0,3.735,3.022,6.763,6.763,6.763h92.466 c6.382-14.209,17.072-26.023,30.419-33.836H243.532z"></path> <path className="st0" d="M504.381,338.792h-63.19c13.353,7.814,24.044,19.627,30.419,33.836h32.772c3.741,0,6.77-3.028,6.77-6.763 v-20.303C511.151,341.822,508.122,338.792,504.381,338.792z"></path> <path className="st0" d="M497.568,60.446H252.043c-7.964,0-14.425,6.46-14.425,14.432v226.703c0,7.972,6.461,14.432,14.425,14.432 h245.525c7.971,0,14.432-6.46,14.432-14.432V74.878C512,66.906,505.539,60.446,497.568,60.446z M458.27,134.09H291.355 c-3.741,0-6.771-3.036-6.771-6.763v-13.533c0-3.741,3.03-6.77,6.771-6.77H458.27c3.735,0,6.763,3.029,6.763,6.77v13.533 C465.033,131.054,462.005,134.09,458.27,134.09z M291.355,174.697H458.27c3.735,0,6.763,3.021,6.763,6.763V195 c0,3.727-3.028,6.763-6.763,6.763H291.355c-3.741,0-6.771-3.036-6.771-6.763v-13.54 C284.584,177.718,287.614,174.697,291.355,174.697z M291.355,242.369H458.27c3.735,0,6.763,3.022,6.763,6.763v13.533 c0,3.727-3.028,6.77-6.763,6.77H291.355c-3.741,0-6.771-3.044-6.771-6.77v-13.533C284.584,245.391,287.614,242.369,291.355,242.369 z"></path> </g> </g></svg></div>
                    <h1 className='text-xl font-semibold py-2'>Worldwide home delivery</h1>
                    <p>We provide on time home delivery all over the world.</p>
                </div>
                <div className='bg-[#FFF3D8] px-2 duration-500 text-[#FCB510] hover:bg-[#FCB510] hover:text-white h-[320px] rounded-3xl flex flex-col py-10 items-center'>
                    <div className='bg-[#FFF3D8] p-2 rounded-md'><svg width="80px" height="80px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <defs> <style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:#FCB510;}.cls-2{fill:#FCB510;}" }} /> </defs> <g data-name="9. Return" id="_9._Return"> <path className="cls-1" d="M14,10h4a0,0,0,0,1,0,0v3a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V10A0,0,0,0,1,14,10Z" /> <path className="cls-2" d="M20,23H12a3,3,0,0,1-3-3V12a3,3,0,0,1,3-3h8a3,3,0,0,1,3,3v8A3,3,0,0,1,20,23ZM12,11a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V12a1,1,0,0,0-1-1Z" /> <path className="cls-2" d="M15,19H14a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z" /> <path className="cls-2" d="M30,24.24l-1,4a1,1,0,0,1-.7.72A.84.84,0,0,1,28,29a1,1,0,0,1-.71-.29L26.57,28a15.53,15.53,0,0,1-2.68,1.93l-.51.27A15.85,15.85,0,0,1,16,32,16,16,0,0,1,0,16a15.82,15.82,0,0,1,.44-3.71,1,1,0,0,1,1.94.46A14.16,14.16,0,0,0,2,16,14,14,0,0,0,22.91,28.18l.09-.06a13.31,13.31,0,0,0,2.16-1.54l-.87-.87a1,1,0,0,1-.25-1,1,1,0,0,1,.72-.7l4-1A1,1,0,0,1,30,24.24Z" /> <path className="cls-2" d="M32,16a15.82,15.82,0,0,1-.44,3.71,1,1,0,0,1-1,.77.85.85,0,0,1-.23,0,1,1,0,0,1-.74-1.2A14.16,14.16,0,0,0,30,16,14,14,0,0,0,9.09,3.82,13.42,13.42,0,0,0,6.84,5.43l.87.86a1,1,0,0,1,.25,1,1,1,0,0,1-.72.7l-4,1L3,9a1,1,0,0,1-.71-.29,1,1,0,0,1-.26-1l1-4A1,1,0,0,1,3.73,3a1,1,0,0,1,1,.25L5.42,4A16.16,16.16,0,0,1,8.11,2.08,16,16,0,0,1,32,16Z" /> </g> </g></svg></div>
                    <h1 className='text-xl font-semibold py-2'>Excellent return policy</h1>
                    <p>Need to return a product? Just call us and our candidate will visit your home.</p>
                </div>
                <div className='bg-[#DEFDFA] px-2 duration-500 text-[#5BD7CA] hover:bg-[#5BD7CA] hover:text-white h-[320px] rounded-3xl flex flex-col py-10 items-center'>
                    <div className='bg-[#DEFDFA] rounded-md p-2'><svg fill="#5BD7CA" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 496 496" xmlSpace="preserve" width="80px" height="80px"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M496,208v-40c0-22.056-17.944-40-40-40h-24h-8h-40v-16h32V80c17.648,0,32-14.352,32-32s-14.352-32-32-32V0h-80h-8H0v432 c0,35.288,28.712,64,64,64h200h8h192v-48h-32v-72h64v-72h-16v-96H496z M416,32c8.816,0,16,7.184,16,16s-7.184,16-16,16V32z M336,56V16h64v80h-64V56z M336,112h32v16h-32V112z M336,208h32v-16h-32v-16h48v48h-48V208z M336,240h64v-80h-64v-16h80v144h-80 V240z M336,432V304h80v72v72h-48v-96h-16v96h-18.104C335.216,442.872,336,437.536,336,432z M288,477.2V464h-16v16h-8h-8v-16h-16 v16h-16v-16h-16v16h-16v-16h-16v16h-16v-16h-16v16h-16v-16h-16v16H96v-16H80v16H64v-16H48v13.2c-18.616-6.608-32-24.352-32-45.2 V16h304v416C320,452.848,306.616,470.592,288,477.2z M448,464v16H314.192c5.52-4.856,10.224-10.608,13.808-17.088V464h88h8H448z M432,296v-88h32v96h-32V296z M480,360h-16v-24h-16v24h-16v-40h48V360z M432,192v-48h24c13.232,0,24,10.768,24,24v24H432z" /> <path d="M360,80c13.232,0,24-10.768,24-24s-10.768-24-24-24s-24,10.768-24,24S346.768,80,360,80z M360,48c4.416,0,8,3.584,8,8 s-3.584,8-8,8c-4.416,0-8-3.584-8-8S355.584,48,360,48z" /> <path d="M32,208h272V32H32V208z M48,48h240v144H48V48z" /> <path d="M136,256H72v40H32v64h40v40h64v-40h40v-64h-40V256z M160,312v32h-40v40H88v-40H48v-32h40v-40h32v40H160z" /> <path d="M256,288c0-17.648-14.352-32-32-32s-32,14.352-32,32s14.352,32,32,32S256,305.648,256,288z M224,304 c-8.824,0-16-7.176-16-16c0-8.824,7.176-16,16-16c8.816,0,16,7.176,16,16C240,296.824,232.816,304,224,304z" /> <path d="M272,336c-17.648,0-32,14.352-32,32s14.352,32,32,32s32-14.352,32-32S289.648,336,272,336z M272,384 c-8.824,0-16-7.176-16-16c0-8.824,7.176-16,16-16c8.816,0,16,7.176,16,16C288,376.824,280.816,384,272,384z" /> <rect x={64} y={80} width={208} height={16} /> <rect x={64} y={144} width={176} height={16} /> <rect x={256} y={144} width={16} height={16} /> </g> </g> </g> </g></svg></div>
                    <h1 className='text-xl font-semibold py-2'>RoboBuild Solutions</h1>
                    <p>Providing all the expertise needed to assemble robots for toy enthusiasts.</p>
                </div>
            </div>
        </div>
    );
};

export default Service;