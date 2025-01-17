const express = require('express')
const app = express()
const port = 3001
const USER_ID_COUNTER = 1;
const { auth } = require("./middleware");

const users =[];

const problems = [
  {
      problemId: "1",
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "42%",
      description: "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
      exampleIn: "left = 5, right = 7",
      exampleOut: "4"
  },
  {
      problemId: "2",
      title: "205. Add tw numbers",
      difficulty: "Medium",
      acceptance: "41%",
      description: "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
      exampleIn: "a = 100 , b = 200",
      exampleOut: "300"
  },
  {
      problemId: "3",
      title: "202. Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%",
      description: "Write an algorithm to determine if a number n is happy.",
      exampleIn: "n = 19",
      exampleOut: "true"
  },
  {
      problemId: "4",
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%",
      description: "Given number k , removed kth element",
      exampleIn: "list: 1->2->3 , k=2",
      exampleOut: "1->3"
  },
  {
      problemId: "1",
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "42%",
      description: "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
      exampleIn: "left = 5, right = 7",
      exampleOut: "4"
  },
  {
      problemId: "2",
      title: "205. Add two numbers",
      difficulty: "Medium",
      acceptance: "41%",
      description: "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
      exampleIn: "a = 100 , b = 200",
      exampleOut: "300"
  },
  {
      problemId: "3",
      title: "202. Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%",
      description: "Write an algorithm to determine if a number n is happy.",
      exampleIn: "n = 19",
      exampleOut: "true"
  },
  {
      problemId: "4",
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%",
      description: "Given number k , removed kth element",
      exampleIn: "list: 1->2->3 , k=2",
      exampleOut: "1->3"
  }
];



app.get('/',(req,res)=>{
  res.json({
    msg:"hello we are running",
  })
});


app.get('/problems', (req, res) => {
  const filteredProblems = problems.map(x=>({
    problemId:x.problemId,
    difficulty:x.difficulty,
    acceptance:x.acceptance
  }));
  res.json(filteredProblems);
})

app.get('/me',auth,(req,res) =>{
  const user = users.find((x)=>x.id === req.userId);
  res.json({email : user.email, id: user.id})
});


app.get('/problems/:id', (req, res) => {
  const id = req.params.id;
  const problem = problems.find(x => x.problemId === id);
  if (!problem) {
    return res.status(404).json({ error: "Problem not found" }); // Changed status code to 404 and added error message
  }
  res.json(problem);
});





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})