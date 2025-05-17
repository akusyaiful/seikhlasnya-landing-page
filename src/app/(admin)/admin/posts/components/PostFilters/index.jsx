import { SimpleSelect } from '@/components/common/SimpleSelect';
import {
  Button,
  createListCollection,
  HStack,
  Input,
  InputGroup,
  Box,
} from '@chakra-ui/react';
import { SearchIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

const SORT_OPTIONS = createListCollection({
  items: [
    {
      label: 'Terbaru',
      value: 'createdAt-desc',
    },
    {
      label: 'Terlama',
      value: 'createdAt-asc',
    },
  ],
});

const PostFilters = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    try {
      console.log(values);
    } catch (error) {
      toaster.error({
        description: error.message,
      });
    }
  });

  return (
    <form onSubmit={onSubmit} style={{ width: '100%' }}>
      <HStack w="full" justifyContent={'space-between'}>
        <HStack>
          <InputGroup
            endElement={
              <Box>
                <SearchIcon />
              </Box>
            }
          >
            <Input
              {...register('search')}
              w="400px"
              placeholder="Cari judul atau id post"
            />
          </InputGroup>

          <SimpleSelect
            collection={SORT_OPTIONS}
            placeholder="Urutkan"
            width="100px"
            {...register('sort')}
          />
        </HStack>
        <HStack>
          <Button colorPalette={'brand.blue'}>Filter</Button>
        </HStack>
      </HStack>
    </form>
  );
};

export default PostFilters;
