import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
const greetingSelector = 'div#greeting'

test('visits the app root url', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator(greetingSelector)).toHaveText('Hello Unknown!')
})

test('visits the app root url with a user', async ({ page }) => {
  const user = 'TestyMcTestFace'
  await page.goto(`/${user}`)
  await expect(page.locator(greetingSelector)).toHaveText(`Hello ${user}!`)
})
