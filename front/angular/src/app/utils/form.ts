export function formatEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(regex.test(email))
    if (!regex.test(email)) {
        return false
    }
    return true;
}