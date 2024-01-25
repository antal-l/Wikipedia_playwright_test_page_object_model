exports.SearchPage = class SearchPage {

    constructor(page) {

        this.page = page
        this.search_textbox = page.getByPlaceholder('Keresés a Wikipédián')
    }
        async gotoSearchPage() {
          await this.page.goto('https://hu.wikipedia.org/wiki/Kezd%C5%91lap') 
        }

        async add_search(text) {
            await this.search_textbox.fill(text)
            await this.search_textbox.press('Enter')
        }

      

    }



    
 




      