import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({title, stats}) => {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>
      {stats.map(({id, label, percentage}) => {
        return (
                <li key={id} className={s.item} style={{background: getRandomHexColor()}}>
                <span className={s.label}>{label}</span>
                <span className="percentage">{percentage}</span>
              </li>
        )
      })}
      </ul>
    </section>
  );
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
              id: PropTypes.string.isRequired,
              label: PropTypes.string.isRequired,
              percentage: PropTypes.number.isRequired
    }
        )

    )
}
