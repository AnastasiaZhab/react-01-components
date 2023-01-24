import s from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types'

const FriendList = ({friends}) => {
  return <ul className={s.list}>
    {friends.map(({avatar, name, isOnline, id}) => {
        return <FriendListItem key={id} name={name} status={isOnline} avatar={avatar}/>
    })}

  </ul>;
};

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape(
        {
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        }
    ))

}