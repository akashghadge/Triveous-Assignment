// error handler class
const handleErrors = (err) => {
    let errors = { email: '', password: '' };
    // incorrect email->login
    if (err.message === 'incorrect Email') {
        errors.email = 'this email is not registerd';
    }
    if (err.message === 'incorrect Password') {
        errors.password = 'this is incorrect password';
    }
    // dublicate email->signup

    if (err.code === 11000) {
        errors.email = 'that email is already registred';
        return errors;
    }

    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        })
    }
    return errors;
}
module.exports = {
    handleErrors
};