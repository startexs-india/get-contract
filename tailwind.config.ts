import { type Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
        extend: {
            colors: {
                primary: "#084c9d",
                footer: "#0b2543",
                button: "#2e5f9b",
                button_hover: "#084c9d",
            },

            // 🖋 Fonts
            fontFamily: {
                sans: ["Inter", "Poppins", "sans-serif"],
                heading: ["Montserrat", "Poppins", "sans-serif"],
                mono: ["Fira Code", "monospace"],
            },

            // 📏 Spacing
            spacing: {
                128: "32rem",
                144: "36rem",
            },

            // 🧢 Border Radius
            borderRadius: {
                xxl: "2rem",
            },

            // 💡 Shadows
            boxShadow: {
                soft: "0px 4px 12px rgba(0,0,0,0.08)",
                card: "0 2px 15px rgba(0,0,0,0.1)",
                btn: "0 4px 10px rgba(37,99,235,0.4)",
            },

            // 🖥 Breakpoints
            screens: {
                xs: "480px",
                "3xl": "1920px",
            },

            // 🌀 Animations
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: 0 },
                    "100%": { transform: "translateY(0)", opacity: 1 },
                },
            },

            animation: {
                fadeIn: "fadeIn 0.5s ease-in-out",
                slideUp: "slideUp 0.5s ease-out",
            },

            // 🌈 Gradients
            backgroundImage: {
                "gradient-primary":
                    "linear-gradient(to right, #2563eb, #0ea5e9)",
                "gradient-dark":
                    "linear-gradient(135deg, #0f172a, #1e293b)",
            },
        },
    },

    plugins: [],
} satisfies Config;
