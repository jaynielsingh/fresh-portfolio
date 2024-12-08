import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html data-theme="luxury">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jayniel Singh</title>
        <meta name="description" content="Jayniel Singh's personal portfolio showcasing my work and projects" />
        <meta name="keywords" content="jayniel, singh, portfolio, web development, photography, self-taught, freelance, developer, web developer, front-end developer, back-end developer, full-stack developer" />
        <meta name="author" content="Jayniel Singh" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
