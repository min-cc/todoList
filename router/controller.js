// const congviec = require('../models/congviec')
const congviec = require('../models/congviec')
const congviecDb =require('../models/congviec')

module.exports.index= (req, res) =>{
    res.send('day la index')
}

module.exports.themcongviec = async (req, res) =>{
    await congviecDb.create(req.body)
    res.send('them thanh cong')
}

module.exports.laycongviec = async (req,res) =>{
    var congviec = await congviecDb.find()
    res.json(congviec)
}

module.exports.xoacongviec = async (req,res) =>{
    var xoa = req.params.id;
    await congviecDb.findByIdAndDelete(xoa)
    res.send('xoa thanh cong')
}