import { test, expect } from '@playwright/test';
import { SearchResultPage } from '../pages/wiki_search_result';
import { SearchPage } from '../pages/wiki_search';


test('search_result_test', async ({ page }) => {

    const search = new SearchPage(page)
    const result = new SearchResultPage(page)

    
    await search.gotoSearchPage()
    await search.add_search('Mangó')
    await page.waitForTimeout(1000)
    await result.open_result_picture()
    await result.close_result_picture()
    await page.close()



    
})
    
    
    