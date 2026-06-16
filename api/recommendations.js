import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const SYSTEM_PROMPT = `You are a social media content strategist specializing in TikTok and Instagram for food and culture creators. You generate data-driven, actionable content ideas based on a specific creator's analytics profile and niche.`

function buildUserPrompt() {
  return `Generate a weekly content intelligence brief for this creator:

CREATOR PROFILE
Name: Ushma (@lifeofush on TikTok, @lifeofushh on Instagram)
Content: NYC food, lifestyle, and culture through the lens of a first-generation Indian-American woman living in the city
Audience: Anyone who loves food, NYC life, and authentic storytelling — not limited to any one demographic
Platform focus: TikTok primary, Instagram secondary

ANALYTICS (past 12 months)
- 1.9M total views
- 796 followers (9.2% engagement rate — unusually high for this follower count)
- 157K likes (8.3% like rate), 17K shares, 1,508 comments
- Traffic: 75% FYP, 22.4% Search (2× the typical rate for this size account)
- Discovery: search-heavy, meaning keyword-optimized titles and captions compound over time

WHAT HAS WORKED
- Food close-up hooks in the first second (4× better performance vs. talking-head intros)
- Authentic NYC food recs across all cuisines and neighborhoods — not limited to any one culture
- Bold claims in the hook ("The best X in NYC" style openers)
- Shareability-focused framing — content that makes people say "this is literally my friend"
- Keyword-aware captions driving the unusually high Search percentage
- Lifestyle content that reflects real life as an Indian-American woman in NYC — not a caricature, just honest

CONTENT STYLE
- Authentic, friend-giving-a-recommendation tone (not a review, a conversation)
- Her Indian-American identity is her perspective and voice, not a content restriction
- Covers all cuisines, all neighborhoods, all aspects of NYC living
- Pairs naturally with trending audio, never forced
- Audience: anyone who loves food, NYC, and authentic storytelling

Today's date: ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}

Respond ONLY with a valid JSON object — no markdown fences, no preamble, no explanation. Raw JSON only:
{
  "content_ideas": [
    {
      "hook": "the exact first line or on-screen text for the first 3 seconds",
      "concept": "1-2 sentence description of the full video",
      "format": "e.g. POV walk-in, close-up food review, talking head, this vs that, storytime",
      "why_it_works": "specific reason tied to her analytics, niche, or audience behavior"
    }
  ],
  "trending_angles": [
    {
      "angle": "the cultural or food trend angle",
      "how_to_use": "exactly how Ushma applies it given her niche and voice"
    }
  ],
  "audio_vibes": [
    {
      "vibe": "description of the sound energy or mood — not a specific song title",
      "why": "why this audio vibe fits her content style right now"
    }
  ],
  "best_posting_day": {
    "day": "day of week",
    "reasoning": "specific reasoning based on her FYP-heavy traffic and South Asian audience behavior"
  },
  "generated_at": "${new Date().toISOString()}"
}

content_ideas must have exactly 6 items. trending_angles must have exactly 3. audio_vibes must have exactly 2.`
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'API key not configured on server' })
  }

  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: buildUserPrompt() }],
    })

    const rawText = message.content[0]?.text ?? ''

    // Strip accidental markdown fences
    const cleaned = rawText
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```\s*$/i, '')
      .trim()

    let parsed
    try {
      parsed = JSON.parse(cleaned)
    } catch {
      return res.status(502).json({ error: 'Claude returned malformed JSON', raw: rawText })
    }

    return res.status(200).json(parsed)
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) {
      return res.status(429).json({ error: 'Rate limited — try again in a moment.' })
    }
    if (err instanceof Anthropic.AuthenticationError) {
      return res.status(500).json({ error: 'API key invalid or expired.' })
    }
    return res.status(500).json({ error: 'Failed to generate recommendations', detail: err.message })
  }
}
