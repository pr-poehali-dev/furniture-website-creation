import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Kitchens = () => {
  const projects = [
    {
      title: "Современная кухня",
      image:
        "https://images.unsplash.com/photo-1556909114-4f5e7b9b0f8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      style: "Минимализм",
    },
    {
      title: "Классическая кухня",
      image:
        "https://images.unsplash.com/photo-1556909195-4e3d3e1f3f4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      style: "Классика",
    },
    {
      title: "Лофт кухня",
      image:
        "https://images.unsplash.com/photo-1556909114-4f5e7b9b0f8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      style: "Индустриальный",
    },
    {
      title: "Скандинавская кухня",
      image:
        "https://images.unsplash.com/photo-1556909195-4e3d3e1f3f4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      style: "Скандинавский",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Кухни на заказ
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Создаём кухни мечты в любом стиле. От первого эскиза до финальной
            установки - полное сопровождение вашего проекта.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm bg-purple-600 px-2 py-1 rounded-full">
                    {project.style}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-800">
                {project.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <Icon name="PenTool" className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Дизайн-проект
            </h3>
            <p className="text-slate-600">
              3D визуализация с детальной проработкой
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <Icon name="Wrench" className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Производство
            </h3>
            <p className="text-slate-600">
              Собственное производство с контролем качества
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <Icon name="Home" className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Установка
            </h3>
            <p className="text-slate-600">
              Профессиональный монтаж с гарантией
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4"
          >
            <Icon name="MessageCircle" className="mr-2" />
            Обсудить проект кухни
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Kitchens;
