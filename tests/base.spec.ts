import { expect, test } from '@playwright/test'

import { TestID } from '../src/enums'

test('Has right title', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await expect(page).toHaveTitle('Github Users Search')
})

test('Has header', async ({ page }) => {
  await page.goto('http://localhost:3000')

  await page.getByTestId(TestID.Header).isVisible()
})

test('Has scrollup button', async ({ page }) => {
  await page.goto('http://localhost:3000')

  await page.getByTestId(TestID.ScrollUp).isVisible()
})