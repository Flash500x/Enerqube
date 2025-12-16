# Enerqube ⚡️

**Enerqube** is a next-generation Smart Home Energy Management Dashboard designed to give users complete control over their home's energy consumption, device management, and safety insights. Built with modern web technologies, it offers a seamless, responsive, and aesthetically pleasing interface.

## 🚀 Features

- **🏠 IoT Device Control**

  - Toggle appliances (Lights, Fans, AC, Water Heater, etc.) on/off instantly.
  - Adjust specific settings like Fan Speed, Light Brightness, and AC Temperature.
  - Real-time status updates and power usage indicators.

- **📊 Energy Monitoring**

  - **Live Usage Tracking:** Monitor real-time power consumption (Watts).
  - **Daily Limits:** Set daily kWh limits via an interactive drawer with visual progress bars.
  - **Visual Analytics:** Interactive charts and graphs to visualization consumption trends.

- **🛡 Safety & AI Insights**

  - **AI-Powered Alerts:** Receive intelligent alerts for abnormal usage patterns, potential faults, or efficiency tips.
  - **Actionable Recommendations:** Get prioritized suggestions for maintenance and safety (e.g., "Check wiring", "Clean AC filters").

- **🔧 Services & Tools**
  - **Doorstep Delight:** Request services for maintenance, new connections, or ownership changes directly from the app.
  - **Quick Fix Complaints:** Track and manage service complaints with status updates.
  - **Detailed Reports:** View comprehensive energy reports.

## 🛠 Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (Radix UI primitives)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Charts:** [Recharts](https://recharts.org/) & [Chart.js](https://www.chartjs.org/)
- **Language:** TypeScript

## 📦 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Flash500x/Enerqube.git
   cd Enerqube
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
src/
├── components/     # Reusable UI components (Shadcn, specialized cards)
├── pages/          # Main application pages
│   ├── Appliances.tsx  # Device control center
│   ├── Energy.tsx      # Energy usage analytics
│   ├── Overview.tsx    # Dashboard home
│   ├── Reports.tsx     # Billing and usage reports
│   ├── Safety.tsx      # AI safety insights
│   └── Settings.tsx    # User profile and app settings
└── App.tsx         # Main application entry
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
