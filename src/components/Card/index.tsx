import React from 'react';
import Text from '../Text';
import Button from '../Button';
import Dropdown from '../Dropdown';
import Skeleton from 'react-loading-skeleton';
import * as S from './style';

interface CardProps {
  cdi: number;
  gain: number;
  total: number;
  profitability: number;
  loading?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  cdi,
  gain,
  total,
  profitability,
  loading = false,
  onClick,
}: CardProps) => {
  const formatMoney = (amount: number): string => {
    return Number(amount)
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+,)/g, '$1.');
  };

  const infosCard = [
    {
      name: 'Rentabilidade/mês',
      value: loading ? (
        <Skeleton width="100px" />
      ) : (
        `${profitability.toFixed(3)}%`
      ),
    },
    {
      name: 'CDI',
      value: loading ? <Skeleton width="100px" /> : `${cdi.toFixed(2)}%`,
    },
    {
      name: 'Ganho/mês',
      value: loading ? <Skeleton width="100px" /> : `R$ ${formatMoney(gain)}`,
    },
  ];

  const dropdownItems = [
    { onClick: onClick, text: 'Deletar' },
    { onClick: () => {}, text: 'Compartilhar' },
  ];

  return (
    <S.CardItem>
      <S.CardHeader>
        <Text tag="h1" color="#3B5CB8" fontSize={23} fontWeight={700}>
          Seu resumo
        </Text>
        <Dropdown items={dropdownItems} />
      </S.CardHeader>
      <S.CardTotal>
        <Text tag="h2" color="#606377" fontSize={14} fontWeight={400}>
          Valor investido
        </Text>
        <Text tag="p" color="#3B5CB8" fontSize={20} fontWeight={700}>
          {loading ? <Skeleton width="140px" /> : `R$ ${formatMoney(total)}`}
        </Text>
      </S.CardTotal>
      <S.CardInfo>
        {infosCard.map(i => (
          <div key={i.name} className="info-item">
            <Text tag="p" color="#606377" fontSize={14} fontWeight={400}>
              {i.name}
            </Text>
            <Text tag="p" color="#3B5CB8" fontSize={18} fontWeight={700}>
              {i.value}
            </Text>
          </div>
        ))}
      </S.CardInfo>
      <S.CardFooter>
        <Button onClick={onClick}>VER MAIS</Button>
      </S.CardFooter>
    </S.CardItem>
  );
};

export default Card;
