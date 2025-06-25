import Icon from "@/components/ui/icon";

const About = () => {
  const values = [
    {
      icon: "Heart",
      title: "Страсть к делу",
      description: "Каждый проект делаем с душой и вниманием к деталям",
    },
    {
      icon: "Shield",
      title: "Надёжность",
      description: "Гарантируем качество и соблюдение всех сроков",
    },
    {
      icon: "Users",
      title: "Индивидуальность",
      description: "Каждый клиент уникален, как и его будущая мебель",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              О нашей компании
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Уже 15 лет мы создаём мебель, которая становится сердцем дома.
              Наша философия проста: каждое изделие должно быть не просто
              красивым, а идеально подходить своему владельцу.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Мы не работаем с готовыми решениями. Каждый проект начинается с
              личной встречи, где мы изучаем ваши потребности, привычки и мечты.
              Только после этого рождается уникальный дизайн.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  500+
                </div>
                <div className="text-slate-600">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  15
                </div>
                <div className="text-slate-600">Лет опыта</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Наша мастерская"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-6 rounded-2xl">
              <Icon name="Award" size={32} className="mb-2" />
              <div className="font-semibold">Премиум качество</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                <Icon
                  name={value.icon as any}
                  className="text-purple-600"
                  size={28}
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
