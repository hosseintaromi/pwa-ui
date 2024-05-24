'use client';
import Link from 'next/link';

import { COLOR_ENUM } from '@/components/@base/@helpers/types';
import Button from '@/components/@base/button';
import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';

export default function EmptyMode({
  text,
  buttonText,
  link,
}: {
  text: string;
  buttonText: string;
  link: string;
}) {
  return (
    <Container center className='flex-col'>
      <Text bold>{text}</Text>
      <Link href={link}>
        <Button color={COLOR_ENUM.PRIMARY}>{buttonText}</Button>
      </Link>
    </Container>
  );
}
