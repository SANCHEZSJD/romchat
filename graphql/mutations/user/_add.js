var { GraphQLNonNull } = require('graphql');
var { userType, userInputType  } = require('../../types/_user');
var { UserModel } = require('../../../models/user');

module.exports = {
    types: userType,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(userInputType)
        }
    },
    resolve(root, params) {
        const uModel = new UserModel(params.data);
        const newUser = uModel.save();
        if(!newUser){
            throw new Error('Error adding user');
        }
        return newUser;
    }
}