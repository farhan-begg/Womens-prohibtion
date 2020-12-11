import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>For more Info on Women's Prohibiton Click Below:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Overview'
              label="Farhan's topic "
              path='/farhan'
            />
            <CardItem
              src='images/bre.jpeg'
              text='The Broken Gender Barrier'
              label="Shaan's topic"
              path='/shaan'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/prohibitionPoliticalCartoon.jpg'
              text='What Lead to Prohibtion and Its Effects'
              label="Mark's topic"
              path='/mark'
            />
            <CardItem
              src='images/tempmain.jpg'
              text="Prohibition and Women's Rights"
              label="Sandy's Topic"
              path='/sandy'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Quisque a dolor erat. Duis laoreet consectetur mi. Donec eget rutrum quam. Etiam eu'
              label="Arvins Topic"
              path='/arvin'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
