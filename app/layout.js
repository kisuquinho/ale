import { GoogleAnalytics } from '@next/third-parties/google'
import { inter } from './fonts'
import "./globals.scss";

export const metadata = {
  title: "Comunidade respira | Alê Montezano",
  description: "Aprenda técnicas de Breathwork capazes de te ajudar no controle das emoções, na redução da ansiedade, do estresse, na melhora do sono e outros benefícios. Você será guiado por uma mentora por essa jornada de autoconhecimento e busca por bem-estar.",
  keywords: ['breathwork', 'trabalho de respiração', 'respiração', 'respiração consciente', 'redução da ansiedade', 'melhora do sono', 'saúde'],
  openGraph: {
    title: 'Comunidade Respira | Alê Montezano',
    description: 'Aprenda técnicas de Breathwork capazes de te ajudar no controle das emoções, na redução da ansiedade, do estresse, na melhora do sono e outros benefícios. Você será guiado por uma mentora por essa jornada de autoconhecimento e busca por bem-estar.',
    url: 'https://www.alemontezano.com',
    siteName: 'Trote Solidário UFV',
    locale: 'pt_BR',
    type: 'website',
    generator: 'Next.js',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comunidade Respira | Alê Montezano',
    description: 'Aprenda técnicas de Breathwork capazes de te ajudar no controle das emoções, na redução da ansiedade, do estresse, na melhora do sono e outros benefícios. Você será guiado por uma mentora por essa jornada de autoconhecimento e busca por bem-estar.',
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-J6HFYEWYFF" />
    </html>
  );
}
