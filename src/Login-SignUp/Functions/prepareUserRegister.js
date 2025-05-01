const prepareUserRegister = (inputFields) => {

    const registerInformation = {
        FirstName: inputFields.firstName,
        LastName: inputFields.lastName,
        UserName: inputFields.userName,
        Email: inputFields.email,
        password: inputFields.password,
    }
    return registerInformation;
}
export default prepareUserRegister