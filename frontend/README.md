# 🌞 Space Weather Dashboard

A real-time solar activity monitoring dashboard that tracks geomagnetic storms, aurora visibility, and space weather impacts on Earth’s technology. Built with React, Tailwind CSS, and live data from NOAA/SWPC.

## 🚀 Features

- **Live KP Index & Solar Activity** – Real-time geomagnetic storm strength and solar wind data.
- **Electric Grid Watch** – Monitors power grid vulnerability during solar disturbances.
- **Aurora Guide** – Displays current aurora visibility forecasts based on KP thresholds.
- **Storm History** – A curated timeline of major solar storms, from the Carrington Event to recent Starlink satellite losses.
- **Learn Section** – Plain-language explainers on sunspots, flares, CMEs, and how they affect Earth.
- **Clean, Minimal UI** – Dark sidebar with a light, readable content area.

## 🛠️ Tech Stack

| Technology      | Purpose                          |
|-----------------|----------------------------------|
| React           | Front-end framework              |
| React Router    | Client-side navigation           |
| Tailwind CSS    | Utility-first styling            |
| NOAA SWPC API   | Space weather data               |
| Git             | Version control                  |

## 📁 Project Structure

```
src/
├── components/
│   └── Layout.jsx         # Sidebar + main wrapper
├── pages/
│   ├── Dashboard.jsx      # Overview of current conditions
│   ├── ElectricGridWatch.jsx
│   ├── AuroraGuide.jsx
│   ├── StormHistoryPage.jsx
│   └── LearnPage.jsx
├── api/
│   └── spaceWeather.js    # Fetch functions for live data
├── App.jsx               # Routing setup
├── index.js
└── index.css             # Tailwind imports
```

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd space-weather-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (if using an API key)
   Create a `.env` file in the root:
   ```env
   REACT_APP_WEATHER_API_KEY=your_key_here
   REACT_APP_API_BASE_URL=https://api.example.com
   ```

4. **Run the development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it.

## 🌐 API Data Sources

The app pulls live data from public space weather APIs:
- **KP Index** – [NOAA SWPC](https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json)
- **Solar Wind / CME alerts** – (update with your endpoint)
- **Aurora oval maps** – (update with your endpoint)

*Update `src/api/spaceWeather.js` with your preferred endpoints.*

## 📌 Current Status (End of Phase 1)

- ✅ Sidebar navigation redesigned and functional.
- ✅ Electric Grid Watch and Aurora Guide integrated with live data.
- ✅ Storm History and Learn pages populated with static content.
- ✅ All pages tested and committed to Git.

**Phase 2** is next – enhancements to the Dashboard, additional metrics, user alerts, and responsive polish.

## 🧪 Testing

```bash
npm test
```

## 📦 Build for Production

```bash
npm run build
```

The build folder will contain optimized static files ready for deployment (Netlify, Vercel, etc.).

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- Data provided by NOAA Space Weather Prediction Center
- Historical event summaries adapted from NASA and ESA archives

## 📬 Contact

