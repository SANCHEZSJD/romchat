var {
    GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID
} = require('graphql');

var postType = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        uid: {
            type: GraphQLString
        },
        title: {
            type: GraphQLString
        },
        body: {
            type: GraphQLString
        }
    })
});

var postInputType = new GraphQLInputObjectType({
    name: 'PostInput',
    description: 'Insert post',
    fields: () => ({
        uid: {
            type: GraphQLString
        },
        title: {
            type: GraphQLString
        },
        body:{
            type: GraphQLString
        }
    })
});

module.exports = {
    postType,
    postInputType
}