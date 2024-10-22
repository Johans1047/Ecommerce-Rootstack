import "@/styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

export const metadata = {
    title: "VoyageXplore",
    description: "Conoce Panama",
    icons: {
      icon: [
        { url: '/images/favicon.png' , sizes: 'any', type: 'image/png'}
      ],
      apple: [
        { url: '/images/favicon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
  };

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <title>VoyageXplore</title>
                <meta name="description" content="Conoce Panama" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className="high-contrast antialiased">
                <div id="root">{children}</div>
            </body>
        </html>
    );
}

