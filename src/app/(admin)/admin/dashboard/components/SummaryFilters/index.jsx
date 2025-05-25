import { Tabs } from '@chakra-ui/react';

const SummaryFilters = () => {
  return (
    <Tabs.Root w="full" defaultValue="today" variant="plain" shadow={'none'}>
      <Tabs.List rounded="l3" p="1">
        <Tabs.Trigger value="today">Hari ini</Tabs.Trigger>
        <Tabs.Trigger value="thisWeek">Minggu ini</Tabs.Trigger>
        <Tabs.Trigger value="thisMonth">Bulan ini</Tabs.Trigger>
        <Tabs.Indicator rounded="lg" shadow={'base'} border={'none'} />
      </Tabs.List>
    </Tabs.Root>
  );
};

export default SummaryFilters;
