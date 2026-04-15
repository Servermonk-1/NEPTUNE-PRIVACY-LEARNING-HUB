// ============================================================
// NEPTUNE PRIVACY — FEATURES DATA
// ============================================================

const features = [
  { id: 1, name: 'Private Transactions',    description: 'All transactions are private by default using zk-STARKs. Sender, receiver, and amount are hidden.',                                     status: 'live' },
  { id: 2, name: 'GPU Mining (PoW)',         description: 'Mine XNT with your GPU. Anyone can participate and earn block rewards.',                                                                status: 'live' },
  { id: 3, name: 'Quantum Resistance',       description: 'All cryptography is hash-based and quantum-safe. No elliptic curves.',                                                                   status: 'live' },
  { id: 4, name: 'Wallet Software',          description: 'Official Neptune wallet for sending, receiving, and storing XNT.',                                                                       status: 'live' },
  { id: 5, name: 'Block Explorer',           description: 'View block and transaction data (without private details) on the Neptune block explorer.',                                               status: 'live' },
  { id: 6, name: 'Triton VM (Smart Contracts)', description: 'Private smart contract execution. Inputs, outputs, and logic stay hidden.',                                                          status: 'testnet' },
  { id: 7, name: 'Private DEX',              description: 'Decentralized exchange with full privacy. Trade without revealing amounts or counterparties.',                                           status: 'coming-soon' },
  { id: 8, name: 'Confidential Lending',     description: 'Borrow and lend privately. Collateral and loan terms remain hidden.',                                                                    status: 'coming-soon' },
  { id: 9, name: 'Anonymous Voting',         description: 'On-chain governance voting with complete voter anonymity.',                                                                              status: 'coming-soon' },
  { id:10, name: 'Mobile Wallet',            description: 'iOS and Android wallet app for managing XNT on the go.',                                                                                status: 'coming-soon' }
];

function filterFeatures(status) {
  return features.filter(f => f.status === status);
}

const STATUS_META = {
  'live':         { emoji: '🟢', label: 'Live'        },
  'testnet':      { emoji: '🟡', label: 'Testnet'     },
  'coming-soon':  { emoji: '🔜', label: 'Coming Soon' }
};

function createFeatureCard(feature) {
  const meta = STATUS_META[feature.status] || {};
  return `
    <div class="card feature-card">
      <div class="feature-status">${meta.emoji || ''} ${meta.label || feature.status}</div>
      <h3>${feature.name}</h3>
      <p>${feature.description}</p>
    </div>`;
}

function switchTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelector(`[onclick="switchTab('${tab}')"]`).classList.add('active');
  document.getElementById(`${tab}-content`).classList.add('active');
}
