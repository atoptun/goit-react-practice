import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import type { FilterValue } from '@/types';
import { statusFilters } from '@/redux/constants';
import { getStatusFilter } from '@/redux/selectors';
import { setStatusFilter } from '@/redux/filterSlice';
import styles from './StatusFilter.module.css';

function StatusFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = (filter: FilterValue) =>
    dispatch(setStatusFilter(filter));

  return (
    <div className={styles.wrapper}>
      <Button
        selected={filter === 'all'}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === 'active'}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === 'completed'}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
}
export default StatusFilter;
