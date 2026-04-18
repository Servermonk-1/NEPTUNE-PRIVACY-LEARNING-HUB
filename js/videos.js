// ============================================================
// NEPTUNE PRIVACY — VIDEOS DATA
// ============================================================

const videos = [
  {
    id: 1,
    title: 'Introduction to Neptune Privacy',
    description: 'Learn about Neptune Privacy blockchain technology',
    type: 'twitter',
    tweetUrl: 'https://x.com/DaveTheCryptoOG/status/2015558969125666971?s=20',
    level: 'Beginner',
    category: 'Tutorial',
    date: '2026-04-15'
  },
  {
    id: 2,
    title: 'Why Neptune privacy?',
    description: 'Discover the unique features and benefits of Neptune Privacy',
    type: 'twitter',
    tweetUrl: "https://x.com/D_cryptographer/status/2014035354525798901?s=20",
    level: 'Beginner',
    category: 'Tutorial',
    date: '2026-04-18'
  }
];



function filterVideos(level) {
  if (level === 'all') return videos;
  return videos.filter(v => v.level === level);
}

"https://x.com/D_cryptographer/status/2014035354525798901?s=20"

function createVideoCard(video) {
  let embedHtml = '';

  if (video.type === 'youtube' || !video.type) {
    // YouTube embed (default)
    embedHtml = `<iframe src="${video.embedUrl}" frameborder="0" allowfullscreen loading="lazy"></iframe>`;
  } else if (video.type === 'twitter') {
    // Twitter video - show clickable card with link to Twitter
    embedHtml = `<div style="width: 100%; height: 250px; background: linear-gradient(135deg, #1da1f2, #1991db); border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; text-decoration: none; cursor: pointer; transition: transform 0.2s;" onclick="window.open('${video.tweetUrl}', '_blank')">
      <div style="font-size: 3rem; margin-bottom: 10px;">▶️</div>
      <div style="font-size: 1.2rem; font-weight: 600; margin-bottom: 5px;">Watch on Twitter</div>
      <div style="font-size: 0.9rem; opacity: 0.9;">Click to view the video</div>
    </div>`;
  } else if (video.type === 'local') {
    // Local video file
    embedHtml = `<video controls preload="metadata" style="width: 100%; max-height: 300px;">
      <source src="${video.videoUrl}" type="video/mp4">
      Your browser does not support the video tag.
    </video>`;
  }

  return `
    <div class="card video-card">
      <div class="video-embed">
        ${embedHtml}
      </div>
      <h3>${video.title}</h3>
      <p>${video.description}</p>
      <div class="card-meta">
        <span class="badge badge-level level-${video.level.toLowerCase()}">${video.level}</span>
        <span class="badge badge-category">${video.category}</span>
        <span class="card-date">${video.date}</span>
      </div>
    </div>`;
}

function updateVideosDisplay() {
  const grid = document.getElementById('videosGrid');
  if (!grid) return;
  const level    = document.getElementById('videoLevelFilter')?.value    || 'all';
  const category = document.getElementById('videoCategoryFilter')?.value || 'all';
  let filtered = videos;
  if (level    !== 'all') filtered = filtered.filter(v => v.level    === level);
  if (category !== 'all') filtered = filtered.filter(v => v.category === category);
  grid.innerHTML = filtered.length
    ? filtered.map(createVideoCard).join('')
    : '<p style="color:#666;grid-column:1/-1;">No videos found.</p>';
}
