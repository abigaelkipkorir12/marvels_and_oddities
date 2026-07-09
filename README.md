# Marvels & Oddities

*A mobile reflection application that transforms a personal daily journaling habit into a secure full-stack experience built with React Native, Supabase, and PostgreSQL.*

---

## Why I Built It

Before moving from Kenya to attend Duke University, I read *Love from A to Z* by S.K. Ali, where the reader experiences the love story of the main characters through their  **Marvels** and **Oddities**.

As I prepared to leave home and begin university in a completely unfamiliar country, I adopted the same habit using a simple Google Form.

Over time, I noticed something interesting.

Many of the things that once felt overwhelming gradually disappeared, while small moments of gratitude remained meaningful. The habit became less about recording events and more about intentionally reflecting on each day.

Marvels & Oddities transforms that daily practice into a dedicated mobile application.

---

## Features

- Secure email/password authentication
- One journal entry per day
- Marvel, Oddity, and daily mood tracking
- Reflection streaks
- Journal history
- PostgreSQL-backed cloud storage
- User-specific data ownership through Row Level Security (RLS)

---

## Screenshots

> *Screenshots coming soon.*

---

## Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | React Native, Expo, TypeScript |
| Backend | Supabase |
| Database | PostgreSQL |
| Authentication | Supabase Auth |

---

## Architecture

```text
               React Native App
                      │
                      ▼
            Supabase Authentication
                      │
                      ▼
           Application Business Logic
                      │
                      ▼
              Supabase Database API
                      │
                      ▼
                  PostgreSQL
```

## Engineering Decisions

### Secure Data Ownership

Every journal entry is associated with an authenticated user through Supabase Auth and UUID-based ownership.

Rather than relying solely on client-side validation, PostgreSQL Row Level Security (RLS) enforces that users can only access their own journal entries.

### One Reflection Per Day

Instead of allowing unlimited journal entries, the application enforces a single reflection each day.

This rule is implemented through application logic while keeping the database model simple and consistent.

### Reflection Streaks

Rather than storing streak values directly, streaks are calculated dynamically from authenticated journal history.

This avoids maintaining duplicate state while ensuring streaks always reflect the underlying journal data.

---

## Running Locally

```bash
git clone https://github.com/your-username/Marvels_and_Oddities.git

cd Marvels_and_Oddities/app

npm install

npx expo start
```

Create a `.env` file using `.env.example` and provide your Supabase credentials.

---

## Roadmap

### ✅ Completed

- [x] User authentication
- [x] Journal creation
- [x] Journal history
- [x] Reflection streak tracking
- [x] PostgreSQL persistence
- [x] Row Level Security (RLS)

### 🚧 Planned

- [ ] Weekly reflection summaries
- [ ] Mood analytics and visualizations
- [ ] Photo attachments
- [ ] Search and filtering
- [ ] Push notification reminders
- [ ] Accessibility improvements

---

## Lessons Learned

This project taught me much more than React Native.

It taught me how frontend, backend, authentication, databases, and security all work together to create a reliable application.

More importantly, it reinforced my systems thinking as I was solving—designing systems where architecture, data integrity, and maintainability are considered from the beginning rather than added later.