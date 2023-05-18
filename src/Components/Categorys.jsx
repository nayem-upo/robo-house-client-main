import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Categorys = () => {
    const [tabIndex, setTabindex] = useState(1)
    
    return (
        <div className='text-center'>
            <h1 className='text-4xl font-bold text-[#9C29B2]'>Shop by category</h1>
            <p className='text-5xl text-[#88C90D] my-5'>Find your favourite products by categories</p>
            <div className='flex justify-center'>
                <Tabs className="">
                    <TabList className="tabs">
                        <Tab className={`tab tab-lg tab-lifted text-[#9C29B2] focus:outline-none font-bold`}>Entertainment Robots</Tab>
                        <Tab className="tab tab-lg tab-lifted text-[#9C29B2] focus:outline-none font-bold">Remote Control Robots</Tab>
                        <Tab className="tab tab-lg tab-lifted text-[#9C29B2] focus:outline-none font-bold">Educational Robots</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>This is a tab</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Categorys;