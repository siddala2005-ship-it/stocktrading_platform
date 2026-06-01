import React from 'react';
import HeroSection from './HeroSection';
import Education from './Education';
import Stats from './Stats';
import Awards from './Awards';
import Pricing from './Pricing';
export default function HomePage() {
    return (
        <div className="home-page">
            <h1>Welcome to Our Institution</h1>
            <HeroSection />
            <Education />
            <Stats />
            <Awards />
            <Pricing />

            <p>We are dedicated to providing an exceptional educational experience for all our students.</p>
        </div>
    );
}