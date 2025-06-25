import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            Экомебель Кемерово
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            Эксклюзивные кухни и столешницы по индивидуальным проектам. Каждое
            изделие создаётся персонально для вас.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
            >
              <Icon name="Phone" className="mr-2" />
              Записаться на консультацию
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg"
            >
              <Icon name="Eye" className="mr-2" />
              Посмотреть портфолио
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Личный подход
              </h3>
              <p className="text-slate-600">
                Каждый проект обсуждается индивидуально
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Премиум качество
              </h3>
              <p className="text-slate-600">
                Только лучшие материалы и технологии
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                15 лет опыта
              </h3>
              <p className="text-slate-600">
                Проверенный временем профессионализм
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
