import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@ui/pagination';

export const Pagination = ({ total, limit = 12, skip = 0, value, onChange, boundaries = 1, siblings = 1, ...rest }: Props) => {
  const totalPages = Math.ceil(total / limit);
  const currentPage = value ?? Math.floor(skip / limit) + 1;

  const startPage = Math.max(1, currentPage - siblings);
  const endPage = Math.min(totalPages, currentPage + siblings);

  const paginationItems = [];

  // Add previous button
  paginationItems.push(
    <PaginationItem key='prev'>
      <PaginationPrevious 
        onClick={() => onChange && onChange(currentPage - 1)}
        disabled={currentPage <= 1}
      />
    </PaginationItem>
  );

  // Add start boundaries if necessary
  if (startPage > boundaries) {
    paginationItems.push(
      <PaginationItem key='start-boundaries'>
        <PaginationLink onClick={() => onChange && onChange(1)} isActive={currentPage === 1}>1</PaginationLink>
      </PaginationItem>
    );

    if (startPage > boundaries + 1) {
      paginationItems.push(
        <PaginationItem key='start-ellipsis'>
          <PaginationEllipsis />
        </PaginationItem>
      );
    }
  }

  // Add page numbers
  for (let i = startPage; i <= endPage; i++) {
    paginationItems.push(
      <PaginationItem key={i}>
        <PaginationLink onClick={() => onChange && onChange(i)} isActive={currentPage === i}>{i}</PaginationLink>
      </PaginationItem>
    );
  }

  // Add end boundaries if necessary
  if (endPage < totalPages) {
    if (endPage < totalPages - boundaries) {
      paginationItems.push(
        <PaginationItem key='end-ellipsis'>
          <PaginationEllipsis />
        </PaginationItem>
      );
    }


    paginationItems.push(
      <PaginationItem key='end-boundaries'>
        <PaginationLink 
          onClick={() => onChange && onChange(totalPages)} 
          isActive={currentPage === totalPages}
        >
          {totalPages}
        </PaginationLink>
      </PaginationItem>
    );
  }

  // Add next button
  paginationItems.push(
    <PaginationItem key='next'>
      <PaginationNext 
        onClick={currentPage < totalPages ? () => onChange && onChange(currentPage + 1) : undefined} 
        disabled={currentPage >= totalPages}
      />
    </PaginationItem>
  );

  return (
    <PaginationComponent {...rest}>
      <PaginationContent>
        {paginationItems}
      </PaginationContent>
    </PaginationComponent>
  )
}

type Props = Omit<React.ComponentProps<typeof PaginationComponent>, 'onChange'> & {
  value?: number;
  onChange?: (value: number) => void;
  total: number;
  limit?: number;
  skip?: number;
  boundaries?: number;
  siblings?: number;
}