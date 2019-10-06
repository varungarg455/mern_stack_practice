const express = require('express');
const uuild = require('uuid');
const router = express.Router();
const members = require('../../Members');

//Gets all members
router.get('/', (req, res) => {
    res.json(members);
});

//Get single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else{
        res.status(400).json({msg:`No member with id of ${req.params.id}`});
    }
});

//Create Member
router.post('/', (req, res) => {
    const newMember = {
        id: uuild.v4(),
        name: req.body.name,
        status: "active"
    }
    if(!newMember.name){
        return res.status(400).json({msg: 'Please include a name'});
    }
    members.push(newMember);
    res.json(members);
});

//Update member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        const updMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(eq.params.id)){
                member.name = updMember.name ? updMember.name : member.name; 
                res.json({msg: "Member updates", member}); 
            }
        });
    } else{
        res.status(400).json({msg:`No member with id of ${req.params.id}`});
    }
});

//Delete member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json({
            msg: "Member deleted", 
            member: members.filter(member => member.id === parseInt(req.params.id))
         });
    } else{
        res.status(400).json({msg:`No member with id of ${req.params.id}`});
    }
});


module.exports = router;