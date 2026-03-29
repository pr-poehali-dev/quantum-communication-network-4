import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function FloatingNavbar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
    }
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto max-w-7xl rounded-2xl border-2 border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("home")} className="cursor-pointer">
            <div className="flex items-center gap-2 text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_40%)]">
              <Icon name="ChefHat" size={28} />
              <span className="font-semibold text-lg font-open-sans-custom tracking-tight">Русская Кухня</span>
            </div>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-open-sans-custom text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              Рецепты
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-open-sans-custom text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              Каталог
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-open-sans-custom text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-open-sans-custom text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              Контакты
            </button>
          </div>

          <Button
            size="sm"
            className="bg-white text-black hover:bg-gray-100 [text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)] font-open-sans-custom"
            onClick={() => scrollToSection("pricing")}
          >
            Все рецепты
          </Button>
        </div>
      </div>
    </nav>
  )
}
