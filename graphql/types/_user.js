const {
    GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
	GraphQLID,
	GraphQLList
} = require('graphql');

const PostModel = require('../../models/post');
const postType = require('./_post');

const userType = new GraphQLInputObjectType({
    name: 'user',
    description: 'User api',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        email: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        post: {
            type: new GraphQLList(postType),
            resolver(user) {
                const { _id } = user;
                return PostModel.find({ uid: _id }).exec();
            }
        }
    })
});

const userInputType = new GraphQLInputObjectType({
    name: 'UserInput',
    description: 'Inset new User',
    fields: () => ({
        email: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
    })
});

module.exports = {
    userType,
    userInputType
}
