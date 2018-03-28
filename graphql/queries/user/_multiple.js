var {
    GraphQLList
} = require('graphql');

var { userType } = require('../../types/_user');
var { UserModel } = require('../../../models/user');

module.exports = {
    type: new GraphQLList(userType),
    resolver(){
        const users = UserModel.find().exec();
        if(!users){
            throw new Error('Error while fetching users...')
        }
        return users;
    }
}