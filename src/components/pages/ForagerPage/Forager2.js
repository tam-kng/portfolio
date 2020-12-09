import React from 'react'
import { motion } from 'framer-motion';

import './Forager2.css';
import { foragerObj } from '../ProjectData.js';
import foragerHomeSmallImg from '../../../images/forager-home-small.svg';
import foragerDoubleImg from '../../../images/forager-double.svg';

function Forager2() {
    return (
        <>
            <div className='forager'>
                <h1 class="forager-1123 valign-text-middle dmsans-bold-black-60px border-class-1">Forager</h1>
                <div class="forager-pu-ence-11219 dmsans-bold-black-18px border-class-1">
                    Forager puts users first as they shop for groceries, optimizing their grocery trip while limiting their risk and
                    exposure to COVID-19.<br />Reimagining a universal activity to address a rapidly changing world felt like a
                    necessary and exciting challenge, and so I dived into this project so build a better, safer experience.
                </div>
                <img
                    class="rectangle"
                    src="https://anima-uploads.s3.amazonaws.com/projects/5fd0e082074bfa76e70f8abd/releases/5fd0e0a8479c44e0538b722f/img/rectangle@1x.png"
                />
                <div class="intro-11222 valign-text-middle dmsans-bold-neptune-24px border-class-1">INTRO</div>
                <div class="solution-11223 valign-text-middle dmsans-bold-neptune-24px border-class-1">SOLUTION</div>
                <div class="research-11225 valign-text-middle dmsans-bold-neptune-24px border-class-1">RESEARCH</div>
                <div class="design-insights-1131 valign-text-middle dmsans-bold-neptune-24px border-class-1">DESIGN INSIGHTS</div>
                <div class="problem-11224 valign-text-middle dmsans-bold-neptune-24px border-class-1">PROBLEM</div>
            </div>
        </>
    )
}

export default Forager2;