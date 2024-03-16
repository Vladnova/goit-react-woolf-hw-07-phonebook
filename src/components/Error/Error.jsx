import { useSelector } from 'react-redux';
import { selectError } from 'store/selectors';
import style from './Error.module.css';

const Error = () => {
  const error = useSelector(selectError);
  return (
    <div className={style.container}>
      <div className={style.code}>404</div>
      <div className={style.message}>{error}</div>
      <div className={style.description}>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </div>
      <a href="/" className={style.link}>
        Back to Home
      </a>
    </div>
  );
};

export default Error;
