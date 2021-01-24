// imports
const User = require("./User");
const Post = require("./Post");
const Vote = require('./Vote');

// 1 User to many Post
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

// many User to many Post through Vote
User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id'
});

Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id'
});

module.exports = { User, Post, Vote };
