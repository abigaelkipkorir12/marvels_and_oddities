# Marvels & Oddities

*A personal full-stack mobile journaling application inspired by a reflection practice from S.K. Ali's* Love from A to Z.

Built with **React Native, Supabase, and PostgreSQL**.

---

## Overview

Marvels & Oddities is a personal reflection application designed to help users capture both the positive and difficult moments of everyday life.

The application encourages users to record:

* A **Marvel** — something meaningful, joyful, or worth appreciating.
* An **Oddity** — something frustrating, difficult, or unexpected.
* A daily mood rating on a scale from 1–5.

Over time, these entries form a personal archive that helps users gain perspective on challenges while preserving moments that might otherwise be forgotten.

---

## Why I Built This

Before moving from Kenya to attend Duke University, I read *Love from A to Z*, a novel that introduced the idea of recording life's "Marvels" and "Oddities."

At the time, I was preparing for a major transition—leaving home, moving across the world, and starting university in a completely unfamiliar environment.

Inspired by the book, I created a simple Google Form to record one Marvel, one Oddity, and my overall mood each day. What started as a personal habit became an unexpectedly valuable way to maintain perspective during my first year at Duke.

Reviewing old entries revealed something interesting: many of the problems that once felt overwhelming had faded in importance, while small moments of gratitude, growth, and connection remained meaningful.

Marvels & Oddities transforms that reflection practice into a dedicated mobile application.

---

## Current Features

### Daily Journaling

Record daily Marvels and Oddities through a structured reflection workflow.

### Mood Tracking

Rate each day on a scale from 1–5.

### Journal History

Browse previous entries and revisit past reflections.

### Cloud Persistence

Entries are stored using Supabase and PostgreSQL for persistent storage.

### Mobile-First Experience

Designed and developed using React Native with a focus on simplicity, comfort, and consistency.

---

## Technical Stack

### Frontend

* React Native

### Backend

* Supabase

### Database

* PostgreSQL

---

## Architecture

```text
React Native App
        ↓
     Supabase
        ↓
   PostgreSQL
```

Example journal entry:

```json
{
  "id": "entry_id",
  "date": "2026-06-07",
  "mood_rating": 4,
  "marvel": "Had a meaningful conversation with a friend",
  "oddity": "Missed my bus to class"
}
```

---

## Key Technical Concepts Demonstrated

* Mobile Application Development
* Full-Stack Development
* RESTful Backend Integration
* Database Design
* PostgreSQL
* Cloud Data Persistence
* CRUD Operations
* State Management
* User-Centered Product Design
* React Native Development

---

## Current Development Status

### Implemented

* Journal creation
* Marvel/Oddity entries
* Mood tracking
* Historical journal archive
* Supabase integration
* PostgreSQL persistence

### In Progress

* Photo uploads for daily highlights
* Reflection streak tracking
* Additional UI refinement

### Planned

* Weekly and monthly reflection summaries
* Mood analytics and trend visualization
* Search and filtering by date range
* Push notification reminders
* Reflection streak rewards
* "On This Day" memory resurfacing

---

## Challenges & Lessons Learned

This project reinforced the importance of building software around a genuine user need rather than a technical requirement.

While the application itself focuses on journaling, the development process required designing database schemas, integrating cloud services, managing application state, and creating an experience users would want to return to consistently.

Perhaps the most important lesson was discovering how a simple personal habit can evolve into a software product with meaningful impact.

---

## Project Status

Marvels & Oddities is currently an actively developed personal project and is not yet publicly deployed.

Future development will focus on completing remaining features, improving user experience, and preparing the application for broader distribution.

---

## Author

Built by Abigael Chemutai Kipkorir

Duke University
