import { Box, SkeletonText, Table } from '@chakra-ui/react';

const SimpleTable = ({ columns, data, loading, pageSize }) => {
  const getValue = (item, accessorKeys) => {
    if (!accessorKeys) {
      return item;
    }

    if (Array.isArray(accessorKeys)) {
      return accessorKeys.reduce((acc, key) => acc?.[key], item);
    }

    return item?.[accessorKeys];
  };

  return (
    <Box
      w="full"
      borderRadius={12}
      bg="brand.white"
      px={4}
      pt={2}
      pb={6}
      shadow={'base'}
    >
      <Table.ScrollArea maxH="450px">
        <Table.Root size="sm" stickyHeader>
          <Table.Header>
            <Table.Row>
              {columns?.map((column) => (
                <Table.ColumnHeader textAlign={column.align} key={column.key}>
                  {column.title}
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {loading ? (
              <Table.Row columnSpan={columns.length}>
                <Table.Cell colSpan={columns.length}>
                  <SkeletonText noOfLines={pageSize || 5} gap={4} h={7} />
                </Table.Cell>
              </Table.Row>
            ) : (
              data?.map((item) => (
                <Table.Row key={item.id} h={50}>
                  {columns?.map((column) => (
                    <Table.Cell key={column.key} textAlign={column.align}>
                      {column.render
                        ? column.render(getValue(item, column.accessorKeys))
                        : getValue(item, column.accessorKeys) || '-'}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))
            )}
          </Table.Body>
        </Table.Root>
      </Table.ScrollArea>
    </Box>
  );
};

export default SimpleTable;
