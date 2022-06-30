import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import { Profile } from './Profile/Profile';
import { Box } from './Box/Box';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './Friends/FriendsList';

export const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      bg="background"
    >
      <Profile
        avatar={user.avatar}
        location={user.location}
        username={user.username}
        tag={user.tag}
        stats={user.stats}
      />
      <Statistics stats={data} title="UPLOAD STATS" />
      <FriendsList friends={friends} />
      {/* <TransactionHistory items={transactions} /> */}
    </Box>
  );
};
