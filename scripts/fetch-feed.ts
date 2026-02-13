/**
 * Fetch the full PSF Blogger feed (all pages) and save as a single Atom file.
 *
 * Blogger's API caps at ~150 entries per request regardless of max-results.
 * This script follows <link rel="next"> pagination to get everything.
 */

import * as fs from "node:fs";
import * as path from "node:path";

const BLOG_URL = "https://pyfound.blogspot.com/feeds/posts/default?max-results=150";
const OUTPUT = path.resolve(process.cwd(), "psf-feed.atom");

async function fetchPage(url: string): Promise<string> {
  console.log(`  Fetching ${url}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

function extractNextUrl(xml: string): string | null {
  const match = xml.match(/<link[^>]+rel=['"]next['"][^>]+href=['"]([^'"]+)['"]/);
  return match ? match[1].replace(/&amp;/g, "&") : null;
}

function extractEntries(xml: string): string[] {
  return xml.match(/<entry>[\s\S]*?<\/entry>/g) || [];
}

async function main() {
  console.log("Fetching PSF Blog feed from Blogger API...\n");

  // First page — keep the <feed> wrapper
  const page1 = await fetchPage(BLOG_URL);

  const totalMatch = page1.match(/<openSearch:totalResults>(\d+)<\/openSearch:totalResults>/);
  const total = totalMatch ? parseInt(totalMatch[1], 10) : 0;
  const page1Entries = extractEntries(page1);
  console.log(`  Total posts: ${total}, page 1: ${page1Entries.length} entries`);

  // Remove closing </feed> from page 1 to append more entries
  let combined = page1.replace(/<\/feed>\s*$/, "\n");
  let totalEntries = page1Entries.length;

  // Follow pagination
  let nextUrl = extractNextUrl(page1);
  let pageNum = 2;

  while (nextUrl) {
    const page = await fetchPage(nextUrl);
    const entries = extractEntries(page);
    if (entries.length === 0) break;

    combined += entries.join("\n") + "\n";
    totalEntries += entries.length;
    console.log(`  Page ${pageNum}: ${entries.length} entries (total: ${totalEntries})`);

    nextUrl = extractNextUrl(page);
    pageNum++;
  }

  combined += "</feed>\n";
  fs.writeFileSync(OUTPUT, combined, "utf-8");
  console.log(`\nSaved ${OUTPUT} (${totalEntries} entries)`);
}

main().catch(console.error);
