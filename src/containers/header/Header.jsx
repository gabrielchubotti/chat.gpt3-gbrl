import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'> Let's Build Something Amazing with GPT-3 OpenAI</h1>
        <p>Quia consequatur officia distinctio. Qui praesentium aut quam impedit. Voluptas architecto ut fuga. Nihil unde accusamus maiores voluptatem. Corrupti eos consectetur nostrum et et fuga.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address'></input>
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt__header-content__people'>
          <img src= {people} />
        </div>
      </div>
    </div>
  )
}

export default Header