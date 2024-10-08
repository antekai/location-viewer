import { test, expect } from "@playwright/test";
import {
  SELECTED_MARKER_COLOR,
  UNSELECTED_MARKER_COLOR,
} from "../src/components/Map/config";

test("homepage has title and map is visible", async ({ page }) => {
  // Navigate to the homepage
  await page.goto("/");

  // Verify the title contains "Location Viewer"
  await expect(page).toHaveTitle(/Location Viewer/);

  const mapComponent = page.getByTestId("map");
  await expect(mapComponent).toBeVisible();
});

test("user (de)selects marker at map", async ({ page }) => {
  await page.goto("/");

  const MARKER_ID = 1;

  const mapMarker = page.getByAltText(`marker-${MARKER_ID}`);
  let markerSrc = await mapMarker.getAttribute("src");
  const row = page.locator(`[data-id="${MARKER_ID}"]`);

  //default state
  await expect(markerSrc).toContain(UNSELECTED_MARKER_COLOR);

  // map-marker selection
  await mapMarker.click();
  markerSrc = await mapMarker.getAttribute("src");
  // selected state
  await expect(markerSrc).toContain(SELECTED_MARKER_COLOR);
  await expect(row).toHaveAttribute("aria-selected", "true");

  // map-marker deselection
  await mapMarker.click();
  markerSrc = await mapMarker.getAttribute("src");
  // unselected state
  await expect(markerSrc).toContain(UNSELECTED_MARKER_COLOR);
  await expect(row).toHaveAttribute("aria-selected", "false");
});

test("user (de)selects marker at table", async ({ page }) => {
  await page.goto("/");

  const MARKER_ID = 2;

  const mapMarker = page.getByAltText(`marker-${MARKER_ID}`);
  let markerSrc = await mapMarker.getAttribute("src");
  const row = page.locator(`[data-id="${MARKER_ID}"]`);

  //default state
  await expect(markerSrc).toContain(UNSELECTED_MARKER_COLOR);

  // table row selection
  await row.click();
  markerSrc = await mapMarker.getAttribute("src");
  // selected state
  await expect(markerSrc).toContain(SELECTED_MARKER_COLOR);
  await expect(row).toHaveAttribute("aria-selected", "true");

  // table row deselection
  await row.click();
  markerSrc = await mapMarker.getAttribute("src");
  // unselected state
  await expect(markerSrc).toContain(UNSELECTED_MARKER_COLOR);
  await expect(row).toHaveAttribute("aria-selected", "false");
});
