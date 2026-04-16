// ============================================================
// NEPTUNE PRIVACY — ARTICLES DATA
// Default articles are defined here.
// Admin-saved articles are stored in localStorage under
// 'neptune_articles' and are merged at runtime by loadArticles().
// ============================================================

const DEFAULT_ARTICLES = [
  {
    id: 1,
    type: 'article',
    title: 'What is Neptune Privacy?',
    excerpt: 'Learn the fundamentals of Neptune Privacy, the quantum-safe blockchain built for privacy by default.',
    content: `<h2>What is Neptune Privacy?</h2>
<p>Neptune Privacy is a quantum-safe Layer 1 blockchain where privacy is automatic, not optional. Every transaction is private by default — no settings to configure, no features to activate, no opt-in required.</p>
<h3>Core Technology</h3>
<p>Neptune combines three foundational technologies:</p>
<ul>
  <li><strong>zk-STARKs</strong> — Zero-knowledge proofs that are quantum-resistant by design</li>
  <li><strong>Mutator Sets</strong> — A novel data structure that enables private UTXO tracking</li>
  <li><strong>Triton VM</strong> — A virtual machine for private smart contract execution</li>
</ul>
<h3>Why Neptune?</h3>
<p>Unlike Bitcoin or Ethereum where every transaction is publicly visible on a blockchain explorer, Neptune's architecture ensures your financial activity stays private by default. No one can see your balance, your transaction history, or who you transact with.</p>
<h3>Key Facts</h3>
<ul>
  <li>Token: $XNT</li>
  <li>Launched: November 2025</li>
  <li>Consensus: Proof of Work (GPU mineable)</li>
  <li>Block Time: 5 minutes</li>
  <li>No presale, no VC backing</li>
</ul>`,
    level: 'Beginner',
    category: 'Introduction',
    date: '2025-11-01'
  },
  {
    id: 2,
    type: 'article',
    title: 'How zk-STARKs Work',
    excerpt: 'A deep dive into zero-knowledge Scalable Transparent Arguments of Knowledge and why Neptune uses them.',
    content: `<h2>How zk-STARKs Work</h2>
<p>zk-STARKs (Zero-Knowledge Scalable Transparent Arguments of Knowledge) are one of the most powerful cryptographic tools ever created. Neptune uses them as the backbone of its privacy system.</p>
<h3>What is a Zero-Knowledge Proof?</h3>
<p>A zero-knowledge proof lets you prove you know something without revealing what that something is. For Neptune, this means you can prove a transaction is valid without revealing the sender, receiver, or amount.</p>
<h3>STARKs vs SNARKs</h3>
<p>While zk-SNARKs (used by Zcash) rely on elliptic curve cryptography, zk-STARKs rely only on hash functions. This makes STARKs:</p>
<ul>
  <li><strong>Quantum-resistant</strong> — Hash functions are not broken by quantum computers</li>
  <li><strong>Transparent</strong> — No trusted setup required</li>
  <li><strong>Scalable</strong> — Proof generation scales well with complexity</li>
</ul>
<h3>Neptune's Implementation</h3>
<p>Neptune uses STARKs to prove that every transaction satisfies the protocol rules (no double-spending, valid signatures, correct amounts) without revealing any private data. The proofs are verified on-chain by all nodes.</p>`,
    level: 'Intermediate',
    category: 'Technology',
    date: '2025-11-05'
  },
  {
    id: 3,
    type: 'article',
    title: 'The Quantum Computing Threat',
    excerpt: 'Understand why quantum resistance matters and how Neptune protects your privacy against future attacks.',
    content: `<h2>The Quantum Computing Threat</h2>
<p>Quantum computers pose an existential threat to most current blockchain cryptography. Understanding this threat is critical to understanding why Neptune was built the way it was.</p>
<h3>How Quantum Computers Break Crypto</h3>
<p>Modern blockchains (Bitcoin, Ethereum) use Elliptic Curve Digital Signature Algorithm (ECDSA) for wallet security. Shor's Algorithm, running on a sufficiently powerful quantum computer, can crack ECDSA in polynomial time — rendering every existing wallet vulnerable.</p>
<h3>The Timeline</h3>
<p>Experts estimate a cryptographically relevant quantum computer (capable of breaking ECDSA) could exist within 10–15 years. That's within the lifetime of assets people hold today.</p>
<h3>Why Hash Functions Are Safe</h3>
<p>Neptune uses hash-based cryptography (SHA-3 family) for all key operations. Hash functions are only weakened — not broken — by Grover's Algorithm on quantum computers. Doubling key lengths is sufficient to maintain full security.</p>
<h3>Neptune's Quantum Safety</h3>
<p>Every cryptographic primitive in Neptune was selected specifically to be quantum-safe. This includes transaction signing, proof generation, and the zk-STARK system itself.</p>`,
    level: 'Intermediate',
    category: 'Security',
    date: '2025-11-10'
  },
  {
    id: 4,
    type: 'article',
    title: 'Neptune Tokenomics: $XNT',
    excerpt: 'A complete guide to XNT supply, emission schedule, and why Neptune\'s economics are designed for fairness.',
    content: `<h2>Neptune Tokenomics: $XNT</h2>
<p>Neptune Privacy's tokenomics were designed with a single goal: fairness. No insiders. No presale. No special allocations.</p>
<h3>Supply Model</h3>
<ul>
  <li><strong>100% community supply</strong> — All XNT enters circulation through mining</li>
  <li><strong>No presale</strong> — Zero tokens sold before launch</li>
  <li><strong>No VC allocation</strong> — No venture capital given early tokens</li>
</ul>
<h3>3-Phase Emission</h3>
<p>Neptune uses a 3-phase emission schedule instead of Bitcoin's sudden halving model:</p>
<ol>
  <li><strong>Phase 1 (Bootstrap)</strong> — Higher rewards to bootstrap the network and attract miners</li>
  <li><strong>Phase 2 (Stabilization)</strong> — Gradual reduction as the network matures</li>
  <li><strong>Phase 3 (Tail Emission)</strong> — Permanent low emission to keep miners incentivized forever</li>
</ol>
<h3>Why Tail Emission?</h3>
<p>Bitcoin's eventual zero-emission model creates a security budget problem — miners will only earn fees, which may be insufficient to secure the network. Neptune's tail emission ensures miners are always compensated, keeping the network secure long-term.</p>`,
    level: 'Beginner',
    category: 'Economics',
    date: '2025-11-12'
  },
  {
    id: 5,
    type: 'article',
    title: 'Private Smart Contracts via Triton VM',
    excerpt: 'Explore what becomes possible when smart contracts execute privately. A new paradigm for programmable finance.',
    content: `<h2>Private Smart Contracts via Triton VM</h2>
<p>Triton VM is Neptune's custom virtual machine for private smart contract execution. It represents a fundamentally different approach to programmable blockchain applications.</p>
<h3>The Problem with Public Smart Contracts</h3>
<p>On Ethereum, every smart contract interaction is public. When you use a DeFi protocol, everyone can see your wallet, your trade, and the exact amounts. This enables front-running, MEV extraction, and surveillance.</p>
<h3>How Triton VM Works</h3>
<p>Triton VM executes smart contracts inside a zero-knowledge proof. This means:</p>
<ul>
  <li>Inputs to the contract are hidden</li>
  <li>Outputs from the contract are hidden</li>
  <li>The logic can be verified correct without being seen</li>
  <li>Only the proof of valid execution is recorded on-chain</li>
</ul>
<h3>What Becomes Possible</h3>
<ul>
  <li><strong>Private DEX</strong> — Trade without revealing amounts or counterparties</li>
  <li><strong>Confidential Lending</strong> — Borrow/lend without exposing collateral amounts</li>
  <li><strong>Anonymous Voting</strong> — Verifiable votes with complete voter anonymity</li>
  <li><strong>Private Payroll</strong> — Pay employees without publishing salaries</li>
</ul>`,
    level: 'Beginner',
    category: 'Features',
    date: '2025-11-15'
  },
  {
    id: 6,
    type: 'article',
    title: 'Neptune vs Other Privacy Coins',
    excerpt: 'How does Neptune compare to Monero, Zcash, and other privacy-focused blockchains?',
    content: `<h2>Neptune vs Other Privacy Coins</h2>
<p>Neptune is not the first privacy coin, but it addresses critical limitations in all existing approaches.</p>
<h3>Monero (XMR)</h3>
<p>Monero uses RingCT and Stealth Addresses for privacy. While effective today, Monero relies on elliptic curve cryptography — making it <strong>vulnerable to quantum attacks</strong>. It also lacks smart contract capability.</p>
<h3>Zcash (ZEC)</h3>
<p>Zcash uses zk-SNARKs and was pioneering. However:</p>
<ul>
  <li>Privacy is <strong>optional</strong>, not default (most transactions are transparent)</li>
  <li>zk-SNARKs require a trusted setup ceremony</li>
  <li>Relies on elliptic curve cryptography (not quantum safe)</li>
</ul>
<h3>Neptune (XNT)</h3>
<ul>
  <li>✅ Privacy by <strong>default</strong></li>
  <li>✅ Quantum-resistant (hash-based STARKs)</li>
  <li>✅ No trusted setup</li>
  <li>✅ Smart contracts (Triton VM)</li>
  <li>✅ Proof of Work (decentralized)</li>
  <li>✅ No presale, no VC</li>
</ul>`,
    level: 'Intermediate',
    category: 'Comparison',
    date: '2025-11-18'
  },
  {
    id: 7,
    type: 'article',
    title: 'How to Mine XNT',
    excerpt: 'Step-by-step guide to setting up GPU mining for Neptune Privacy and earning XNT rewards.',
    content: `<h2>How to Mine XNT</h2>
<p>Neptune Privacy uses Proof of Work consensus, meaning anyone with a GPU can mine XNT and contribute to network security.</p>
<h3>Requirements</h3>
<ul>
  <li>A GPU (AMD or Nvidia, 4GB+ VRAM recommended)</li>
  <li>A computer running Windows, Linux, or macOS</li>
  <li>A Neptune wallet address</li>
  <li>Stable internet connection</li>
</ul>
<h3>Step 1: Get a Wallet</h3>
<p>Download the Neptune wallet from the official GitHub at github.com/neptune-privacy. Generate a new wallet and save your seed phrase securely. Your wallet address will receive mining rewards.</p>
<h3>Step 2: Download Mining Software</h3>
<p>Neptune uses a custom mining client. Download the latest release from the official repository. Verify the checksum before running.</p>
<h3>Step 3: Configure</h3>
<p>Edit the config file with your wallet address and preferred mining pool (or solo mine). Start the miner and monitor your hashrate.</p>
<h3>Mining Pools</h3>
<p>Solo mining is possible but joining a pool gives more consistent rewards. Check the Neptune community channels for active pool listings.</p>`,
    level: 'Beginner',
    category: 'Tutorial',
    date: '2025-11-20'
  },
  {
    id: 8,
    type: 'article',
    title: 'Mutator Sets: Neptune\'s Privacy Primitive',
    excerpt: 'Deep technical dive into Mutator Sets, the novel data structure that powers Neptune\'s private UTXO model.',
    content: `<h2>Mutator Sets: Neptune's Privacy Primitive</h2>
<p>Mutator Sets are a novel cryptographic data structure invented for Neptune. They enable private UTXO (Unspent Transaction Output) management — a critical piece of Neptune's privacy architecture.</p>
<h3>The UTXO Problem</h3>
<p>In Bitcoin, UTXOs are stored publicly. You can trace coins from address to address trivially. To hide UTXOs, you need a structure that:</p>
<ol>
  <li>Lets you prove membership (you own a UTXO) without revealing which one</li>
  <li>Lets you prove removal (you spent a UTXO) without revealing which one</li>
  <li>Is efficient enough to run on a real blockchain</li>
</ol>
<h3>How Mutator Sets Solve This</h3>
<p>A Mutator Set combines:</p>
<ul>
  <li><strong>An Accumulator</strong> — A compact commitment to the set of all UTXOs</li>
  <li><strong>Membership Witnesses</strong> — Proofs that a specific element is in the set</li>
  <li><strong>Removal Records</strong> — Proofs of removal that don't reveal which element was removed</li>
</ul>
<h3>Why This Matters</h3>
<p>This construction allows Neptune to maintain a global UTXO set where every spend is provably valid, but no observer can link inputs to outputs. Combined with zk-STARKs, this creates Neptune's complete transaction privacy model.</p>`,
    level: 'Advanced',
    category: 'Technology',
    date: '2025-11-22'
  }
];

