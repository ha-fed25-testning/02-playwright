/* Testa https://lejonmanen.github.io/timer-vue/

1. Smoke test: sidan laddas och har titeln "Timer app"
2. När sidan laddas visas inga timers
3. Som användare, vill jag lägga till en timer, för att ta tiden på hur långt det är kvar på rasten
*/
import { test, expect } from '@playwright/test'

const url = 'https://lejonmanen.github.io/timer-vue/'


test.describe('Timer app', () => {

	test.beforeEach(async ({ page }) => {
		// Surfa till startsidan - ingår i varje test
		await page.goto(url)

	})


	test('smoke test, sidan laddas och har titeln "Timer app"', async ({ page }) => {
		// 1. ladda sidan - görs i beforeEach
		// 2. kontrollera titeln

		const title = await page.title()
		expect(title).toBe("Timer app")
	})


	test('när sidan laddas visas inga timers', async ({ page }) => {
		// 1. Kontrollera att timer inte syns (element med CSS-klassen timer)

		// locator fungerar som querySelector - men ska användas i sista hand!
		const timerElement = page.locator('.timer')
		await expect(timerElement).toBeHidden()
	})


	test('som användare, vill jag lägga till en timer, för att ta tiden på hur långt det är kvar på rasten', async ({ page }) => {
		// 1. klicka på "Add timer"
		// 2. kontrollera att element med CSS-klassen timer syns

		await page.getByRole('button', { name: 'Add timer' }).click()

		const timerElement = page.locator('.timer')
		await expect(timerElement).toBeVisible()
	})

})  // describe: Timer app
