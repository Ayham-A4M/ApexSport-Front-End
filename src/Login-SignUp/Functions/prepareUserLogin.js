const prepareUserLogin = (inputFields) => {

    const LoginInformation = {
        Email: inputFields.email,
        password: inputFields.password,
    }
    return LoginInformation;
}
export default prepareUserLogin