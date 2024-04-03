const SendQuestion = () => {
  return (
    <div className="mx-auto  mb-[60px]  grid  max-w-[1300px] grid-cols-1 gap-[10px] px-5  sm:my-[120px] sm:grid-cols-2 md:py-[150px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.5804119854092!2d69.28353007594691!3d41.339736498949726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5318d90253%3A0xeaea91b74c8ff4e8!2z0JHQvtKT0LjRiNCw0LzQvtC7INC60Z7Rh9Cw0YHQuCAxMjcsIDEwMDA4NCwg0KLQvnNoa2VudCwgVG9zaGtlbnQsIFV6YmVraXN0YW4!5e0!3m2!1sen!2s!4v1712018495587!5m2!1sen!2s"
        allowFullScreen=""
        className="h-[345px] w-full max-w-[650px] rounded-[10px] border-none grayscale sm:h-[503px] md:h-[612px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div
        className="flex  flex-col	rounded-[10px]
border-[1px] border-[#E5E2EE] bg-white p-5 md:p-[40px]"
      >
        <h3 className="mb-[10px] text-[18px] font-medium text-[#202020] sm:mb-5 sm:text-[20px] md:mb-[25px] md:text-[30px]">
          Остались вопросы?
        </h3>
        <span className="mb-[30px] block w-full max-w-[417px] text-[12px] text-[#7A7687] sm:text-[14px] md:mb-[40px] md:text-[16px]">
          Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои
          координаты и наш менеджер перезвонит вам через 10 минут
        </span>
        <input
          type="text"
          placeholder="Ваше имя"
          className="mb-2 text-[12px] text-[#7A7687] outline-none md:text-[14px]"
        />
        <hr className="mb-5" />
        <input
          type="number"
          placeholder="Ваш телефон"
          className="mb-2 text-[12px] text-[#7A7687] outline-none md:text-[14px]"
        />
        <hr className="mb-5" />
        <input
          type="email"
          placeholder="Ваш email"
          className="mb-2 text-[12px] text-[#7A7687] outline-none md:text-[14px]"
        />
        <hr className="mb-5" />
        <input
          type="text"
          placeholder="Ваш вопрос"
          className="mb-10 text-[12px] text-[#7A7687] outline-none md:text-[14px]"
        />
        <hr className="mb-5" />
        <div className="flex flex-col items-center  gap-2 md:flex-row">
          <button className="rounded-[50px] bg-[#088269] px-5 py-2 text-[12px] text-[#F8F7F3] md:px-7 md:py-[11px] md:text-[14px]">
            Отправить
          </button>
          <p className="text-[12px] font-medium text-[#7A7687]">
            Нажимая «Отправить», я соглашаюсь c обработкой персональных данных
            на условиях{" "}
            <span className="text-[#088269]">Политики конфиденциальности.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SendQuestion;
