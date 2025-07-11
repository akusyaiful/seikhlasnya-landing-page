'use client';

import { ButtonGroup, IconButton, Pagination } from '@chakra-ui/react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

const SimplePagination = ({ page, count, onPageChange }) => {
  return (
    <Pagination.Root
      count={count}
      pageSize={10}
      page={page}
      onPageChange={(event) => onPageChange(event.page)}
    >
      <ButtonGroup variant="ghost" size="sm">
        <Pagination.PrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            <IconButton variant={{ base: 'ghost', _selected: 'outline' }}>
              {page.value}
            </IconButton>
          )}
        />

        <Pagination.NextTrigger asChild>
          <IconButton>
            <LuChevronRight />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  );
};

export default SimplePagination;
