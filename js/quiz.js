const QUIZ_QUESTIONS = [
  {
    id: 1,
    difficulty: 'Beginner',
    question: 'What does “privacy by default” mean for Neptune Privacy?',
    options: [
      'Users must enable privacy features manually',
      'Transactions are private unless the user opts out',
      'Every transaction is private automatically without extra configuration',
      'Only selected wallet addresses receive privacy protection'
    ],
    answer: 2,
    explanation: 'Neptune makes privacy automatic for all transactions, removing the need for users to opt in or configure settings.'
  },
  {
    id: 2,
    difficulty: 'Beginner',
    question: 'Which cryptographic proof system is Neptune built on?',
    options: ['zk-SNARKs', 'zk-STARKs', 'Ring signatures', 'Bulletproofs'],
    answer: 1,
    explanation: 'Neptune uses zk-STARKs, which are scalable, transparent, and quantum-resistant proofs.'
  },
  {
    id: 3,
    difficulty: 'Beginner',
    question: 'What is the main purpose of a blockchain wallet address?',
    options: ['To encrypt your transactions', 'To identify the recipient or sender on the network', 'To store your private keys on the ledger', 'To verify zero-knowledge proofs'],
    answer: 1,
    explanation: 'A wallet address identifies the recipient or sender for a transaction, while private keys remain off-chain and secure.'
  },
  {
    id: 4,
    difficulty: 'Beginner',
    question: 'What does Neptune call its private smart contract runtime?',
    options: ['Triton VM', 'Ocean Engine', 'Zeus Runtime', 'Hydra VM'],
    answer: 0,
    explanation: 'Neptune executes private smart contracts through the Triton VM, enabling confidential programmable finance.'
  },
  {
    id: 5,
    difficulty: 'Beginner',
    question: 'What is a defining feature of a UTXO-based blockchain?',
    options: ['It stores account balances directly', 'It tracks unspent transaction outputs', 'It uses smart contracts only', 'It relies exclusively on proof-of-stake'],
    answer: 1,
    explanation: 'UTXO models record unspent outputs from previous transactions, which are spent in new transactions.'
  },
  {
    id: 6,
    difficulty: 'Beginner',
    question: 'Which statement best describes tokenomics tail emission?',
    options: ['Token issuance stops completely after launch', 'A fixed supply is mined once then burned', 'A small permanent issuance continues to secure the network', 'Rewards are redistributed to validators only'],
    answer: 2,
    explanation: 'Tail emission keeps a low but steady reward for miners to maintain network security over time.'
  },
  {
    id: 7,
    difficulty: 'Beginner',
    question: 'Why does Neptune avoid a trusted setup ceremony?',
    options: ['To reduce transaction fees', 'To increase block time', 'To remove a trusted third-party dependency in proof generation', 'To make wallets easier to use'],
    answer: 2,
    explanation: 'Avoiding a trusted setup eliminates reliance on a secret ceremony and strengthens protocol trust.'
  },
  {
    id: 8,
    difficulty: 'Intermediate',
    question: 'What is a key benefit of Mutator Sets in Neptune’s privacy model?',
    options: ['They replace a blockchain with a centralized database', 'They allow UTXO membership proofs without revealing which output is spent', 'They record user identities publicly', 'They eliminate the need for cryptographic proofs'],
    answer: 1,
    explanation: 'Mutator Sets enable private UTXO membership and removal proofs while preserving confidentiality.'
  },
  {
    id: 9,
    difficulty: 'Intermediate',
    question: 'How does Neptune achieve quantum resistance?',
    options: ['By using only elliptic curve cryptography', 'By using hash-based proofs and primitives instead of vulnerable curves', 'By increasing key lengths on ECDSA', 'By relying on quantum computers for validation'],
    answer: 1,
    explanation: 'Neptune uses hash-based cryptography and STARK proofs, which remain secure against known quantum attacks.'
  },
  {
    id: 10,
    difficulty: 'Intermediate',
    question: 'Which property does a zero-knowledge proof provide?',
    options: ['Data confidentiality and proof of validity without revealing the data', 'Faster block confirmation times', 'Higher transaction fees', 'Public disclosure of private keys'],
    answer: 0,
    explanation: 'Zero-knowledge proofs verify correctness while keeping the underlying data hidden.'
  },
  {
    id: 11,
    difficulty: 'Intermediate',
    question: 'What does “privacy by default” protect against in a public blockchain?',
    options: ['Only spam transactions', 'Linking user activity to wallet addresses and transaction amounts', 'Smart contract execution errors', 'Fee estimation mistakes'],
    answer: 1,
    explanation: 'Privacy by default prevents observers from easily linking addresses, amounts, and transaction graphs.'
  },
  {
    id: 12,
    difficulty: 'Intermediate',
    question: 'What is the role of the Triton VM in Neptune’s architecture?',
    options: ['It compiles smart contracts to Java bytecode', 'It executes private contract logic and emits a zero-knowledge proof', 'It stores mining rewards', 'It routes peer-to-peer messages'],
    answer: 1,
    explanation: 'Triton VM runs contract logic confidentially and produces proofs that validate execution without leaking inputs.'
  },
  {
    id: 13,
    difficulty: 'Intermediate',
    question: 'Which of the following is a reason privacy coins may still publish some metadata?',
    options: ['To make all transactions fully transparent', 'To allow network routing and consensus while keeping payload data private', 'To avoid using cryptography', 'To expose wallet balances publicly'],
    answer: 1,
    explanation: 'Some metadata is needed for consensus and routing, while sensitive transaction details remain concealed.'
  },
  {
    id: 14,
    difficulty: 'Intermediate',
    question: 'What does a “selective disclosure” feature allow in a privacy system?',
    options: ['Disclosing your full transaction history to anyone', 'Revealing only certain private details to authorized parties', 'Hiding every transaction forever', 'Opting out of privacy permanently'],
    answer: 1,
    explanation: 'Selective disclosure enables sharing limited proof of validity without revealing all private transaction details.'
  },
  {
    id: 15,
    difficulty: 'Advanced',
    question: 'Why is membership unlinkability important for UTXO privacy?',
    options: ['It improves wallet UI performance', 'It prevents observers from correlating spent and unspent outputs', 'It reduces block size significantly', 'It eliminates the need for consensus'],
    answer: 1,
    explanation: 'Membership unlinkability stops attackers from tracing which UTXO in a pool was spent, preserving privacy.'
  },
  {
    id: 16,
    difficulty: 'Advanced',
    question: 'How does a Mutator Set differ from a traditional Merkle tree?',
    options: ['It requires a trusted setup', 'It focuses on private membership and removal proofs rather than simple inclusion proofs', 'It stores data off-chain only', 'It uses proof-of-stake instead of proof-of-work'],
    answer: 1,
    explanation: 'Mutator Sets are designed for private state updates and membership proofs with minimal leakage, unlike standard Merkle inclusion proofs.'
  },
  {
    id: 17,
    difficulty: 'Advanced',
    question: 'In Neptune, why are proofs generated transparently instead of using a structured reference string?',
    options: ['To support centralized control', 'To avoid the trust assumptions of a structured reference string', 'To make proof generation slower', 'To require more validator keys'],
    answer: 1,
    explanation: 'Transparent proof systems remove the need for a trusted setup and reduce systemic trust assumptions.'
  },
  {
    id: 18,
    difficulty: 'Advanced',
    question: 'Which statement best describes a proof-carrying private transaction?',
    options: ['The transaction is posted publicly and the proof is kept secret', 'Both transaction contents and proof are hidden from everyone', 'The network sees only the proof and publicly verifiable metadata, not the private payload', 'No validation is performed on-chain'],
    answer: 2,
    explanation: 'A proof-carrying transaction reveals only the proof required for validation, while the private inputs remain confidential.'
  },
  {
    id: 19,
    difficulty: 'Advanced',
    question: 'How does quantum resistance affect key management in Neptune?',
    options: ['Keys are shorter to save space', 'Keys are based on hash functions instead of elliptic curves', 'Private keys are stored on-chain', 'Quantum-resistant keys require no cryptographic proofs'],
    answer: 1,
    explanation: 'Quantum resistance in Neptune comes from hash-based primitives, which replace curve-based key generation.'
  },
  {
    id: 20,
    difficulty: 'Advanced',
    question: 'What tradeoff is most relevant for full transaction privacy in a public ledger?',
    options: ['Higher privacy often increases verification complexity and bandwidth cost', 'Full privacy always reduces security', 'Privacy makes consensus impossible', 'Privacy eliminates the need for block rewards'],
    answer: 0,
    explanation: 'Strong privacy usually requires more computational work and larger proofs, which impacts network performance and resource use.'
  }
];

