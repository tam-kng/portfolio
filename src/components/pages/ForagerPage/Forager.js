import React from 'react'
import { Link} from "react-scroll";

import './Forager.css';
//import { foragerObj } from '../../ProjectData.js';

/* image imports */
import foragerHomeSmallImg from '../../../images/forager-home-small.svg';
import foragerInStoreImg from '../../../images/forager-home-in-store.svg';
import foragerListImg from '../../../images/forager-list.svg';
import foragerMapImg from '../../../images/forager-map.svg';
import foragerAffinityImg from '../../../images/forager-affinity.svg';
import foragerCjmImg from '../../../images/forager-cjm.svg';
import foragerCjmRefinedImg from '../../../images/forager-cjm-refined.svg';

/* icon imports */
import hatIcon from '../../../images/cowboy-hat.svg';
import calendarIcon from '../../../images/calendar.svg';
import teamIcon from '../../../images/team.svg';
import toolsIcon from '../../../images/tools.svg';
import methodIcon from '../../../images/chat-icon.svg';

/* Create project-specific Forager component */
function Forager() {
    return (
        <>
            <div className='forager'>
                <div className='project-header'>
                    <div className='project-row project-nav'>
                        <div className='project-nav-item'>
                            <Link to="forager-problem" spy={true} smooth={true} offset={-75}>PROBLEM</Link>
                        </div>
                        <div className='project-nav-item'>
                            <Link to='forager-solution' spy={true} smooth={true} offset={-75}>SOLUTION</Link>
                        </div>
                        <div className='project-nav-item'>
                            <Link to='forager-value' spy={true} smooth={true} offset={-75}>VALUE</Link>
                        </div>
                        <div className='project-nav-item'>
                            <Link to='forager-process' spy={true} smooth={true} offset={-75}>PROCESS</Link>
                        </div>
                    </div>
                    <div className='project-row header-title'>
                        <div className='project-col'>
                            <div className='header-title-txt'>
                                Forager
                            </div>
                            <div className='header-title-block'></div>
                            <div className='header-body-txt'>
                                Forager puts users first as they shop for groceries, optimizing their grocery trip while limiting their risk and exposure to COVID-19.
                                Reimagining a universal activity to address a rapidly changing world felt like a necessary and exciting challenge, and so I dived into this project so build a better, safer experience.
                            </div>
                        </div>
                        <div className='project-col'>
                            <div className='header-title-img-container'>
                                <img src={foragerHomeSmallImg} alt='forager app'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project-row'>
                    <div className='in-store-img-container'>
                        <img src={foragerInStoreImg} alt='forager app'></img>
                    </div>
                </div>
                <div className='project-row'>
                    <div className='project-specs'>
                        <div className='project-col'>
                            <img src={hatIcon} alt='cowboy hat'></img>
                            <div className='spec-title'>
                                MY ROLES
                            </div>
                            <div className='spec'>
                                Lead UX designer
                                <br/>
                                UX researcher
                            </div>
                        </div>
                        <div className='project-col'>
                            <img src={toolsIcon} alt='tools'></img>
                            <div className='spec-title'>
                                    MY TOOLS
                                </div>
                                <div className='spec'>
                                    Figma
                                    <br/>
                                    Miro
                                </div>
                            </div>
                        <div className='project-col'>
                            <img src={teamIcon} alt='team'></img>
                            <div className='spec-title'>
                                    TEAM
                                </div>
                                <div className='spec'>
                                    Tam Nguyen
                                    <br/>
                                    Onyekachi Nwabueze
                                    <br/>
                                    Lia Slaton
                                    <br/>
                                    Eric Li
                                </div>
                            </div>
                        <div className='project-col'>
                            <img src={calendarIcon} alt='calendar'></img>
                            <div className='spec-title'>
                                    TIMELINE
                                </div>
                                <div className='spec'>
                                    Nov - Dec 2020
                                </div>
                            </div>
                    </div>
                </div>
                <div className='project-row'>
                    <div className='forager-problem'>
                        <div className='project-col'>
                            <div className='problem-title-txt'>
                                PROBLEM
                            </div>
                            <div className='problem-title-block'></div>
                            <div className='problem-bold-txt'>
                                Today’s grocery shoppers feel rushed and stressed as they attempt to navigate through crowded stores to find their items, while maintaining COVID safety measures.
                            </div>
                            <div className='problem-txt'>
                                The regular grocery trip has turned into a rushed seach for items in the face of the COVID-19 pandemic, as shoppers try to minimize their contact while maximizing their efficiency. Customers are spending too much time indoors, in close quarters with others, wandering aisles as they seek items on their grocery list.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project-row'>
                    <div className='forager-solution'>
                        <div className='project-col'>
                            <div className='solution-title-txt'>
                                SOLUTION
                            </div>
                            <div className='solution-title-block'></div>
                            <div className='solution-bold-txt'>
                                Forager builds an expedited route through stores with step-by-step navigation that prioritizes customer safety.
                            </div>
                            <div className='solution-txt'>
                                Through research, my team discovered that key motivators for grocery shoppers are time and efficiency. As the risk of exposure to COVID grows with longer grocery trips, meaning greater time spent near other people, shoppers have made getting in and out their priority. Forager eases this process by generating and walking users through the most time-efficient path through the store, accounting for every item they need.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project-row'>
                    <div className='forager-imgs'>
                        <div className='project-col'>
                            <div className='list-img-container'>
                                <img src={foragerListImg} alt='forager app list view'></img>
                            </div>
                            <div className='img-caption'>
                                An in-app grocery list editor lets users aggregate their items
                            </div>
                        </div>
                        <div className='project-col img-col'>
                            <div className='map-img-container'>
                                <img src={foragerMapImg} alt='forager app map view'></img>
                            </div>
                            <div className='img-caption'>
                                Step-by-step navigation directs users to their desired items
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project-row'>
                    <div className='forager-value'>
                        <div className='project-col'>
                            <div className='value-title-txt'>
                                VALUE
                            </div>
                            <div className='value-title-block'></div>
                            <div className='value-bold-txt'>
                                For businesses, Forager delivers a wealth of value.
                            </div>
                            <div className='value-body'>
                                <div className='value-large-txt'>
                                    Offer insights into supply, stock, and demand
                                </div>
                                <div className='value-txt'>
                                    With Forager’s integrated grocery list editor, as shoppers build their lists, partner businesses can address supply and stock issues by seeing what items have the most demand.
                                </div>
                                <div className='value-large-txt'>
                                    Build business' reputation for safety
                                </div>
                                <div className='value-txt'>
                                    Forager protects customers, and employees. Customers are less likely to require assistance in finding items, reducing contacts, so workforces are protected, all while building partner businesses’ reputation as the safest place to shop.
                                </div>
                                <div className='value-large-txt'>
                                    Leverage existing resources
                                </div>
                                <div className='value-txt'>
                                    This app is low cost to all sizes of groceries, as it doesn’t require any retrofitting of stores or expensive sensors. All Forager needs is a mobile phone and the stores’ maps of items and inventory.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project-row'>
                    <div className='forager-process'>
                        <div className='project-col'>
                            <div className='process-title-txt'>
                                PROCESS
                            </div>
                            <div className='process-title-block'></div>
                            <div className='process-bold-txt'>
                                From research studying the problem space to a refined and interactive high-fidelity prototype.
                            </div>
                            <div className='process-txt'>
                                To build a better understanding of our problem space, my team conducted pop-up interviews with our participants via Zoom, asking them to guide us through their workflow as they shopped for groceries. We wanted to hear about real thoughts, emotions, and experiences, from real people.
                            </div>
                        </div>
                        <div className='project-col'>
                            <div className='spec-methods'>
                                <img src={methodIcon} alt='chatbox'></img>
                                <div className='spec-methods-title'>
                                    METHODS
                                </div>
                                <div>
                                    Pop-up Research
                                </div>
                                <div>
                                    User Interviews
                                </div>
                                <div>
                                    Customer Journey Maps
                                </div>
                                <div>
                                    Affinity Diagram
                                </div>
                                <div>
                                    Wireframes
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project-row'>
                    <div className='forager-imgs'>
                        <div className='project-col'>
                            <div className='affinity-img-container'>
                                <img src={foragerAffinityImg} alt='affinity diagram'></img>
                            </div>
                        </div>
                        <div className='project-col'>
                            <div className='img-caption-style-2'>
                                These experiences were stratified into clear stages as we made a customer journey map, to find critical points where design might improve shoppers lives.
                            </div>
                        </div>
                        <div className='project-col'>
                            <div className='cjm-img-container'>
                                <img src={foragerCjmImg} alt='customer journey map'></img>
                            </div>
                        </div>
                        <div className='project-col'>
                            <div className='img-caption-style-2'>
                                We translated these interviews into an affinity diagram, seeking to uncover patterns of universal stresses and motivators.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project-row'>
                    <div className='forager-process'>
                        <div className='project-col'>
                            <div className='process-bold-txt'>
                                We asked ourselves where design would improve the lives of shoppers, and used that to refine our focus.
                            </div>
                            <div className='process-txt'>
                                Once we understood the broad strokes and fine details of the grocery shopper experience, we iterated on our customer journey map. We aimed for a more concise representation that exposed the most stressful and meaningful touchpoints.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project-row'>
                    <div className='forager-imgs'>
                        <div className='project-col'>
                            <div className='img-caption-style-2'>
                                With our refined customer journey map, we noticed that Phase 2, shopping, produced shoppers’ biggest concerns: finding their items and personal safety.
                            </div>
                        </div>
                        <div className='project-col'>
                            <div className='cjm-refined-img-container'>
                                <img src={foragerCjmRefinedImg} alt='refined customer journey map'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forager;