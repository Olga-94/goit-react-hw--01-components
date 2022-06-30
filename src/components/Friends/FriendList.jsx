import { Box } from 'components/Box/Box';
import { FriendListItem } from 'components/Friends/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <Box 
    as="ul" 
    mb="40px" 
    width="50%" 
    p="20px" 
    bg="backgroundThird" 
    boxShadow="default"
    borderRadius="normal"
    >
   
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};