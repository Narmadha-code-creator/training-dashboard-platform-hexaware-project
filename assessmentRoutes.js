const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { assess } = require("../controllers/assessmentController");

router.post("/", auth, assess);

module.exports = router;