import PropTypes from 'prop-types';

import styles from './Statistics.module.css';
import getRandomHexColor from '../../js/getRandomHexColor';

function Statistics({ title, stats }) {
  return (
    <section className={styles['statistics']}>
      {title && <h2 className={styles['title']}>{title}</h2>}

      <ul className={styles['stat-list']}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={styles['item']}
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={styles['label']}>{label}</span>
              <span className={styles['percentage']}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;