function renderQuizQuestions() {
  const difficulty = document.getElementById('difficultyFilter').value;
  const questions = difficulty === 'all'
    ? QUIZ_QUESTIONS
    : QUIZ_QUESTIONS.filter(item => item.difficulty === difficulty);

  const container = document.getElementById('quizQuestions');
  const countLabel = document.getElementById('questionCount');

  countLabel.textContent = questions.length;
  container.innerHTML = questions.map((item, index) => {
    return `
      <section class="quiz-card">
        <div class="quiz-header">
          <span class="quiz-label">${item.difficulty}</span>
          <h2>${index + 1}. ${item.question}</h2>
        </div>
        <div class="quiz-options">
          ${item.options.map((option, optionIndex) => `
            <label class="quiz-option">
              <input type="radio" name="question-${item.id}" value="${optionIndex}">
              <span>${option}</span>
            </label>
          `).join('')}
        </div>
      </section>
    `;
  }).join('');
}

function showQuizResults(score, total, feedbackHtml) {
  const results = document.getElementById('quizResults');
  const summary = document.getElementById('quizSummary');
  const feedback = document.getElementById('quizFeedback');

  summary.textContent = `You scored ${score} out of ${total}.`;
  feedback.innerHTML = feedbackHtml;
  results.hidden = false;
  results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function handleQuizSubmit(event) {
  event.preventDefault();
  const difficulty = document.getElementById('difficultyFilter').value;
  const questions = difficulty === 'all'
    ? QUIZ_QUESTIONS
    : QUIZ_QUESTIONS.filter(item => item.difficulty === difficulty);

  let score = 0;
  const feedback = questions.map(item => {
    const selected = document.querySelector(`input[name="question-${item.id}"]:checked`);
    const chosenIndex = selected ? Number(selected.value) : null;
    const isCorrect = chosenIndex === item.answer;

    if (isCorrect) score += 1;

    return `
      <article class="feedback-item ${isCorrect ? 'correct' : 'incorrect'}">
        <h3>${item.question}</h3>
        <p><strong>Your answer:</strong> ${chosenIndex === null ? 'No answer selected' : item.options[chosenIndex]}</p>
        <p><strong>Correct answer:</strong> ${item.options[item.answer]}</p>
        <p>${item.explanation}</p>
      </article>
    `;
  }).join('');

  const percentage = Math.round((score / questions.length) * 100);

  if (percentage >= 80) {
    localStorage.setItem('neptune_quiz_badge', 'Neptune Certified Learner');
  }

  showQuizResults(score, questions.length, feedback);
}

function resetQuiz() {
  document.getElementById('quizForm').reset();
  document.getElementById('quizResults').hidden = true;
  document.getElementById('quizFeedback').innerHTML = '';
}

function initQuizPage() {
  document.getElementById('difficultyFilter').addEventListener('change', () => {
    renderQuizQuestions();
    resetQuiz();
  });

  document.getElementById('quizForm').addEventListener('submit', handleQuizSubmit);
  document.getElementById('resetQuiz').addEventListener('click', resetQuiz);

  renderQuizQuestions();
}

document.addEventListener('DOMContentLoaded', initQuizPage);
