const path = require('path');
const router = require('express').Router();

// "/" brings us to the root route of the server, used to create a homepage for a server.
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// "*" wildcard undefined routes will return to homepage
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;