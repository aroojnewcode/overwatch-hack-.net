/**
 * Build homepage hero loop from a YouTube URL (middle segment, web-optimized).
 *
 *   node scripts/generate-hero-loop.mjs
 *   HERO_YT_URL=https://youtu.be/... node scripts/generate-hero-loop.mjs
 *
 * Requires yt-dlp + ffmpeg on PATH.
 */
import { execFileSync } from 'node:child_process'
import { mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const tmp = join(root, '.tmp-hero-video')
const source = join(tmp, 'source.mp4')
const outVideo = join(root, 'public', 'videos', 'overwatch-hero-loop.mp4')
const outPoster = join(root, 'public', 'media', 'overwatch-hero-poster.jpg')

const url =
  process.env.HERO_YT_URL || 'https://youtu.be/Ih6DVdyQn3I?si=mK3nH8eSdHvB5jfQ'
const loopSec = Number(process.env.HERO_LOOP_SEC || 8)

const vf =
  'fps=24,scale=1152:-2:flags=lanczos,eq=saturation=1.1:brightness=-0.02,colorbalance=rs=0.1:gs=-0.04:bs=0.16,format=yuv420p'

function run(cmd, args) {
  execFileSync(cmd, args, { stdio: 'inherit', windowsHide: true })
}

mkdirSync(tmp, { recursive: true })

run('yt-dlp', [
  '-f',
  'bv*[height<=1080][ext=mp4]/bv*[height<=1080]/b',
  '--merge-output-format',
  'mp4',
  '-o',
  source,
  url,
])

const duration = Number(
  execFileSync(
    'ffprobe',
    [
      '-v',
      'error',
      '-show_entries',
      'format=duration',
      '-of',
      'default=noprint_wrappers=1:nokey=1',
      source,
    ],
    { encoding: 'utf8' },
  ).trim(),
)

const start = Math.max(0, (duration - loopSec) / 2)

run('ffmpeg', [
  '-y',
  '-ss',
  String(start),
  '-t',
  String(loopSec),
  '-i',
  source,
  '-an',
  '-vf',
  vf,
  '-c:v',
  'libx264',
  '-preset',
  'medium',
  '-crf',
  '24',
  '-profile:v',
  'main',
  '-movflags',
  '+faststart',
  '-tag:v',
  'avc1',
  outVideo,
])

run('ffmpeg', [
  '-y',
  '-ss',
  String(start + 2),
  '-i',
  source,
  '-frames:v',
  '1',
  '-update',
  '1',
  '-vf',
  vf,
  '-q:v',
  '3',
  outPoster,
])

if (process.env.KEEP_HERO_SOURCE !== '1') {
  try {
    rmSync(tmp, { recursive: true, force: true })
  } catch {
    /* ignore */
  }
}

console.log(`Hero loop: ${outVideo} (${loopSec}s from t=${start.toFixed(1)}s)`)
console.log(`Poster: ${outPoster}`)
