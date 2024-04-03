import { Dialog } from "@headlessui/react";

import toast from "react-hot-toast";

function LoginModal({ isOpen, setIsOpen }) {
  // save to local storage
  const handleSubmit = (e) => {
    e.preventDefault();
    const UserInformation = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    localStorage.setItem("UserInformation", JSON.stringify(UserInformation));
    setIsOpen(false);
    toast.success("Data saved to local storage😊");
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed inset-0 z-10 overflow-y-auto"
    >
      <div className="flex min-h-screen items-center justify-center bg-black/50">
        <Dialog.Panel className="mx-3 w-full max-w-[550px] rounded-lg bg-white p-6 shadow-md sm:mx-0 ">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-[18px] font-semibold  text-[#202020]">
              Регистрация
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Ваш email*"
              className="mb-1 block w-full bg-transparent text-[14px] text-[#7A7687] outline-none md:mb-2"
              required
              id="email"
            />
            <hr className="mb-6 md:mb-10" />
            <input
              type="password"
              placeholder="Пароль*"
              className="mb-1 block w-full bg-transparent text-[14px] text-[#7A7687] outline-none md:mb-2"
              required
              id="password"
            />
            <hr className="mb-6 md:mb-10" />

            <button className="w-full rounded-[50px] bg-[#088269] px-4 py-2 font-bold text-white hover:opacity-[0.6]">
              Регистрация
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default LoginModal;
