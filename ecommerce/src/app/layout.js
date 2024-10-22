import "@/styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Your App Title</title>
                <meta name="description" content="Your app description" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className="bg-white text-gray-800 antialiased">
                <div id="root">{children}</div>
            </body>
        </html>
    );
}

