import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы для записи на консультацию
    console.log("Заявка на консультацию:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-slate-600">
              Обсудим ваш проект лично. Звоните или оставляйте заявку на
              консультацию.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8">
                Контактная информация
              </h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Icon name="Phone" className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Телефон</div>
                    <div className="text-slate-600">+7 (495) 123-45-67</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Icon name="Mail" className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Email</div>
                    <div className="text-slate-600">
                      info@furniture-dreams.ru
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Icon name="MapPin" className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Адрес</div>
                    <div className="text-slate-600">
                      Москва, ул. Мебельная, 15
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Icon name="Clock" className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">
                      Режим работы
                    </div>
                    <div className="text-slate-600">
                      Пн-Пт: 9:00-18:00
                      <br />
                      Сб: 10:00-16:00
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Записаться на консультацию
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <Input
                    name="phone"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white"
                >
                  <Icon name="Send" className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
