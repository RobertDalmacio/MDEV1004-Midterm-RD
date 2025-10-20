/*
  File: api.js
  Student: Robert Dalmacio
  Student ID: 200606074
  Date: 2025-10-19

  Routes for API endpoints.
*/

module.exports = function (app, data) {
  // Route to fetch all posts
  app.get('/api/posts', (req, res) => {
    const result = data.map(p => ({
      postId: p.postId,
      creationTime: p.creationTime,
      postText: p.postText
    }));
    res.json(result);
  });

  // Route to fetch all users
  app.get('/api/users', (req, res) => {
    const users = data.map(p => p.userData);
    res.json(users);
  });

  // Route to group posts by user location
  app.get('/api/posts-by-location', (req, res) => {
    const grouped = {};
    data.forEach(post => {
      const loc = post.userData.Location;
      if (!grouped[loc]) grouped[loc] = [];
      grouped[loc].push(post);
    });
    res.json(grouped);
  });

  // Route to fetch details of a specific post by ID
  app.get('/api/post/:id', (req, res) => {
    const post = data.find(p => p.postId == req.params.id);
    post ? res.json(post) : res.status(404).json({ error: 'Post not found' });
  });

  // Route to fetch details of a specific user by name
  app.get('/api/user/:name', (req, res) => {
    const user = data.find(p => p.userData.Name.toLowerCase() === req.params.name.toLowerCase());
    user ? res.json(user.userData) : res.status(404).json({ error: 'User not found' });
  });
};
