import React from 'react';
import { MdOutlineArrowForward } from 'react-icons/md';

import cn from '@/lib/clsxm';

import Container from '@/components/@base/container';
import Modal, { ModalBody, ModalHead } from '@/components/@base/modal';
import { Heading, Text } from '@/components/@base/typography';
import { HEADING_TYPE } from '@/components/@base/typography/heading/type';

import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';
import { PLATE_LETTER } from '@/constant/iterable-items';
import localization from '@/constant/localization';

export default function Letter({ show, onBackClick, onSelect }) {
  return (
    <Modal show={show} dialogPanelClassName='p-0' onClose={onBackClick}>
      <ModalHead isCustomHead>
        <Container center className={cn('h-[70px] justify-start gap-2.5 bg-[#f1f1f1] p-4')}>
          <MdOutlineArrowForward size={ICON_SIZE.lg} onClick={() => onBackClick?.()} />
          <Heading type={HEADING_TYPE.H5} className='text-right text-sm'>
            {localization.insertPlateLetter}
          </Heading>
        </Container>
      </ModalHead>
      <ModalBody className='p-4'>
        <Container className='grid grid-cols-6 gap-2.5'>
          {PLATE_LETTER.map(({ id, letter, index, Icon }) => (
            <Container
              center
              key={id}
              onClick={(e) => {
                e.stopPropagation();
                onSelect?.(letter, index === '33', index);
              }}
              className='h-[50px] w-[50px] cursor-pointer rounded-lg bg-[#f4f4f4]'
            >
              {Icon ? (
                <Icon size={ICON_SIZE.lg} color={ICON_COLOR.gray} />
              ) : (
                <Text bold>{letter}</Text>
              )}
            </Container>
          ))}
        </Container>
      </ModalBody>
    </Modal>
  );
}
