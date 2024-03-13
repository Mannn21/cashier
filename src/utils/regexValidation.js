export const checkIsValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email);
}

export const checkIsValidPassword = password => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-_+=])[A-Za-z0-9!@#$%^&*()-_+=]{5,}$/
    return passwordRegex.test(password);
}

export const checkIsValidImage = image => {
    const imageRegex = /^.*\.(jpg|jpeg|png|webp)$/
    return imageRegex.test(image);
}