import { portfolioCopy, portfolioLocales, type PortfolioLocale } from '~/utils/portfolio-copy'

export function usePortfolioLocale() {
  const locale = useState<PortfolioLocale>('portfolio-locale', () => 'pt-BR')
  const copy = computed(() => portfolioCopy[locale.value])

  function setLocale(next: PortfolioLocale) {
    locale.value = next
  }

  return { locale, copy, setLocale, locales: portfolioLocales }
}
