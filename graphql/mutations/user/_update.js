var {
    GraphQLNonNull,
    GraphQLID 
} = require('graphql');

var { 
    userType, 
    userInputType 
} = require('../../types/_user');

var { UserModel } = require('../../../models/user');

module.exports = {
    types: userType,
    args: {
        id: {
            name: 'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data: {
            name: 'data',
            type: new GraphQLNonNull(userInputType)
        }
    },
    resolve(root, args) {
        return UserModel.findByIdAndUpdate(args.id,{ $set: { ...args.data } }).
        then( data => UserModel.FindeById(data.id).exec())
        .catch(err => new Error('Couldn´t update user data. ', err));
    }
}