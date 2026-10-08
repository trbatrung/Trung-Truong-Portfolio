/* =====================================================================
   PORTFOLIO CONTENT. Edit this file, then refresh the page.

   Icons:   x / y = position on the desktop, in % of the screen.
   Media:   youtube: 'VIDEO_ID'   (add vertical: true for Shorts)
            or video: 'media/clip.mp4'
            or image: 'media/still.jpg'
   Thumb:   defaults to the YouTube thumbnail. Set thumb: 'media/x.jpg' to override.
   Copy:    desc falls back to the category line if a project has none.

   Content pulled from ../index.html and ../docs/ on 2026-10-08.
   ===================================================================== */
const PORTFOLIO = {
  name: 'Trung (Ethan) Truong',
  role: 'Creative Direction & Production Systems',
  initials: 'ET',
  avatar: '',                        // photo path, or leave empty to show initials
  email: 'trbatrung@gmail.com',
  wallpaper: 'media/wallpaper.jpg',  // placeholder from Unsplash, swap for your own still
  wallpaperPosition: 'center',

  about: [
    "I'm Trung, and most people call me Ethan. Eight years in production. I founded and ran a 10+ person multimedia agency, and today I own a full production pipeline end to end, script to final master.",
    "The last stretch I've spent defining exactly where AI belongs in that pipeline, and where it doesn't. That's the part most producers miss: they either treat AI as a threat or a shortcut. I treat it as one more tool on the bench, and I set which job each one is for.",
    "Based in Ho Chi Minh City, working globally on select projects and senior roles.",
  ],
  stats: {
    'Years in production': '8+',
    'Team built & directed': '10+',
    'Pipeline ownership': 'Full',
    'AI & real production': 'Both',
  },
  contact: {
    title: "Tell me what you're making.",
    text: 'A senior role, a full production, or a question about which AI tool actually fits your use case. Start here.',
  },

  categories: {
    brand:  { name: 'Brand Film',              desc: 'The story is a decision, not something you find in the footage. I make that call first, then build the film to it.' },
    client: { name: 'Client & Story Work',     desc: 'Product, culture, community, testimonial. Same question every time: what does this audience need to believe, and what earns that.' },
    ads:    { name: 'Video Advertisement',     desc: 'Conversion sets the standard here, not taste. Platform-native, and the first two seconds carry the whole thing.' },
    ai:     { name: 'AI-Augmented Production', desc: 'Systems I built, and what I changed when they broke.' },
  },

  projects: [
    // 01 Brand Film (top left)
    { id: 'joe-schaeffer', title: 'Joe Schaeffer', cat: 'brand', type: 'Artist Film', youtube: 'jH6LaZDXNMs', x: 11, y: 14 },
    { id: 'feedflo', title: 'Feedflo', cat: 'brand', type: 'Impact Film · Mogler Farms', youtube: 'J0j3ZWbqS5s', x: 23, y: 23 },

    // 02 Client & Story (left)
    { id: 'powerlift', title: 'Powerlift Hangar', cat: 'client', type: 'Product Showcase', youtube: 'HBTfzwOwkxY', x: 10, y: 41 },
    { id: 'plexus-av', title: 'Plexus AV', cat: 'client', type: 'Company Values', youtube: 'oUDLKNFswlQ', x: 22, y: 50 },
    { id: 'veterans', title: 'Veterans Services', cat: 'client', type: 'Social Awareness · VOA Dakotas', youtube: 'ieu7p3qum_s', x: 11, y: 63 },
    { id: 'love-hay', title: 'Love Hay', cat: 'client', type: 'Testimonial · Operation of the Year', youtube: 'pNw0LhYSSv4', x: 23, y: 72 },

    // 03 Video Advertisement (top right, Shorts)
    { id: 'no-more-solo', title: 'No More Solo', cat: 'ads', type: 'Short · Ad', youtube: 'vwf4U1WzQ0s', vertical: true, x: 76, y: 14 },
    { id: 'short-ketone', title: 'Short Ketone', cat: 'ads', type: 'Short · Ad', youtube: 'W3KMqXGB6Qg', vertical: true, x: 88, y: 18 },
    { id: 'dental-ads', title: 'Dental Ads', cat: 'ads', type: 'Short · Ad', youtube: '-toxHWQCe_w', vertical: true, x: 81, y: 33 },

    // 04 AI-Augmented Production (right)
    { id: 'founder-intro', title: 'Founder Intro', cat: 'ai', type: 'Infinite Leverage', youtube: 'pR03yYZbI8E', x: 75, y: 52,
      system: 'Code-based animation pipeline',
      desc: 'Motion written as code. Generated in Claude Code, finished in Final Cut Pro, briefed through a structured context package. UI walkthroughs, data visualizations, brand motion.',
      tools: 'Claude Code, Final Cut Pro, Context Packages, Inline QC',
      result: 'Rebuilt around reusable components, so each job speeds up the next.' },
    { id: 'executive-scale', title: 'Executive Scale', cat: 'ai', type: 'HeyGen avatar', youtube: 'WlB4_OJTftM', vertical: true, x: 88, y: 50,
      system: 'Avatar video at volume',
      desc: "One approved face and voice, a fixed look, consistent output across markets and platforms. Built for founders who can't hold a weekly shoot slot.",
      tools: 'HeyGen, ElevenLabs',
      result: 'One founder, every market, without a shoot schedule.' },
    { id: 'brand-presence', title: 'Brand Presence', cat: 'ai', type: 'HeyGen avatar', youtube: '3stIKPZL_00', vertical: true, x: 78, y: 68,
      system: 'Avatar video at volume',
      desc: "One approved face and voice, a fixed look, consistent output across markets and platforms. Built for founders who can't hold a weekly shoot slot.",
      tools: 'HeyGen, ElevenLabs',
      result: 'One founder, every market, without a shoot schedule.' },
    { id: 'language-lesson', title: 'AI Language Lesson', cat: 'ai', type: 'Proof of Concept', youtube: '8EKCg3SiSPI', x: 90, y: 70,
      system: 'End-to-end AI lesson',
      desc: 'A complete language lesson built end to end: HeyGen presenter, Veo3 b-roll. Every line proofed against a teaching-accuracy bar before it shipped.',
      tools: 'HeyGen, Veo3, Script Accuracy, Final Cut Pro',
      result: 'A full lesson, no studio, no on-camera teacher.' },
  ],

  // Dock links after the About / Contact tiles. Icons: fontawesome.com/icons
  dock: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/trungtrr1379/', color: '#0a66c2', icon: 'fa-brands fa-linkedin-in' },
    { label: 'Email',    url: 'mailto:trbatrung@gmail.com',               color: '#1d1d1f', icon: 'fa-solid fa-envelope' },
  ],
};
