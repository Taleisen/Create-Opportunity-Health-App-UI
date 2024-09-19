export const isValidDate = (value) => (/^\d{4}-\d{2}-\d{2}$/.test(value));

export const isValidEmail = (value) => (/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(value));

export const isValidName = (value) => (/^[a-zA-Z'-]+$/.test(value));

export const isValidNumber = (value) => (/^[0-9]+\.?[0-9]{0,2}$/.test(value));

export const isValidSsn = (value) => (/^[0-9]{3}-[0-9]{2}-[0-9]{4}$/.test(value));

export const isValidStateFormat = (value) => (/^[a-zA-Z]{2}$/.test(value));

export const isValidZip = (value) => (/^[0-9]{5}$/.test(value) || /^[0-9]{5}-[0-9]{4}$/.test(value));

export const isValidVisit = (value) => (/^[a-zA-Z][0-9][a-zA-Z] [0-9][a-zA-Z][0-9]$/.test(value));

export const isValidBilling = (value) => (/^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/.test(value));

export const isValidIcd = (value) => (/^[a-zA-Z][0-9]{2}$/.test(value));

export const isValidGender = (value) => (/^Male$/.test(value) || /^Female$/.test(value) || /^Other$/.test(value));

export const isValidState = (value) => (/^AK$/.test(value)
|| /^AL$/.test(value)
|| /^AR$/.test(value)
|| /^AZ$/.test(value)
|| /^CA$/.test(value)
|| /^CO$/.test(value)
|| /^CT$/.test(value)
|| /^DE$/.test(value)
|| /^FL$/.test(value)
|| /^GA$/.test(value)
|| /^HI$/.test(value)
|| /^IA$/.test(value)
|| /^ID$/.test(value)
|| /^IL$/.test(value)
|| /^IN$/.test(value)
|| /^KS$/.test(value)
|| /^KY$/.test(value)
|| /^LA$/.test(value)
|| /^MA$/.test(value)
|| /^MD$/.test(value)
|| /^ME$/.test(value)
|| /^MI$/.test(value)
|| /^MN$/.test(value)
|| /^MO$/.test(value)
|| /^MS$/.test(value)
|| /^MT$/.test(value)
|| /^NC$/.test(value)
|| /^ND$/.test(value)
|| /^NE$/.test(value)
|| /^NH$/.test(value)
|| /^NJ$/.test(value)
|| /^NM$/.test(value)
|| /^NV$/.test(value)
|| /^NY$/.test(value)
|| /^OH$/.test(value)
|| /^OK$/.test(value)
|| /^OR$/.test(value)
|| /^PA$/.test(value)
|| /^RI$/.test(value)
|| /^SC$/.test(value)
|| /^SD$/.test(value)
|| /^TN$/.test(value)
|| /^TX$/.test(value)
|| /^UT$/.test(value)
|| /^VA$/.test(value)
|| /^VT$/.test(value)
|| /^WA$/.test(value)
|| /^WI$/.test(value)
|| /^WV$/.test(value)
|| /^WY$/.test(value));
