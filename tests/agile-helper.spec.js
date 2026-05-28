import { test, expect } from '@playwright/test'

const url = 'https://lejonmanen.github.io/agile-helper/'


test.describe('Agile helper', () => {

	test.beforeEach(async ({ page }) => {
		await page.goto(url)
	})


	// 1a Gör ett "smoke test", ett test som kontrollerar att det går att surfa till webbappens sida och att titeln är "Agile helper".
	test('smoke test, rätt titel', async ({ page }) => {
		const title = await page.title()
		expect(title).toBe('Agile helper')
	})


	/*
	1b Gör ett test för följande scenario:
	Klicka på knappen med texten "Första"
	Klicka på knappen som innehåller texten "Sprint planning"
	Kontrollera att en rubrik med texten "Sprint planning" är synlig på webbsidan.
	*/
	test('som en användare, kan jag läsa om sprint planning, så att jag kan hålla scrum-möten på rätt sätt', async ({ page }) => {
		await page.getByTestId('btn-first').click()

		await page.getByRole('button', { name: 'Sprint planning' })
		// Alternativ syntax
		//await page.getByRole('button').getByText('Sprint planning')

		const heading = page.getByRole('heading', { name: 'Sprint planning' })
		await expect(heading).toBeVisible()
	})

})