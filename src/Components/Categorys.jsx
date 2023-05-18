import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Categorys = () => {

    return (
        <div className='text-center'>
            <h1 className='text-4xl font-bold text-[#9C29B2]'>Shop by category</h1>
            <p className='text-5xl text-[#88C90D] my-5'>Find your favourite products by categories</p>
            <div className='flex justify-center'>
                <Tabs className="mb-10">
                    <TabList className="tabs flex justify-center my-5">
                        <Tab className={`tab tab-lg tab-lifted text-[#9C29B2] focus:outline-none font-bold`}>Entertainment Robots</Tab>
                        <Tab className="tab tab-lg tab-lifted text-[#9C29B2] focus:outline-none font-bold">Remote Control Robots</Tab>
                        <Tab className="tab tab-lg tab-lifted text-[#9C29B2] focus:outline-none font-bold">Educational Robots</Tab>
                    </TabList>

                    <TabPanel className="flex gap-6">
                        <div className='w-[300px] bg-[#87c90d2f] text-left p-4 rounded-2xl'>
                            <img className='rounded-xl object-cover h-[180px] w-full' src="https://www.yankodesign.com/images/design_news/2017/01/mip/mip_01.jpg" alt="" />
                            <h1 className='py-2 text-xl text-[#9C29B2] font-bold'>RoboBuddy</h1>
                            <p>RoboBuddy is a versatile robot toy that can dance, play music, and even tell jokes.</p>
                            <div className='flex justify-between text-center py-3'>
                                <div className='w-1/2 flex'>
                                    <p>Price: </p>
                                    <p>$102</p>
                                </div>
                                <div className="border-r border-2 border-[#9C29B2]"></div>
                                <div className='w-1/2'>
                                    <p>Rating: 5</p>
                                    <span><div className="rating rating-xs">
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                    </div></span>
                                </div>
                            </div>
                            <label htmlFor="my-modal-6" className="btn h-6 border-none w-full hover:bg-[#88C90D] rounded-md text-white bg-[#9C29B2]">View Details</label>
                        </div>

                        <div className='w-[300px] bg-[#87c90d2f] text-left p-4 rounded-2xl'>
                            <img className='rounded-xl object-cover h-[180px] w-full' src="https://figurefanzero.files.wordpress.com/2015/03/tfgchrome4.jpg" alt="" />
                            <h1 className='py-2 text-xl text-[#9C29B2] font-bold'>Funtron</h1>
                            <p>Funtron is a colorful and interactive robot toy designed to educate and entertain.</p>
                            <div className='flex justify-between text-center py-3'>
                                <div className='w-1/2 flex'>
                                    <p>Price: </p>
                                    <p>$39.99</p>
                                </div>
                                <div className="border-r border-2 border-[#9C29B2]"></div>
                                <div className='w-1/2'>
                                    <p>Rating: 5</p>
                                    <span><div className="rating rating-xs">
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                    </div></span>
                                </div>
                            </div>
                            <label htmlFor="my-modal-6" className="btn h-6 border-none w-full hover:bg-[#88C90D] rounded-md text-white bg-[#9C29B2]">View Details</label>
                        </div>

                        <div className='w-[300px] bg-[#87c90d2f] text-left p-4 rounded-2xl'>
                            <img className='rounded-xl object-cover h-[180px] w-full' src="https://www.vigirobotics.com/wp-content/uploads/2018/06/20180426_224339-1024x766.jpg" alt="" />
                            <h1 className='py-2 text-xl text-[#9C29B2] font-bold'>ZoomBot</h1>
                            <p>ZoomBot is a high-speed racing robot that can zoom around tracks, perform stunts.</p>
                            <div className='flex justify-between text-center py-3'>
                                <div className='w-1/2 flex'>
                                    <p>Price: </p>
                                    <p>$59.99</p>
                                </div>
                                <div className="border-r border-2 border-[#9C29B2]"></div>
                                <div className='w-1/2'>
                                    <p>Rating: 5</p>
                                    <span><div className="rating rating-xs">
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                    </div></span>
                                </div>
                            </div>
                            <label htmlFor="my-modal-6" className="btn h-6 border-none w-full hover:bg-[#88C90D] rounded-md text-white bg-[#9C29B2]">View Details</label>
                        </div>

                    </TabPanel>
                    <TabPanel className="flex gap-6">
                        <div className='w-[300px] bg-[#87c90d2f] text-left p-4 rounded-2xl'>
                            <img className='rounded-xl object-cover h-[180px] w-full' src="https://i.ytimg.com/vi/K-zLHpyK1ws/maxresdefault.jpg" alt="" />
                            <h1 className='py-2 text-xl text-[#9C29B2] font-bold'>RC RoboRacer</h1>
                            <p>The RC RoboRacer is a high-speed remote control robot designed for racing.</p>
                            <div className='flex justify-between text-center py-3'>
                                <div className='w-1/2 flex'>
                                    <p>Price: </p>
                                    <p>$69.99</p>
                                </div>
                                <div className="border-r border-2 border-[#9C29B2]"></div>
                                <div className='w-1/2'>
                                    <p>Rating: 5</p>
                                    <span><div className="rating rating-xs">
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                    </div></span>
                                </div>
                            </div>
                            <label htmlFor="my-modal-6" className="btn h-6 border-none w-full hover:bg-[#88C90D] rounded-md text-white bg-[#9C29B2]">View Details</label>
                        </div>

                        <div className='w-[300px] bg-[#87c90d2f] text-left p-4 rounded-2xl'>
                            <img className='rounded-xl object-cover h-[180px] w-full' src="https://m.media-amazon.com/images/I/71GukTRZWcL._AC_SX679_.jpg" alt="" />
                            <h1 className='py-2 text-xl text-[#9C29B2] font-bold'>RC BattleBot</h1>
                            <p>The RC BattleBot is a powerful remote control robot that specializes in combat.</p>
                            <div className='flex justify-between text-center py-3'>
                                <div className='w-1/2 flex'>
                                    <p>Price: </p>
                                    <p>$89.99</p>
                                </div>
                                <div className="border-r border-2 border-[#9C29B2]"></div>
                                <div className='w-1/2'>
                                    <p>Rating: 5</p>
                                    <span><div className="rating rating-xs">
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                    </div></span>
                                </div>
                            </div>
                            <label htmlFor="my-modal-6" className="btn h-6 border-none w-full hover:bg-[#88C90D] rounded-md text-white bg-[#9C29B2]">View Details</label>
                        </div>

                        <div className='w-[300px] bg-[#87c90d2f] text-left p-4 rounded-2xl'>
                            <img className='rounded-xl object-cover h-[180px] w-full' src="https://i.ytimg.com/vi/XE96E2iA1qI/maxresdefault.jpg" alt="" />
                            <h1 className='py-2 text-xl text-[#9C29B2] font-bold'>RC MechWarrior</h1>
                            <p>The RC MechWarrior brings the excitement of battle to life. </p>
                            <div className='flex justify-between text-center py-3'>
                                <div className='w-1/2 flex'>
                                    <p>Price: </p>
                                    <p>$59.99</p>
                                </div>
                                <div className="border-r border-2 border-[#9C29B2]"></div>
                                <div className='w-1/2'>
                                    <p>Rating: 5</p>
                                    <span><div className="rating rating-xs">
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                    </div></span>
                                </div>
                            </div>
                            <label htmlFor="my-modal-6" className="btn h-6 border-none w-full hover:bg-[#88C90D] rounded-md text-white bg-[#9C29B2]">View Details</label>
                        </div>
                    </TabPanel>
                    <TabPanel className="flex gap-6">
                        <div className='w-[300px] bg-[#87c90d2f] text-left p-4 rounded-2xl'>
                            <img className='rounded-xl object-cover h-[180px] w-full' src="https://images.ctfassets.net/78zcc00ye1wi/2cW2XbI6o728QblKJ86GEm/e046b9cbc71b327283f9861cc6961bf6/Robot_Toys.png?w=1600&h=1000&fit=fill&fm=png" alt="" />
                            <h1 className='py-2 text-xl text-[#9C29B2] font-bold'>LearnBot</h1>
                            <p>LearnBot is an educational robot toy designed to engage children in learning activities.</p>
                            <div className='flex justify-between text-center py-3'>
                                <div className='w-1/2 flex'>
                                    <p>Price: </p>
                                    <p>$49.99</p>
                                </div>
                                <div className="border-r border-2 border-[#9C29B2]"></div>
                                <div className='w-1/2'>
                                    <p>Rating: 5</p>
                                    <span><div className="rating rating-xs">
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                    </div></span>
                                </div>
                            </div>
                            <label htmlFor="my-modal-6" className="btn h-6 border-none w-full hover:bg-[#88C90D] rounded-md text-white bg-[#9C29B2]">View Details</label>
                        </div>

                        <div className='w-[300px] bg-[#87c90d2f] text-left p-4 rounded-2xl'>
                            <img className='rounded-xl object-cover h-[180px] w-full' src="https://mms.businesswire.com/media/20170217005128/en/570526/5/AstroBot.jpg?download=1" alt="" />
                            <h1 className='py-2 text-xl text-[#9C29B2] font-bold'>STEM Explorer</h1>
                            <p>STEM Explorer is a versatile educational robot toy that combines science, technology, engineering.</p>
                            <div className='flex justify-between text-center py-3'>
                                <div className='w-1/2 flex'>
                                    <p>Price: </p>
                                    <p>$79.99</p>
                                </div>
                                <div className="border-r border-2 border-[#9C29B2]"></div>
                                <div className='w-1/2'>
                                    <p>Rating: 5</p>
                                    <span><div className="rating rating-xs">
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                    </div></span>
                                </div>
                            </div>
                            <label htmlFor="my-modal-6" className="btn h-6 border-none w-full hover:bg-[#88C90D] rounded-md text-white bg-[#9C29B2]">View Details</label>
                        </div>

                        <div className='w-[300px] bg-[#87c90d2f] text-left p-4 rounded-2xl'>
                            <img className='rounded-xl object-cover h-[180px] w-full' src="https://worldofwondertoys.ie/wp-content/uploads/2021/06/Walking-Bot-1.jpg" alt="" />
                            <h1 className='py-2 text-xl text-[#9C29B2] font-bold'>ScienceBot</h1>
                            <p>ScienceBot is a scientific educational robot toy that introduces kids to various scientific concepts.</p>
                            <div className='flex justify-between text-center py-3'>
                                <div className='w-1/2 flex'>
                                    <p>Price: </p>
                                    <p>$69.99</p>
                                </div>
                                <div className="border-r border-2 border-[#9C29B2]"></div>
                                <div className='w-1/2'>
                                    <p>Rating: 5</p>
                                    <span><div className="rating rating-xs">
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="cursor-default mask mask-star-2 bg-orange-400" />
                                    </div></span>
                                </div>
                            </div>
                            <label htmlFor="my-modal-6" className="btn h-6 border-none w-full hover:bg-[#88C90D] rounded-md text-white bg-[#9C29B2]">View Details</label>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            
            {/* modal here */}
            <div className=''>
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-white">
                        <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn bg-[#9C29B2] border-none">Done!</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categorys;