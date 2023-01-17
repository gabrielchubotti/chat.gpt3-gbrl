import React from 'react';
import possibilityImage from '../../assets/possibility.png'
import './possibility.css';
 

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request early access to get started</h4>
        <h1 className='gradient__text'> The possiblities are beyong your imagination</h1>
        <p>djfnasfj jdfnsdjfnds jf dsjfn sdjfnsdjfnsjdfj nsdjfn jsdnfjsdfn sjdf nsjfn sjdn fjsdfn sdjf nsdjf nsdj n</p>   
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )

}

export default Possibility