class YearGroup {
    constructor(yearInput, hoyInitials) {
        this.year = yearInput
        this.headOfYearInitials = hoyInitials
    }

    getHeadOfYear() {
        return this.headOfYearInitials
    }

    getYear() {
        return this.year
    }
}

module.exports = YearGroup