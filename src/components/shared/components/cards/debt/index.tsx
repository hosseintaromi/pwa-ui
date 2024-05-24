import Link from 'next/link';
import { useEffect } from 'react';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Button from '@/components/@base/button';
import Card, { CardHeader } from '@/components/@base/card';
import CardContent from '@/components/@base/card/content';
import Container from '@/components/@base/container';
import { Heading, Text } from '@/components/@base/typography';
import { HEADING_TYPE } from '@/components/@base/typography/heading/type';
import { useGetDebt } from '@/components/app/home/services/hooks';
import Skeleton from '@/components/shared/components/cards/debt/skeleton';
import Props from '@/components/shared/components/cards/debt/type';

import localization from '@/constant/localization';
import { FRAME } from '@/constant/routes';
import { DEBT_STATUS_ENUM } from '@/models/debt.model';

export default function Debt({ type, license, setNotAvailableDebts, ...props }: Props) {
  const { data, isLoading } = useGetDebt(license, type);
  useEffect(() => {
    if (!data) {
      if (!isLoading) {
        //TODO: cleaner way
        setTimeout(() => {
          setNotAvailableDebts((item) => [...item, type]);
        }, 0);
      }
    }
  }, [data, isLoading]);
  if (!data) {
    if (!isLoading) {
      return null;
    }
    return <Skeleton type={type} />;
  }
  const { link, linkText, title, price, status, time } = data;
  const editedLink = link && (link[0] === '/' ? link : `/${link}`);
  const isUnpaid = status === DEBT_STATUS_ENUM.HAS_DEBT;
  const isPaid = status === DEBT_STATUS_ENUM.CLEARANCE;
  const isNoDebt = status === DEBT_STATUS_ENUM.NO_DEBT;

  return (
    <Card noShadow className='h-[81px] w-[275px] px-4 py-3' {...props}>
      <CardHeader>
        <Container center className='h-7 justify-between'>
          <Heading type={HEADING_TYPE.H5}>{title}</Heading>
          {editedLink && (
            <Link href={FRAME(editedLink, localization.pay)}>
              <Button size={SIZE_ENUM.SM} color={COLOR_ENUM.PRIMARY}>
                {linkText}
              </Button>
            </Link>
          )}
        </Container>
      </CardHeader>
      <CardContent className='mt-2 p-0'>
        <Container center className='justify-between'>
          {price && (
            <Text
              bold
              size={isNoDebt && linkText !== localization.noDebt ? SIZE_ENUM.XS : undefined}
              color={
                isUnpaid
                  ? COLOR_ENUM.ERROR
                  : isPaid || linkText === localization.noDebt
                    ? COLOR_ENUM.SUCCESS
                    : undefined
              }
            >
              {price}
            </Text>
          )}
          {time && (
            <Text bold size={SIZE_ENUM.XS}>
              {time}
            </Text>
          )}
        </Container>
      </CardContent>
    </Card>
  );
}
