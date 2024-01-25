exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.login_button = page.locator('xpath=//*[@id="pt-login-2"]/a/span')
        this.username_textbox = page.locator('xpath=//*[@id="wpName1"]')
        this.password_textbox = page.locator('xpath=//*[@id="wpPassword1"]')
        this.login_submit_button = page.locator('xpath=//*[@id="wpLoginAttempt"]')
        this.logout_dropdown = page.locator('xpath=//*[@id="vector-user-links-dropdown-checkbox"]')
        this.logout_button = page.locator('xpath=//*[@id="pt-logout"]/a')
        

    }

    async gotoLoginPage(){
        await this.page.goto('https://hu.wikipedia.org/wiki/Kezd%C5%91lap');
        await this.login_button.click()
    }

    async login(username, password){
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_submit_button.click()
        
    }

    async logout(){
        await this.logout_dropdown.click()
        await this.logout_button.click()
    } 
    


}
       
        