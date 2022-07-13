export function formatPhoneNumber(phoneNumber) {
    var reg = /^(09)/;
    if(!reg.test(phoneNumber)){
        return null;
    }
    phoneNumber = phoneNumber.replace(/^0/, '+98');

    return phoneNumber;
}

// formatPhoneNumber('09216094328')