// ============================================================
// loadArticles() — merges default articles with localStorage and Firebase
// This is the ONLY function all pages should use to get articles.
// ============================================================

let FIREBASE_ARTICLES = [];

async function loadFirebaseArticlesIfAvailable() {
  if (typeof loadFirebaseArticles !== 'function') return;
  try {
    FIREBASE_ARTICLES = await loadFirebaseArticles();
  } catch (error) {
    console.error('Firebase articles could not be loaded:', error);
    FIREBASE_ARTICLES = [];
  }
}

function loadArticles() {
  // Start with defaults
  const defaultMap = {};
  DEFAULT_ARTICLES.forEach(a => { defaultMap[a.id] = a; });

  // Firebase overrides defaults (NOT localStorage)
  FIREBASE_ARTICLES.forEach(a => { defaultMap[a.firebaseId || a.id] = a; });

  return Object.values(defaultMap).sort((a, b) => {
    const ida = typeof a.id === 'string' && !isNaN(a.id) ? Number(a.id) : a.id;
    const idb = typeof b.id === 'string' && !isNaN(b.id) ? Number(b.id) : b.id;
    if (ida == null) return 1;
    if (idb == null) return -1;
    return ida > idb ? 1 : (ida < idb ? -1 : 0);
  });
}

// Convenience helpers used by other pages
function filterArticles(level) {
  return loadArticles().filter(a => a.level === level);
}

