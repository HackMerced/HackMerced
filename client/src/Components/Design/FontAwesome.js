import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

library.add(faHome);

const Home = () => (
  <div>
    Favorite Food: <FontAwesomeIcon icon="home" />
  </div>
)

export { Home };