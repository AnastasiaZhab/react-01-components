import s from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = (friends) => {
  return <ul className={s.list}>
    {friends.map(({avatar, name, isOnline, id}) => {
        return <FriendListItem key={id} name={name} status={isOnline} avatar={avatar}/>
    })}

  </ul>;
};

export default FriendList;
