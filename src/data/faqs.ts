export type FaqItem = {
  q: string
  a: string
}

/** Master FAQ — visible on /faq and reused in sections. */
export const SITE_FAQS: FaqItem[] = [
  {
    q: 'What is Overwatch Hack?',
    a: 'Overwatch Hack is a Overwatch 2 tool on overwatchhack.net — silent-aim Aimbot, player ESP, wallhack and a 2D radar — with live anti-cheat status after game patches.',
  },
  {
    q: 'How much does the Overwatch hack cost?',
    a: 'The Overwatch hack starts from $35 for short access. Longer licenses cost more. Always confirm live anti-cheat status and the price on overwatchhack.net before checkout.',
  },
  {
    q: 'Do you sell hacks for other games?',
    a: 'No. overwatchhack.net sells a Overwatch 2 hack only — one product, no multi-game catalog.',
  },
  {
    q: 'Is Aimbot the main feature?',
    a: 'Aimbot is optional. Most buyers lead with Overwatch ESP and radar, then enable silent aim only if they want it.',
  },
  {
    q: 'How do you handle anti-cheat updates?',
    a: 'We publish live clear-to-load or Updating labels after Overwatch 2 and Overwatch 2 patches. Always check status on overwatchhack.net before you open the menu.',
  },
  {
    q: 'What is Overwatch ESP / wallhack?',
    a: 'Overwatch ESP and wallhack show players through walls and smokes with distance and health when supported, so you can read a site before you peek.',
  },
  {
    q: 'What is the Overwatch radar?',
    a: "The radar is a 2D overlay for off-screen players — useful for flanks on King's Row, Busan, Midtown and the rest of the Active Duty maps.",
  },
  {
    q: 'What features are included?',
    a: 'Overwatch Aimbot with silent aim, player ESP, wallhack, radar, triggerbot, ultimate and ability awareness, and stream-proof options — Overwatch 2 on Windows PC only. See the Features Checklist guide for the full list.',
  },
  {
    q: 'Does the Overwatch hack work in Competitive and Quick Play?',
    a: 'Yes. It is built for official Blizzard modes, including Quick Play, Competitive and Arcade. Custom games with extra admin tools can behave differently — ask support before you buy if that is your only queue.',
  },
  {
    q: 'How do I buy the Overwatch hack?',
    a: 'Start on the homepage, confirm live anti-cheat status and review the price from $35. Open Product details for compatibility and features, then continue to checkout for digital delivery.',
  },
  {
    q: 'How do I open the Overwatch hack menu?',
    a: 'After checkout, follow the Complete Setup forum thread and the steps in your delivery email. If status is Updating, wait rather than forcing an outdated build.',
  },
  {
    q: 'Where do I get Overwatch Hack support?',
    a: 'Use the Support page and your checkout order channel. Include current anti-cheat status and whether you need menu, setup or delivery help.',
  },
  {
    q: 'Where can I read Overwatch Hack reviews?',
    a: 'Player reviews with ratings are on the Reviews page. They cover ESP usefulness, status honesty and patch survival before you buy.',
  },
  {
    q: 'What is your refund policy?',
    a: 'Digital licenses follow the Refunds page — delivery failures and extended Updating windows can qualify; change of mind after a working key does not.',
  },
  {
    q: 'Is this the official Overwatch site?',
    a: 'No. We sell a Overwatch hack only. Buy and play the game on Battle.net. We are not affiliated with Blizzard or Overwatch 2.',
  },
]

/** Commercial questions shown on the homepage; FAQ schema lives on /faq only. */
export const HOME_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[9],
]

export const PRODUCT_PAGE_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[6],
  SITE_FAQS[9],
  SITE_FAQS[11],
]
