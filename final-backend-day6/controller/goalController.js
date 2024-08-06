
const getGoals = (req, res) => {
    res.json({"message": "GET route works"});
}

const setGoal = (req, res) => {
    res.json({"message": "POST route works"});
}

const updateGoal = (req, res) => {
    res.json({"message": "PUT route works"});
}

const deleteGoal = (req, res) => {
    res.json({"message": "DELETE route works"});
}

module.exports = {getGoals, setGoal, updateGoal, deleteGoal}