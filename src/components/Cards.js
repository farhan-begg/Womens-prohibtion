import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>For more Info on Women's Prohibiton Click Here</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Lorem Ipsum'
              label="Farhan's topic "
              path='/farhan'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Lorem Ipsum'
              label="Shaan's topic"
              path='/shaan'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Lorem Ipsum Quisque a dolor erat. Duis laoreet consectetur mi. Donec eget rutrum quam. Etiam eu'
              label="Mark's topic"
              path='/mark'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Quisque a dolor erat. Duis laoreet consectetur mi. Donec eget rutrum quam. Etiam eu'
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
