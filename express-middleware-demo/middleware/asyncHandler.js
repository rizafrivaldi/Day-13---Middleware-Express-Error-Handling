const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;

//contoh pemakaian di route//
const asyncHandler = require("../middleware/asyncHandler");

router.get(
  "/error-async",
  asyncHandler(async (req, res) => {
    //simulasi error async//
    await new Promise((resolve, reject) =>
      setTimeout(() => reject(new Error("Gagal ambil data async!")), 100)
    );
    res.json({ message: "Ini tidak akan dijalankan" });
  })
);
