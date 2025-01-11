export function formatEmail(email: string) {
    if(email.length == 0){
        return "email section is empty"
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        return "email is not in right format"
    }
    return "";
}

export function formatPassword(password: string) {
    if(password.length == 0){
        return "password section is empty"
    }

    const regex = /^.{8,}$/;
    if (!regex.test(password)) {
        return "password must contains 8 characters minimum"
    }
    return "";
}