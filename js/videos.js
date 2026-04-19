// ============================================================
// NEPTUNE PRIVACY — VIDEOS DATA
// ============================================================

const videos = [
  {
    id: 1,
    title: 'XNT Neptune Privacy Mining at HiveOS ! Ultimate Profit with GPU...',
    description: 'Step-by-step how to mine Neptune (XNT) using HiveOS. It cover everything from wallet setup to the best overclock settings for maximum GPU profit in 2026.',
    type: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/rpcNwmAC7H8',
    level: 'Intermediate',
    category: 'Introduction',
    date: '2026-04-15'
  },
  {
    id: 2,
    title: 'Neptune Mining Rocks ! Get your revenue by mining NPT !',
    description: 'How to mine Neptune Privacy (NPT) and earn rewards. A step-by-step guide for beginners.',
    type: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/2or67m1qeGY',
    level: 'Intermediate',
    category: 'Technology',
    date: '2026-04-19'
  },
  {
    id: 3,
    title: 'Neptune Private - XNT Mining. Hive OS Setup',
    description: 'Learn how to mine Neptune Privacy (XNT) using Hive OS. This video provides a comprehensive guide on setting up your mining rig, optimizing performance, and maximizing your earnings with XNT in 2026.',
    type: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/AX4x20-7R-Y',
    level: 'Intermediate',
    category: 'Technology',
    date: '2026-04-19'
  },
  {
    id: 4,
    title: 'Introduction to Neptune Privacy',
    description: 'Learn about Neptune Privacy blockchain technology.',
    type: 'twitter',
    tweetUrl: 'https://x.com/DaveTheCryptoOG/status/2015558969125666971',
    level: 'Beginner',
    category: 'Tutorial',
    date: '2026-04-15'
  },
  {
    id: 5,
    title: 'Why Neptune Privacy?',
    description: 'Discover the unique features and benefits of Neptune Privacy.',
    type: 'twitter',
    tweetUrl: 'https://x.com/D_cryptographer/status/2014035354525798901',
    level: 'Beginner',
    category: 'Tutorial',
    date: '2026-04-18'
  },
  {
    id: 6,
    title: 'Neptune Privacy: Community Spotlight',
    description: 'The XNT community discusses Neptune Privacy and its potential.',
    type: 'twitter',
    tweetUrl: 'https://x.com/XNTcommunity/status/2045822949056237866',
    level: 'Beginner',
    category: 'Tutorial',
    date: '2026-04-19'
  },
];

// ============================================================
// Filter helpers
// ============================================================
function filterVideos(level) {
  if (level === 'all') return videos;
  return videos.filter(v => v.level === level);
}

// ============================================================
// Card creator
// ============================================================
function createVideoCard(video) {
  let embedHtml = '';

  if (video.type === 'youtube') {
    embedHtml = `
      <div class="video-frame-wrap">
        <iframe
          src="${video.embedUrl}?rel=0&modestbranding=1"
          title="${video.title}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy">
        </iframe>
      </div>`;
  } else if (video.type === 'twitter') {
    embedHtml = `
      <div class="twitter-video-card" onclick="window.open('${video.tweetUrl}', '_blank')">
        <div class="twitter-video-bg"></div>
        <div class="twitter-video-content">
          <div class="twitter-x-icon">𝕏</div>
          <div class="twitter-play-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <p class="twitter-video-label">Watch on X / Twitter</p>
          <p class="twitter-video-hint">Opens in a new tab</p>
        </div>
      </div>`;
  }

  const typeLabel = video.type === 'youtube' ? '▶ YouTube' : '𝕏 Twitter';
  const typeBadgeClass = video.type === 'youtube' ? 'badge-youtube' : 'badge-twitter';

  return `
    <div class="card video-card">
      <div class="video-embed">
        ${embedHtml}
      </div>
      <div class="video-card-body">
        <h3>${video.title}</h3>
        <p>${video.description}</p>
        <div class="card-meta">
          <span class="badge badge-level level-${video.level.toLowerCase()}">${video.level}</span>
          <span class="badge badge-category">${video.category}</span>
          <span class="badge ${typeBadgeClass}">${typeLabel}</span>
          <span class="card-date">${video.date}</span>
        </div>
      </div>
    </div>`;
}

// ============================================================
// Display update
// ============================================================
function updateVideosDisplay() {
  const grid = document.getElementById('videosGrid');
  if (!grid) return;
  const level = document.getElementById('videoLevelFilter')?.value || 'all';
  const category = document.getElementById('videoCategoryFilter')?.value || 'all';
  const type = document.getElementById('videoTypeFilter')?.value || 'all';

  let filtered = videos;
  if (level !== 'all') filtered = filtered.filter(v => v.level === level);
  if (category !== 'all') filtered = filtered.filter(v => v.category === category);
  if (type !== 'all') filtered = filtered.filter(v => v.type === type);

  grid.innerHTML = filtered.length
    ? filtered.map(createVideoCard).join('')
    : '<p style="color:#666;grid-column:1/-1;text-align:center;padding:40px 0;">No videos found.</p>';
}
