import Icon from "@/components/ui/icon"
import { Badge } from "@/components/ui/badge"

function Feature() {
  const features = [
    {
      icon: "Flame",
      title: "Аэрогриль",
      desc: "Сочные блюда с хрустящей корочкой без масла — быстро и полезно.",
    },
    {
      icon: "Waves",
      title: "Мультиварка",
      desc: "Тушите, варите и запекайте — минимум усилий, максимум вкуса.",
    },
    {
      icon: "Zap",
      title: "Плита",
      desc: "Классические рецепты на плите от простых супов до сложных соусов.",
    },
    {
      icon: "Star",
      title: "Простые блюда",
      desc: "Рецепты для начинающих: готово за 20–40 минут из доступных продуктов.",
    },
    {
      icon: "Crown",
      title: "Сложные блюда",
      desc: "Изысканные рецепты для опытных кулинаров с пошаговыми инструкциями.",
    },
    {
      icon: "MapPin",
      title: "История блюд",
      desc: "Узнайте, откуда родом каждое блюдо — из какого города или региона России.",
    },
  ]

  return (
    <div className="w-full py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 py-20 flex-col items-start lg:py-0">
          <div>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">Кулинария</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-open-sans-custom text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              Всё для домашнего кулинара
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
              Более 300 рецептов русской кухни с пошаговыми инструкциями для аэрогриля, мультиварки и плиты.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              {features.map((f, i) => (
                <div key={i} className="flex flex-row gap-6 w-full items-start">
                  <Icon name={f.icon as "Flame"} size={18} className="mt-2 text-white flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-open-sans-custom">{f.title}</p>
                    <p className="text-gray-300 text-sm font-open-sans-custom">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Feature }
