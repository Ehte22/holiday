const { adminGetAllHolidays, adminAddHoliday, adminUpdateHoliday, adminDeleteHoliday } = require("../controllers/adminController")

const router = require("express").Router()

router
    .get("/holidays", adminGetAllHolidays)
    .post("/add-holiday", adminAddHoliday)
    .put("/update-holiday/123", adminUpdateHoliday)
    .delete("/delete-holiday/123", adminDeleteHoliday)

module.exports = router