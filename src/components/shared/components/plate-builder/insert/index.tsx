import { Form, Formik } from 'formik';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { BsCaretDownFill } from 'react-icons/bs';
import { RiWheelchairLine } from 'react-icons/ri';

import cn from '@/lib/clsxm';
import { isIOS } from '@/lib/helper';

import { SIZE_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import { Input } from '@/components/@base/input';
import { INPUT_TYPES } from '@/components/@base/input/text/type';
import { Text } from '@/components/@base/typography';
import XImage from '@/components/@base/x-image';
import { PostSchema } from '@/components/shared/components/otp-login/otp';
import { INPUT_SLOT_TYPE } from '@/components/shared/components/plate-builder/insert/type';
import Letter from '@/components/shared/components/plate-builder/letter';

import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';
import localization from '@/constant/localization';

import iranWordPlate from '~/images/common/iran-word-plate.svg';
import plateLeftSide from '~/images/common/plate-left-side.svg';

export default function Insert({ onComplete }) {
  const [letterShow, setLetterShow] = useState(false);
  const [disabledPeople, setDisabledPeople] = useState(false);
  const firstRef = useRef<HTMLInputElement>();
  const letterRef = useRef<HTMLInputElement>();
  const lastRef = useRef<HTMLInputElement>();
  const identifierRef = useRef<HTMLInputElement>();
  useEffect(() => {
    //Workaround for input focus issue in ios
    if (isIOS()) {
      if (firstRef?.current) {
        setTimeout(function () {
          firstRef?.current?.blur();
        }, 100);
      }
    }
  }, [firstRef?.current]);
  const InsertInput = forwardRef(
    (
      {
        value,
        handleChange,
        maxLength = 2,
        id,
        nextRef,
        inputRef,
        prevRef,
        className,
        ...props
      }: any,
      ref,
    ) => {
      return (
        <Container className='relative'>
          {!value && (
            <Text
              bold
              size={SIZE_ENUM.XL}
              className='absolute inset-0'
              onClick={() => {
                inputRef.current?.focus();
                inputRef.current?.select();
              }}
            >
              {Array.from(Array(maxLength).keys()).map(() => '-')}
            </Text>
          )}
          <Input
            id={id.toLowerCase()}
            className={cn(
              'h-full rounded-none border-none bg-transparent p-0 text-lg font-bold',
              props.readOnly && 'cursor-pointer',
              className,
            )}
            ref={ref}
            maxLength={maxLength}
            onKeyUp={(e) => {
              if (
                e.key === 'Backspace' &&
                prevRef &&
                (e.target as HTMLInputElement).value.length === 0
              ) {
                if (prevRef instanceof Function) {
                  prevRef();
                } else {
                  prevRef.current.focus();
                }
              }
            }}
            onKeyDown={(e) => {
              const invalidChars = ['-', '+', 'e', '.'];
              if (invalidChars.includes(e.key)) {
                e.preventDefault();
              }
            }}
            onChange={(e) => {
              const value = e.target.value;

              if (value.length <= maxLength) {
                handleChange(e);
              }
              if (nextRef && value.length >= maxLength) {
                if (nextRef instanceof Function) {
                  nextRef();
                } else {
                  nextRef?.current?.focus();
                }
              }
            }}
            value={value}
            type={INPUT_TYPES.NUMBER}
            {...props}
          />
        </Container>
      );
    },
  );
  const buildAndNotify = (values) => {
    const licence = `${values.first}${values.letterIndex}${values.last}${values.identifier}`;
    if (licence.length >= 9) {
      onComplete?.(licence);
    } else {
      onComplete?.('');
    }
  };
  return (
    <Container center className='h-[64px] w-[325px] justify-between rounded-xl bg-white p-1'>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          first: '',
          letter: '',
          letterIndex: '',
          last: '',
          identifier: '',
        }}
        onSubmit={() => {}}
        validationSchema={PostSchema}
      >
        {({ values, handleChange, setFieldValue }) => {
          buildAndNotify(values);
          return (
            <Form
              className='flex items-center justify-between gap-5 rounded-lg border-2 border-gray-200'
              dir='ltr'
            >
              <XImage src={plateLeftSide} alt={localization.plate} height={64} />
              <InsertInput
                id={INPUT_SLOT_TYPE.FIRST}
                ref={firstRef}
                inputRef={firstRef}
                nextRef={() => !letterShow && setLetterShow(true)}
                handleChange={handleChange}
                value={values.first}
                maxLength={2}
              />
              <Letter
                show={letterShow}
                onBackClick={() => setLetterShow(false)}
                onSelect={(letter, isDisablePeople, index) => {
                  setFieldValue('letter', letter);
                  setFieldValue('letterIndex', index);
                  setDisabledPeople(isDisablePeople);
                  setLetterShow(false);
                  setTimeout(() => lastRef?.current?.focus(), 300);
                }}
              />
              <Container
                center
                className='cursor-pointer justify-center gap-1'
                onClick={() => setLetterShow(true)}
              >
                <BsCaretDownFill size={disabledPeople ? 10 : 50} color={ICON_COLOR.gray} />
                {disabledPeople ? (
                  <RiWheelchairLine color={ICON_COLOR.black} size={ICON_SIZE.lg} />
                ) : (
                  <InsertInput
                    id={INPUT_SLOT_TYPE.LETTER}
                    inputRef={letterRef}
                    ref={letterRef}
                    value={values.letter}
                    maxLength={1}
                    type={INPUT_TYPES.TEXT}
                    readOnly
                  />
                )}
              </Container>
              <InsertInput
                id={INPUT_SLOT_TYPE.LAST}
                inputRef={lastRef}
                ref={lastRef}
                nextRef={identifierRef}
                prevRef={() => !letterShow && setLetterShow(true)}
                handleChange={handleChange}
                value={values.last}
                maxLength={3}
              />

              <Container center>
                <Container className='h-8 w-[1px] border-l border-i-light-gray' />
                <Container center className='flex-col text-center'>
                  <XImage src={iranWordPlate} alt={localization.plate} width={36} height={7} />
                  <InsertInput
                    id={INPUT_SLOT_TYPE.IDENTIFIER}
                    ref={identifierRef}
                    inputRef={identifierRef}
                    prevRef={lastRef}
                    nextRef={identifierRef}
                    handleChange={handleChange}
                    value={values.identifier}
                    maxLength={2}
                    className='text-center'
                  />
                </Container>
              </Container>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}
