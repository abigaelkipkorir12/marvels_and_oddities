# Marvels & Oddities

*A full-stack mobile journaling application inspired by a daily reflection practice from S.K. Ali's* Love from A to Z.

Built with **React Native**, **Supabase**, and **PostgreSQL**.

---

# Overview

Marvels & Oddities is a mobile journaling application designed to encourage intentional daily reflection.

Each day, users record:

* **A Marvel** — something meaningful, joyful, or worth appreciating.
* **An Oddity** — something frustrating, difficult, or unexpected.
* **A daily mood rating** (1–5).

To encourage consistency, the application limits users to **one journal entry per day** and tracks their current reflection streak over time.

All journal entries are securely associated with authenticated users and stored in PostgreSQL through Supabase.

---

# Why I Built This

Before moving from Kenya to attend Duke University, I read *Love from A to Z*, a novel that introduced the idea of recording life's "Marvels" and "Oddities."

At the time, I was preparing for one of the biggest transitions of my life—leaving home, moving across the world, and beginning university in a completely unfamiliar environment.

Inspired by the book, I created a simple Google Form to record one Marvel, one Oddity, and my mood every day.

Over time I realized something interesting.

Many of the problems that once felt overwhelming had faded in importance, while small moments of gratitude and growth remained meaningful.

Marvels & Oddities transforms that personal reflection habit into a dedicated mobile application.

---

# Current Features

### Secure Authentication

* Email/password authentication using Supabase Auth
* Session persistence
* Protected application routes
* Secure logout

### Daily Journaling

* Record one Marvel
* Record one Oddity
* Rate the day from 1–5
* Automatically stores the journal date

### User Ownership

Every journal entry is securely associated with its authenticated owner using UUID-based user identifiers.

Users can only access their own reflections.

### One Journal Per Day

The application prevents multiple journal entries on the same day by checking for an existing reflection before allowing a new submission.

### Reflection Streaks

Calculates consecutive daily journaling streaks from user history to encourage consistent reflection.

### Journal History

Browse previous reflections in reverse chronological order.

### Cloud Persistence

All data is stored using Supabase and PostgreSQL.

---

# Technical Stack

## Frontend

* React Native
* Expo
* TypeScript

## Backend

* Supabase

## Database

* PostgreSQL

---

# Architecture

```text
React Native App
        │
        ▼
 Supabase Authentication
        │
        ▼
 Session Management
        │
        ▼
 Supabase Database
        │
        ▼
 PostgreSQL
```

---


# Engineering Decisions

Developing Marvels & Oddities required making several decisions to balanced user experience, security, and data integrity.

### Secure User Ownership

Rather than storing journal entries anonymously, every journal is associated with an authenticated user through a UUID-based relationship with Supabase Auth. This allows every reflection to belong to a single user while supporting secure access control.

### Protecting User Data

Authentication alone could not guarantee that it would prevent unauthorized access. I implemented Row Level Security (RLS) policies so PostgreSQL enforces that users can only read and create their own journal entries, even if someone attempts to bypass the frontend.

### One Journal Per Day

Instead of allowing unlimited journal entries, I implemented a business rule limiting users to one reflection each day. The application checks for an existing journal before displaying the form, while the database architecture supports enforcing this rule consistently.

### Reflection Streaks

Rather than storing streak values separately, the application calculates streaks dynamically from authenticated journal history(date entries). Doing this avoids maintaining duplicate state which could lead to bugs. This also ensures that the displayed streak always reflects the underlying journal data.

### Mobile-First Design

The application was designed specifically as a mobile experience using React Native, emphasizing a calm, distraction-free interface that encourages consistent daily reflection.

---

# Example Journal Entry

```json
{
  "id": "entry_id",
  "user_id": "14c81e70-9fc8-4ee1-98e7-c977b18118f2",
  "date": "2026-06-28",
  "mood": 4,
  "marvel": "Had a meaningful conversation with a friend.",
  "oddity": "Missed the bus to class."
}
```


# Roadmap

## Implemented

* User authentication
* Protected routes
* Session persistence
* Secure logout
* User-specific journal ownership
* One journal entry per day
* Reflection streak tracking
* Journal creation
* Journal history
* Mood tracking
* Supabase integration
* PostgreSQL persistence

## Planned

* Photo uploads for daily highlights
* Weekly and monthly reflection summaries
* Mood analytics and visualizations
* Search and filtering
* Push notification reminders
* "On This Day" reflections
* Meeting accessibility requirements

---


# Lessons Learned
**Just do the hard thing.**

This project started as a personal side project inspired by a daily habit, but it quickly became one of the best learning experiences I've had. Every feature pushed me into concepts I had never implemented before—from authentication and secure database design to Row Level Security, relational databases, and business logic.

There were many moments where I didn't know how to implement a feature or where to even begin. Rather than avoiding those parts, I learnt how to build through the uncertainty, one problem at a time.

Looking back, this project taught me far more than how to build a mobile application. It taught me how to think about software as a complete system—where the frontend, backend, database, and security model all work together to create a reliable user experience.


---

# Project Status

Marvels & Oddities is an actively developed personal project created both as a daily reflection tool and as a demonstration of full-stack mobile software engineering.

---

# Author

**Abigael Chemutai Kipkorir**

Duke University
