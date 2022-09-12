import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewHobby } from '../actions/hobby';
import HobbyList from '../components/Home/HobbyList';

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000)
}

function HomePage(props) {
  const hobbyList = useSelector(state => state.hobby.list);
  const activeId = useSelector(state => state.hobby.activeId);

  const dispatch = useDispatch();
  
  const handleAddHobbyClick = () => {
    const newId = randomNumber();
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`
    }

    const action = addNewHobby(newHobby)
    dispatch(action);
  }

  return (
    <div className='home-page'>
      <h1>dhasdh</h1>

    <button onClick={handleAddHobbyClick}>Random hobby</button>

      <HobbyList hobbyList={ hobbyList }></HobbyList>
    </div>
  );
}

export default HomePage;