var { GraphQLNonNull, GraphQLID } = require('graphql');
var { userType  } = require('../../types/_user');
var UserModel  = require('../../../models/user');

module.exports = {
    types: userType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args) {
        const removeModel = UserModel.findByIdAndRemove(args.id);
        if(!removeModel){
            throw new Error('Error removing user');
        }
        return removeModel;
    }
}