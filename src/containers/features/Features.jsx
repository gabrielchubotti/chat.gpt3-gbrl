import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
{
  title: "Improving end distrusts instantly",
  text: "sdasdmaskdiasdi iamsdiasmdiamsidmaisd aisdmiasmdais i aidsmiasmi asidmaisdm aidms idasmdi mid mdiamim imamdiamimdaimdsidmi msdiamidmiasmdi amdimadimadsi"
},
{
  title: "Become the tended active",
  text: "fjsndjfsdj fnjdndjn djsf nsjnsj ndfjn djj njs nfj ndfj nsdjnj nsfjnjsdn jnjdnj njf nsdj nj njs"
},
{
  title: "Message on a  notehing",
  text: "fjsdnfjnsd jndjf ndjn j jsnjdnjdsnfj snfdjnfjsdnfjsdnjfsndjfdn fjsdnjsndfjsnfjsdnfjdnjf dnfj dsnjdnfjsdnfjfdn jdns"
},
{
  title: "Really bow law county",
  text: "jdn ejdnejnejnd jsn jnjd ne jnesjnjdn jsd njndejnj njnejn jndjn jn jnjnjnjnjnsjnj njnjnj ncdcs"
},
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The future is now, and you just need to realize it. Step into the future today and make it happen. </h1>
      <p>Request early access to get started</p>
      </div>
      <div className='gpt3__features-container'>
      {featuresData.map((item, index) => (
        <Feature />
      ))}
      </div>
    </div>
  )
}

export default Features