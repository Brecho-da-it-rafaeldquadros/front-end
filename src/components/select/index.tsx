import { SelectStyled, Option } from "./style";
import { motion } from "framer-motion";
import { useState } from "react";
import { v4 as uuid } from "uuid";
interface IPropsSelect {
  options: string[];
  message?: string;
  placeholder?: string;
  defaultoption?: string;
  register: any;
  name: string;
  maxwidth?: string;
}
const Select = ({
  options,
  message,
  defaultoption,
  placeholder,
  register,
  name,
}: IPropsSelect) => {
  const [value, setValue] = useState<string>(
    ""
  );
  const [isOpenModal, setIsOpenModal] = useState<boolean | "initial">(
    "initial"
  );
  const [isLeaveModal, setIsLeaveModal] = useState<boolean | "initial">(
    "initial"
  );
  const hasOptions = options && options?.length > 0;
  const isInitial = isLeaveModal === "initial" && isOpenModal == "initial";
  const open = isOpenModal && !isLeaveModal;
  const isExhibitLabel = defaultoption || value;
  const uniqueName = `select_value${uuid()}`;
  return (
    <SelectStyled
      message={message}
      style={{
        padding: "30px 0px 5px 0px",
      }}
    >
      {isExhibitLabel && (
        <motion.label
          initial={{ opacity: 0, y: "0" }}
          animate={{ opacity: 1, y: "-130%" }}
          className="select_label"
        >
          {message ? message : placeholder}
        </motion.label>
      )}
      <motion.div className="select_list">
        <motion.input
          placeholder={message ? message : placeholder}
          autocomplete="off"
          id={uniqueName}
          className="select_value"
          type="text"
          {...register(name)}
          value={ value === "" && defaultoption ? defaultoption :  value}
          onClick={() => {
            if (isInitial) {
              setIsOpenModal(true);
              setIsLeaveModal(false);
            }
            if (isOpenModal && !isLeaveModal) {
              setIsOpenModal(false);
              setTimeout(() => setIsLeaveModal(true), 200);
            }
            if (!isOpenModal && isLeaveModal) {
              setIsOpenModal(true);
              setIsLeaveModal(false);
            }
          }}
          style={{
            borderRadius: isInitial || !isOpenModal ? "8px" : "8px 8px 0px 0px",
          }}
        />
        {!isInitial && !isLeaveModal && (
          <motion.div
            className="list_move"
            initial={open ? { opacity: 0, y: "-10%" } : { opacity: 1, y: "0%" }}
            animate={open ? { opacity: 1, y: "0%" } : { opacity: 0, y: "-10%" }}
            transition={{ duration: 0.1 }}
          >
            {hasOptions &&
              options.map((item, i) => (
                <Option
                  htmlFor={uniqueName}
                  key={i}
                  value={value}
                  item={item}
                  defaultoption={defaultoption}
                  onClick={() => {
                    if (defaultoption) {
                      defaultoption = undefined;
                    }
                    setValue(item);
                    setIsOpenModal(false);
                    setTimeout(() => setIsLeaveModal(true), 200);
                  }}
                >
                  {item}
                </Option>
              ))}
          </motion.div>
        )}
      </motion.div>
    </SelectStyled>
  );
};
export default Select;
