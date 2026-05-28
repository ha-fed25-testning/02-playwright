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


	/*
	1c Gör ett test för scenariot:
	Klicka på knappen med texten "Sista"
	Klicka på knappen "Sprint review"
	Kontrollera att en rubrik med texten "Sprint review" är synlig på webbsidan.
	Klicka på knappen "Dags för retrospective"
	Klicka på knappen "Sprint retrospective"
	Kontrollera att rubriken "Sprint retrospective" visas.
	*/
	test('som en användare, vill jag läsa om hur jag avslutar sprinten, så att jag håller scrum-möten på rätt sätt', async ({ page }) => {
		const animationTimeout = { timeout: 2000 }

		await page.getByTestId('btn-last').click()
		await page.getByRole('button', { name: 'Sprint review' }).click()
		const reviewHeading = page.getByRole('heading', { name: 'Sprint review' })
		expect(reviewHeading).toBeVisible(animationTimeout)

		// Stänga dialogen
		await page.getByRole('button', { name: /Dags för retrospective/ }).click(animationTimeout)
		await page.getByRole('button', { name: 'Sprint retrospective' }).click(animationTimeout)
		const retroHeading = page.getByRole('heading', { name: 'Sprint retrospective' })
		expect(retroHeading).toBeVisible()
	})
})

/*
Effektivare kod genom att lyfta ut locators m.m. till ett objekt
const pageObject = {
	btnLast: page.getByTestId('btn-last'),
	closeReviewDialog: async () => await page.getByRole('button', { name: /Dags för retrospective/ }).click(animationTimeout)
}

Använd så här:
await pageObject.btnLast.click()
await pageObject.closeReviewDialog()
*/