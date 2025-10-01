        Boss Messenger Plus — Complete Starter (Web + Mobile)

        This bundle contains a Next.js web demo and an Expo mobile demo wired to Firebase Auth, Firestore, and Storage.


        Setup:
1. Create a Firebase project and enable Auth (Email + Google) and Firestore and Storage.
2. Copy your Firebase config values into web/.env (or Vercel env vars) and mobile/.env (Expo) following the .env.example files.
3. Install dependencies and run:

# Web
cd web
npm install
npm run dev

# Mobile (Expo)
cd mobile
npm install
npm run start

Security: update firestore.rules and storage.rules as needed. This starter is intentionally minimal for demo/testing.
