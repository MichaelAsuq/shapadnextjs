import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./globals.css";
import Bar from '../../components/NavBar';
import Footer from '../../components/Footer';


export const metadata = {
  title: 'Shapad Communications Ltd',
  description: 'A creative marketing and advertising agency specializing in storytelling, branding, and innovative solutions.',
  keywords: 'advertising agency, creative agency, branding agency',
  openGraph: {
    title: 'Shapad, A creative marketing and advertising agency',
    description: 'Shapad Communications Ltd: A creative marketing and advertising agency specializing in storytelling.',
    url: 'https://www.theshapad.com',
    images: [
      {
        url: 'https://res.cloudinary.com/ddabcld2j/image/upload/v1737389884/Shapad_dvyhvq.jpg',
        width: 800,
        height: 600,
        alt: 'Shapad Image',
      },
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body

      >
        <div style={{ position: 'relative' }}>
          <Bar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
