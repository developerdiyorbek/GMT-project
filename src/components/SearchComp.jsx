import { selectOptions } from "../constants/options";
import { IoIosSearch } from "react-icons/io";

const SearchComp = () => {
  return (
    <div className="flex items-center rounded-[50px] bg-[#D5D1E1] pr-[20px] text-[12px] xl:text-[14px]">
      <div className="mr-2 flex items-center rounded-l-[50px] rounded-r-[50px] bg-white">
        <select className="w-[40%] rounded-[50px] bg-[#EFEFEF] px-[15px] py-[10px] text-[#7A7687] outline-none sm:w-[30%]">
          {selectOptions.map((option) => (
            <option value={option.title} key={option.id}>
              {option.title}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Поиск"
          className="mr-2 block px-[15px] py-[8px] text-[#7A7687] outline-none"
        />
      </div>
      <label htmlFor="poisk" className="cursor-pointer">
        <IoIosSearch size={23} />
      </label>
    </div>
  );
};

export default SearchComp;
