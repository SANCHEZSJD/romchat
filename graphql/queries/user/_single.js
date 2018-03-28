const {
    GraphQLID,
    GraphQLNonNull
} = require('graphql');

const { userType } = require('../../types/_user');
const userModel = require('../../../models/user');

module.exports = {
    type: userType,
    args: {
        id: {
            name: 'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolver(root, args){
        return userModel.findById(args.id).exec();
    }
}