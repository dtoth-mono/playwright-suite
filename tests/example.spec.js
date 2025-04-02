const { test, expect } = require("@playwright/test");

test("Check if homepage loads", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page.locator("h1")).toHaveText("Welcome to My Simple App");
});

test("Fetch API message", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.click("#fetch-message");
  await expect(page.locator("#message")).toHaveText("Hello from API!");
});
