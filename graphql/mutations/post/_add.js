var { GraphQLNonNull } = require('graphql');

var { postType, postInputType } = require('../../types/_post');

var { PostModel } = require('../../../models/post');

module.exports = {
    types: postType,
    args: {
        data: {
            name: 'data',
            types: new GraphQLNonNull(postInputType)
        }
    },
    resolve(root, params){
        const pModel = new PostModel(params.data);
        const newPost = new pModel.save();
        if(!newPost){
            throw new Error('Error adding post');
        }
        return newPost;
    }
}