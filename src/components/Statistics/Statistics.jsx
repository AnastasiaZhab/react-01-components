import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({title, stats}) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className="stat-list">
      {stats.map(({id, label, percentage}) => {
                <li key={id} className={s.item}>
                <span className={s.label}>{label}</span>
                <span className="percentage">{percentage}</span>
              </li>
      

      })}
      </ul>
    </section>
  );
};

export default Statistics;
