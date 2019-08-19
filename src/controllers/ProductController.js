const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const products = await Product.find();
        return res.json(products);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true}); // New:true retorna os valores atualizados para o product, "salva".

        return res.json(product);

    },

    async delete(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send(); // Apenas retorna resposta de sucesso
    },
};