function filterArticlesByCategory(category) {
  return loadArticles().filter(a => a.category === category);
}

function filterArticlesByContentType(contentType) {
  if (contentType === 'short') {
    return loadArticles().filter(a => a.type !== 'twitter');
  }
  if (contentType === 'long') {
    return loadArticles().filter(a => a.type === 'twitter');
  }
  return loadArticles();
}

// ============================================================
// Display helpers
// ============================================================
function createArticleCard(article) {
  const levelClass = (article.level || '').toLowerCase();
  const contentLabel = article.type === 'twitter' ? 'Long Content' : 'Short Content';
  const contentBadge = `<span class="badge badge-content ${article.type === 'twitter' ? 'badge-long' : 'badge-short'}">${contentLabel}</span>`;

  if (article.type === 'twitter') {
    return `
      <a href="${article.url}" target="_blank" rel="noopener" class="card article-card" style="text-decoration:none;color:inherit;">
        <div class="card-top-bar bar-${levelClass}"></div>
        <div class="card-icon-twitter">𝕏</div>
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <div class="card-meta">
          <span class="badge badge-level level-${levelClass}">${article.level}</span>
          ${contentBadge}
          <span class="badge badge-category">Twitter/X</span>
        </div>
      </a>`;
  }
  return `
    <a href="article.html?id=${article.id}" class="card article-card" style="text-decoration:none;color:inherit;">
      <div class="card-top-bar bar-${levelClass}"></div>
      <h3>${article.title}</h3>
      <p>${article.excerpt}</p>
      <div class="card-meta">
        <span class="badge badge-level level-${levelClass}">${article.level}</span>
        ${contentBadge}
        ${article.category ? `<span class="badge badge-category">${article.category}</span>` : ''}
        <span class="card-date">${article.date || ''}</span>
      </div>
    </a>`;
}

