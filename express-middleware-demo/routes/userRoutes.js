const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mesage: "User list successfully retrieved " });
});

router.get("/:id", (req, res) => {
  res.json({ message: "User with ID ${req.params.id" });
});

module.exports = router;

//Custom error (error handling lanjutan)//

const customError = require("../utils/customError");
const asyncHandler = require("../middleware/asyncHandler");

router.get(
  "/custom-error",
  asyncHandler(async (req, res, next) => {
    throw new customError("Data not found", 404);
  })
);
