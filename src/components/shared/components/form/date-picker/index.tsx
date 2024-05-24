import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

import { persianDateGenerator } from '@/lib/helper';

import { SIZE_ENUM } from '@/components/@base/@helpers/types';
import { Input } from '@/components/@base/input';
import { INPUT_TYPES } from '@/components/@base/input/text/type';
import DatePickerModal from '@/components/shared/components/datepicker-modal';
import Props from '@/components/shared/components/form/date-picker/type';

export default function FormDatePicker({ handleChange, value, errorMessage, name }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleDateChange = (date: Date | null) => {
    handleChange(date);
    handleClose();
  };
  return (
    <>
      <Input
        name={name}
        errorMessage={errorMessage}
        value={persianDateGenerator(value)}
        onClick={handleOpen}
        size={SIZE_ENUM.XL}
        type={INPUT_TYPES.TEXT}
        readOnly
        LeftIcon={IoMdArrowDropdown}
      />
      <DatePickerModal
        isOpen={isOpen}
        close={handleClose}
        onChange={handleDateChange}
        value={value}
      />
    </>
  );
}
