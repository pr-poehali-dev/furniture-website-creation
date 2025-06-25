import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Countertops = () => {
  const materials = [
    {
      name: "Натуральный камень",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Гранит, мрамор, кварцит - вечная красота природы",
    },
    {
      name: "Искусственный камень",
      image:
        "https://images.unsplash.com/photo-1556909195-f87d6d6b4f32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Современные композитные материалы с безграничными возможностями",
    },
    {
      name: "Массив дерева",
      image:
        "https://images.unsplash.com/photo-1556909114-4f5e7b9b0f8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Тёплая фактура натурального дерева для уютной кухни",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Столешницы
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Идеальные столешницы, созданные по вашим размерам и предпочтениям.
            Обсудим каждую деталь на личной встрече.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {materials.map((material, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {material.name}
              </h3>
              <p className="text-slate-600">{material.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-slate-50 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Готовы обсудить ваш проект?
          </h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Запишитесь на бесплатную консультацию. Покажем образцы материалов,
            обсудим технические решения и составим индивидуальное предложение.
          </p>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4"
          >
            <Icon name="Calendar" className="mr-2" />
            Записаться на встречу
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Countertops;
