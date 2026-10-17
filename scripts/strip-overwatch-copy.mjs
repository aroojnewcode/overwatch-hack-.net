/**
 * One-off: remove Blizzard "Overwatch" wording from user-facing copy.
 * Preserves: overwatchhack.net, /overwatch-hack paths, slugs, asset paths, checkout URLs.
 */
import fs from 'fs'
import path from 'path'

const ROOT = path.join(process.cwd(), 'src')
const EXT = new Set(['.ts', '.tsx', '.astro'])

const protectedChunks = []

function protect(text) {
  const rules = [
    /overwatchhack\.net/gi,
    /\/overwatch-hack\b/g,
    /\/overwatch-hacks\b/g,
    /\/overwatch-cheats\b/g,
    /\/overwatch-2-hack\b/g,
    /\/og\/overwatch-[^\s'"]+/g,
    /\/media\/overwatch-[^\s'"]+/g,
    /\/videos\/overwatch-[^\s'"]+/g,
    /\/products\/overwatch-2\b/g,
    /https:\/\/overwatch\.blizzard\.com[^\s'"]*/g,
    /https:\/\/battle\.net\/shop[^\s'"]*overwatch[^\s'"]*/gi,
    /slug:\s*'overwatch'/g,
    /slug === 'overwatch'/g,
    /guidePath\('overwatch'\)/g,
    /parseGuideSlug\('overwatch/g,
    /getGame\('overwatch'\)/g,
    /overwatch:\s*\{/g,
    /'overwatch hack'/g,
    /'overwatch hacks'/g,
    /'overwatch 2 hack'/g,
    /'overwatch cheats'/g,
    /'overwatch aimbot'/g,
    /'overwatch esp'/g,
    /'overwatch wallhack'/g,
    /'overwatch radar'/g,
    /'overwatch 2 aimbot'/g,
    /'overwatch 2 hacks'/g,
    /'overwatch 2 cheat'/g,
    /'overwatch 2 cheats'/g,
    /'overwatch cheat menu'/g,
    /'anti-cheat status overwatch'/g,
    /searchTerms:\s*'[^']*'/g,
  ]

  let out = text
  for (const re of rules) {
    out = out.replace(re, (m) => {
      const id = protectedChunks.length
      protectedChunks.push(m)
      return `__OW_PROTECT_${id}__`
    })
  }
  return out
}

function restore(text) {
  return text.replace(/__OW_PROTECT_(\d+)__/g, (_, i) => protectedChunks[Number(i)] ?? '')
}

function cleanCopy(text) {
  protectedChunks.length = 0
  let s = protect(text)

  s = s.replace(/Overwatch Hack/g, '__SITE_NAME__')
  s = s.replace(/overwatch hack/g, 'hack')
  s = s.replace(/Overwatch 2/g, 'PC')
  s = s.replace(/overwatch 2/gi, 'PC')
  s = s.replace(/Overwatch Hacks/g, 'Hacks')
  s = s.replace(/Overwatch Aimbot/g, 'Aimbot')
  s = s.replace(/Overwatch aimbot/g, 'Aimbot')
  s = s.replace(/Overwatch ESP/g, 'ESP')
  s = s.replace(/Overwatch esp/g, 'ESP')
  s = s.replace(/Overwatch wallhack/g, 'wallhack')
  s = s.replace(/Overwatch Wallhack/g, 'Wallhack')
  s = s.replace(/Overwatch radar/g, 'radar')
  s = s.replace(/Overwatch Radar/g, 'Radar')
  s = s.replace(/Overwatch cheats/gi, 'cheats')
  s = s.replace(/Overwatch cheat/gi, 'cheat')
  s = s.replace(/Overwatch ·/g, 'PC ·')
  s = s.replace(/Overwatch player/g, 'PC player')
  s = s.replace(/Overwatch patches/g, 'game patches')
  s = s.replace(/Overwatch feature/g, 'feature')
  s = s.replace(/Overwatch product/g, 'product')
  s = s.replace(/Official Overwatch/g, 'Official game')
  s = s.replace(/for Overwatch\b/g, 'for PC')
  s = s.replace(/on Overwatch\b/g, 'on PC')
  s = s.replace(/open Overwatch\b/g, 'open the game')
  s = s.replace(/Launch Overwatch\b/g, 'Launch the game')
  s = s.replace(/into Overwatch\b/g, 'into the game')
  s = s.replace(/\bOverwatch\b/g, 'PC')
  s = s.replace(/__SITE_NAME__/g, 'Hack')

  s = restore(s)
  // Fix double PC PC
  s = s.replace(/\bPC PC\b/g, 'PC')
  s = s.replace(/PC game on PC/g, 'PC game')
  return s
}

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name)
    const st = fs.statSync(p)
    if (st.isDirectory()) walk(p, files)
    else if (EXT.has(path.extname(name))) files.push(p)
  }
  return files
}

const files = walk(ROOT)
let changed = 0
for (const file of files) {
  const raw = fs.readFileSync(file, 'utf8')
  const next = cleanCopy(raw)
  if (next !== raw) {
    fs.writeFileSync(file, next)
    changed++
  }
}

console.log(`Updated ${changed} files under src/`)
