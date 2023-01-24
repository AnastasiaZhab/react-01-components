import s from './FriendListItem.module.css'

const FriendListItem = ({name, status, avatar}) => {
  return (
    <li className={s.item}>
      <span style={{width: '16px', height: '16px', borderRadius: '8px', background: status ? 'green' : 'red'}}>{status}</span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;