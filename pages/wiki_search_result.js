exports.SearchResultPage = class SearchResultPage {

    constructor(page) {

        this.page = page
        this.result_picture = page.locator('xpath=//*[@id="mw-content-text"]/div[1]/table/tbody/tr[3]/td/span/a/img')
        this.result_picture_close = page.locator('xpath=/html/body/div[7]/div/div[1]/button[1]')
    }
        
        async open_result_picture() {
            await this.result_picture.click()
        }

        async close_result_picture() {
            await this.result_picture_close.click()
        }

      

    }




 




      