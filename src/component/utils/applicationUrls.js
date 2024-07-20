import { url } from "./constant";

class ApplicationUrls {
    authUrl = url + '/auth'

    get loginUrl() {
        return this.authUrl + '/login'
    }

    get signupUrl() {
        return this.authUrl + '/register'
    }

    get validateToken() {
        return this.authUrl + '/validateToken'
    }

    get verifyTotp() {
        return this.authUrl + '/verify-totp'
    }

    get createTask() {
        return url + '/task'
    }
    allTaskStatus(userId) {
        return url + '/task/' + userId
    }


}
export const applicationUrls = new ApplicationUrls();