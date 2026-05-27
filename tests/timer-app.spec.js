/* Testa https://lejonmanen.github.io/timer-vue/

1. Smoke test: sidan laddas och har titeln "Timer app"
2. När sidan laddas visas inga timers
3. Som användare, vill jag lägga till en timer, för att ta tiden på hur långt det är kvar på rasten
*/
import { test, expect } from '@playwright/test'

const url = 'https://lejonmanen.github.io/timer-vue/'


test('smoke test, sidan laddas och har titeln "Timer app"', async ({ page }) => {
	// 1. ladda sidan
	// 2. kontrollera titeln

	await page.goto(url)

	const title = await page.title()
	expect(title).toBe("Timer app")
})


test('när sidan laddas visas inga timers', async ({ page }) => {
	// 1. ladda sidan
	// 2. kontrollera att timer inte syns (element med CSS-klassen timer)

	await page.goto(url)

	// locator fungerar som querySelector - men ska användas i sista hand!
	const timerElement = page.locator('.timer')
	await expect(timerElement).toBeHidden()
})