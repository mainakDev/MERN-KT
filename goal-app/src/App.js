import { useState } from 'react'
import './App.css';
import GoalList from './components/GoalList/GoalList'
import NewGoal from './components/NewGoal/NewGoal'

function App() {

  const [classGoals, setClassGoals] = useState([
    {id: '1', text: 'Introduce React.js'},
    {id: '2', text: 'Talk about life cycle of React'},
    {id: '3', text: 'Talk about SPA'},
  ])
  

  const addNewGoalHandler = newGoal => {
    setClassGoals(classGoals.concat(newGoal))
  }

  return (
    <div className='class-goal'>
      <h2>My Goal List</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={classGoals}/>  
    </div>
  );
}

export default App;
