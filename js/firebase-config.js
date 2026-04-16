// Firebase Configuration
// Replace these values with your own Firebase project credentials
// Get these from: https://console.firebase.google.com/

const firebaseConfig = {
  apiKey: "AIzaSyBVlrG9aWjIZg1hSlyyGDXBrETJPZErYJw",
  authDomain: "neptune-privacy.firebaseapp.com",
  projectId: "neptune-privacy",
  storageBucket: "neptune-privacy.firebasestorage.app",
  messagingSenderId: "937264576778",
  appId: "1:937264576778:web:2fc0c0bd70dec45ce3a2f3"
};

const FIREBASE_ENABLED = firebaseConfig.apiKey && !firebaseConfig.apiKey.includes('YOUR_');
let db = null;

if (FIREBASE_ENABLED && typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
} else {
  console.warn('Firebase is not configured or supported. Firestore sync is disabled.');
}

// Load all articles from Firestore
async function loadFirebaseArticles() {
  if (!db) return [];
  try {
    const snapshot = await db.collection('articles').get();
    const articles = [];
    snapshot.forEach(doc => {
      articles.push({ ...doc.data(), firebaseId: doc.id });
    });
    return articles;
  } catch (error) {
    console.error('Error loading Firebase articles:', error);
    return [];
  }
}

// Save article to Firestore
async function saveArticleToFirebase(article) {
  if (!db) throw new Error('Firebase is not configured.');
  try {
    if (article.firebaseId) {
      await db.collection('articles').doc(article.firebaseId).update(article);
      return article.firebaseId;
    } else {
      const docRef = await db.collection('articles').add(article);
      return docRef.id;
    }
  } catch (error) {
    console.error('Error saving article to Firebase:', error);
    throw error;
  }
}

// Delete article from Firestore
async function deleteArticleFromFirebase(firebaseId) {
  if (!db) throw new Error('Firebase is not configured.');
  try {
    await db.collection('articles').doc(firebaseId).delete();
  } catch (error) {
    console.error('Error deleting article from Firebase:', error);
    throw error;
  }
}
