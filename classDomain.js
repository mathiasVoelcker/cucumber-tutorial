class classDomain {
    static scheduleClass(date) {
        if (date === "Friday") {
            return "class scheduled";
        }
        else if (date == "Sunday") {
            return "cannot Schedule on weekends";
        }
        else {
            return "not a valid day";
        }
    }
}
