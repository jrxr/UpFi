import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [imageUrl, setImageUrl] = useState('');
  const { isOpen, onClose, onOpen } = useDisclosure();

  function handleOpenModal(url: string) {
    setImageUrl(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={2} spacing="3.5rem">
        {cards?.map(card => (
          <Card
            data={card}
            viewImage={() => handleOpenModal(card.url)}
            key={card.id}
          />
        ))}
      </SimpleGrid>

      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imageUrl} />
    </>
  );
}