function displayArticle(article) {
  const main = document.getElementById('articleContent');
  if (!main) return;

  const contentLabel = article.type === 'twitter' ? 'Long Content' : 'Short Content';
  const contentBadge = `<span class="badge badge-content ${article.type === 'twitter' ? 'badge-long' : 'badge-short'}">${contentLabel}</span>`;

  if (article.type === 'twitter') {
    main.innerHTML = `
      <div class="article-detail">
        <a href="articles.html" class="back-link">← Back to Articles</a>
        <h1>${article.title}</h1>
        <div class="article-badges">
          <span class="badge badge-level level-${(article.level||'').toLowerCase()}">${article.level}</span>
          ${contentBadge}
          <span class="badge badge-category">Twitter/X</span>
        </div>
        <p>${article.excerpt}</p>
        <a href="${article.url}" target="_blank" rel="noopener" class="twitter-link-btn">View on Twitter/X →</a>
      </div>`;
    return;
  }

  main.innerHTML = `
    <div class="article-detail">
      <a href="articles.html" class="back-link">← Back to Articles</a>
      <div class="article-badges">
        <span class="badge badge-level level-${(article.level||'').toLowerCase()}">${article.level}</span>
        ${contentBadge}
        ${article.category ? `<span class="badge badge-category">${article.category}</span>` : ''}
        <span class="card-date">${article.date || ''}</span>
      </div>
      <h1>${article.title}</h1>
      <div class="article-body">${article.content}</div>
    </div>`;
}

function updateArticlesDisplay() {
  const grid = document.getElementById('articlesGrid');
  if (!grid) return;

  const search = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const level  = document.getElementById('levelFilter')?.value || 'all';
  const contentType = document.getElementById('contentFilter')?.value || 'all';

  let articles = loadArticles();
  if (level !== 'all') articles = articles.filter(a => a.level === level);
  if (contentType !== 'all') {
    articles = articles.filter(a => contentType === 'long' ? a.type === 'twitter' : a.type !== 'twitter');
  }
  if (search) articles = articles.filter(a =>
    a.title.toLowerCase().includes(search) ||
    a.excerpt.toLowerCase().includes(search)
  );

  if (articles.length === 0) {
    grid.innerHTML = '<p style="color:#666;grid-column:1/-1;">No articles found.</p>';
    return;
  }
  grid.innerHTML = articles.map(createArticleCard).join('');
}
