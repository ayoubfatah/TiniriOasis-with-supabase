import Filter from '../../ui/Filter';

function DashboardFilter() {
  return (
    <Filter
      name='last'
      options={[
        { value: '7', name: 'Last 7 days' },
        { value: '30', name: 'Last 30 days' },
        { value: '90', name: 'Last 90 days' },
      ]}
    />
  );
}

export default DashboardFilter;
