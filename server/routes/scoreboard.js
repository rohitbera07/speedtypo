const express= require("express")
const router=express.Router();
const Score = require('../models/Score')
router.post('/', async(req,res)=>{
    const {userId,wpm,accuracy}=req.body;
    try{
        const newScore= new Score({userId,wpm,accuracy});
        await newScore.save();
        res.status(201).json({message: 'Score saved'})
    }
    catch(err){
      console.log(err)
        res.status(500).json({error:'failed to save score'})
    }
})
router.get('/:userId', async (req, res) => {
  try {
    const scores = await Score.find({ userId: req.params.userId }).sort({ createdAt: 1 });
    console.log("chalra bc")
    res.json(scores);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch scores' });
  }
});

module.exports= router;