import React from 'react';
import './blog.css';
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './import'


const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening. We are blogging about it.</h1>

      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgURL={blog01} date='Jan 18, 2023' title='GPT-3 and OpenAI is the future. Let us explore it?'/>
        </div>
        <div className='gpt3__blog-container_groupA'>
          <Article imgURL={blog02} date='Jan 18, 2023' title='GPT-3 and OpenAI is the future. Let us explore it?'/>
          <Article imgURL={blog03} date='Jan 18, 2023' title='GPT-3 and OpenAI is the future. Let us explore it?'/>
          <Article imgURL={blog04} date='Jan 18, 2023' title='GPT-3 and OpenAI is the future. Let us explore it?'/>
          <Article imgURL={blog05} date='Jan 18, 2023' title='GPT-3 and OpenAI is the future. Let us explore it?' />
         </div>
      </div>
    </div>
  )
}

export default Blog