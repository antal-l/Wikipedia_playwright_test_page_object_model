import { SearchPage } from '../pages/wiki_search'
import { test, expect } from '@playwright/test';

test('search_test', async ({ page }) => {

const search = new SearchPage(page)

  await search.gotoSearchPage()
  await search.add_search('Mangó')
  await page.close()
  

})