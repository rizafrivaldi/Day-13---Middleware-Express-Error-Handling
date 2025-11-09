const express = require("express");
const router = express.Router();
const asyncHandler = require("../middleware/asyncHandler");
const auth = require("../middleware/auth");
const logger = require("../middleware/logger");

{
  /*
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

//Simulasi route GET biasa//
router.get("/", (req, res) => {
  res.json({ message: "All user list" });
});

// Ex. route with error async //
router.get(
  "/error-async",
  asyncHandler(async (requestAnimationFrame, res) => {
    //Simulasi error async//
    await new Promise((resolve, reject) =>
      setTimeout(() => reject(new Error("Gagal ambil data async!")), 100)
    );
    res.json({ message: "Init tidak akan dijalankan" });
  })
);

module.exports = router;
*/
}

//middleware logger diterapkan di semua route//
router.use(logger);

//public route//
router.get("/", (req, res) => {
  res.json({ success: true, message: "Public user list" });
});

//route dengan auth//
router.get(
  "/profile",
  auth,
  asyncHandler(async (req, res) => {
    res.json({
      success: true,
      message: "This is a protected route",
      user: { is: 1, name: "Rivaldi" },
    });
  })
);

//route untuk simulasi error async//
router.get(
  "/error-async",
  asyncHandler(async (req, res) => {
    await new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Failed to fetch async data!")), 100)
    );
    res.json({ message: "This will never run" });
  })
);

module.exports = router;
