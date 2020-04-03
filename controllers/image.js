module.exports = {
  index: function(req, res) {
    res.render("image");
  },
  create: function(req, res) {
    res.send("image create post");
  },
  like: function(req, res) {
    res.send("image like post route");
  },
  comment: function(req, res) {
    res.send("comment post routes");
  }
};
