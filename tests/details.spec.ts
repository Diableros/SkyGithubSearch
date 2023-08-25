import { test } from '@playwright/test'

import { TestID } from '../src/enums'

test(`Has user's details`, async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByTestId(TestID.SearchInput).fill('Diableros')
  await page.getByTestId(TestID.SearchButton).click()
  await page.waitForTimeout(3000)
  await page.getByTestId('detailButton_39211446').click()
  await page.waitForTimeout(3000)
  await page.getByTestId('detailData_39211446_isOpen').isVisible()
})
