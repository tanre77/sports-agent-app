# Sports Agent App

Cross-platform (web, iOS, Android) app for sports agents to manage athlete clients, deals, contracts, and schedules.

Built with **React Native + Expo** + **Supabase** (auth, database, storage).

## Features

- Email/password authentication
- Client (athlete) management with add + detail views
- Deals & endorsements
- Contract uploads (files stored in Supabase Storage)
- Schedule / events
- Dashboard overview
- Row Level Security so each agent only sees their own data

## Setup

### 1. Create a free Supabase project
Go to [supabase.com](https://supabase.com) → New project.

### 2. Run the schema
Open the SQL Editor in Supabase and paste/run the contents of `supabase/schema.sql`.

### 3. Create a Storage bucket
- Storage → New bucket → name it `contracts`
- Make it private (recommended)
- Add a policy allowing authenticated users to upload/read their own files

### 4. Add your keys
Create a `.env` file in the project root (or set Expo public env vars):

```
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Update `lib/supabase.js` if you prefer hardcoding for local testing.

### 5. Install & run

```bash
npm install
npx expo start
```

- Press `w` for web
- Press `a` for Android
- Press `i` for iOS
- Or use Expo Go

## Notes

- All data is scoped to the logged-in user via RLS.
- Contract files go to the `contracts` storage bucket.
- Extend with more tables, push notifications, or analytics as needed.

Created for tanre77.
