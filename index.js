const mongoose = require('mongoose');
const Dishes = require('./models/dishes');


const url = 'mongodb://localhost:27017/confusion';

const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('Connected correctly to the server');

    let newDish = Dishes({
        'name': 'Dish 1',
        'description': 'descr'
    });

    newDish.save()
        .then((dish) => {
            console.log(dish);
            return Dishes.find({}).exec();
        })
        .then((dishes) => {
            console.log(dishes);
            return Dishes.deleteMany({});
        })
        .then(() => {
            mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });
});