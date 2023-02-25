import { Poppins, Nunito, Montserrat, Ubuntu, Prompt } from '@next/font/google'

const ubuntu = Ubuntu({ weight: ['400', '700', '400'], subsets: ['latin'] })
const prompt = Prompt({ weight: ['400', '700', '400'], subsets: ['latin'] })
const nunito = Nunito({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })
const poppins = Poppins({
  weight: ['600', '400', '700', '900'],
  subsets: ['latin'],
})

const fonts = {
  prompt: prompt.style.fontFamily,
  nunito: nunito.style.fontFamily,
  montserrat: montserrat.style.fontFamily,
  ubuntu: ubuntu.style.fontFamily,
  poppins: poppins.style.fontFamily,
}

export default fonts
