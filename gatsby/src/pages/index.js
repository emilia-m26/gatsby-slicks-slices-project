import React from 'react';
import LoadingGrid from '../components/LoadingGrid';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';
import ItemGrid from '../components/ItemGrid';

function CurrentlySlicing({ slicemasters }) {
    return (
        <div>
            {!slicemasters && <LoadingGrid count={4} />}
            {slicemasters && !slicemasters?.length && (
                <p> No one is working right now!</p>
            )}
            {slicemasters?.length && <ItemGrid items={slicemasters}/>}
        </div>
    )
}

function HotSlices({ hotSlices }) {
    return (
        <div>
            {!hotSlices && <LoadingGrid count={4}/>}
            {hotSlices && !hotSlices?.length && (
                <p> No pizza ready right now!</p>
            )}
            {hotSlices?.length && <ItemGrid items={hotSlices}/>}
        </div>
    )
}

export default function HomePage() {
//using hook here
    const { slicemasters, hotSlices } = useLatestData();
    
    return ( 
        <div className="center">
            <h1>The Best Pizza Downtown!</h1>
            <p>Open 11am to 11pm Every Day</p>
            <HomePageGrid>
                <CurrentlySlicing slicemasters={slicemasters}/>
                <HotSlices hotSlices={hotSlices}/>
            </HomePageGrid>
        </div>
    );
}