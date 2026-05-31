# Marvels & Oddities Journal

A daily mindfulness and reflection application inspired by S.K. Ali’s novel *Love from A to Z*. 

As humans, we tend to, or atleast I tend to hyperfixate on the negative things that happen making us lose the joy of the small good things that happen to us on a daily. This project is a digital space designed to counteract that bias—forcing a daily pause to record life's **Marvels** (the small joys, wonders, and victories) alongside its **Oddities** (the challenges, weirdness, and minor setbacks), backed by a quantitative happiness scale and a streak-based motivation system.

---

##  The Core Concept

*   **The Problem:** Daily inconveniences easily overshadow small moments of joy, distorting our perception of how our days actually went.
*   **The Solution:** A dedicated, highly visual daily journal that balances perspective. By looking back at the history of your entries, the "oddities" lose their weight, and the "marvels" become a permanent archive of gratitude.
*   **The Origin:** This project evolved from a personal Google Form  I used to navigate and appreciate my first year at Duke. This app elevates that practice into a dedicated, frictionless, and rewarding experience.

---

##  Key Features

*   **Daily Log:** Record your Marvels and Oddities side-by-side every day.
*   **Happiness Index:** Rate your overall day on a quantitative scale from `1` to `5`.
*   **Streak Mechanic:** A gamified incentive system that tracks consistency, encouraging you to keep your reflection habit alive.
*   **Reflection History:** An archive view to look back at past entries, helping you realize the insignificance of past bad days and the abundance of small good moments.
*   **Whimsical Aesthetic:** A cozy, warm, and comforting user experience designed to feel like a digital safe haven channeling Winnie the Pooh(without infringing on copyright!).

---

##  Technical Architecture & Control

*To maintain maximum technical and creative control over this project, the architecture is designed to be lean, modular, and deeply understood from the ground up.*

### Planned Tech Stack
*   **Frontend:** [React Native] — Focused on a clean, intentional, and high-concept visual user experience.
*   **Backend/Database:** [Supabase/ PostgreSQL] — Lightweight data storage for swift tracking of text strings, integers (1-5), and timestamps.

### Data Model
Every daily entry consists of a simple, clean payload:
```json
{
  "id": "unique_entry_id",
  "date": "YYYY-MM-DD",
  "happiness_rating": 4,
  "marvels": ["Found a great study spot", "Had a great conversation with a friend"],
  "oddities": ["Spilled a bit of coffee", "Heavy rain on the walk to class"],
  "streak_count": 12
}
