const express = require("express");
const router = express.Router();

const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controller/goalController');

// localhost:3000/api/goals
router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router;