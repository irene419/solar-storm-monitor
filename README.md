# 🌞 Solar Storm Monitor

**The Sun is the biggest threat to our evolving technology.**  
To people on the surface, space weather is harmless. But for satellites, power grids, and global communications, a solar storm can be catastrophic. That's why we built a real‑time solar activity monitoring dashboard to track geomagnetic storms, aurora visibility, and the impacts on Earth's technology, all in one place.

Built with React, Tailwind CSS, and live data from NOAA/SWPC, with a full‑featured backend for user accounts, saved alerts, and personal aurora sighting logs.

---

## 🚀 Features

### Core Monitoring (Phase 1)
- **Live KP Index & Solar Activity** – Real-time geomagnetic storm strength and solar wind data.
- **Electric Grid Watch** – Monitors power grid vulnerability during solar disturbances.
- **Aurora Guide** – Displays current aurora visibility forecasts based on KP thresholds.
- **Storm History** – A curated timeline of major solar storms, from the Carrington Event to recent Starlink satellite losses.
- **Learn Section** – Plain‑language explainers on sunspots, flares, CMEs, and how they affect Earth.
- **Clean, Minimal UI** – Dark sidebar with a light, readable content area.

### User Accounts & Personal Data (Phase 2)
- **Signup / Login** – Secure authentication with hashed passwords and JWT‑based sessions.
- **My Alerts** – Save custom Kp Index thresholds, view, and delete them.
- **My Sightings** – Log aurora sightings (date, location, note), view, and delete them.
- **Private Data** – All personal data is isolated per user and enforced on the backend.

---

## 🛠️ Tech Stack

| Technology              | Purpose                           |
|-------------------------|-----------------------------------|
| React                   | Front‑end framework               |
| React Router            | Client‑side navigation            |
| Tailwind CSS            | Utility‑first styling             |
| Flask                   | Backend API server                |
| SQLAlchemy              | ORM for database interactions     |
| PostgreSQL              | Production‑ready relational DB    |
| Flask‑JWT‑Extended      | JWT authentication                |
| Flask‑Bcrypt            | Password hashing                  |
| Flask‑CORS              | Cross‑origin resource sharing     |
| NOAA SWPC API           | Live space weather data           |
| Git                     | Version control                   |

---

## 📁 Project Structure

```
space-weather-dashboard/
├── frontend/                      # React application
│   └── src/
│       ├── components/
│       │   └── Layout.jsx         # Sidebar + main wrapper
│       ├── pages/
│       │   ├── Dashboard.jsx
│       │   ├── ElectricGridWatch.jsx
│       │   ├── AuroraGuide.jsx
│       │   ├── StormHistoryPage.jsx
│       │   ├── LearnPage.jsx
│       │   ├── Login.jsx          # (Phase 2)
│       │   ├── Signup.jsx         # (Phase 2)
│       │   ├── MyAlerts.jsx       # (Phase 2)
│       │   └── MySightings.jsx    # (Phase 2)
│       ├── api/
│       │   ├── spaceWeather.js    # NOAA data fetches
│       │   └── auth.js            # (Phase 2) API calls to backend
│       ├── App.jsx
│       ├── index.js
│       └── index.css
│
├── backend/                       # Flask API (Phase 2)
│   ├── app.py                     # Main application entry
│   ├── models.py                  # SQLAlchemy models (User, Alert, Sighting)
│   ├── auth.py                    # JWT authentication routes
│   ├── routes/                    # Protected resource endpoints
│   │   ├── alerts.py
│   │   └── sightings.py
│   ├── config.py                  # Configuration (DB, JWT, etc.)
│   ├── requirements.txt
│   └── .env.example
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## ⚙️ Installation & Setup

### Frontend (React)

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd space-weather-dashboard/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the `frontend` root:
   ```env
   REACT_APP_API_BASE_URL=http://localhost:5000   # Backend URL
   REACT_APP_WEATHER_API_KEY=your_key_here        # If needed for NOAA endpoints
   ```

4. **Run the development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it.

### Backend (Flask)

1. **Navigate to the backend folder**
   ```bash
   cd ../backend
   ```

2. **Create and activate a virtual environment**
   ```bash
   python3 -m venv venv
   source venv/bin/activate      # On Windows: venv\Scripts\activate
   ```

3. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   Create a `.env` file in the `backend` root (use `.env.example` as a template):
   ```env
   DATABASE_URL=postgresql://user:password@localhost/spaceweather
   JWT_SECRET_KEY=your-secret-key
   FLASK_ENV=development
   ```
   *For local testing, you can use SQLite by setting `DATABASE_URL=sqlite:///spaceweather.db`.*

5. **Initialize the database** (if using migrations)
   ```bash
   flask db upgrade   # or python3 -m flask db upgrade if you have Flask-Migrate set up
   ```
   Alternatively, the app may auto‑create tables on first run.

6. **Run the backend server**
   ```bash
   python3 app.py
   ```
   Backend runs on `http://localhost:5000`.

### Running Both Together

Open two terminal sessions:

- **Terminal 1 (Backend):**
  ```bash
  cd backend
  source venv/bin/activate
  python3 app.py
  ```

- **Terminal 2 (Frontend):**
  ```bash
  cd frontend
  npm start
  ```

Access the app at `http://localhost:3000` and ensure the frontend is pointed to `http://localhost:5000` for API calls.

---

## 🌐 API Data Sources

The app pulls live space weather data from public APIs:

- **KP Index** – [NOAA SWPC](https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json)
- **Solar Wind / CME alerts** – (update with your endpoint)
- **Aurora oval maps** – (update with your endpoint)

*Update `frontend/src/api/spaceWeather.js` with your preferred endpoints.*

**User data** (alerts, sightings) is stored in the backend PostgreSQL database and served via protected REST endpoints. All endpoints require a valid JWT token obtained during login/signup.

---

## 📌 Current Status (End of Phase 2)

- ✅ Sidebar navigation redesigned and functional.
- ✅ Electric Grid Watch and Aurora Guide integrated with live data.
- ✅ Storm History and Learn pages populated with static content.
- ✅ User authentication (signup/login) with JWT and hashed passwords.
- ✅ Personal alerts and sightings – create, view, and delete.
- ✅ Backend API fully implemented with private per‑user data.
- ✅ All frontend and backend code committed and tested.

**Phase 3 (future)** may include:
- Email/SMS alert notifications.
- Enhanced dashboard with more real‑time metrics.
- Mobile responsiveness polish and PWA support.

---

## 🧪 Testing

**Frontend (React):**
```bash
cd frontend
npm test
```

**Backend (Flask):**
```bash
cd backend
pytest   # or python -m unittest discover
```
(If you have test files in place; otherwise, add them as needed.)

---

## 📦 Build for Production

### Frontend Build
```bash
cd frontend
npm run build
```
The `build` folder contains optimized static files ready for deployment (Netlify, Vercel, etc.).

### Backend Deployment
The Flask app can be deployed to any WSGI‑compatible server (e.g., Gunicorn, uWSGI) or containerized with Docker. Set `FLASK_ENV=production` and ensure the database is properly configured.

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---


## 🙏 Acknowledgments

- Data provided by NOAA Space Weather Prediction Center
- Historical event summaries adapted from NASA and ESA archives
- Flask/JWT and React community for excellent tooling

---

.