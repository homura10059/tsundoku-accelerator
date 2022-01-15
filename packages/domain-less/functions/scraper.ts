import { launch, Browser, Page } from 'puppeteer'


import {scrollPageToBottom} from "puppeteer-autoscroll-down";

export const getBrowser = (() => {
  let browser: Promise<Browser> | null = null
  return async () => {
    if (!browser) {
      browser = launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      })
    }
    return browser
  }
})()

export const scrape = async (browser: Browser, url: string) => {
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: ['networkidle0'], timeout: 300000 })
  await scrollPageToBottom(page, {
    size: 500,
    delay: 250
  })
  return page
}

export const getText = async (
  page: Page,
  selector: string
): Promise<string> => {
  const title = await page.$eval(selector, element => element.textContent)
  return title ? title.trim() : ''
}

export const getImageUrl = async (
  page: Page,
  selector: string
): Promise<string | undefined> => {
  const src = await page.$eval(selector, element => element.getAttribute('src'))
  return src ? src : undefined
}

export const getHrefList = async (
  page: Page,
  selector: string
): Promise<string[]> => {
  return await page.$$eval(selector, elements =>
    elements
      .map(element => element.getAttribute('href'))
      .filter(
        (href: string | null): href is string => href !== null && href !== ''
      )
  )
}
